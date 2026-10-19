import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '@/lib/blog';
import { SITE } from '@/data/site';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'The Falcon Brief | Falcon Equity Group',
    description: 'Practical guides on business funding, working capital and consolidation from Falcon Equity Group.',
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      categories: [post.data.category],
      author: `${SITE.email} (${post.data.author})`,
      link: `/blog/${post.id}`,
    })),
    customData: '<language>en-us</language>',
  });
}
