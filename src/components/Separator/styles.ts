import { cva } from 'class-variance-authority';

export const separatorStyles = cva(
  'l-separator shrink-0 transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'h-[1px] w-full',
        vertical: 'h-full w-[1px]',
      },
      color: {
        white: 'bg-white/20',
        glass: 'bg-white/10 backdrop-blur-sm',
        dark: 'bg-black/20',
      },
      inset: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        inset: true,
        className: 'mx-4 w-[calc(100%-2rem)]',
      },
      {
        orientation: 'vertical',
        inset: true,
        className: 'my-4 h-[calc(100%-2rem)]',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      color: 'white',
      inset: false,
    },
  }
);
