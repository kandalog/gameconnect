import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import logger from "@/lib/logger";
import { prisma } from "@/lib/prisma";
import { createFriendRequestSchema, getFriendRequestsSchema } from "@/lib/schema/friend-request";
import { calculateExpiredAt } from "@/lib/utils";
import { formatZodErrors } from "@/lib/validation";

export async function GET(req: NextRequest) {
  // validation
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  const result = getFriendRequestsSchema.safeParse(params);

  if (!result.success) {
    return NextResponse.json(
      { success: false, errors: formatZodErrors(result.error) },
      { status: 422 },
    );
  }

  try {
    const { game, page } = result.data;

    const perPage = 10;
    const offset = (page - 1) * perPage;

    const friendRequests = await prisma.friendRequest.findMany({
      skip: offset,
      take: perPage,
      orderBy: { createdAt: "desc" },
      where: {
        game: {
          title: game,
        },
      },
      include: {
        game: true,
      },
    });

    // lengthが0の時だけマスターデータの存在性をチェック
    if (friendRequests.length === 0) {
      logger.info("マスターデータの存在性をチェックします", { game });

      const gameExists = await prisma.game.findUnique({
        where: { title: game },
      });

      if (!gameExists) {
        return NextResponse.json(
          { success: false, error: { code: 404, message: "対象外のゲームが指定されました" } },
          { status: 404 },
        );
      }
    }

    return NextResponse.json({ success: true, data: friendRequests });
  } catch (err) {
    logger.error("フレンドリクエスト一覧取得中にエラーが発生しました", { err });
    return NextResponse.json(
      { success: false, error: { code: 500, message: "エラーが発生しました" } },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = createFriendRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: formatZodErrors(result.error) },
        { status: 422 },
      );
    }

    const { game, discordId, content, duration } = result.data;

    const targetGame = await prisma.game.findUnique({
      where: { title: game },
    });

    if (!targetGame) {
      return NextResponse.json(
        { success: false, error: { code: 404, message: "対象外のゲームが指定されました" } },
        { status: 404 },
      );
    }

    const friendRequest = await prisma.friendRequest.create({
      data: {
        game: {
          connect: { id: targetGame.id },
        },
        discordId: discordId,
        content: content,
        expiredAt: calculateExpiredAt(duration),
      },
    });
    logger.info("フレンドリクエストが作成されました", { friendRequest });

    return NextResponse.json({ success: true, data: friendRequest });
  } catch (err) {
    logger.error("フレンドリクエスト作成中にエラーが発生しました", { err });
    return NextResponse.json(
      { success: false, error: { code: 500, message: "エラーが発生しました" } },
      { status: 500 },
    );
  }
}
