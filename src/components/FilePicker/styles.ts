import { cva } from 'class-variance-authority';

export const filePickerStyles = cva(
  'glass border-white/20 rounded-xl overflow-hidden transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
      variant: {
        glass: 'bg-white/10 backdrop-blur-lg',
        solid: 'bg-white/90 text-gray-900',
        outline: 'bg-transparent',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      disabled: false,
    },
  }
);

export const fileDropZoneStyles = cva(
  'border-2 border-dashed border-white/30 rounded-lg p-8 text-center transition-all duration-300',
  {
    variants: {
      isDragOver: {
        true: 'border-white/60 bg-white/10',
        false: '',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      isDragOver: false,
      size: 'md',
    },
  }
);

export const fileItemStyles = cva(
  'glass border-white/20 rounded-lg p-3 flex items-center gap-3 transition-all duration-200 hover:bg-white/10',
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

export const fileButtonStyles = cva(
  'glass border-white/20 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 active:scale-95',
  {
    variants: {
      size: {
        sm: 'text-xs px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-6 py-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);