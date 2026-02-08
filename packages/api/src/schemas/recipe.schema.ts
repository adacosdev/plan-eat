import { z } from 'zod';

export const RecipeSchema = z.object({
  id: z.cuid(),
  title: z.string().min(1),
  instructions: z.string().min(1),
  imageUrl: z.string().url().optional().nullable(),
  mealType: z.string().min(1),
  menuId: z.string().cuid().optional().nullable(),
});

export const RecipeIngredientSchema = z.object({
  id: z.cuid(),
  recipeId: z.cuid(),
  ingredientId: z.cuid(),
  amount: z.number().positive(),
});

export type RecipeType = z.infer<typeof RecipeSchema>;
export type RecipeIngredientType = z.infer<typeof RecipeIngredientSchema>;
