import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const BLOG_CATEGORIES = [
  'Working Capital',
  'How-To',
  'Consolidation',
  'Equipment',
  'Factoring',
  'Digital Assets',
] as const;

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(BLOG_CATEGORIES),
      author: z.string().default('Falcon Equity Group'),
      excerpt: z.string(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      description: z.string().max(170),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
