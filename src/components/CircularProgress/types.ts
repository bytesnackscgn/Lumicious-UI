export type CircularProgressSize = string | number;

export interface CircularProgressProps {
  value?: number; // 0 to 100
  size?: CircularProgressSize;
  thickness?: number;
  indeterminate?: boolean;
  color?: string;
  trackColor?: string;
  instantFeedback?: boolean;
  class?: string;
}
