import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = { blog };
