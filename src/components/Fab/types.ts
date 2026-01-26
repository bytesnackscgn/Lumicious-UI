import type { ButtonProps } from '../Btn/types';

export interface FabProps extends Omit<ButtonProps, 'variant'> {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  offset?: [number, number];
  extended?: boolean;
  class?: string;
}
