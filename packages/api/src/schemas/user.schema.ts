import { z } from 'zod';

export const UserSchema = z.object({
  id: z.cuid(),
  email: z.email(),
  preferences: z.any().optional(),
  weeklyBudget: z.number().optional().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;
