import { cva } from 'class-variance-authority';

export const paginationStyles = cva(
  'l-pagination flex items-center justify-center gap-2',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      color: {
        primary: 'text-blue-400',
        secondary: 'text-gray-400',
        white: 'text-white',
      },
      shape: {
        rounded: 'rounded-full',
        square: 'rounded',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
      shape: 'rounded',
      disabled: false,
    },
  }
);

export const paginationButtonStyles = cva(
  'l-pagination-button flex items-center justify-center transition-all duration-200 hover:bg-white/10 active:scale-95',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
      },
      color: {
        primary: 'text-blue-400 hover:bg-blue-400/20',
        secondary: 'text-gray-400 hover:bg-gray-400/20',
        white: 'text-white hover:bg-white/20',
      },
      shape: {
        rounded: 'rounded-full',
        square: 'rounded',
      },
      active: {
        true: 'bg-blue-400/20 text-blue-400',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
      shape: 'rounded',
      active: false,
      disabled: false,
    },
  }
);

export const paginationEllipsisStyles = cva(
  'l-pagination-ellipsis flex items-center justify-center text-gray-500',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const paginationInputStyles = cva(
  'l-pagination-input bg-transparent border border-white/20 rounded px-2 py-1 text-center focus:outline-none focus:border-blue-400',
  {
    variants: {
      size: {
        sm: 'text-xs w-16',
        md: 'text-sm w-20',
        lg: 'text-base w-24',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const paginationSelectStyles = cva(
  'l-pagination-select bg-transparent border border-white/20 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400',
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
