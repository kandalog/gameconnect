import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;
export const Label = ({ children, className, ...props }: Props) => {
  return (
    <label className={`block text-[#374151] text-sm${className ? ` ${className}` : ""}`} {...props}>
      {children}
    </label>
  );
};
