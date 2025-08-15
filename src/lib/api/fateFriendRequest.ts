import { FriendRequestItem } from "@/types/home";

import { BASE_URL } from "../config";

export const fetchFriendRequest = async (page: number) => {
  // APIをリクエスト
  const URI = `${BASE_URL}?page=${page}`;
  console.log("BASE_URL", BASE_URL);
  console.log("Fetching friend requests starting from:", URI);
  const response = await fetch(URI);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();

  // APIレスポンスのanyは許可
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: FriendRequestItem[] = json.data.map((item: any) => {
    return {
      id: item.id,
      gender: item.gender,
      discordId: item.discordId,
      content: item.content,
      expiredAt: new Date(item.expiredAt),
      createdAt: new Date(item.createdAt),
    };
  });
  return data;
};
