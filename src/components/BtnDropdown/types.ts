import type { BtnProps } from '../Btn/types';

export interface BtnDropdownProps extends BtnProps {
  modelValue?: boolean;
  contentClass?: string;
  persistent?: boolean;
  autoClose?: boolean;
  menuAnchor?: any;
  menuSelf?: any;
  hideIcon?: boolean;
  class?: string;
}
