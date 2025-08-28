import { z } from "zod";

export const getFriendRequestsSchema = z.object({
  game: z.string({ message: "文字列である必要があります" }).min(1, "必須項目です"),
  page: z.coerce
    .number({ message: "数値である必要があります" })
    .min(1, "ページ番号は1以上である必要があります"),
});

export const createFriendRequestSchema = z.object({
  discordId: z.string({ message: "文字列である必要があります" }).min(1, "必須項目です"),
  content: z.string().max(255, "メッセージは255文字以内である必要があります"),
  duration: z
    .number({ message: "数値である必要があります" })
    .min(1, "1以上の値である必要があります"),
  game: z.string({ message: "文字列である必要があります" }).min(1, "必須項目です"),
});
