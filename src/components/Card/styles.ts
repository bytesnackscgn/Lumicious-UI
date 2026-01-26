import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  'l-card rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20 text-white',
        'glass-dark': 'glass-dark border-white/10 text-white',
        solid: 'bg-white/5 border-transparent text-white',
        outline: 'bg-transparent border border-white/20 text-white',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'glass',
      padding: 'md',
    },
  }
);
