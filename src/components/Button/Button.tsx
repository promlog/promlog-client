import { Icon } from '../Icon/Icon';
import {
  buttonActiveStyle,
  buttonSizeMap,
  buttonThemeMap,
  cn,
} from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button = ({
  type = 'button',
  size = 'md',
  variant = 'primary',
  className,
  icon,
  children,
  ref,
  isActive = false,
  ...restProps
}: ButtonProps) => {
  const hasChildren =
    children !== null && children !== undefined && children !== '';
  const isIconOnly = icon && !hasChildren;

  const activeStyle =
    isActive && variant === 'tertiary' ? buttonActiveStyle[variant] : '';

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        isIconOnly ? undefined : buttonSizeMap[size],
        buttonThemeMap[variant],
        activeStyle,
        className,
      )}
      {...restProps}
    >
      {icon && (
        <Icon
          name={icon}
          size={size}
          aria-hidden="true"
          fill={activeStyle ? 'currentColor' : 'none'}
        />
      )}
      {!isIconOnly && <span>{children}</span>}
    </button>
  );
};

export default Button;
