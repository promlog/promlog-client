type LabelIconName = 'view' | 'calendar';

interface LabelBaseProps {
  icon?: LabelIconName;
  children: React.ReactNode;
}

export type LabelProps = LabelBaseProps;
