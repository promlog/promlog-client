import type { iconMap, sizeMap } from './iconMap';

type IconName = keyof typeof iconMap;
type IconSize = keyof typeof sizeMap;

interface IconBaseProps {
  name: IconName;
  size?: IconSize;
  color?: string;
}

export type IconProps = IconBaseProps & React.SVGProps<SVGSVGElement>;
