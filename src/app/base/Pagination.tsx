"use client";

import React from "react";

import styles from "@/app/stylesheets/base/pagination.module.css";

// TODO Generics型を使用してitemsを受け取る
type Props = {
  currentPage: number;
  totalPages: number;
  onClickPageNumber: (id: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onClickPageNumber }: Props) => {
  const pageNumbers = calPageNumbers(currentPage, totalPages);
  function calPageNumbers(currentPage: number, totalPages: number): number[] {
    const pageNumbers = [];
    if (currentPage === 1) {
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
    if (currentPage === totalPages) {
      for (let i = Math.max(1, totalPages - 2); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
    for (let i = currentPage - 1; i <= Math.min(currentPage + 1, totalPages); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  return (
    <div className="border text-center">
      <PrevButton onClickPagination={onClickPageNumber} currentPage={currentPage} />
      {pageNumbers.map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          isActive={currentPage === pageNumber}
          onClickPageNumber={onClickPageNumber}
        />
      ))}
      {totalPages > 3 && <Ellipsis />}
      <NextButton
        onClickPagination={onClickPageNumber}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

// Page Number Button Component
type PaginateButtonProps = {
  pageNumber: number;
  className?: string;
  isActive?: boolean;
  onClickPageNumber: (id: number) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const PaginateButton = ({
  pageNumber,
  className,
  isActive,
  onClickPageNumber,
  ...props
}: PaginateButtonProps) => {
  // ボタン押下のハンドラー
  const handleClickPageNumber = () => {
    onClickPageNumber(pageNumber);
  };
  return (
    <button
      className={`${styles["pagination-button"]}${className ? ` ${className}` : ""} ${isActive ? "active" : ""}`}
      onClick={handleClickPageNumber}
      {...props}
    >
      {pageNumber}
    </button>
  );
};

// Prev Button Component
type PrevButtonProps = {
  className?: string;
  currentPage: number;
  onClickPagination: (id: number) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const PrevButton = ({ className, currentPage, onClickPagination, ...props }: PrevButtonProps) => {
  const hasPrev = currentPage > 1;
  const handleClickPrev = () => {
    if (hasPrev) {
      onClickPagination(currentPage - 1);
    }
  };
  // if (!hasPrev) return null;
  return (
    <button
      className={`${styles["prev-button"]}${className ? ` ${className}` : ""} `}
      onClick={handleClickPrev}
      {...props}
    >
      &lt;
    </button>
  );
};

// Next Button Component
type NextButtonProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  onClickPagination: (id: number) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const NextButton = ({
  className,
  currentPage,
  totalPages,
  onClickPagination,
  ...props
}: NextButtonProps) => {
  const hasNext = currentPage < totalPages;
  const handleClickNext = () => {
    if (hasNext) {
      onClickPagination(currentPage + 1);
    }
  };
  // if (!hasNext) return null;
  return (
    <button
      className={`${styles["next-button"]}${className ? ` ${className}` : ""} `}
      onClick={handleClickNext}
      {...props}
    >
      &gt;
    </button>
  );
};

// Ellipsis
const Ellipsis = () => {
  return <div className={styles["ellipsis"]}>...</div>;
};
