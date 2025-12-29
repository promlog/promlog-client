type LabelIconName = 'view' | 'calendar';

interface LabelBaseProps {
  children: React.ReactNode;
}

export interface InputLabelProps extends LabelBaseProps {
  htmlFor: string;
}

export interface TextLabelProps extends LabelBaseProps {
  icon?: LabelIconName;
}
