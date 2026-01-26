export interface SliderProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: boolean;
  labelValue?: string | number;
  disable?: boolean;
  readonly?: boolean;
  color?: string;
  class?: string;
}
