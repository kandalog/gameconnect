"use client";

import React from "react";

import { Pagination } from "@/app/base/Pagination";
import { FriendRequestItem } from "@/types/home";

type Props = {
  initialFriendRequests: FriendRequestItem[];
};

const handleClickPageNumber = (id: number) => {
  console.log(`hello ${id}`);
};

export const HomeContainer = ({ initialFriendRequests }: Props) => {
  return (
    <>
      <Pagination onClickPageNumber={handleClickPageNumber} currentPage={1} totalPages={3} />
    </>
  );
};
