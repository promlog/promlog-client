import { Icon } from '../Icon/Icon';
import { LabelCommonFontStyle, textLabelSizeMap } from './Label.styles';
import type { InputLabelProps, TextLabelProps } from './Label.types';

export const InputLabel = ({
  required = false,
  children,
  htmlFor,
  className = '',
  ...restProps
}: InputLabelProps) => {
  return (
    <label
      className={`${LabelCommonFontStyle} flex items-center gap-1 text-lg ${className}`}
      htmlFor={htmlFor}
      {...restProps}
    >
      {children}
      {required && (
        <span
          className="text-feedback-red-500 text-sm align-top"
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  );
};

InputLabel.displayName = 'InputLabel';

export const TextLabel = ({
  icon,
  size = 'md',
  children,
  className = '',
  ...restProps
}: TextLabelProps) => {
  return (
    <div
      className={`flex items-center gap-1 ${LabelCommonFontStyle}`}
      {...restProps}
    >
      {icon && <Icon name={icon} size={size} aria-hidden="true" />}
      <span className={`${textLabelSizeMap[size]} ${className}`}>
        {children}
      </span>
    </div>
  );
};

TextLabel.displayName = 'TextLabel';
