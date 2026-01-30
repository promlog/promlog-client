/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';
import { CommonStyle } from './Input.styles';
import type { InputFieldProps, SelectFieldProps, TextFieldProps } from './Input.types';

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ options, className, ...restProps }, ref) => {
    return (
      <select ref={ref} className={`${CommonStyle} ${className ?? ''}`} {...restProps}>
        {options.map((option) => (
          <option key={`${option.value}-${option.label}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

SelectField.displayName = 'Input.SelectField';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, ...restProps }, ref) => {
    return <input ref={ref} className={`${CommonStyle} ${className ?? ''}`} {...restProps} />;
  }
);

InputField.displayName = 'Input.InputField';

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, ...restProps }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={4}
        className={`${CommonStyle} resize-none ${className ?? ''}`}
        {...restProps}
      />
    );
  }
);

TextField.displayName = 'Input.TextField';

export const Input = {
  InputField,
  TextField,
  SelectField,
};
