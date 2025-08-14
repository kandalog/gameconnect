import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;

  // 不可変のためハードコード
  const perPage = 10;
  const offset = (page - 1) * perPage;

  const friendRequests = await prisma.fateTriggerFriendRequest.findMany({
    skip: offset,
    take: perPage,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: friendRequests });
}
