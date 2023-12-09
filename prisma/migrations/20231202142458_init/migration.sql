/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TagToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Price` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinations` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telp_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_writtenById_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `_TagToPost` DROP FOREIGN KEY `_TagToPost_A_fkey`;

-- DropForeignKey
ALTER TABLE `_TagToPost` DROP FOREIGN KEY `_TagToPost_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `Price` INTEGER NOT NULL,
    ADD COLUMN `address` VARCHAR(255) NOT NULL,
    ADD COLUMN `day_date` DATETIME(3) NULL,
    ADD COLUMN `destinations` VARCHAR(255) NOT NULL,
    ADD COLUMN `payment_method` INTEGER NOT NULL,
    ADD COLUMN `pickup_time` DATETIME(3) NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `telp_number` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Comment`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `_TagToPost`;

-- CreateTable
CREATE TABLE `Destinations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactUs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
