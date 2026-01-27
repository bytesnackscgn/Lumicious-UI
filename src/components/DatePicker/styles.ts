import { cva } from 'class-variance-authority';

export const datePickerStyles = cva(
  'glass border-white/20 rounded-xl overflow-hidden transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
      variant: {
        glass: 'bg-white/10 backdrop-blur-lg',
        solid: 'bg-white/90 text-gray-900',
        outline: 'bg-transparent',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      disabled: false,
    },
  }
);

export const calendarGridStyles = cva(
  'grid grid-cols-7 gap-1',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const dayButtonStyles = cva(
  'aspect-square rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10',
  {
    variants: {
      size: {
        sm: 'text-xs p-1',
        md: 'text-sm p-2',
        lg: 'text-base p-3',
      },
      isCurrentMonth: {
        true: '',
        false: 'text-white/30',
      },
      isToday: {
        true: 'bg-white/20 font-semibold',
        false: '',
      },
      isSelected: {
        true: 'bg-white/30 ring-2 ring-white/50',
        false: '',
      },
      isInRange: {
        true: 'bg-white/10',
        false: '',
      },
      isDisabled: {
        true: 'opacity-30 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      isCurrentMonth: true,
      isToday: false,
      isSelected: false,
      isInRange: false,
      isDisabled: false,
    },
  }
);

export const navigationButtonStyles = cva(
  'p-2 rounded-lg hover:bg-white/10 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);