import type { ReactNode } from 'react';
import type { IconName } from '../Icon/Icon.types';

type LabelIconName = Extract<IconName, 'view' | 'calendar' | 'copy'>;

interface LabelBaseProps {
  children: ReactNode;
  className?: string;
}

export interface InputLabelProps extends LabelBaseProps {
  htmlFor: string;
  required?: boolean;
}

export interface TextLabelProps extends LabelBaseProps {
  icon?: LabelIconName;
}
