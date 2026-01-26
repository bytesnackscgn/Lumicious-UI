import { cva } from 'class-variance-authority';

export const toggleStyles = cva(
  'l-toggle inline-flex items-center cursor-pointer select-none transition-all duration-300',
  {
    variants: {
      disable: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      dense: {
        true: 'gap-2',
        false: 'gap-3',
      },
    },
    defaultVariants: {
      disable: false,
      dense: false,
    },
  }
);

export const toggleTrackStyles = cva(
  'l-toggle__track relative transition-all duration-300 rounded-full bg-white/10 border border-white/10',
  {
    variants: {
      checked: {
        true: 'bg-blue-600/50 border-blue-500/50',
        false: '',
      },
      size: {
        xs: 'w-6 h-3.5',
        sm: 'w-8 h-4.5',
        md: 'w-10 h-6',
        lg: 'w-12 h-7',
        xl: 'w-16 h-9',
      },
    },
    defaultVariants: {
      checked: false,
      size: 'md',
    },
  }
);

export const toggleThumbStyles = cva(
  'l-toggle__thumb absolute top-0.5 left-0.5 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden',
  {
    variants: {
      checked: {
        true: 'translate-x-full',
        false: 'translate-x-0',
      },
      size: {
        xs: 'w-2.5 h-2.5',
        sm: 'w-3.5 h-3.5',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        checked: true,
        className: 'translate-x-2.5',
      },
      {
        size: 'sm',
        checked: true,
        className: 'translate-x-3.5',
      },
      {
        size: 'md',
        checked: true,
        className: 'translate-x-4',
      },
      {
        size: 'lg',
        checked: true,
        className: 'translate-x-5',
      },
       {
        size: 'xl',
        checked: true,
        className: 'translate-x-7',
      }
    ],
    defaultVariants: {
      checked: false,
      size: 'md',
    },
  }
);
