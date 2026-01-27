export type FabSize = 'sm' | 'md' | 'lg';
export type FabVariant = 'glass' | 'solid' | 'outline';
export type FabPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';

export interface FabProps {
  icon?: string;
  label?: string;
  size?: FabSize;
  variant?: FabVariant;
  color?: 'primary' | 'secondary' | 'positive' | 'negative' | 'white';
  position?: FabPosition;
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean;
  mini?: boolean;
  extended?: boolean;
}
