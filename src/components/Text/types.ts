export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
export type TextColor = 'white' | 'blue' | 'purple' | 'pink' | 'green' | 'yellow' | 'red' | 'indigo';
export type GradientDirection = 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';

export interface TextProps {
  tag?: string;
  size?: TextSize;
  weight?: TextWeight;
  gradient?: boolean;
  color?: TextColor;
  gradientDirection?: GradientDirection;
}
