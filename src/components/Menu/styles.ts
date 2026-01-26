import { cva } from 'class-variance-authority';

export const menuStyles = cva(
  'l-menu glass absolute z-[2000] overflow-y-auto rounded-xl p-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200',
  {
    variants: {
      showing: {
        true: 'block',
        false: 'hidden',
      },
    },
    defaultVariants: {
      showing: false,
    },
  }
);
