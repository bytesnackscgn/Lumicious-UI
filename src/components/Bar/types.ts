export type BarPosition = 'top' | 'bottom';

export interface BarProps {
  position?: BarPosition;
  fixed?: boolean;
  blur?: boolean;
  class?: string;
}
