import { cva } from 'class-variance-authority';

export const parallaxStyles = cva(
  'l-parallax relative overflow-hidden',
  {
    variants: {
      direction: {
        up: '',
        down: '',
        left: '',
        right: '',
      },
      disabled: {
        true: 'pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      direction: 'up',
      disabled: false,
    },
  }
);