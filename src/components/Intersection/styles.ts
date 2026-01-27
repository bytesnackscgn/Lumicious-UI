import { cva } from 'class-variance-authority';

export const intersectionStyles = cva(
  'l-intersection transition-all duration-500',
  {
    variants: {
      isVisible: {
        true: 'opacity-100 translate-y-0',
        false: 'opacity-0 translate-y-4',
      },
    },
    defaultVariants: {
      isVisible: false,
    },
  }
);