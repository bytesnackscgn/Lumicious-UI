import { cva } from 'class-variance-authority';

export const rangeStyles = cva(
  'l-range relative w-full h-10 flex items-center cursor-pointer select-none',
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

export const rangeTrackStyles = 'l-range__track absolute w-full h-1 rounded-full bg-white/10 overflow-hidden';
export const rangeSelectionStyles = 'l-range__selection absolute h-full bg-blue-500 transition-all duration-100';
export const rangeThumbStyles = 'l-range__thumb absolute w-5 h-5 rounded-full bg-white border-2 border-blue-500 shadow-lg transform -translate-x-1/2 transition-transform duration-100 active:scale-125 z-10';
