import { RecipeIngredient as PrismaRecipeIngredient } from '@repo/database';

export class RecipeIngredient implements Partial<PrismaRecipeIngredient> {
  id: string;
  recipeId: string;
  ingredientId: string;
  amount: number;
}
