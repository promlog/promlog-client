import type { ReactNode } from 'react';

import type { IconName } from '../Icon/Icon.types';
import type { textLabelSizeMap } from './Label.styles';

type TextLabelSize = keyof typeof textLabelSizeMap;
type LabelIconName = Extract<IconName, 'view' | 'calendar' | 'copy'>;

interface TextLabelSizeProps {
  size?: TextLabelSize;
}

interface LabelBaseProps {
  children: ReactNode;
  className?: string;
}

interface TextLabelBaseProps extends LabelBaseProps {
  icon?: LabelIconName;
}

export interface InputLabelProps extends LabelBaseProps {
  htmlFor: string;
  required?: boolean;
}

export type TextLabelProps = TextLabelSizeProps & TextLabelBaseProps;
