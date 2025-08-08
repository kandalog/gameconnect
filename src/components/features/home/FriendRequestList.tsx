import React from "react";

import { Title } from "@/components/common/Title";

import { FriendRequestCard } from "./FriendRequestCard";

export const FriendRequestList = () => {
  return (
    <div className="mt-8">
      <Title>最新の募集</Title>
      <FriendRequestCard />
      <FriendRequestCard />
    </div>
  );
};
