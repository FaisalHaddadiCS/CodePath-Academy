import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("FATAL: DATABASE_URL environment variable is missing.");
}

const adapter = new PrismaLibSql({
  url: DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
