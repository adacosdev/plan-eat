import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsDate()
  @Type(() => Date)
  date: Date;
}
