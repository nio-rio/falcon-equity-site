// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { tableDataLabelsPlugin } from './src/lib/table-labels.js';

const draftBlogSlugs = new Set(
  readdirSync(join('src', 'content', 'blog'))
    .filter((file) => /\.mdx?$/.test(file))
    .filter((file) => /^draft:\s*true\s*$/m.test(readFileSync(join('src', 'content', 'blog', file), 'utf8')))
    .map((file) => file.replace(/\.mdx?$/, '')),
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
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
