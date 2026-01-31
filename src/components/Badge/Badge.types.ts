import type { ReactNode } from 'react';
import type { badgeSizeMap, variantStyleMap } from './Badge.styles';

export type BadgeVariants = keyof typeof variantStyleMap;
export type BadgeSize = keyof typeof badgeSizeMap;

type BadgeStyleVariant = {
  size?: BadgeSize;
  variant: BadgeVariants;
};

interface BadgeBaseProps {
  children: ReactNode;
}

export type BadgeProps = BadgeBaseProps & BadgeStyleVariant;
