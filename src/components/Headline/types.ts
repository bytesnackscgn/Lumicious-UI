export type HeadlineLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadlineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export interface HeadlineProps {
  level?: HeadlineLevel;
  size?: HeadlineSize;
  gradient?: boolean;
}
