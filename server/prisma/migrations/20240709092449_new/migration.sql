/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Userdetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Login";

-- DropTable
DROP TABLE "Userdetails";

-- CreateTable
CREATE TABLE "users_table" (
    "id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_table" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "login_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "houses_tab" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "houses_tab_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_Email_key" ON "users_table"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "login_table_Email_key" ON "login_table"("Email");
