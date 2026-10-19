import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_CATEGORY_SLUG, type BlogCategory } from '@/data/blog';

export type Post = CollectionEntry<'blog'>;

/** Drafts render in `astro dev` for review but never ship in production builds. */
export const getPublishedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

export const categorySlug = (category: string) =>
  BLOG_CATEGORY_SLUG[category as BlogCategory] ??
  category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const headingId = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

export const extractPostHeadings = (body = '') =>
  [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].replace(/[*_`]/g, '').trim()).filter(Boolean);

export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));
