-- CreateTable
CREATE TABLE "hobby" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "hobby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FichaPersonagem" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "FichaPersonagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descricao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "eventoMarcante" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "geracao" TEXT NOT NULL,
    "propositosPessoais" TEXT NOT NULL,
    "propositosColetivos" TEXT NOT NULL,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Descricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aptidoes" (
    "id" SERIAL NOT NULL,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Aptidoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instintos" (
    "id" SERIAL NOT NULL,
    "influencia" INTEGER NOT NULL DEFAULT 1,
    "percepcao" INTEGER NOT NULL DEFAULT 1,
    "potencia" INTEGER NOT NULL DEFAULT 1,
    "reacao" INTEGER NOT NULL DEFAULT 1,
    "resolucao" INTEGER NOT NULL DEFAULT 1,
    "sagacidade" INTEGER NOT NULL DEFAULT 1,
    "aptidoesId" INTEGER NOT NULL,

    CONSTRAINT "Instintos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conhecimentos" (
    "id" SERIAL NOT NULL,
    "biologia" INTEGER NOT NULL,
    "erudicao" INTEGER NOT NULL,
    "engenharia" INTEGER NOT NULL,
    "geografia" INTEGER NOT NULL,
    "medicina" INTEGER NOT NULL,
    "seguranca" INTEGER NOT NULL,
    "aptidoesId" INTEGER NOT NULL,

    CONSTRAINT "Conhecimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Praticas" (
    "id" SERIAL NOT NULL,
    "armas" INTEGER NOT NULL,
    "atletismo" INTEGER NOT NULL,
    "expressao" INTEGER NOT NULL,
    "furtividade" INTEGER NOT NULL,
    "manufaturas" INTEGER NOT NULL,
    "sobrevivencia" INTEGER NOT NULL,
    "aptidoesId" INTEGER NOT NULL,

    CONSTRAINT "Praticas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saude" (
    "id" SERIAL NOT NULL,
    "saudavelAtual" INTEGER NOT NULL DEFAULT 1,
    "saudavelTotal" INTEGER NOT NULL DEFAULT 1,
    "escoriacaoAtual" INTEGER NOT NULL DEFAULT 1,
    "escoriacaoTotal" INTEGER NOT NULL DEFAULT 1,
    "laceracaoAtual" INTEGER NOT NULL DEFAULT 1,
    "laceracaoTotal" INTEGER NOT NULL DEFAULT 1,
    "ferimentosAtual" INTEGER NOT NULL DEFAULT 1,
    "ferimentosTotal" INTEGER NOT NULL DEFAULT 1,
    "debilicaoAtual" INTEGER NOT NULL DEFAULT 1,
    "debilicaoTotal" INTEGER NOT NULL DEFAULT 1,
    "incapacitacaoAtual" INTEGER NOT NULL DEFAULT 1,
    "incapacitacaoTotal" INTEGER NOT NULL DEFAULT 1,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Saude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Determinacao" (
    "id" SERIAL NOT NULL,
    "determinacao" INTEGER NOT NULL DEFAULT 9,
    "assimilacao" INTEGER NOT NULL DEFAULT 1,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Determinacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carcteristica" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT,
    "conteudo" TEXT,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Carcteristica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assimilacoes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT,
    "conteudo" TEXT,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Assimilacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "espacos" INTEGER NOT NULL DEFAULT 10,
    "item" TEXT NOT NULL,
    "descricao" TEXT,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Descricao_fichaId_key" ON "Descricao"("fichaId");

-- CreateIndex
CREATE UNIQUE INDEX "Aptidoes_fichaId_key" ON "Aptidoes"("fichaId");

-- CreateIndex
CREATE UNIQUE INDEX "Instintos_aptidoesId_key" ON "Instintos"("aptidoesId");

-- CreateIndex
CREATE UNIQUE INDEX "Conhecimentos_aptidoesId_key" ON "Conhecimentos"("aptidoesId");

-- CreateIndex
CREATE UNIQUE INDEX "Praticas_aptidoesId_key" ON "Praticas"("aptidoesId");

-- CreateIndex
CREATE UNIQUE INDEX "Saude_fichaId_key" ON "Saude"("fichaId");

-- CreateIndex
CREATE UNIQUE INDEX "Determinacao_fichaId_key" ON "Determinacao"("fichaId");

-- AddForeignKey
ALTER TABLE "Descricao" ADD CONSTRAINT "Descricao_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aptidoes" ADD CONSTRAINT "Aptidoes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instintos" ADD CONSTRAINT "Instintos_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conhecimentos" ADD CONSTRAINT "Conhecimentos_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Praticas" ADD CONSTRAINT "Praticas_aptidoesId_fkey" FOREIGN KEY ("aptidoesId") REFERENCES "Aptidoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saude" ADD CONSTRAINT "Saude_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Determinacao" ADD CONSTRAINT "Determinacao_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carcteristica" ADD CONSTRAINT "Carcteristica_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assimilacoes" ADD CONSTRAINT "Assimilacoes_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "FichaPersonagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
