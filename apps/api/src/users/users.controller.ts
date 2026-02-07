import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto, User } from '@repo/api';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `Creating user: ${createUserDto.email}`;
  }

  @Get()
  findAll(): User[] {
    return [];
  }
}
