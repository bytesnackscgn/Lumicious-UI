import { cva } from 'class-variance-authority';

export const carouselStyles = cva(
  'l-carousel relative overflow-hidden transition-all duration-500',
  {
    variants: {
      size: {
        sm: 'h-48',
        md: 'h-64',
        lg: 'h-96',
        xl: 'h-[28rem]',
      },
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/90 border-transparent',
        outline: 'bg-transparent border',
      },
      direction: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      direction: 'horizontal',
    },
  }
);

export const carouselItemStyles = cva(
  'l-carousel-item absolute inset-0 transition-transform duration-500 ease-in-out',
  {
    variants: {
      active: {
        true: 'translate-x-0 translate-y-0 opacity-100',
        false: 'translate-x-full translate-y-full opacity-0',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export const carouselControlsStyles = cva(
  'l-carousel-controls absolute flex items-center justify-center gap-2',
  {
    variants: {
      direction: {
        horizontal: 'bottom-4 left-1/2 transform -translate-x-1/2',
        vertical: 'right-4 top-1/2 transform -translate-y-1/2',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
    },
  }
);

export const carouselArrowStyles = cva(
  'l-carousel-arrow glass border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-14 h-14',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);