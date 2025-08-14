import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const FormRow = ({ children, className }: Props) => {
  return <div className={`mt-6${className ? ` ${className}` : ""}`}>{children}</div>;
};
