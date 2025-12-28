import { Icon } from '../Icon/Icon';
import { buttonVariants } from './Button.styles';
import type { ButtonProps } from './Button.types';

// TODO: 접근성 속성 추가
const Button = ({
  variant = 'primary',
  children,
  className,
  icon,
  iconSize,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex gap-2 items-center justify-center px-4 py-2 text-white rounded-lg transition-all ${
        buttonVariants[variant]
      } ${className ?? ''}`}
      {...restProps}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
    </button>
  );
};

export default Button;
