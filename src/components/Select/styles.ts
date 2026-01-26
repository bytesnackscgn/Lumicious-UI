import { cva } from 'class-variance-authority';

export const selectStyles = cva(
  'l-select relative cursor-pointer outline-none select-none',
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

export const selectMenuStyles = cva(
  'l-select__menu glass absolute z-[1000] mt-2 w-full max-h-[300px] overflow-y-auto rounded-xl p-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200',
  {
    variants: {
        showing: {
            true: 'block',
            false: 'hidden'
        }
    },
    defaultVariants: {
        showing: false
    }
  }
);
