import { cva } from 'class-variance-authority';

export const expansionStyles = cva(
  'l-expansion-panel w-full glass border-white/10 rounded-2xl overflow-hidden transition-all duration-300',
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

export const expansionHeaderStyles = 'l-expansion-panel__header flex items-center gap-4 px-6 py-4 cursor-pointer select-none hover:bg-white/5 transition-colors';
export const expansionContentStyles = 'l-expansion-panel__content transition-all duration-300 overflow-hidden';
export const expansionBodyStyles = 'p-6 border-t border-white/5';
