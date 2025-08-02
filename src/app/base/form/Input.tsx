import React from "react";

type Props = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={`border mt-2 w-full rounded-2xl py-2 px-4 focus:outline-0${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
};
