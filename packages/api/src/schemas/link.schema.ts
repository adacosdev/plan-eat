import { z } from 'zod';

export const linkSchema = z.object({
  id: z.string().cuid(),
  url: z.string().url(),
  title: z.string().min(1),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LinkType = z.infer<typeof linkSchema>;
