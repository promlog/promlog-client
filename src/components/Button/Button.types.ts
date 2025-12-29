import type { ReactNode, ComponentPropsWithRef } from 'react';
import type { IconName, IconSize } from '../Icon/Icon.types';

type ButtonStyleVariant = {
  iconSize?: IconSize;
  variant?: 'solid' | 'primary';
};

interface ButtonBaseProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  icon?: IconName;
  children: ReactNode;
}

export type ButtonProps = ButtonBaseProps & ButtonStyleVariant;
