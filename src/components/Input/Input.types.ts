import type { ComponentPropsWithRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export type InputFieldProps = ComponentPropsWithRef<'input'> & {
  ref?: React.Ref<HTMLInputElement>;
};

export type TextFieldProps = ComponentPropsWithRef<'textarea'> & {
  ref?: React.Ref<HTMLTextAreaElement>;
};

interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectFieldProps extends ComponentPropsWithRef<typeof SelectPrimitive.Root> {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
