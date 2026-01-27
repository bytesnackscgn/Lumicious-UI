export type BreadcrumbSize = 'sm' | 'md' | 'lg';
export type BreadcrumbColor = 'primary' | 'secondary' | 'white';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  size?: BreadcrumbSize;
  color?: BreadcrumbColor;
  separator?: string;
  maxItems?: number;
  ellipsis?: boolean;
}