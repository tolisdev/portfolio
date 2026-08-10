import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{mdoc,md}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    link: z.string().optional(),
    tag: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    roleTitle: z.string(),
    company: z.string(),
    dateRange: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { posts, projects, experience };
