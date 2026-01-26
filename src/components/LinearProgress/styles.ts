import { cva } from 'class-variance-authority';

export const linearProgressStyles = cva(
  'l-linear-progress relative overflow-hidden transition-all duration-300 w-full',
  {
    variants: {
      rounded: {
        true: 'rounded-full',
        false: 'rounded-none',
      },
    },
    defaultVariants: {
      rounded: true,
    },
  }
);
