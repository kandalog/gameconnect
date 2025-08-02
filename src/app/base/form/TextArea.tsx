import React, { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export const TextArea = ({ className, ...props }: Props) => {
  return (
    <textarea
      className={`border mt-2 w-full rounded-2xl py-2 px-4 focus:outline-0${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
};
