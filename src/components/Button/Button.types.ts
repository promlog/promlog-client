import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { IconName } from '../Icon/Icon.types';
import type { buttonSizeMap, buttonThemeMap } from './Button.styles';

export type ButtonSize = keyof typeof buttonSizeMap;
export type ButtonVariant = keyof typeof buttonThemeMap;

interface ButtonStyleVariant {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

interface ButtonBasicProps extends ComponentPropsWithRef<'button'> {
  icon?: IconName;
  children?: ReactNode;
  'aria-label'?: string;
  isActive?: boolean;
}

export type ButtonProps = ButtonStyleVariant & ButtonBasicProps;
