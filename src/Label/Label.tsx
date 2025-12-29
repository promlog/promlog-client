import { Icon } from '../components/Icon/Icon';
import type { LabelProps } from './Label.types';

const Label = ({ icon, children }: LabelProps) => {
  return (
    <div className="flex items-center gap-1">
      {icon && <Icon name={icon} fill="#fff" size="sm" />}
      {children}
    </div>
  );
};

export default Label;
