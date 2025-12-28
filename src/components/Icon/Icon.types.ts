import type React from 'react';
import type { iconMap, sizeMap } from './iconMap';

export type IconName = keyof typeof iconMap;
export type IconSize = keyof typeof sizeMap;

interface IconBaseProps {
  name: IconName;
  size?: IconSize;
  color?: string;
}

export type IconProps = IconBaseProps & React.SVGProps<SVGSVGElement>;
