"use client";
import React from "react";
import { Files, Timer } from "lucide-react";
import { toast } from "sonner";

import { Card } from "@/components/base/Card";
import { Button } from "@/components/ui/button";

const handleCopyDiscordId = (id: string) => {
  // TODO
  navigator.clipboard.writeText(id);
  toast.success("Discord IDをコピーしました", {
    description: id,
  });
};

export const FriendRequestCard = () => {
  return (
    <Card>
      {/* header */}
      <div>
        <p className="text-primary font-bold">ApexMaster#7857</p>
        <span className="text-gray text-sm">2024年12月15日 14:30</span>
      </div>
      {/* contents */}
      <div className="mt-4">
        <p className="text-[#374151]">
          Apex Legends
          でランク戦を一緒にやってくれる仲間を募集しています!現在ダイヤモンドランクで、プレデターを目指しています。VC
          必須で、平日の夜 20:00-24:00 頃に活動できる方を探しています。初心者の方でも大歓迎です！
        </p>
      </div>
      {/* footer */}
      <div className="mt-4 lg:flex justify-between">
        <div className="flex items-center">
          <span>
            <Timer className="w-4 h-4 text-gray-400" />
          </span>
          <span className="ml-2 text-gray-500 text-sm">あと 6日</span>
          <span className="ml-2 text-gray-400 text-sm">
            ID: 7f8d9e2a-bc3d-4f5g-6h7i-8j9k0l1m2n3o
          </span>
        </div>
        <Button className="cursor-pointer" onClick={() => handleCopyDiscordId("ApexMaster#7857")}>
          <span>
            <Files />
          </span>
          <p className="text-sm">IDをコピー</p>
        </Button>
      </div>
    </Card>
  );
};
