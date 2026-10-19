import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_CATEGORY_SLUG, type BlogCategory } from '@/data/blog';

export type Post = CollectionEntry<'blog'>;

/**
 * Drafts render on Netlify deploy-preview / branch-deploy and in `astro dev`.
 * Production builds (`CONTEXT=production`) omit them. Sitemap and RSS always
 * exclude drafts even when the HTML is generated for review.
 */
export const includeDraftPosts = () => {
  const context = process.env.CONTEXT ?? '';
  if (context === 'deploy-preview' || context === 'branch-deploy') return true;
  if (context === 'production') return false;
  return import.meta.env.DEV;
};

export const getPublishedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection('blog', ({ data }) => includeDraftPosts() || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

export const getPublicPosts = async (): Promise<Post[]> => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
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

export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));
