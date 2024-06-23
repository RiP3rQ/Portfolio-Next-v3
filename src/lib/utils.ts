import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomHexColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomGradientColor(opacity: number = 1): string {
  // Ensure the opacity is between 0 and 1
  if (opacity < 0) {
    opacity = 0;
  } else if (opacity > 1) {
    opacity = 1;
  }

  // Generate random values for r, g, and b
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgba(${r},${g},${b},${opacity})`;
}
