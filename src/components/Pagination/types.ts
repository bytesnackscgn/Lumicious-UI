export type PaginationSize = 'sm' | 'md' | 'lg';
export type PaginationColor = 'primary' | 'secondary' | 'white';
export type PaginationShape = 'rounded' | 'square';

export interface PaginationProps {
  total: number;
  current: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  size?: PaginationSize;
  color?: PaginationColor;
  shape?: PaginationShape;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  ellipsis?: boolean;
}
