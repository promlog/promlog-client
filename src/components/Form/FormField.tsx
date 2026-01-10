import { Label } from '../Label/Label';
import type { FormFieldProps } from './FormField.types';

const FormField = ({ label, htmlFor, required, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label.Input htmlFor={htmlFor} required={required}>
        {label}
      </Label.Input>
      {children}
    </div>
  );
};

export default FormField;
