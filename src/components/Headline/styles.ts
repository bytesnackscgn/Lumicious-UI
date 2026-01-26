import { cva } from 'class-variance-authority';

export const headlineStyles = cva(
  'l-headline font-black tracking-tight transition-all duration-300',
  {
    variants: {
      size: {
        xs: 'text-sm',
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
        '3xl': 'text-4xl',
        '4xl': 'text-5xl',
        '5xl': 'text-6xl',
        '6xl': 'text-7xl',
      },
      gradient: {
        true: 'bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent',
        false: 'text-white',
      },
    },
    defaultVariants: {
      size: '3xl',
      gradient: false,
    },
  }
);
