import type { ComponentPropsWithRef, RefObject } from 'react';

type ButtonStyleVariant = {
  variant?: 'solid' | 'primary';
};

interface ButtonBaseProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
  ref?: RefObject<HTMLButtonElement>;
}

export type ButtonProps = ButtonBaseProps & ButtonStyleVariant;
