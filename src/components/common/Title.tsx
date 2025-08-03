import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Title = ({ children }: Props) => {
  return <h2 className="font-bold text-[20px]">{children}</h2>;
};
