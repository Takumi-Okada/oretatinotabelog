/*
  Warnings:

  - Added the required column `totalEvaluation` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalEvaluation` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "totalEvaluation" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "totalEvaluation" DOUBLE PRECISION NOT NULL;
