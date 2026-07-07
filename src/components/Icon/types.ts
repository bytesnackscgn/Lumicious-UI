export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
export type IconColor = 'white' | 'blue' | 'purple' | 'pink' | 'green' | 'yellow' | 'red' | 'indigo';

export interface IconProps {
  name: string; // Icon name from Lucide
  size?: IconSize;
  color?: IconColor;
  tag?: string;
  strokeWidth?: number;
}
