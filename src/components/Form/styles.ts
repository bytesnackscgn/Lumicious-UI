import { cva } from 'class-variance-authority';

export const formStyles = cva(
  'glass border-white/20 rounded-xl p-6 transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      variant: {
        glass: 'bg-white/10 backdrop-blur-lg',
        solid: 'bg-white/90 text-gray-900',
        outline: 'bg-transparent',
      },
      layout: {
        vertical: 'flex flex-col space-y-6',
        horizontal: 'flex flex-row flex-wrap items-center gap-6',
        inline: 'flex flex-row flex-wrap items-center gap-4',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      layout: 'vertical',
      disabled: false,
    },
  }
);

export const formFieldStyles = cva(
  'flex gap-4 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      labelPosition: {
        top: 'flex-col',
        left: 'flex-row items-start',
        right: 'flex-row items-start flex-row-reverse',
      },
      spacing: {
        sm: 'space-y-2',
        md: 'space-y-4',
        lg: 'space-y-6',
      },
    },
    defaultVariants: {
      size: 'md',
      labelPosition: 'top',
      spacing: 'md',
    },
  }
);

export const formLabelStyles = cva(
  'font-medium text-white/90 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      required: {
        true: 'after:content-[\'*\'] after:ml-1 after:text-red-400',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      required: false,
    },
  }
);

export const formErrorStyles = cva(
  'text-sm text-red-400 mt-1 transition-all duration-200',
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

export const formButtonStyles = cva(
  'glass border-white/20 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 active:scale-95',
  {
    variants: {
      size: {
        sm: 'text-xs px-4 py-1.5',
        md: 'text-sm px-6 py-2',
        lg: 'text-base px-8 py-3',
      },
      variant: {
        primary: 'bg-blue-600/80 hover:bg-blue-500',
        secondary: 'bg-gray-600/80 hover:bg-gray-500',
        success: 'bg-green-600/80 hover:bg-green-500',
        danger: 'bg-red-600/80 hover:bg-red-500',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  }
);