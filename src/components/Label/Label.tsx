import { Icon } from '../Icon/Icon';
import { LabelCommonFontStyle } from './Label.styles';
import type { TextLabelProps, InputLabelProps } from './Label.types';

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
      {...restProps}>
      {children}
      {required && (
        <span className="text-feedback-red-500 text-sm align-top" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};

InputLabel.displayName = 'InputLabel';

export const TextLabel = ({ icon, children, className = '', ...restProps }: TextLabelProps) => {
  return (
    <div className={`flex items-center gap-1`} {...restProps}>
      {icon && <Icon name={icon} size="sm" aria-hidden="true" />}
      <span className={`text-sm ${LabelCommonFontStyle} ${className}`}>{children}</span>
    </div>
  );
};

TextLabel.displayName = 'TextLabel';
