export interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: string;
  class?: string;
}

export type BreadcrumbProps = BreadcrumbsProps;