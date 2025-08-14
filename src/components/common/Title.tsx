import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Title = ({ children, className }: Props) => {
  return <h2 className={`font-bold text-[20px]${className ? ` ${className}` : ""}`}>{children}</h2>;
};
