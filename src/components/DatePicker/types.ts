export type DatePickerSize = 'sm' | 'md' | 'lg';
export type DatePickerVariant = 'glass' | 'solid' | 'outline';
export type DatePickerMode = 'single' | 'range' | 'multiple';

export interface DatePickerProps {
  modelValue?: Date | Date[] | { start: Date; end: Date };
  size?: DatePickerSize;
  variant?: DatePickerVariant;
  mode?: DatePickerMode;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  format?: string;
  locale?: string;
  startView?: 'day' | 'month' | 'year';
  minDate?: Date;
  maxDate?: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showTimePicker?: boolean;
  timeFormat?: '12h' | '24h';
}