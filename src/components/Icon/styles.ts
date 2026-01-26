import { cva } from 'class-variance-authority';

export const iconStyles = cva(
  'l-icon transition-colors duration-300 pointer-events-none display-inline flex items-center justify-center',
  {
    variants: {
      size: {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
