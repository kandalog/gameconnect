import React from "react";

import { Title } from "@/components/common/Title";
import { fetchFriendRequest } from "@/lib/api/fateFriendRequest";

import { FriendRequestCard } from "./FriendRequestCard";

type Props = {
  page: number;
};

export const FriendRequestList = async ({ page }: Props) => {
  const friendRequests = await fetchFriendRequest(page);

  return (
    <div className="mt-8">
      <Title>最新の募集</Title>
      {friendRequests.map((request) => (
        <FriendRequestCard key={request.id} friendRequest={request} />
      ))}
    </div>
  );
};
