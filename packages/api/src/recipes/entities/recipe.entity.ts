import { RecipeType } from '../../schemas';

export class Recipe implements RecipeType {
  id: string;
  title: string;
  instructions: string;
  imageUrl?: string | null;
  mealType: string;
  menuId?: string | null;
}
