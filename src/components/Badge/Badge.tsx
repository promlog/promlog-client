import type { BadgeProps } from './Badge.types';

import { Icon } from '../Icon/Icon';
import { badgeSizeMap, variantIconMap, variantStyleMap } from './Badge.styles';

const Badge = ({ size = 'md', variant, children }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center ${badgeSizeMap[size]} ${variantStyleMap[variant]}`}>
      <Icon name={variantIconMap[variant]} fill="#fff" />
      <span>{children}</span>
    </div>
  );
};

export default Badge;
