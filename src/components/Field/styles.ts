import { cva } from 'class-variance-authority';

export const fieldStyles = cva(
  'l-field flex flex-col w-full transition-all duration-300 relative',
  {
    variants: {
      error: {
        true: 'l-field--error',
        false: '',
      },
      disable: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      dense: {
        true: 'l-field--dense',
        false: '',
      }
    },
    defaultVariants: {
      error: false,
      disable: false,
      dense: false
    },
  }
);

export const fieldControlStyles = cva(
  'l-field__control relative flex items-center transition-all duration-300 min-h-[56px] px-3',
  {
    variants: {
      variant: {
        outlined: 'glass border-white/20 hover:border-white/40 focus-within:border-blue-500 rounded-xl',
        filled: 'bg-white/5 border-b border-white/20 hover:bg-white/10 focus-within:border-blue-500 rounded-t-xl',
        ghost: 'bg-transparent border-none',
      },
      error: {
        true: 'border-red-500/50 focus-within:border-red-500',
        false: '',
      },
      dense: {
        true: 'min-h-[40px]',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'outlined',
      error: false,
      dense: false
    },
  }
);
