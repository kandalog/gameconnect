import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const FormRow = ({ children, className }: Props) => {
  return <div className={twMerge("mt-6", className)}>{children}</div>;
};
