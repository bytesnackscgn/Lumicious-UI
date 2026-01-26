import { cva } from 'class-variance-authority';

export const checkboxStyles = cva(
  'l-checkbox inline-flex items-center cursor-pointer select-none transition-all duration-300',
  {
    variants: {
      disable: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      dense: {
        true: 'gap-2',
        false: 'gap-3',
      },
    },
    defaultVariants: {
      disable: false,
      dense: false,
    },
  }
);

export const checkboxBoxStyles = cva(
  'l-checkbox__inner relative flex items-center justify-center border-2 transition-all duration-300 rounded-md',
  {
    variants: {
      checked: {
        true: 'bg-blue-500 border-blue-500',
        false: 'bg-white/5 border-white/20',
      },
      size: {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8',
      },
    },
    defaultVariants: {
      checked: false,
      size: 'md',
    },
  }
);
