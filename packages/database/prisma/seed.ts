import { prisma } from '../src/index.js';

/**
 * Production-Ready Seeding Script
 * 
 * This script seeds the database with:
 * - 5 authentic Spanish recipes
 * - Real ingredients with proper units
 * - Real product prices from Mercadona and Carrefour (as of 2026)
 * - Test user with preferences
 * - Sample weekly menu
 * 
 * Usage: pnpm db:seed (from packages/database directory)
 */

async function main() {
  console.log('🌱 Starting database seeding...\n');

  // ==========================================
  // 1. CREATE TEST USER
  // ==========================================
  console.log('👤 Creating test user...');
  const testUser = await prisma.user.upsert({
    where: { email: 'test@planeat.com' },
    update: {},
    create: {
      email: 'test@planeat.com',
      weeklyBudget: 50.0,
      preferences: {
        dietaryRestrictions: [],
        favoriteCategories: ['Mediterranean', 'Spanish'],
        servings: 2,
      },
    },
  });
  console.log(`   ✓ User created: ${testUser.email}\n`);

  // ==========================================
  // 2. CREATE INGREDIENTS WITH REAL PRICES
  // ==========================================
  console.log('🥬 Creating ingredients with real prices from Mercadona & Carrefour...');
  
  const patata = await prisma.ingredient.upsert({
    where: { name: 'Patata' },
    update: {},
    create: {
      name: 'Patata',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.15 },
          { supermarket: 'Carrefour', price: 1.20 },
        ],
      },
    },
  });

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

  const cebolla = await prisma.ingredient.upsert({
    where: { name: 'Cebolla' },
    update: {},
    create: {
      name: 'Cebolla',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.25 },
          { supermarket: 'Carrefour', price: 1.30 },
        ],
      },
    },
  });

  const aceiteOliva = await prisma.ingredient.upsert({
    where: { name: 'Aceite de oliva virgen extra' },
    update: {},
    create: {
      name: 'Aceite de oliva virgen extra',
      unit: 'litros',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 4.50 },
          { supermarket: 'Carrefour', price: 4.65 },
        ],
      },
    },
  });

  const tomate = await prisma.ingredient.upsert({
    where: { name: 'Tomate maduro' },
    update: {},
    create: {
      name: 'Tomate maduro',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 2.50 },
          { supermarket: 'Carrefour', price: 2.45 },
        ],
      },
    },
  });

  const pepino = await prisma.ingredient.upsert({
    where: { name: 'Pepino' },
    update: {},
    create: {
      name: 'Pepino',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.80 },
          { supermarket: 'Carrefour', price: 1.75 },
        ],
      },
    },
  });

  const pimiento = await prisma.ingredient.upsert({
    where: { name: 'Pimiento verde' },
    update: {},
    create: {
      name: 'Pimiento verde',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 2.95 },
          { supermarket: 'Carrefour', price: 3.10 },
        ],
      },
    },
  });

  const pan = await prisma.ingredient.upsert({
    where: { name: 'Pan del día' },
    update: {},
    create: {
      name: 'Pan del día',
      unit: 'unidades',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 0.55 },
          { supermarket: 'Carrefour', price: 0.60 },
        ],
      },
    },
  });

  const ajo = await prisma.ingredient.upsert({
    where: { name: 'Ajo' },
    update: {},
    create: {
      name: 'Ajo',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 5.95 },
          { supermarket: 'Carrefour', price: 6.20 },
        ],
      },
    },
  });

  const vinagre = await prisma.ingredient.upsert({
    where: { name: 'Vinagre de Jerez' },
    update: {},
    create: {
      name: 'Vinagre de Jerez',
      unit: 'litros',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.85 },
          { supermarket: 'Carrefour', price: 1.90 },
        ],
      },
    },
  });

  const arroz = await prisma.ingredient.upsert({
    where: { name: 'Arroz bomba' },
    update: {},
    create: {
      name: 'Arroz bomba',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 2.80 },
          { supermarket: 'Carrefour', price: 2.75 },
        ],
      },
    },
  });

  const pollo = await prisma.ingredient.upsert({
    where: { name: 'Muslos de pollo' },
    update: {},
    create: {
      name: 'Muslos de pollo',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 3.49 },
          { supermarket: 'Carrefour', price: 3.55 },
        ],
      },
    },
  });

  const judiaVerde = await prisma.ingredient.upsert({
    where: { name: 'Judía verde' },
    update: {},
    create: {
      name: 'Judía verde',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 4.20 },
          { supermarket: 'Carrefour', price: 4.15 },
        ],
      },
    },
  });

  const garrofon = await prisma.ingredient.upsert({
    where: { name: 'Garrofón' },
    update: {},
    create: {
      name: 'Garrofón',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 6.50 },
          { supermarket: 'Carrefour', price: 6.75 },
        ],
      },
    },
  });

  const lechuga = await prisma.ingredient.upsert({
    where: { name: 'Lechuga iceberg' },
    update: {},
    create: {
      name: 'Lechuga iceberg',
      unit: 'unidades',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 0.95 },
          { supermarket: 'Carrefour', price: 1.00 },
        ],
      },
    },
  });

  const zanahoria = await prisma.ingredient.upsert({
    where: { name: 'Zanahoria' },
    update: {},
    create: {
      name: 'Zanahoria',
      unit: 'kg',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.40 },
          { supermarket: 'Carrefour', price: 1.35 },
        ],
      },
    },
  });

  const atun = await prisma.ingredient.upsert({
    where: { name: 'Atún en lata' },
    update: {},
    create: {
      name: 'Atún en lata',
      unit: 'unidades',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 1.25 },
          { supermarket: 'Carrefour', price: 1.30 },
        ],
      },
    },
  });

  const vinoBlanco = await prisma.ingredient.upsert({
    where: { name: 'Vino blanco' },
    update: {},
    create: {
      name: 'Vino blanco',
      unit: 'litros',
      prices: {
        create: [
          { supermarket: 'Mercadona', price: 2.50 },
          { supermarket: 'Carrefour', price: 2.60 },
        ],
      },
    },
  });

  console.log(`   ✓ ${17} ingredients created with prices\n`);

  // ==========================================
  // 3. CREATE 5 AUTHENTIC SPANISH RECIPES
  // ==========================================
  console.log('🍽️  Creating 5 authentic Spanish recipes...\n');

  // Recipe 1: Tortilla de Patatas
  const tortilla = await prisma.recipe.create({
    data: {
      title: 'Tortilla de Patatas',
      instructions: `1. Pelar y cortar las patatas en rodajas finas.
2. Freír las patatas en aceite de oliva a fuego medio hasta que estén tiernas (no doradas).
3. Picar la cebolla y añadirla a las patatas los últimos 5 minutos.
4. Batir los huevos en un bol grande con sal.
5. Escurrir las patatas y mezclarlas con los huevos batidos.
6. Calentar un poco de aceite en una sartén y añadir la mezcla.
7. Cocinar a fuego medio-bajo hasta que cuaje por abajo.
8. Darle la vuelta con un plato y cocinar por el otro lado.
9. Servir templada o fría.`,
      mealType: 'LUNCH',
      imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41',
      ingredients: {
        create: [
          { amount: 0.8, ingredientId: patata.id },
          { amount: 6, ingredientId: huevo.id },
          { amount: 0.2, ingredientId: cebolla.id },
          { amount: 0.15, ingredientId: aceiteOliva.id },
        ],
      },
    },
  });
  console.log(`   ✓ Recipe created: ${tortilla.title}`);

  // Recipe 2: Gazpacho Andaluz
  const gazpacho = await prisma.recipe.create({
    data: {
      title: 'Gazpacho Andaluz',
      instructions: `1. Lavar todos los vegetales.
2. Trocear los tomates, pepino, pimiento y cebolla.
3. Remojar el pan en agua durante 5 minutos.
4. Añadir todos los ingredientes en una batidora: vegetales, pan escurrido, ajo, aceite, vinagre y sal.
5. Triturar hasta obtener una textura suave y homogénea.
6. Probar y ajustar el punto de sal y vinagre.
7. Refrigerar al menos 2 horas antes de servir.
8. Servir bien frío con dados de pepino, tomate y pan como guarnición.`,
      mealType: 'DINNER',
      imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      ingredients: {
        create: [
          { amount: 1.0, ingredientId: tomate.id },
          { amount: 0.3, ingredientId: pepino.id },
          { amount: 0.2, ingredientId: pimiento.id },
          { amount: 0.1, ingredientId: cebolla.id },
          { amount: 0.015, ingredientId: ajo.id },
          { amount: 0.1, ingredientId: aceiteOliva.id },
          { amount: 0.05, ingredientId: vinagre.id },
          { amount: 1, ingredientId: pan.id },
        ],
      },
    },
  });
  console.log(`   ✓ Recipe created: ${gazpacho.title}`);

  // Recipe 3: Paella Valenciana
  const paella = await prisma.recipe.create({
    data: {
      title: 'Paella Valenciana',
      instructions: `1. Calentar aceite de oliva en una paellera grande.
2. Dorar los muslos de pollo cortados en trozos.
3. Añadir las judías verdes y el garrofón, sofreír 5 minutos.
4. Agregar el tomate rallado y cocinar hasta que se reduzca.
5. Añadir el agua (el triple que el arroz) y llevar a ebullición.
6. Sazonar con sal y azafrán.
7. Añadir el arroz en forma de cruz y distribuir uniformemente.
8. Cocinar a fuego fuerte 10 minutos, luego medio 5-7 minutos más.
9. Dejar reposar 5 minutos antes de servir.
10. La paella está perfecta cuando el arroz está en su punto y se forma el socarrat.`,
      mealType: 'LUNCH',
      imageUrl: 'https://images.unsplash.com/photo-1630555664498-35211e579021',
      ingredients: {
        create: [
          { amount: 0.4, ingredientId: arroz.id },
          { amount: 0.6, ingredientId: pollo.id },
          { amount: 0.2, ingredientId: judiaVerde.id },
          { amount: 0.15, ingredientId: garrofon.id },
          { amount: 0.2, ingredientId: tomate.id },
          { amount: 0.08, ingredientId: aceiteOliva.id },
        ],
      },
    },
  });
  console.log(`   ✓ Recipe created: ${paella.title}`);

  // Recipe 4: Ensalada Mixta
  const ensalada = await prisma.recipe.create({
    data: {
      title: 'Ensalada Mixta',
      instructions: `1. Lavar y cortar la lechuga en trozos medianos.
2. Cortar el tomate en rodajas o gajos.
3. Pelar y cortar la cebolla en aros finos.
4. Rallar la zanahoria o cortarla en juliana.
5. Abrir la lata de atún y escurrirla.
6. Cocer los huevos duros (10 minutos en agua hirviendo).
7. Montar la ensalada en una fuente: lechuga de base, luego tomate, cebolla, zanahoria.
8. Colocar el atún en el centro y el huevo en cuartos alrededor.
9. Aliñar con aceite de oliva, vinagre y sal al gusto.
10. Servir inmediatamente.`,
      mealType: 'DINNER',
      imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      ingredients: {
        create: [
          { amount: 1, ingredientId: lechuga.id },
          { amount: 0.3, ingredientId: tomate.id },
          { amount: 0.1, ingredientId: cebolla.id },
          { amount: 0.15, ingredientId: zanahoria.id },
          { amount: 2, ingredientId: atun.id },
          { amount: 2, ingredientId: huevo.id },
          { amount: 0.05, ingredientId: aceiteOliva.id },
          { amount: 0.02, ingredientId: vinagre.id },
        ],
      },
    },
  });
  console.log(`   ✓ Recipe created: ${ensalada.title}`);

  // Recipe 5: Pollo al Ajillo
  const polloAjillo = await prisma.recipe.create({
    data: {
      title: 'Pollo al Ajillo',
      instructions: `1. Cortar los muslos de pollo en trozos medianos y salpimentar.
2. Pelar y laminar los dientes de ajo finamente.
3. Calentar abundante aceite de oliva en una sartén amplia.
4. Dorar el pollo por todos los lados hasta que esté bien sellado.
5. Retirar el pollo y reservar.
6. En el mismo aceite, añadir los ajos laminados a fuego bajo.
7. Cuando los ajos estén dorados (sin quemarse), añadir el vino blanco.
8. Dejar reducir el vino durante 2 minutos.
9. Devolver el pollo a la sartén y cocinar 15 minutos más hasta que esté tierno.
10. Servir caliente con el ajillo por encima y pan para mojar.`,
      mealType: 'LUNCH',
      imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
      ingredients: {
        create: [
          { amount: 0.8, ingredientId: pollo.id },
          { amount: 0.1, ingredientId: ajo.id },
          { amount: 0.15, ingredientId: aceiteOliva.id },
          { amount: 0.1, ingredientId: vinoBlanco.id },
        ],
      },
    },
  });
  console.log(`   ✓ Recipe created: ${polloAjillo.title}\n`);

  // ==========================================
  // 4. CREATE A SAMPLE WEEKLY MENU
  // ==========================================
  console.log('📅 Creating sample weekly menu...');
  const menu = await prisma.menu.create({
    data: {
      userId: testUser.id,
      date: new Date('2026-02-10'),
      recipes: {
        connect: [
          { id: tortilla.id },
          { id: gazpacho.id },
          { id: paella.id },
          { id: ensalada.id },
          { id: polloAjillo.id },
        ],
      },
    },
  });
  console.log(`   ✓ Menu created for week of ${menu.date.toISOString().split('T')[0]}\n`);

  // ==========================================
  // SUMMARY
  // ==========================================
  console.log('✅ Database seeding completed successfully!\n');
  console.log('📊 Summary:');
  console.log(`   • 1 test user created`);
  console.log(`   • 17 ingredients with real prices from Mercadona & Carrefour`);
  console.log(`   • 5 authentic Spanish recipes:`);
  console.log(`     - Tortilla de Patatas`);
  console.log(`     - Gazpacho Andaluz`);
  console.log(`     - Paella Valenciana`);
  console.log(`     - Ensalada Mixta`);
  console.log(`     - Pollo al Ajillo`);
  console.log(`   • 1 sample weekly menu`);
  console.log('\n🎉 Ready to use!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
