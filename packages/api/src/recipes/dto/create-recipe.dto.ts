import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsString()
  instructions: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  mealType: string;
}
