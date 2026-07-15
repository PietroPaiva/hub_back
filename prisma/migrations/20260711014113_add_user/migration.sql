/*
  Warnings:

  - Added the required column `userId` to the `FichaPersonagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FichaPersonagem" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "FichaPersonagem" ADD CONSTRAINT "FichaPersonagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
