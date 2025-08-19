import React, { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className, ...props }: Props) => {
  return (
    <textarea
      className={twMerge("border mt-2 w-full rounded-2xl py-2 px-4 focus:outline-0", className)}
      {...props}
    />
  );
};
