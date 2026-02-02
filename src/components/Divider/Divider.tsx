import type { DividerProps } from './Divider.types';

const Divider = ({ orientation = 'horizontal', className = '' }: DividerProps) => {
  const baseStyle =
    orientation === 'horizontal' ? 'w-full h-px' : 'h-auto w-px min-h-[1rem] self-stretch';

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`bg-gray-100 ${baseStyle} ${className}`}
    />
  );
};

export default Divider;
