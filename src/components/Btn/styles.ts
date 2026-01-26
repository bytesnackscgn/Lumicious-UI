import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'l-btn relative overflow-hidden transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-medium select-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20 text-white hover:bg-white/20',
        solid: 'text-white border-transparent',
        outline: 'bg-transparent border',
        ghost: 'bg-transparent border-transparent hover:bg-white/10',
      },
      size: {
        sm: 'text-xs px-3 py-1.5 rounded-lg',
        md: 'text-sm px-6 py-2 rounded-xl',
        lg: 'text-base px-8 py-3 rounded-2xl',
        xl: 'text-lg px-10 py-4 rounded-[1.25rem]',
      },
      color: {
        primary: '',
        secondary: '',
        positive: '',
        negative: '',
        white: '',
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
      variant: 'glass',
      size: 'md',
      color: 'primary',
    },
  }
);
