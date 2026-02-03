import type { ReactNode } from 'react';

interface DialogBaseProps {
  trigger?: ReactNode;
  icon: ReactNode;
  primaryAction: ReactNode;
  title: string;
  description: string;
  caption?: string;
  children?: ReactNode;
  secondaryAction?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type DialogProps = DialogBaseProps;
