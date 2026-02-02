import type { ComponentPropsWithRef } from 'react';

interface DividerStyleProps {
  orientation?: 'horizontal' | 'vertical';
}

interface DividerBaseProps extends ComponentPropsWithRef<'div'> {
  children?: React.ReactNode;
}

export type DividerProps = DividerBaseProps & DividerStyleProps;
