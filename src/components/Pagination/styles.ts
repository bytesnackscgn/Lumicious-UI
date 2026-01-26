import { cva } from 'class-variance-authority';

export const paginationStyles = cva(
  'l-pagination inline-flex items-center gap-1',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const pageButtonStyles = cva(
  'l-pagination__button flex items-center justify-center transition-all duration-200 rounded-lg font-medium cursor-pointer select-none hover:bg-white/10',
  {
    variants: {
      active: {
        true: 'glass border-blue-500/50 text-white',
        false: 'text-white/60',
      },
      size: {
        sm: 'min-w-[28px] h-7 px-2',
        md: 'min-w-[36px] h-9 px-3',
        lg: 'min-w-[44px] h-11 px-4',
      },
      disable: {
        true: 'opacity-30 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      size: 'md',
      disable: false,
    },
  }
);
