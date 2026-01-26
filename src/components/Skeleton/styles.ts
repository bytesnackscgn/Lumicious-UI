import { cva } from 'class-variance-authority';

export const skeletonStyles = cva(
  'l-skeleton bg-white/5 relative overflow-hidden',
  {
    variants: {
      animation: {
        pulse: 'animate-pulse',
        wave: 'l-skeleton--wave',
        none: '',
      },
      square: {
        true: 'rounded-none',
        false: 'rounded-xl',
      },
      bordered: {
        true: 'border border-white/5',
        false: '',
      },
    },
    defaultVariants: {
      animation: 'wave',
      square: false,
      bordered: false,
    },
  }
);
