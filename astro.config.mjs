// @ts-check
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { tableDataLabelsPlugin } from './src/lib/table-labels.js';

const livePaths = new Set([
  '/',
  '/apply',
  '/services/merchant-cash-advance',
  '/services/collateral-asset-loans',
  '/services/business-line-of-credit',
  '/services/business-term-loan',
  '/services/invoice-factoring-tool',
  '/services/consolidation-of-positions',
]);

const serviceSlugs = [
  'collateral-asset-loans',
  'business-line-of-credit',
  'merchant-cash-advance',
  'business-term-loan',
  'invoice-factoring-tool',
  'consolidation-of-positions',
  'decentralized-business-financing',
];

const industrySlugs = [
  'retail',
  'transportation-logistics',
  'restaurants-food-service',
  'real-estate',
  'healthcare',
  'construction',
  'e-commerce',
  'auto-services',
  'manufacturing',
  'professional-services',
  'education',
  'travel-hospitality',
];

const blogDir = join('src', 'content', 'blog');
const blogSlugs = readdirSync(blogDir)
  .filter((file) => /\.mdx?$/.test(file))
  .map((file) => file.replace(/\.mdx?$/, ''));

const blogCategories = ['getting-approved', 'compare-options', 'costs-and-rates', 'cash-flow-and-debt'];

/** Astro static redirects cannot splat onto a parameter-less destination. */
/** @type {Record<string, string>} */
const retired = {
  '/about': '/',
  '/contact': '/',
  '/partners': '/',
  '/privacy-policy': '/',
  '/terms-conditions': '/',
  '/how-it-works': '/',
  '/faq': '/',
  '/services': '/',
  '/industries': '/',
  '/blog': '/',
  '/resources/loan-calculator': '/apply',
  '/resources/credit-repair-loan-prep': '/apply',
  '/resources/business-loan-calculator': '/apply',
};

for (const slug of serviceSlugs) {
  if (slug === 'merchant-cash-advance') continue;
  if (slug === 'collateral-asset-loans') continue;
  if (slug === 'business-line-of-credit') continue;
  if (slug === 'business-term-loan') continue;
  if (slug === 'invoice-factoring-tool') continue;
  if (slug === 'consolidation-of-positions') continue;
  retired[`/services/${slug}`] = '/';
}
for (const slug of industrySlugs) retired[`/industries/${slug}`] = '/';
for (const slug of blogSlugs) retired[`/blog/${slug}`] = '/';
for (const slug of blogCategories) retired[`/blog/category/${slug}`] = '/';

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
  redirects: retired,
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
