import { Icon } from '../Icon/Icon';
import { badgeSizeMap, variantIconMap, variantStyleMap } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

export const Badge = ({ size = 'md', variant, children }: BadgeProps) => {
  const containerStyle = `${badgeSizeMap[size]} ${variantStyleMap[variant]}`;
  const iconName = variantIconMap[variant];

  return (
    <div
      className={`inline-flex items-center rounded-lg font-medium ${containerStyle}`}
    >
      {iconName && <Icon name={iconName} size={size} />}
      <span>{children}</span>
    </div>
  );
};
