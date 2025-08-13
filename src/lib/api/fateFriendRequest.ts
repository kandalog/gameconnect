import { BASE_URL } from "../config";

export const fetchFriendRequest = async (page: number) => {
  // APIをリクエスト
  const URI = `${BASE_URL}/?page=${page}`;
  const response = await fetch(URI);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
