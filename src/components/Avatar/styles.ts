import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
  'l-avatar glass overflow-hidden flex items-center justify-center transition-all duration-300 relative',
  {
    variants: {
      size: {
        xs: 'w-6 h-6 text-[10px]',
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-xl',
        xl: 'w-24 h-24 text-4xl',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-xl',
      },
      bordered: {
        true: 'ring-2 ring-white/20 ring-offset-2 ring-offset-transparent',
      }
    },
    defaultVariants: {
      size: 'md',
      rounded: true,
      bordered: false
    },
  }
);
