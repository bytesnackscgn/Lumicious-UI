export interface OptionGroupItem {
  label: string;
  value: any;
  disable?: boolean;
}

export interface OptionGroupProps {
  modelValue: any;
  options: OptionGroupItem[];
  type?: 'radio' | 'checkbox' | 'toggle';
  inline?: boolean;
  dense?: boolean;
  disable?: boolean;
  leftLabel?: boolean;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  class?: string;
}
