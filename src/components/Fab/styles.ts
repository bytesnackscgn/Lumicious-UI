import { cva } from 'class-variance-authority';

export const fabStyles = cva(
  'l-fab fixed z-[1000] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95',
  {
    variants: {
      position: {
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
      },
      extended: {
        true: 'rounded-2xl px-6',
        false: 'rounded-full w-14 h-14',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
      extended: false,
    },
  }
);
