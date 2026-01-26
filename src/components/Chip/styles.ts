import { cva } from 'class-variance-authority';

export const chipStyles = cva(
  'l-chip inline-flex items-center gap-1.5 font-medium transition-all duration-300 rounded-full select-none cursor-default',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20 text-white',
        solid: 'text-white border-transparent bg-white/10',
        outline: 'bg-transparent border border-white/20 text-white',
      },
      size: {
        sm: 'text-[11px] px-2 py-0.5',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'glass',
      size: 'md',
    },
  }
);
