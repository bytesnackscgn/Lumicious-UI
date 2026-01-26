import { cva } from 'class-variance-authority';

export const innerLoadingStyles = cva(
  'l-inner-loading absolute inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-md bg-black/10',
  {
    variants: {
      showing: {
        true: 'opacity-100 visible',
        false: 'opacity-0 invisible pointer-events-none',
      },
    },
    defaultVariants: {
      showing: false,
    },
  }
);
