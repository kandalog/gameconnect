"use client";

import React from "react";

import { Pagination } from "./Pagination";

const page = () => {
  const handleClickPageNumber = (id: string) => console.log("click page number");
  const handleClickPrev = () => console.log("hello click prev");
  const handleClickNext = () => console.log("hello click next");
  return (
    <>
      <Pagination
        onClickPageNumber={handleClickPageNumber}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
        currentPage="1"
      />
    </>
  );
};

export default page;
