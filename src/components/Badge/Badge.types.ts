import type { variantStyleMap } from './Badge.styles';

type BadgeStyleVariant = {
  variant: keyof typeof variantStyleMap;
};

interface BadgeBaseProps {
  children: React.ReactNode;
}

export type BadgeProps = BadgeBaseProps & BadgeStyleVariant;
