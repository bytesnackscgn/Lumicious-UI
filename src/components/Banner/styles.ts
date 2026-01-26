import { cva } from 'class-variance-authority';

export const bannerStyles = cva(
  'l-banner flex items-center gap-4 transition-all duration-300 rounded-2xl w-full',
  {
    variants: {
      variant: {
        glass: 'glass border-white/10 text-white',
        solid: 'border-transparent text-white',
        outline: 'bg-transparent border border-white/20 text-white',
      },
      color: {
        primary: '',
        positive: '',
        negative: '',
        warning: '',
        info: '',
      },
      dense: {
        true: 'p-3',
        false: 'p-4',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-600/20 glass',
      },
       {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-600/20 glass border-red-500/30',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-amber-600/20 glass border-amber-500/30',
      }
    ],
    defaultVariants: {
      variant: 'glass',
      color: 'primary',
      dense: false,
    },
  }
);
