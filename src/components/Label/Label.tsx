import { Icon } from '../Icon/Icon';
import { LabelCommonFontStyle } from './Label.styles';
import type { TextLabelProps, InputLabelProps } from './Label.types';

const InputLabel = ({ children, htmlFor, ...restProps }: InputLabelProps) => {
  return (
    <label className={LabelCommonFontStyle} htmlFor={htmlFor} {...restProps}>
      {children}
    </label>
  );
};

InputLabel.displayName = 'Label.Input';

const TextLabel = ({ icon, children, ...restProps }: TextLabelProps) => {
  return (
    <div className="flex items-center gap-1" {...restProps}>
      {icon && <Icon name={icon} fill="#fff" size="sm" aria-hidden />}
      <span className={LabelCommonFontStyle}>{children}</span>
    </div>
  );
};

TextLabel.displayName = 'Label.Text';

export const Label = {
  Input: InputLabel,
  Text: TextLabel,
};
