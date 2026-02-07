import { z } from 'zod';

export const IngredientSchema = z.object({
  id: z.cuid(),
  name: z.string().min(1),
  unit: z.string().min(1),
});

export const ProductPriceSchema = z.object({
  id: z.cuid(),
  ingredientId: z.cuid(),
  supermarket: z.string().min(1),
  price: z.number().positive(),
  lastUpdated: z.date(),
});

export type IngredientType = z.infer<typeof IngredientSchema>;
export type ProductPriceType = z.infer<typeof ProductPriceSchema>;
