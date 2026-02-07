import { IngredientType } from '../../schemas';

export class Ingredient implements IngredientType {
  id: string;
  name: string;
  unit: string;
}
