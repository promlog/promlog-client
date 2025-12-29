import type { HTMLAttributes } from 'react';

export interface IconLogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'md' | 'xl';
}

export type BasicLogoProps = HTMLAttributes<HTMLDivElement>;
