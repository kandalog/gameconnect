import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  message: string | undefined;
  className?: string;
}

export const FormErrorMessage = ({ message, className }: Props) => {
  if (!message) return null;
  return <div className={cn("text-red-500 text-sm mt-1", className)}>{message}</div>;
};
