export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps {
  orientation?: SeparatorOrientation;
  inset?: boolean;
  color?: 'white' | 'glass' | 'dark';
}
