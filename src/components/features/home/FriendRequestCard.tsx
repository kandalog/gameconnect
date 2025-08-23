"use client";
import React from "react";
import { Files, Timer } from "lucide-react";
import { toast } from "sonner";

import { Card } from "@/components/base/Card";
import { Button } from "@/components/ui/button";
import { formatDate, formatRemainingTime } from "@/lib/formatters";
import type { FriendRequestItem } from "@/types/home";

const handleCopyDiscordId = (id: string) => {
  navigator.clipboard.writeText(id);
  toast.success("Discord IDをコピーしました", {
    description: id,
  });
};

type Props = {
  friendRequest: FriendRequestItem;
};

export const FriendRequestCard = ({ friendRequest }: Props) => {
  return (
    <Card className="mt-4">
      {/* header */}
      <div>
        <p className="text-primary font-bold">{friendRequest.discordId}</p>
        <span className="text-gray text-sm">{formatDate(friendRequest.createdAt)}</span>
      </div>
      {/* contents */}
      <div className="mt-4">
        <p className="text-[#374151]">{friendRequest.content}</p>
      </div>
      {/* footer */}
      <div className="mt-4 lg:flex justify-between text-right">
        <div className="flex items-center">
          <span>
            <Timer className="w-4 h-4 text-gray-400" />
          </span>
          <span className="ml-2 text-gray-500 text-sm">
            あと {formatRemainingTime(friendRequest.createdAt, friendRequest.expiredAt)}
          </span>
          <span className="ml-2 text-gray-400 text-sm">ID: {friendRequest.id}</span>
        </div>

        <Button
          className="cursor-pointer max-lg:mt-4"
          onClick={() => handleCopyDiscordId(friendRequest.discordId)}
        >
          <span>
            <Files />
          </span>
          <p className="text-sm">IDをコピー</p>
        </Button>
      </div>
    </Card>
  );
};
