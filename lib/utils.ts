import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const e2p = (s: string | number) =>
  s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

export const p2e = (s: string | number) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

export const formatPrice = (price: number | string, locale: string) => {
  const numericPrice = typeof price === 'string' ? parseInt(p2e(price).replace(/[^\d]/g, '')) : price;
  
  if (isNaN(numericPrice)) return price;

  const formatted = new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US').format(numericPrice);
  
  // If Persian, Intl.NumberFormat usually handles it, but sometimes we want to be sure
  return formatted;
};
