import { cva } from 'class-variance-authority';

export const ratingStyles = cva(
  'l-rating inline-flex items-center gap-1',
  {
    variants: {
      disable: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disable: false,
    },
  }
);

export const ratingIconStyles = 'l-rating__icon cursor-pointer transition-all duration-200 active:scale-125';
