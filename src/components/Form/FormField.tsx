import { InputLabel } from '@/components';

import type { FormFieldProps } from './FormField.types';

export const FormField = ({
  label,
  htmlFor,
  required,
  children,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <InputLabel htmlFor={htmlFor} required={required}>
        {label}
      </InputLabel>
      {children}
    </div>
  );
};
