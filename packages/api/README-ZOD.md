# Zod Integration & Type Verification

This document explains the integration of [Zod](https://zod.dev/) into the `@repo/api` package for database entity verification and runtime type safety.

## Why Zod?

While TypeScript provides excellent compile-time safety, it doesn't guarantee that data coming from external sources (database, APIs, user input) matches our expected types at runtime. Zod allows us to:

1.  **Validate Runtime Data**: Ensure data fetched from Prisma or external APIs conforms to our expectations.
2.  **Single Source of Truth**: Define the schema once and infer TypeScript types directly from it.
3.  **Enhanced Type Safety**: Entities now implement types inferred from Zod schemas, ensuring consistency between validation logic and class structures.

## Implementation Details

### 1. Schema Definitions

Schemas are located in `src/schemas/index.ts`. Each schema corresponds to a database model defined in the Prisma schema or a core application entity.

Example:

```typescript
export const RecipeSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1),
  instructions: z.string().min(1),
  imageUrl: z.string().url().optional().nullable(),
  mealType: z.string().min(1),
  menuId: z.string().cuid().optional().nullable(),
});

export type RecipeType = z.infer<typeof RecipeSchema>;
```

### 2. Entity Integration

Classes in `src/*/entities/*.entity.ts` now implement the inferred types (e.g., `RecipeType`). This forces the class structure to stay in sync with the validation schema.

### 3. Prisma Configuration Fix

During the integration, the Prisma generator provider in `packages/database/prisma/schema.prisma` was updated from `prisma-client` to `prisma-client-js`. This was necessary to correctly generate the TypeScript client and its associated type definitions, which are essential for Zod to interact correctly with database models.

## Usage

### Validation

Use the schemas to parse and validate data at the boundaries of your application (e.g., in NestJS services after a database query):

```typescript
import { RecipeSchema } from '@repo/api';

const data = await prisma.recipe.findUnique({ where: { id } });
const validated = RecipeSchema.parse(data); // Throws if invalid
```

### Types

Use the exported types for variable declarations and function signatures:

```typescript
import { RecipeType } from '@repo/api';

function processRecipe(recipe: RecipeType) {
  // ...
}
```
