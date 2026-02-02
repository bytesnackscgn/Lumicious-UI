import type { FieldProps } from '../Field/types';

export interface NumberInputProps extends FieldProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  layout?: 'left' | 'right' | 'split';
  placeholder?: string;
  type?: string; // Adding type just in case, though usually 'number'
}
