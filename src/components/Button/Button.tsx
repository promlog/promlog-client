import { buttonVariants } from './Button.styles';
import type { ButtonProps } from './Button.types';

// TODO: Icon component 구현 시 아래에 아이콘 추가, 접근성 속성 추가
const Button = ({
  variant = 'primary',
  children,
  ref,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      {...restProps}
      className={`inline-flex items-center px-4 py-2 text-white rounded-lg transition-all ${buttonVariants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
