import type { ComponentPropsWithRef } from 'react';

type ButtonStyleVariant = {
  variant?: 'solid' | 'primary';
};

interface ButtonBaseProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  children: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps & ButtonStyleVariant;
