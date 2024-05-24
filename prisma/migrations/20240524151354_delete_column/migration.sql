/*
  Warnings:

  - You are about to drop the column `totalEvaluation` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `totalEvaluation` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "totalEvaluation";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "totalEvaluation";
