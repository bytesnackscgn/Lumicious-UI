export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';

export interface TextProps {
  tag?: string;
  size?: TextSize;
  weight?: TextWeight;
  gradient?: boolean;
}
