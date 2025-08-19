import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;
export const Label = ({ children, className, ...props }: Props) => {
  return (
    <label className={twMerge("block text-[#374151] text-sm", className)} {...props}>
      {children}
    </label>
  );
};
