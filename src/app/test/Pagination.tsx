import React from "react";

type Props = {
  currentPage: number;
  onClickPagination: (id: number) => void;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export const Pagination = ({
  currentPage,
  onClickPagination,
  hasPrev,
  hasNext,
  totalPages,
}: Props) => {
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
      <PrevButton
        hasPrev={hasPrev}
        onClickPagination={onClickPagination}
        currentPage={currentPage}
      />
      {pageNumbers.map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          isActive={currentPage === pageNumber}
          onClickPageNumber={onClickPagination}
        />
      ))}
      <Ellipsis />
      <NextButton
        hasNext={hasNext}
        onClickPagination={onClickPagination}
        currentPage={currentPage}
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
      className={`pagination-button${className ? ` ${className}` : ""} ${isActive ? "active" : ""}`}
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
  hasPrev: boolean;
  onClickPagination: (id: number) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const PrevButton = ({
  className,
  currentPage,
  hasPrev,
  onClickPagination,
  ...props
}: PrevButtonProps) => {
  const handleClickPrev = () => {
    if (hasPrev) {
      onClickPagination(currentPage - 1);
    }
  };
  return (
    <button
      className={`prev-button${className ? ` ${className}` : ""} `}
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
  hasNext: boolean;
  onClickPagination: (id: number) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const NextButton = ({
  className,
  hasNext,
  currentPage,
  onClickPagination,
  ...props
}: NextButtonProps) => {
  const handleClickNext = () => {
    if (hasNext) {
      onClickPagination(currentPage + 1);
    }
  };
  return (
    <button
      className={`next-button${className ? ` ${className}` : ""} `}
      onClick={handleClickNext}
      {...props}
    >
      &gt;
    </button>
  );
};

// Ellipsis
const Ellipsis = () => {
  return <div className="ellipsis">...</div>;
};
