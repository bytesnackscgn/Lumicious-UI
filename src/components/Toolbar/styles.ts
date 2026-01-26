import { cva } from 'class-variance-authority';

export const toolbarStyles = cva(
  'l-toolbar relative flex items-center gap-4 transition-all duration-300 min-h-[50px]',
  {
    variants: {
      inset: {
        true: 'px-8',
        false: 'px-4',
      },
      border: {
        true: 'border-b border-white/10',
        false: '',
      },
    },
    defaultVariants: {
      inset: false,
      border: false,
    },
  }
);
