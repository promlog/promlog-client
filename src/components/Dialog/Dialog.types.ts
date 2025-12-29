import type { ReactNode } from 'react';

interface DialogBaseProps {
  trigger: ReactNode;
  icon: ReactNode;
  primaryAction: ReactNode;
  title: string;
  description: string;
  caption?: string;
  children?: ReactNode;
  secondaryAction?: ReactNode;
}

export type DialogProps = DialogBaseProps;
