import type { ReactNode } from 'react';
import type { variantStyleMap } from './Badge.styles';

export type BadgeVariants = keyof typeof variantStyleMap;

type BadgeStyleVariant = {
  size?: 'sm' | 'md';
  variant: BadgeVariants;
};

interface BadgeBaseProps {
  children: ReactNode;
}

export type BadgeProps = BadgeBaseProps & BadgeStyleVariant;
