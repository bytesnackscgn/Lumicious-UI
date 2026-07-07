import { cva } from 'class-variance-authority';

export const barStyles = cva(
  'l-bar glass border border-white/10 flex flex-col h-full z-50 transition-all duration-300 py-3 px-4',
  {
    variants: {
      fixed: {
        true: 'fixed',
        false: 'relative',
      },
      rounded: {
        true: 'rounded-lg',
        false: 'rounded-none',
      },
      dense: {
        true: 'py-2 px-3',
        false: 'py-3 px-4',
      },
    },
    defaultVariants: {
      fixed: false,
      rounded: true,
      dense: false,
    },
  }
);

export const barWrapperStyles = cva('relative p-4 flex flex-col shrink-1', {
  variants: {
    position: {
        top: 'top-0 w-full',
        bottom: 'bottom-0 w-full',
        left: 'left-0  h-full',
        right: 'right-0  h-full',
      },
    dense: {
      true: 'p-6',
      false: '',
    },
  },
  defaultVariants: {
    dense: false,
  },
});