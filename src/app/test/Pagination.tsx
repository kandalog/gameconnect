import React from "react";

type Props = {
  currentPage: string;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPageNumber: (id: string) => void;
  // TODO 以下を使って表示するべきページ数を計算する
  // perPage: number;
  // totalPages number;
};

export const Pagination = ({ currentPage, onClickPrev, onClickNext, onClickPageNumber }: Props) => {
  return (
    <div className="border text-center">
      <PrevButton onClickPrev={onClickPrev} />
      <PaginateButton
        pageNumber="1"
        isActive={currentPage === "1"}
        onClickPageNumber={onClickPageNumber}
      />
      <PaginateButton
        pageNumber="2"
        isActive={currentPage === "2"}
        onClickPageNumber={onClickPageNumber}
      />
      <PaginateButton
        pageNumber="3"
        isActive={currentPage === "3"}
        onClickPageNumber={onClickPageNumber}
      />
      <Ellipsis />
      <PaginateButton
        pageNumber="10"
        isActive={currentPage === "10"}
        onClickPageNumber={onClickPageNumber}
      />
      <NextButton onClickNext={onClickNext} />
    </div>
  );
};

// Page Number Button Component
type PaginateButtonProps = {
  pageNumber: string;
  className?: string;
  isActive?: boolean;
  onClickPageNumber: (id: string) => void;
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
      {...props}
      onClick={handleClickPageNumber}
    >
      {pageNumber}
    </button>
  );
};

// Prev Button Component
type PrevButtonProps = {
  className?: string;
  onClickPrev: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const PrevButton = ({ className, onClickPrev, ...props }: PrevButtonProps) => {
  return (
    <button
      className={`prev-button${className ? ` ${className}` : ""} `}
      {...props}
      onClick={onClickPrev}
    >
      &lt;
    </button>
  );
};

// Next Button Component
type NextButtonProps = {
  className?: string;
  onClickNext: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;
const NextButton = ({ className, onClickNext, ...props }: NextButtonProps) => {
  return (
    <button
      className={`next-button${className ? ` ${className}` : ""} `}
      {...props}
      onClick={onClickNext}
    >
      &gt;
    </button>
  );
};

// Ellipsis
const Ellipsis = () => {
  return <div className="ellipsis">...</div>;
};
