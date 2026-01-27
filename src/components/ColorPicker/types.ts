export type ColorFormat = 'hex' | 'rgb' | 'hsl';
export type ColorSize = 'sm' | 'md' | 'lg';

export interface ColorPickerProps {
  modelValue?: string;
  format?: ColorFormat;
  size?: ColorSize;
  disabled?: boolean;
  showAlpha?: boolean;
  presetColors?: string[];
  label?: string;
}