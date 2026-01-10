import { Icon } from '../Icon/Icon';
import { LabelCommonFontStyle } from './Label.styles';
import type { TextLabelProps, InputLabelProps } from './Label.types';

const InputLabel = ({ required = false, children, htmlFor, ...restProps }: InputLabelProps) => {
  return (
    <label
      className={`${LabelCommonFontStyle} flex items-center gap-1 text-lg`}
      htmlFor={htmlFor}
      {...restProps}>
      {children}
      {required && <span className="text-feedback-red-500 text-sm">*</span>}
    </label>
  );
};

InputLabel.displayName = 'Label.Input';

const TextLabel = ({ icon, children, ...restProps }: TextLabelProps) => {
  return (
    <div className="flex items-center gap-1" {...restProps}>
      {icon && <Icon name={icon} fill="#fff" size="sm" aria-hidden />}
      <span className={`${LabelCommonFontStyle} text-sm`}>{children}</span>
    </div>
  );
};

TextLabel.displayName = 'Label.Text';

export const Label = {
  Input: InputLabel,
  Text: TextLabel,
};
