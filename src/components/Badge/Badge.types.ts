import type { ReactNode } from 'react';
import type { variantStyleMap } from './Badge.styles';

type BadgeStyleVariant = {
  variant: keyof typeof variantStyleMap;
};

interface BadgeBaseProps {
  children: ReactNode;
}

export type BadgeProps = BadgeBaseProps & BadgeStyleVariant;
