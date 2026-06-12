-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_roomid_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "roomid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
