import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Card = ({ children, className }: Props) => {
  return (
    <div className={`border border-[#E5E7EB] rounded-2xl p-6 ${className ? `${className}` : ""}`}>
      {children}
    </div>
  );
};
