import { cva } from 'class-variance-authority';

export const textStyles = cva(
  'l-text transition-all duration-300',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        black: 'font-black',
      },
      gradient: {
        true: 'bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent',
        false: 'text-white/90',
      },
    },
    defaultVariants: {
      size: 'md',
      weight: 'normal',
      gradient: false,
    },
  }
);
