export type FormSize = 'sm' | 'md' | 'lg';
export type FormLayout = 'vertical' | 'horizontal' | 'inline';
export type FormVariant = 'glass' | 'solid' | 'outline';
export type FormValidationMode = 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched';

export interface FormProps {
  modelValue?: Record<string, any>;
  size?: FormSize;
  layout?: FormLayout;
  variant?: FormVariant;
  disabled?: boolean;
  readonly?: boolean;
  validateOn?: FormValidationMode;
  labelPosition?: 'top' | 'left' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  showErrors?: boolean;
  loading?: boolean;
  submitText?: string;
  cancelText?: string;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface FormField {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  rules?: any[];
  error?: string;
  value?: any;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isDirty: boolean;
}

export type FormProps = FormProps;