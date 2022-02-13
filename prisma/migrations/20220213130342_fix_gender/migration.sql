/*
  Warnings:

  - The values [MALE,FEMALE,OTHER] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('Feminino', 'Masculino', 'Outros');
ALTER TABLE "Cliente" ALTER COLUMN "gender" DROP DEFAULT;
ALTER TABLE "Cliente" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
ALTER TABLE "Cliente" ALTER COLUMN "gender" SET DEFAULT 'Outros';
COMMIT;

-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "gender" SET DEFAULT E'Outros';
