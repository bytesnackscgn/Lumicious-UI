export interface PaginationProps {
  modelValue: number; // Current page (1-indexed)
  max: number; // Total pages
  maxPages?: number; // Max page buttons to show
  boundaryNumbers?: boolean;
  directionLinks?: boolean;
  boundaryLinks?: boolean;
  disable?: boolean;
  input?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  class?: string;
}
