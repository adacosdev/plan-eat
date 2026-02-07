import { Injectable } from '@nestjs/common';
import { CreateRecipeDto, UpdateRecipeDto } from '@repo/api';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: {
        title: createRecipeDto.title,
        instructions: createRecipeDto.instructions,
        imageUrl: createRecipeDto.imageUrl,
        mealType: createRecipeDto.mealType,
      },
    });
  }

  findAll() {
    return this.prisma.recipe.findMany({
      include: {
        ingredients: {
          include: {
            ingredient: {
              include: {
                prices: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  remove(id: string) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
