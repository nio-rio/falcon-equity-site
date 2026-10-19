// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { tableDataLabelsPlugin } from './src/lib/table-labels.js';

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
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
