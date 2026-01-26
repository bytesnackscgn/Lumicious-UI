import { cva } from 'class-variance-authority';

export const btnGroupStyles = cva(
  'l-btn-group inline-flex transition-all duration-300 overflow-hidden',
  {
    variants: {
      spread: {
        true: 'w-full flex',
        false: '',
      },
      outline: {
        true: 'border border-white/20',
        false: '',
      },
      rounded: {
        true: 'rounded-2xl',
        false: 'rounded-xl',
      },
    },
    defaultVariants: {
      spread: false,
      outline: false,
      rounded: false,
    },
  }
);
