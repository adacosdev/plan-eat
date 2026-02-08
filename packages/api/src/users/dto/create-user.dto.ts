import { IsEmail, IsOptional, IsNumber, IsObject } from 'class-validator';
import { UserPreferencesType } from 'schemas';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsObject()
  @IsOptional()
  preferences?: UserPreferencesType;

  @IsNumber()
  @IsOptional()
  weeklyBudget?: number;
}
