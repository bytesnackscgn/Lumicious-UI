export type BannerVariant = 'glass' | 'solid' | 'outline';
export type BannerColor = 'primary' | 'positive' | 'negative' | 'warning' | 'info';

export interface BannerProps {
  label?: string;
  variant?: BannerVariant;
  color?: BannerColor;
  icon?: string;
  dense?: boolean;
  inline?: boolean;
  class?: string;
}
