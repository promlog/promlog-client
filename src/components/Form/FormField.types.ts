import type { ReactNode } from 'react';
import type { InputLabelProps } from '../Label/Label.types';

interface FormFieldBaseProps {
  label: string;
  children: ReactNode;
  required?: boolean;
}

export type FormFieldProps = FormFieldBaseProps & Pick<InputLabelProps, 'htmlFor'>;
