import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Scannable header fields
    title: z.string(),
    company: z.string(),
    role: z.string(),
    timeframe: z.string(),
    stack: z.array(z.string()),

    // One-line summary shown on cards and in <head> description
    summary: z.string().max(200),

    // Short outcome line shown on the project card (not the full "what I'd do
    // differently" section -- that lives in the body copy)
    outcome: z.string().max(200).optional(),

    // Manual sort order on the projects index (lower = higher)
    order: z.number().default(0),

    // Set true to hide from listings without deleting the file
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
