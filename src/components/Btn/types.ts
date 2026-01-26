export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant = 'glass' | 'solid' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'secondary' | 'positive' | 'negative' | 'white';

export interface ButtonProps {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  blur?: boolean;
  flat?: boolean;
  outline?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconRight?: string;
}

export type BtnProps = ButtonProps;
