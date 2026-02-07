import { prisma } from '../src/index.js';

async function main() {
  // 1. Crear un ingrediente
  const huevo = await prisma.ingredient.upsert({
    where: { name: 'Huevo L' },
    update: {},
    create: {
      name: 'Huevo L',
      unit: 'unidades',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 0.21 },
          { supermarket: 'Carrefour', price: 0.19 },
        ],
      },
    },
  });

  // 2. Crear una receta (Ej: Tortillita de camarones simplificada)
  await prisma.recipe.create({
    data: {
      title: 'Tortillitas de la Bahía',
      instructions:
        'Mezclar harina, camarones y cebolleta. Freír en aceite muy caliente.',
      mealType: 'LUNCH',
      ingredients: {
        create: [{ amount: 2, ingredientId: huevo.id }],
      },
    },
  });

  console.log('✅ Base de datos poblada con éxito');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
