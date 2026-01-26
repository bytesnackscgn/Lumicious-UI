import { cva } from 'class-variance-authority';

export const tabsStyles = cva(
  'l-tabs flex transition-all duration-300 relative',
  {
    variants: {
      vertical: {
        true: 'flex-col border-r border-white/5',
        false: 'flex-row border-b border-white/5',
      },
      align: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
        justify: 'justify-around',
      },
    },
    defaultVariants: {
      vertical: false,
      align: 'left',
    },
  }
);

export const tabStyles = cva(
  'l-tab flex items-center justify-center gap-2 cursor-pointer select-none transition-all duration-300 relative px-6 py-3 min-h-[48px] font-medium text-white/50 hover:text-white/80',
  {
    variants: {
      active: {
        true: 'text-white l-tab--active',
        false: '',
      },
      vertical: {
        true: 'w-full justify-start',
        false: '',
      },
      disable: {
        true: 'opacity-30 pointer-events-none',
        false: '',
      },
    },
  }
);
