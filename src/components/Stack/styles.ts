import { cva } from 'class-variance-authority';

export const stackStyles = cva(
  'flex transition-all duration-300 isolate',
  {
    variants: {
      direction: {
        horizontal: 'flex-row items-center',
        vertical: 'flex-col items-center',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
    },
  }
);

export const stackItemStyles = cva(
  'transition-all duration-300 relative',
  {
    variants: {
      active: {
        true: 'z-50 scale-110', // Highlight active item
        false: 'z-0 scale-100', // Default state
      },
      isPlayable: {
        true: '',
        false: '', // Normal behavior
      }
    },
    compoundVariants: [
      {
        isPlayable: true,
        active: false,
        className: 'opacity-60 blur-[1px] grayscale-[0.5]', // Visual effect for non-active items in playable mode
      },
      {
        isPlayable: true,
        active: true,
        className: 'opacity-100 blur-none grayscale-0 ring-2 ring-white/50 rounded-lg',
      }
    ],
    defaultVariants: {
      active: false,
      isPlayable: false
    }
  }
);
