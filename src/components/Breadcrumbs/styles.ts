import { cva } from 'class-variance-authority';

export const breadcrumbsStyles = cva(
  'l-breadcrumbs flex items-center gap-2 text-sm',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20 text-white/80 hover:text-white',
        solid: 'text-white',
        outline: 'text-white/60 hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'glass',
    },
  }
);