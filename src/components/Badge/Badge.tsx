import type { BadgeProps } from './Badge.types';

import { Icon } from '../Icon/Icon';
import { variantIconMap, variantStyleMap } from './Badge.styles';

const Badge = ({ variant, children }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${variantStyleMap[variant]}`}>
      <Icon name={variantIconMap[variant]} fill="#fff" />
      <span>{children}</span>
    </div>
  );
};

export default Badge;
