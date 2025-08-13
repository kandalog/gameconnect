-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "public"."FateTriggerFriendRequest" (
    "id" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "discordId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FateTriggerFriendRequest_pkey" PRIMARY KEY ("id")
);
