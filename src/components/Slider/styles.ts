import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  'l-slider relative w-full h-10 flex items-center cursor-pointer select-none',
  {
    variants: {
      disable: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disable: false,
    },
  }
);

export const sliderTrackStyles = 'l-slider__track absolute w-full h-1 rounded-full bg-white/10 overflow-hidden';
export const sliderSelectionStyles = 'l-slider__selection absolute h-full bg-blue-500 transition-all duration-100';
export const sliderThumbStyles = 'l-slider__thumb absolute w-5 h-5 rounded-full bg-white border-2 border-blue-500 shadow-lg transform -translate-x-1/2 transition-transform duration-100 active:scale-125';
