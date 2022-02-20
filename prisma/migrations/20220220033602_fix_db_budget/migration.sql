/*
  Warnings:

  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DetalhesDaCompra` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ANALISANDO', 'APROVADO', 'CONCLUIDO', 'ENVIADO', 'ENTREGUE');

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "DetalhesDaCompra" DROP CONSTRAINT "DetalhesDaCompra_compraId_fkey";

-- DropForeignKey
ALTER TABLE "DetalhesDaCompra" DROP CONSTRAINT "DetalhesDaCompra_produtoId_fkey";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "DetalhesDaCompra";

-- CreateTable
CREATE TABLE "Budget" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ANALISANDO',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductToBudget" (
    "id" SERIAL NOT NULL,
    "qtd" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "productId" INTEGER NOT NULL,
    "budgetId" INTEGER NOT NULL,

    CONSTRAINT "ProductToBudget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToBudget" ADD CONSTRAINT "ProductToBudget_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToBudget" ADD CONSTRAINT "ProductToBudget_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
