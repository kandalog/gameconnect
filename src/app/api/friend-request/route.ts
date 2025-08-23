import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

// TODO Zodでvalidation
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const gameName = searchParams.get("game");

  // 不可変のためハードコード
  const perPage = 10;
  const offset = (page - 1) * perPage;

  const friendRequests = await prisma.friendRequest.findMany({
    skip: offset,
    take: perPage,
    orderBy: { createdAt: "desc" },
    where: {
      game: {
        title: gameName!,
      },
    },
    include: {
      game: true,
    },
  });

  // lengthが0の時だけマスターデータの存在性をチェック
  if (friendRequests.length === 0) {
    const gameExists = await prisma.game.findUnique({
      where: { title: gameName! },
    });

    if (!gameExists) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
  }

  return NextResponse.json({ data: friendRequests });
}
