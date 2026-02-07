import { ProductPriceType } from '../../schemas';

export class ProductPrice implements ProductPriceType {
  id: string;
  ingredientId: string;
  supermarket: string;
  price: number;
  lastUpdated: Date;
}
