import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonSizeMap = {
  xs: 'gap-1.5 px-2.5 py-1.5 text-xs',
  sm: 'gap-1.5 px-3 py-2 text-sm',
  md: 'gap-2 px-4 py-2 text-base',
  lg: 'gap-2 px-4 py-3 text-base',
} as const;

export const buttonThemeMap = {
  primary: 'bg-brand-purple text-white hover:bg-brand-purple-hover',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  tertiary: 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'bg-transparent border border-gray-200 text-black hover:bg-gray-50',
  ghost: 'bg-transparent text-black hover:bg-gray-100',
} as const;

export const buttonActiveStyle = {
  tertiary:
    'text-brand-purple border-brand-purple-border bg-brand-purple-light hover:bg-brand-purple-light',
};
