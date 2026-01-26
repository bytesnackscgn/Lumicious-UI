import { cva } from 'class-variance-authority';

export const imgStyles = cva(
  'l-img transition-all duration-300',
  {
    variants: {
      size: {
        xs: 'w-16 h-16',
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        xl: 'w-64 h-64',
        full: 'w-full h-full',
      },
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/10',
        outline: 'border-2 border-white/40',
        ghost: 'bg-transparent',
      },
      fit: {
        contain: 'object-contain',
        cover: 'object-cover',
        fill: 'object-fill',
        none: 'object-none',
      },
      rounded: {
        true: 'rounded-lg',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'glass',
        rounded: true,
        className: 'rounded-xl',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      fit: 'cover',
      rounded: false,
    },
  }
);

export const imgContainerStyles = cva(
  'l-img-container relative overflow-hidden',
  {
    variants: {
      size: {
        xs: 'w-16 h-16',
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        xl: 'w-64 h-64',
        full: 'w-full h-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);