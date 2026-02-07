import { IsEmail, IsOptional, IsNumber, IsObject } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsObject()
  @IsOptional()
  preferences?: any;

  @IsNumber()
  @IsOptional()
  weeklyBudget?: number;
}
