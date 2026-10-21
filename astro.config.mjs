// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { tableDataLabelsPlugin } from './src/lib/table-labels.js';

const livePaths = new Set(['/', '/apply']);

export default defineConfig({
  site: 'https://falconequity.ai',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    processor: satteri({
      hastPlugins: [tableDataLabelsPlugin],
    }),
  },
  redirects: {
    '/about': '/',
    '/contact': '/',
    '/partners': '/',
    '/privacy-policy': '/',
    '/terms-conditions': '/',
    '/how-it-works': '/',
    '/faq': '/',
    '/services': '/',
    '/services/[...slug]': '/',
    '/industries': '/',
    '/industries/[...slug]': '/',
    '/blog': '/',
    '/blog/[...slug]': '/',
    '/resources/loan-calculator': '/apply',
    '/resources/credit-repair-loan-prep': '/apply',
    '/resources/business-loan-calculator': '/apply',
    '/resources/[...slug]': '/apply',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        try {
          const { pathname } = new URL(page);
          const path = pathname.replace(/\/+$/, '') || '/';
          return livePaths.has(path);
        } catch {
          return false;
        }
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
