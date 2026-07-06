import { cva } from 'class-variance-authority';

export const dialogBackdropStyles = cva(
  'l-dialog__backdrop fixed inset-0 z-[3000] flex transition-all duration-300 backdrop-blur-md bg-black/40',
  {
    variants: {
      position: {
        center: 'items-center justify-center p-4',
        top: 'items-start justify-center p-4',
        bottom: 'items-end justify-center p-4 pt-20',
        left: 'items-center justify-start p-4 pr-20',
        right: 'items-center justify-end p-4 pl-20',
      },
      fullHeight: {
        true: 'items-stretch justify-start',
        false: '',
      },
    },
    defaultVariants: {
      position: 'center',
      fullHeight: false,
    },
  }
);

export const dialogContentStyles = cva(
  'l-dialog__content glass border-white/10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      fullHeight: {
        true: 'h-full',
        false: '',
      }
    },
    defaultVariants: {
      fullWidth: false,
      fullHeight: false
    }
  }
);
