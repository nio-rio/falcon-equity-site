// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { tableDataLabelsPlugin } from './src/lib/table-labels.js';

const blogDir = join('src', 'content', 'blog');
const blogFiles = readdirSync(blogDir).filter((file) => /\.mdx?$/.test(file));
const draftBlogSlugs = new Set(
  blogFiles
    .filter((file) => /^draft:\s*true\s*$/m.test(readFileSync(join(blogDir, file), 'utf8')))
    .map((file) => file.replace(/\.mdx?$/, '')),
);
const blogLastmod = new Map(
  blogFiles.flatMap((file) => {
    const raw = readFileSync(join(blogDir, file), 'utf8');
    if (/^draft:\s*true\s*$/m.test(raw)) return [];
    const slug = file.replace(/\.mdx?$/, '');
    /** @param {string} key */
    const pick = (key) => raw.match(new RegExp(`^${key}:\\s*'?([^'\\n]+)'?`, 'm'))?.[1]?.trim();
    const value = pick('updated') || pick('date');
    if (!value) return [];
    const date = new Date(value);
    if (Number.isNaN(date.valueOf())) return [];
    return [[`/blog/${slug}`, date.toISOString()]];
  }),
);

export default defineConfig({
  site: 'https://falconequity.ai',
  output: 'static',
  // Match the existing Webflow URLs (/about, /industries, ...) exactly.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    processor: satteri({
      hastPlugins: [tableDataLabelsPlugin],
    }),
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        try {
          const { pathname } = new URL(page);
          const match = pathname.match(/^\/blog\/([^/]+)/);
          if (match && draftBlogSlugs.has(match[1])) return false;
        } catch {
          return false;
        }
        return true;
      },
      serialize(item) {
        let pathname = '/';
        try {
          pathname = new URL(item.url).pathname.replace(/\/+$/, '') || '/';
        } catch {
          pathname = '/';
        }
        return {
          ...item,
          lastmod: blogLastmod.get(pathname) ?? new Date().toISOString(),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
