import type { ComponentPropsWithRef } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps extends ComponentPropsWithRef<'select'> {
  options: SelectOption[];
}

export type InputFieldProps = ComponentPropsWithRef<'input'>;
export type TextFieldProps = ComponentPropsWithRef<'textarea'>;
