import type { GradientDirection } from "@/utils/ui/gradient/types";

export type HeadlineLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadlineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type HeadlineColor = 'white' | 'blue' | 'purple' | 'pink' | 'green' | 'yellow' | 'red' | 'indigo';

export interface HeadlineProps {
  level?: HeadlineLevel;
  size?: HeadlineSize;
  gradient?: boolean;
  color?: HeadlineColor;
  gradientDirection?: GradientDirection;
}
