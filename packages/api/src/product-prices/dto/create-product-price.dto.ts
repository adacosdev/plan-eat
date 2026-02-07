import { IsString, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductPriceDto {
  @IsString()
  @IsNotEmpty()
  ingredientId: string;

  @IsString()
  @IsNotEmpty()
  supermarket: string;

  @IsNumber()
  price: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  lastUpdated?: Date;
}
