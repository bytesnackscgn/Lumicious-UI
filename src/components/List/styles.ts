import { cva } from 'class-variance-authority';

export const listStyles = cva(
  'l-list flex flex-col w-full transition-all duration-300',
  {
    variants: {
      bordered: {
        true: 'glass border-white/10 rounded-2xl overflow-hidden',
        false: '',
      },
      padding: {
        true: 'py-2',
        false: '',
      },
    },
    defaultVariants: {
      bordered: false,
      padding: false,
    },
  }
);

export const itemStyles = cva(
  'l-item flex items-center gap-4 transition-all duration-300 relative select-none',
  {
    variants: {
      clickable: {
        true: 'cursor-pointer hover:bg-white/5 active:bg-white/10',
        false: '',
      },
      dense: {
        true: 'px-4 py-1.5 min-h-[40px]',
        false: 'px-4 py-3 min-h-[56px]',
      },
      active: {
        true: 'bg-white/10 text-white font-medium before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-blue-500 before:rounded-r-full',
        false: 'text-white/80',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      clickable: false,
      dense: false,
      active: false,
      disabled: false,
    },
  }
);

export const itemSectionStyles = cva(
  'l-item-section flex flex-col justify-center shrink-0',
  {
    variants: {
      side: {
        true: 'text-white/40 min-w-[40px]',
        false: 'flex-grow min-w-0',
      },
      top: {
        true: 'self-start pt-1',
        false: '',
      },
      avatar: {
        true: 'min-w-[56px]',
        false: '',
      },
    },
    defaultVariants: {
      side: false,
      top: false,
      avatar: false,
    },
  }
);
