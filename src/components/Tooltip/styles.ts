import { cva } from 'class-variance-authority';

export const tooltipStyles = cva(
  'l-tooltip glass-dark absolute z-[5000] px-2 py-1 rounded-md text-[10px] font-bold text-white whitespace-nowrap pointer-events-none shadow-xl border border-white/10',
  {
    variants: {
      showing: {
        true: 'animate-in fade-in zoom-in-95 duration-200',
        false: 'hidden',
      },
    },
    defaultVariants: {
      showing: false,
    },
  }
);
