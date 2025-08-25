import { z } from "zod";

export const getFriendRequestsSchema = z.object({
  game: z.string({ message: "文字列である必要があります" }).min(1, "必須項目です"),
  page: z.coerce
    .number({ message: "数値である必要があります" })
    .min(1, "ページ番号は1以上である必要があります"),
});
