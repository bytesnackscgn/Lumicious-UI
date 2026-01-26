import { cva } from 'class-variance-authority';

export const barStyles = cva(
  'l-bar glass-dark w-full z-50 flex flex-col',
  {
    variants: {
      position: {
        top: 'top-0 border-b border-white/10',
        bottom: 'bottom-0 border-t border-white/10',
      },
      fixed: {
        true: 'fixed',
        false: 'relative',
      },
    },
    defaultVariants: {
      position: 'top',
      fixed: false,
    },
  }
);
