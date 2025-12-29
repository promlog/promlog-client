import type { ReactNode } from 'react';
import type { IconName } from '../components/Icon/Icon.types';

type LabelIconName = Extract<IconName, 'view' | 'calendar'>;

interface LabelBaseProps {
  children: ReactNode;
}

export interface InputLabelProps extends LabelBaseProps {
  htmlFor: string;
}

export interface TextLabelProps extends LabelBaseProps {
  icon?: LabelIconName;
}
