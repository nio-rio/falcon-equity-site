import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORIES } from './data/blog';
import { INDUSTRY_SLUGS } from './data/industries';

export { BLOG_CATEGORIES } from './data/blog';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date(),
      category: z.enum(BLOG_CATEGORIES),
      // TODO(Dwight): author byline + “Reviewed by” pending Dwight’s approval. Do not invent personas.
      author: z.string().default('Falcon Equity Group'),
      byline: z.string().default('Falcon Equity Group'),
      excerpt: z.string(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      description: z.string().max(170),
      seoTitle: z.string().optional(),
      primaryKeyword: z.string().optional(),
      industry: z.enum(INDUSTRY_SLUGS).optional(),
      reviewedBy: z.string().optional(),
      takeaways: z.array(z.string()).min(3).max(5),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3).max(5),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
