import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={twMerge("border mt-2 w-full rounded-2xl py-2 px-4 focus:outline-0", className)}
      {...props}
    />
  );
};
