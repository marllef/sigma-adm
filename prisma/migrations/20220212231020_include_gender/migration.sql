/*
  Warnings:

  - Made the column `cpf` on table `Cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tel` on table `Cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT E'OTHER',
ALTER COLUMN "cpf" SET NOT NULL,
ALTER COLUMN "tel" SET NOT NULL;
