export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeVariant = 'glass' | 'solid' | 'outline';
export type BadgeColor = 'primary' | 'secondary' | 'positive' | 'negative' | 'info' | 'warning' | 'white';

export interface BadgeProps {
  label?: string | number;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: BadgeColor | string;
  floating?: boolean;
  pill?: boolean;
  outline?: boolean; // Legacy prop, ideally handled by variant
}
