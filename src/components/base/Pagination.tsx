import React from "react";
import Link from "next/link";

import styles from "@/app/stylesheets/base/pagination.module.css";

type Props = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: Props) => {
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
      <PrevButton currentPage={currentPage} />
      {pageNumbers.map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          isActive={currentPage === pageNumber}
        />
      ))}
      {totalPages > 3 && <Ellipsis />}
      <NextButton currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

// Page Number Link Component
type PaginateButtonProps = {
  pageNumber: number;
  className?: string;
  isActive?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;
const PaginateButton = ({ pageNumber, className, isActive, ...props }: PaginateButtonProps) => {
  return (
    <Link
      href={`?page=${pageNumber}`}
      className={`${styles["pagination-button"]}${className ? ` ${className}` : ""} ${isActive ? "active" : ""}`}
      {...props}
    >
      {pageNumber}
    </Link>
  );
};

// Prev Link Component
type PrevButtonProps = {
  className?: string;
  currentPage: number;
} & React.HTMLAttributes<HTMLAnchorElement>;
const PrevButton = ({ className, currentPage, ...props }: PrevButtonProps) => {
  // const hasPrev = currentPage > 1;
  // if (!hasPrev) return null;
  const pageNumber = currentPage > 1 ? currentPage - 1 : currentPage;
  return (
    <Link
      href={`?page=${pageNumber}`}
      className={`${styles["prev-button"]}${className ? ` ${className}` : ""} `}
      {...props}
    >
      &lt;
    </Link>
  );
};

// Next Link Component
type NextButtonProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
} & React.HTMLAttributes<HTMLAnchorElement>;
const NextButton = ({ className, currentPage, totalPages, ...props }: NextButtonProps) => {
  // const hasNext = currentPage < totalPages;
  // if (!hasNext) return null;
  const pageNumber = currentPage < totalPages ? currentPage + 1 : currentPage;
  return (
    <Link
      href={`?page=${pageNumber}`}
      className={`${styles["next-button"]}${className ? ` ${className}` : ""} `}
      {...props}
    >
      &gt;
    </Link>
  );
};

// Ellipsis
const Ellipsis = () => {
  return <div className={styles["ellipsis"]}>...</div>;
};
