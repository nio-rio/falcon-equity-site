import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/data/site';

export async function GET(context: APIContext) {
  return rss({
    title: 'Falcon Equity Group Blog',
    description: 'Practical guides on getting approved, comparing funding options, costs, and cash flow from Falcon Equity Group.',
    site: context.site ?? SITE.url,
    items: [],
    customData: '<language>en-us</language>',
  });
}
