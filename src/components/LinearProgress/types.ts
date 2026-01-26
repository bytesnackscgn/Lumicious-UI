export type ProgressColor = 'primary' | 'positive' | 'negative' | 'warning' | 'info' | 'white';

export interface LinearProgressProps {
  value?: number; // 0 to 1
  buffer?: number; // 0 to 1
  indeterminate?: boolean;
  query?: boolean;
  color?: ProgressColor | string;
  trackColor?: string;
  height?: string;
  rounded?: boolean;
  class?: string;
}
