import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient();

// Enhanced logging
console.log("Environment:", process.env.NODE_ENV || "development");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Set" : "Not set");
console.log("PrismaClient created successfully");

export default prisma;
