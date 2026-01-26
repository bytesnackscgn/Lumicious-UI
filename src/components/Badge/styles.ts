import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  'l-badge inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20 text-white shadow-lg',
        solid: 'border-transparent text-white',
        outline: 'bg-transparent border',
      },
      size: {
        xs: 'text-[10px] px-1.5 py-0.5 rounded-sm',
        sm: 'text-[11px] px-2 py-0.5 rounded-md',
        md: 'text-[13px] px-2.5 py-1 rounded-lg',
        lg: 'text-[15px] px-3 py-1.5 rounded-xl',
      },
      color: {
        primary: '',
        secondary: '',
        positive: '',
        negative: '',
        info: '',
        warning: '',
        white: '',
      },
      pill: {
        true: 'rounded-full',
      },
      floating: {
        true: 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10',
      }
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-600/80',
      },
      {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-600/80',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-400 text-blue-400',
      },
       {
        variant: 'glass',
        color: 'primary',
        className: 'bg-blue-500/20 text-white',
      }
    ],
    defaultVariants: {
      variant: 'glass',
      size: 'md',
      color: 'primary',
      pill: false,
      floating: false
    },
  }
);
