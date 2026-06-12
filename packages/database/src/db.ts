import {PrismaClient} from "../generated/client/client"
import { PrismaPg } from "@prisma/adapter-pg"

const PgAdapter= new PrismaPg(process.env.DATABASE_URL!)

const globalforPrisma = globalThis as {
    prisma?:PrismaClient
}


export const db=globalforPrisma.prisma ?? new PrismaClient({
    adapter:PgAdapter
});
