export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;

export interface IconProps {
  name: string; // Icon name from Lucide
  size?: IconSize;
  color?: string;
  tag?: string;
  strokeWidth?: number;
}
