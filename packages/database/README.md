# @repo/database

Database package for Planeat using Prisma ORM with PostgreSQL.

## Overview

This package contains:
- Prisma schema definition
- Database migrations
- Prisma client configuration
- Production-ready seeding script

## Prerequisites

- PostgreSQL database instance running
- `DATABASE_URL` environment variable set (e.g., `postgresql://user:password@localhost:5432/planeat`)

## Setup

### 1. Generate Prisma Client

```bash
pnpm db:generate
```

This generates the Prisma client in `src/generated/prisma`.

### 2. Run Migrations

```bash
pnpm db:migrate
```

This applies all pending database migrations.

**Note**: Make sure you have a `.env` file in the `packages/database` directory (or at the root) with `DIRECT_URL` set to your PostgreSQL connection string.

### 3. Seed the Database

```bash
pnpm db:seed
```

This populates your database with:
- **1 test user** (`test@planeat.com`) with preferences and weekly budget
- **17 ingredients** with real units (kg, litros, unidades)
- **Real prices** from Mercadona and Carrefour for each ingredient
- **5 authentic Spanish recipes**:
  1. **Tortilla de Patatas** - Classic Spanish potato omelette
  2. **Gazpacho Andaluz** - Traditional cold tomato soup
  3. **Paella Valenciana** - Authentic Valencian rice dish
  4. **Ensalada Mixta** - Spanish mixed salad
  5. **Pollo al Ajillo** - Garlic chicken
- **1 sample weekly menu** linking all recipes

The seeding script is **idempotent** - you can run it multiple times safely. It uses `upsert` operations to avoid duplicates.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:seed` | Seed database with sample data |
| `pnpm db:studio` | Open Prisma Studio (database GUI) |
| `pnpm lint` | Run ESLint |
| `pnpm check-types` | Run TypeScript type checking |

## Database Schema

The schema includes the following models:

- **User**: User accounts with preferences and weekly budgets
- **Recipe**: Recipes with instructions, images, and meal types
- **Ingredient**: Ingredients with units (kg, litros, unidades)
- **RecipeIngredient**: Junction table linking recipes to ingredients with amounts
- **ProductPrice**: Price tracking for ingredients at different supermarkets
- **Menu**: Weekly meal plans linking users to recipes

## Prisma Client Usage

```typescript
import { prisma } from '@repo/database';

// Query users
const users = await prisma.user.findMany();

// Create a recipe
const recipe = await prisma.recipe.create({
  data: {
    title: 'My Recipe',
    instructions: 'Step by step...',
    mealType: 'LUNCH',
  },
});
```

## Seed Data Details

### Ingredients
All ingredients include prices from both Mercadona and Carrefour:
- Vegetables: Patata, Cebolla, Tomate, Pepino, Pimiento, Lechuga, Zanahoria
- Proteins: Huevo, Pollo, Atún
- Grains: Arroz, Pan
- Pantry: Aceite de oliva, Vinagre, Ajo, Vino blanco
- Legumes: Judía verde, Garrofón

### Price Comparison
The seed data allows you to:
- Compare prices between Mercadona and Carrefour
- Calculate total recipe costs
- Optimize shopping lists based on budget
- Track price history (with `lastUpdated` timestamp)

## Development

To modify the schema:

1. Edit `prisma/schema.prisma`
2. Run `pnpm db:migrate` to create a new migration
3. Run `pnpm db:generate` to update the Prisma client

## Notes

- The Prisma client output is configured to `../src/generated/prisma` for monorepo compatibility
- The database uses PostgreSQL with the `@prisma/adapter-pg` adapter
- All seed data uses realistic Spanish recipes and current market prices
