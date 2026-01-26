export type FormVariant = 'glass' | 'solid' | 'outline';
export type FormSize = 'sm' | 'md' | 'lg';
export type FormLayout = 'vertical' | 'horizontal' | 'inline';

export interface FormField {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  value?: any;
  error?: string;
  rules?: Array<(value: any) => true | string>;
}

export interface FormProps {
  modelValue?: Record<string, any>;
  variant?: FormVariant;
  size?: FormSize;
  layout?: FormLayout;
  loading?: boolean;
  disabled?: boolean;
  validateOnChange?: boolean;
  class?: string;
}

export interface FormEmits {
  (e: 'update:modelValue', value: Record<string, any>): void;
  (e: 'submit', data: Record<string, any>): void;
  (e: 'change', field: string, value: any): void;
  (e: 'error', field: string, error: string): void;
  (e: 'valid', field: string, isValid: boolean): void;
}

export type FormPropsType = FormProps;