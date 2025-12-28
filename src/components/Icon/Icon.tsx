import type { IconProps } from './Icon.types';
import { iconMap, sizeMap } from './iconMap';

export const Icon = ({ name, size = 'md', color, ...rest }: IconProps) => {
  const pixelSize = sizeMap[size];
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      width={pixelSize}
      height={pixelSize}
      style={color ? { color } : undefined}
      {...rest}
    />
  );
};
