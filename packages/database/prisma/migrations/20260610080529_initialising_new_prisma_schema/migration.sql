/*
  Warnings:

  - You are about to drop the column `roomid` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[RoomKey]` on the table `room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RoomKey` to the `room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_roomid_fkey";

-- AlterTable
ALTER TABLE "room" ADD COLUMN     "RoomKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "roomid",
ADD COLUMN     "RoomKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "room_RoomKey_key" ON "room"("RoomKey");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_RoomKey_fkey" FOREIGN KEY ("RoomKey") REFERENCES "room"("RoomKey") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "room_roomname_key" RENAME TO "room_RoomName_key";
