import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateExpiredAt(duration: number): Date {
  const now = new Date();
  now.setMinutes(now.getMinutes() + duration);
  return now;
}
