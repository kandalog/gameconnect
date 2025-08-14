export type FriendRequestItem = {
  id: string;
  gender: "male" | "female";
  discordId: string;
  content: string;
  expiredAt: Date;
  createdAt: Date;
};
