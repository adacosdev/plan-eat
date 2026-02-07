import { PrismaClient } from "./generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

export * from "./generated/prisma";

export const createPrismaClient = (connectionString: string) => {
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

// Default instance (not recommended for NestJS, but kept for compatibility)
const defaultPool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const defaultAdapter = new PrismaPg(defaultPool);
export const prisma = new PrismaClient({ adapter: defaultAdapter });

export * from "./generated/prisma";
