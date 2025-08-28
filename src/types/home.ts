export type FriendRequestItem = {
  id: string;
  discordId: string;
  content: string;
  gameId: string;
  expiredAt: Date;
  createdAt: Date;
};

export interface FormData {
  discordId: string;
  displayDuration: string;
  content: string;
}
