import React from "react";
import { FateTriggerFriendRequest } from "@prisma/client";

import { Title } from "@/components/common/Title";

import { FriendRequestCard } from "./FriendRequestCard";

type Props = {
  friendRequests: FateTriggerFriendRequest[];
};

export const FriendRequestList = ({ friendRequests }: Props) => {
  return (
    <div className="mt-8">
      <Title>最新の募集</Title>
      {friendRequests.map((request) => (
        <FriendRequestCard key={request.id} friendRequest={request} />
      ))}
    </div>
  );
};
