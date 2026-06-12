-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roomid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "RoomName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "room_id_key" ON "room"("id");

-- CreateIndex
CREATE UNIQUE INDEX "room_roomname_key" ON "room"("RoomName");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
