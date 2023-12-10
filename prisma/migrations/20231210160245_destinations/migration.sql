/*
  Warnings:

  - You are about to drop the column `description` on the `Destinations` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Destinations` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Destinations` DROP COLUMN `description`,
    ADD COLUMN `idkota` VARCHAR(191) NULL,
    ADD COLUMN `itemSrc` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `price` VARCHAR(191) NULL,
    MODIFY `title` VARCHAR(191) NULL;
