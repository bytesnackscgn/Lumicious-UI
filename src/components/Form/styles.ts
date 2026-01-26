import { cva } from 'class-variance-authority';

export const formStyles = cva(
  'l-form space-y-6',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/10',
        outline: 'border-2 border-white/40',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      layout: {
        vertical: 'space-y-6',
        horizontal: 'space-y-0 space-x-6',
        inline: 'space-y-0 space-x-4',
      },
    },
    defaultVariants: {
      variant: 'glass',
      size: 'md',
      layout: 'vertical',
    },
  }
);

export const formFieldStyles = cva(
  'l-form-field space-y-2',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      layout: {
        vertical: 'space-y-2',
        horizontal: 'flex items-center space-y-0 space-x-4',
        inline: 'flex items-center space-y-0 space-x-2',
      },
    },
    defaultVariants: {
      size: 'md',
      layout: 'vertical',
    },
  }
);

export const formLabelStyles = cva(
  'l-form-label font-medium text-white/90',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
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
  'l-form-error text-red-400 text-sm mt-1',
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