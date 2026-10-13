import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    order: z.number(),
    tools: z.array(z.string()),
    summary: z.string(),
    problem: z.string(),
    data: z.string(),
    method: z.string(),
    outcomes: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    screenshots: z.array(z.string()).default([]),
  }),
});

export const collections = { 'case-studies': caseStudies };
