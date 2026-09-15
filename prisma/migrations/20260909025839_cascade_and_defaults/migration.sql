/*
  Warnings:

  - You are about to drop the `hobby` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aptidoes" DROP CONSTRAINT "Aptidoes_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "Assimilacoes" DROP CONSTRAINT "Assimilacoes_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "Carcteristica" DROP CONSTRAINT "Carcteristica_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "Conhecimentos" DROP CONSTRAINT "Conhecimentos_aptidoesId_fkey";

-- DropForeignKey
ALTER TABLE "Descricao" DROP CONSTRAINT "Descricao_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "Determinacao" DROP CONSTRAINT "Determinacao_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "FichaPersonagem" DROP CONSTRAINT "FichaPersonagem_userId_fkey";

-- DropForeignKey
ALTER TABLE "Instintos" DROP CONSTRAINT "Instintos_aptidoesId_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_fichaId_fkey";

-- DropForeignKey
ALTER TABLE "Praticas" DROP CONSTRAINT "Praticas_aptidoesId_fkey";

-- DropForeignKey
ALTER TABLE "Saude" DROP CONSTRAINT "Saude_fichaId_fkey";

-- DropTable
DROP TABLE "hobby";

-- CreateTable
CREATE TABLE "Hobby" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Hobby_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FichaPersonagem" ADD CONSTRAINT "FichaPersonagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Descricao" ADD CONSTRAINT "Descricao_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aptidoes" ADD CONSTRAINT "Aptidoes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instintos" ADD CONSTRAINT "Instintos_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conhecimentos" ADD CONSTRAINT "Conhecimentos_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Praticas" ADD CONSTRAINT "Praticas_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saude" ADD CONSTRAINT "Saude_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Determinacao" ADD CONSTRAINT "Determinacao_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carcteristica" ADD CONSTRAINT "Carcteristica_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assimilacoes" ADD CONSTRAINT "Assimilacoes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
