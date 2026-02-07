# Copilot Instructions for Planeat Monorepo

## Big Picture Architecture
- **Monorepo Structure**: Uses **pnpm workspaces** and **Turborepo**.
- **Apps**:
  - `apps/web`: **Next.js** (App Router) using React 19.
  - `apps/api`: **NestJS** backend.
- **Shared Packages**:
  - `@repo/api`: Shared types, DTOs, and entities. **MUST** be used by both `web` and `api` to ensure type safety.
  - `@repo/database`: Prisma client management. Uses a custom output path: [../packages/database/src/generated/prisma](../packages/database/src/generated/prisma).
  - `@repo/ui`: Shared React components.

## Core Domain: Meal Planning
- The application (Planeat) manages `User`, `Recipe`, `Ingredient`, `Menu`, and `ProductPrice`.
- Refer to [../packages/database/prisma/schema.prisma](../packages/database/prisma/schema.prisma) for the definitive data model.

## Developer Workflows
- **Running locally**: `pnpm dev` from the root.
- **Database updates**:
  - After schema changes: `cd packages/database && pnpm db:generate`.
  - Migrations: `pnpm db:migrate`.
  - Seeding: `pnpm db:seed`.
- **Adding new features**:
  - 1. Define models in [../packages/database/prisma/schema.prisma](../packages/database/prisma/schema.prisma).
  - 2. Create shared DTOs/Entities in [../packages/api/src](../packages/api/src).
  - 3. Implement NestJS service/controller in [../apps/api/src](../apps/api/src).
  - 4. Consume in Next.js via `fetch('http://localhost:3000/...')`.

## Coding Conventions & Patterns
- **Shared Types**: Always export DTOs from `packages/api` and import via `@repo/api`. Avoid duplicating types in `apps/api` or `apps/web`.
- **Database Access**: Use the Prisma client exported from `@repo/database`.
- **Validations**: Use `class-validator` in DTOs within `packages/api`.
- **Frontend Components**: Prefer Server Components in `apps/web`. Use `@repo/ui` for primitive components (Button, Card, etc.).
- **Best Practices**:
  - Follow [NestJS Best Practices](../.agents/skills/nestjs-best-practices/AGENTS.md).
  - Follow [React Best Practices](../.agents/skills/vercel-react-best-practices/AGENTS.md).
  - Follow [Postgres/Supabase Best Practices](../.agents/skills/supabase-postgres-best-practices/AGENTS.md).

## Critical Files
- [../turbo.json](../turbo.json): Defines pipeline dependencies.
- [../packages/database/prisma/schema.prisma](../packages/database/prisma/schema.prisma): The source of truth for the database.
- [../apps/api/src/app.module.ts](../apps/api/src/app.module.ts): API entry point.
- [../apps/web/app/layout.tsx](../apps/web/app/layout.tsx): Web entry point.
