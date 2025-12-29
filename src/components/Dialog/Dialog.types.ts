interface DialogBaseProps {
  trigger: React.ReactNode;
  icon: React.ReactNode;
  primaryAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
  children?: React.ReactNode;
  title: string;
  description: string;
  caption?: string;
}

export type DialogProps = DialogBaseProps;
