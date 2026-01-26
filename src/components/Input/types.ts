import type { FieldProps } from '../Field/types';

export interface InputProps extends FieldProps {
  modelValue?: string | number | null;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
  autocomplete?: string;
  mask?: string;
  rules?: any[];
  lazyRules?: boolean | 'ondemand';
}
