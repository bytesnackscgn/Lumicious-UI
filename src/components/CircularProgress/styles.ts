import { cva } from 'class-variance-authority';

export const circularProgressStyles = cva(
  'l-circular-progress inline-block relative transition-all duration-300',
  {
    variants: {
      indeterminate: {
        true: 'animate-spin',
        false: '',
      },
    },
    defaultVariants: {
      indeterminate: false,
    },
  }
);
