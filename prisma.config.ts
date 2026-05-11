import { config } from "dotenv";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

// Explicitly load the development environment file
config({ path: path.resolve(process.cwd(), ".env.development") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), 
  },
});

