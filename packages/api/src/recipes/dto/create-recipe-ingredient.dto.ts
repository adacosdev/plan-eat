import { IsNumber, IsString } from 'class-validator';

export class CreateRecipeIngredientDto {
  @IsString()
  recipeId: string;

  @IsString()
  ingredientId: string;

  @IsNumber()
  amount: number;
}
