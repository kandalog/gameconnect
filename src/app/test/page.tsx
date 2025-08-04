"use client";

import React from "react";

import { Pagination } from "./Pagination";

const page = () => {
  const handleClickPageNumber = (id: number) => {
    console.log(`hello ${id}`);
  };
  return (
    <>
      <Pagination currentPage={1} totalPages={100} onClickPagination={handleClickPageNumber} />
    </>
  );
};

export default page;
