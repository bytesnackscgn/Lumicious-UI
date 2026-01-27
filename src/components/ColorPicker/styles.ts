import { cva } from 'class-variance-authority';

export const colorPickerStyles = cva(
  'glass border-white/20 rounded-xl overflow-hidden transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

export const colorSwatchStyles = cva(
  'w-8 h-8 rounded-lg border-2 border-white/20 transition-all duration-200 hover:scale-110',
  {
    variants: {
      selected: {
        true: 'ring-2 ring-white ring-offset-2 ring-offset-transparent',
        false: '',
      },
    },
  }
);

export const colorInputStyles = cva(
  'glass border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50',
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