import { z } from 'zod';

export const MenuSchema = z.object({
  id: z.cuid(),
  userId: z.cuid(),
  date: z.coerce.date(),
});

export type MenuType = z.infer<typeof MenuSchema>;
