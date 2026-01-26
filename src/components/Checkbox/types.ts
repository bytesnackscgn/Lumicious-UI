export interface CheckboxProps {
  modelValue?: boolean | any[];
  val?: any; // Value when used in array
  label?: string;
  leftLabel?: boolean;
  disable?: boolean;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  dense?: boolean;
  class?: string;
}
