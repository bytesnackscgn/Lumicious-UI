import { cva } from 'class-variance-authority';

export const fabStyles = cva(
  'fixed z-50 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95',
  {
    variants: {
      size: {
        sm: 'w-12 h-12 text-xs',
        md: 'w-14 h-14 text-sm',
        lg: 'w-16 h-16 text-base',
      },
      variant: {
        glass: 'glass border-white/20 text-white hover:bg-white/20',
        solid: 'text-white border-transparent',
        outline: 'bg-transparent border',
      },
      color: {
        primary: '',
        secondary: '',
        positive: '',
        negative: '',
        white: '',
      },
      extended: {
        true: 'px-4 rounded-full',
        false: 'rounded-full',
      },
      mini: {
        true: 'w-10 h-10 text-xs',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-600/80 hover:bg-blue-500',
      },
      {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-600/80 hover:bg-red-500',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-400 text-blue-400 hover:bg-blue-400/10',
      }
    ],
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      color: 'primary',
      extended: false,
      mini: false,
    },
  }
);

export const fabRippleStyles = cva(
  'absolute rounded-full bg-white/30 animate-ping',
  {
    variants: {
      size: {
        sm: 'w-12 h-12',
        md: 'w-14 h-14',
        lg: 'w-16 h-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
