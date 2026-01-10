import { CommonStyle } from './Input.styles';
import type { InputFieldProps, SelectFieldProps, TextFieldProps } from './Input.types';

const SelectField = ({ options, className }: SelectFieldProps) => {
  return (
    <select className={`${CommonStyle} ${className ?? ''}`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectField.displayName = 'Input.SelectField';

const InputField = ({ className, ...restProps }: InputFieldProps) => {
  return <input className={`${CommonStyle} ${className ?? ''}`} {...restProps} />;
};

InputField.displayName = 'Input.InputField';

const TextField = ({ className, ...restProps }: TextFieldProps) => {
  return (
    <textarea rows={4} className={`${CommonStyle} resize-none ${className ?? ''}`} {...restProps} />
  );
};

TextField.displayName = 'Input.TextField';

export const Input = {
  InputField,
  TextField,
  SelectField,
};
