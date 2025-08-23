import React from "react";

import { Title } from "@/components/common/Title";
import { fetchFriendRequest } from "@/lib/api/fetchFriendRequest";

import { FriendRequestCard } from "./FriendRequestCard";

type Props = {
  page: number;
  game: string;
};

export const FriendRequestList = async ({ page, game }: Props) => {
  const friendRequests = await fetchFriendRequest(page, game);

  return (
    <div className="mt-8">
      <Title>最新の募集</Title>
      {friendRequests.map((request) => (
        <FriendRequestCard key={request.id} friendRequest={request} />
      ))}
    </div>
  );
};
