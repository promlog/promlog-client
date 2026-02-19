/* eslint-disable react-refresh/only-export-components */
import { type ComponentPropsWithRef } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { Icon } from '../Icon/Icon';
import { CommonStyle } from './Input.styles';
import type {
  InputFieldProps,
  SelectFieldProps,
  TextFieldProps,
} from './Input.types';

const SelectItem = ({
  children,
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm text-sm outline-none px-4 py-2 text-left justify-between transition-colors focus:bg-brand-purple-light focus:text-brand-purple data-[state=checked]:bg-brand-purple-light data-[state=checked]:text-brand-purple data-disabled:pointer-events-none data-disabled:opacity-50
      ${className ?? ''}
    `}
      {...props}
    >
      <span className="absolute right-3">
        <SelectPrimitive.ItemIndicator>
          <Icon name="check" size="sm" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

SelectItem.displayName = 'Input.SelectItem';

const SelectField = ({
  options,
  placeholder,
  className,
  defaultValue,
  ref,
  ...props
}: SelectFieldProps) => {
  return (
    <SelectPrimitive.Root defaultValue={defaultValue} {...props}>
      <SelectPrimitive.Trigger
        ref={ref}
        className={`flex items-center justify-between gap-2 py-2 outline-none focus-visible:border-brand-purple-500 data-placeholder:text-gray-400 data-[state=open]:border-brand-purple-300 data-[state=open]:bg-brand-purple-light text-[0.9625rem] ${CommonStyle} ${
          className ?? ''
        }`}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <Icon name="chevronDown" size="xs" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="relative overflow-hidden text-gray-900 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-50 py-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          position="popper"
          sideOffset={4}
        >
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

SelectField.displayName = 'Input.SelectField';

const InputField = ({ className, ref, ...restProps }: InputFieldProps) => {
  return (
    <input
      ref={ref}
      className={`py-3 ${CommonStyle} ${className ?? ''}`}
      {...restProps}
    />
  );
};

InputField.displayName = 'Input.InputField';

const TextField = ({ className, ref, ...restProps }: TextFieldProps) => {
  return (
    <textarea
      ref={ref}
      rows={4}
      className={`py-3 ${CommonStyle} resize-none ${className ?? ''}`}
      {...restProps}
    />
  );
};

TextField.displayName = 'Input.TextField';

export const Input = {
  InputField,
  TextField,
  SelectField,
};
