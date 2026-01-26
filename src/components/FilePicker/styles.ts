import { cva } from 'class-variance-authority';

export const filePickerStyles = cva(
  'l-file-picker relative w-full',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      disabled: false,
      size: 'md',
    },
  }
);

export const fileInputStyles = cva(
  'absolute inset-0 w-full h-full opacity-0 cursor-pointer',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const fileDisplayStyles = cva(
  'glass border-white/20 rounded-lg p-4 transition-all duration-300 hover:border-white/40',
  {
    variants: {
      hasFiles: {
        true: 'border-green-400/50',
        false: '',
      },
    },
    defaultVariants: {
      hasFiles: false,
    },
  }
);

export const fileListStyles = cva(
  'mt-3 space-y-2 max-h-48 overflow-y-auto',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const fileItemStyles = cva(
  'glass border-white/20 rounded-md p-3 flex items-center justify-between',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const fileNameStyles = cva(
  'text-sm font-medium truncate',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const fileSizeStyles = cva(
  'text-xs text-white/60',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const removeButtonStyles = cva(
  'text-red-400 hover:text-red-300 transition-colors',
  {
    variants: {},
    defaultVariants: {},
  }
);