import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number | null
): number | null {
  if (!discountedPrice) return null;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export { cn, calculateDiscountPercentage, formatPrice };
