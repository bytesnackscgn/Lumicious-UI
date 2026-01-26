import { cva } from 'class-variance-authority';

export const bottomSheetOverlayStyles = cva(
  'fixed inset-0 z-50 transition-all duration-300',
  {
    variants: {
      show: {
        true: 'bg-black/50 backdrop-blur-sm',
        false: 'bg-transparent backdrop-blur-none pointer-events-none',
      },
    },
    defaultVariants: {
      show: false,
    },
  }
);

export const bottomSheetContainerStyles = cva(
  'fixed z-50 transition-all duration-300 transform',
  {
    variants: {
      position: {
        bottom: 'bottom-0 left-0 right-0',
        top: 'top-0 left-0 right-0',
        left: 'left-0 top-0 bottom-0',
        right: 'right-0 top-0 bottom-0',
      },
      size: {
        sm: 'h-48',
        md: 'h-64',
        lg: 'h-96',
        full: 'h-full',
      },
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20',
        outline: 'bg-transparent border-2 border-white/20',
      },
      rounded: {
        true: 'rounded-t-2xl',
        false: '',
      },
      show: {
        true: '',
        false: 'translate-y-full opacity-0 pointer-events-none',
      },
    },
    compoundVariants: [
      {
        position: 'bottom',
        rounded: true,
        className: 'rounded-t-2xl',
      },
      {
        position: 'top',
        rounded: true,
        className: 'rounded-b-2xl',
      },
      {
        position: 'left',
        rounded: true,
        className: 'rounded-r-2xl',
      },
      {
        position: 'right',
        rounded: true,
        className: 'rounded-l-2xl',
      },
    ],
    defaultVariants: {
      position: 'bottom',
      size: 'md',
      variant: 'glass',
      rounded: true,
      show: false,
    },
  }
);

export const bottomSheetHeaderStyles = cva(
  'flex items-center justify-between p-4 border-b border-white/20',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20 border-white/20',
        outline: 'bg-transparent border-white/20',
      },
    },
    defaultVariants: {
      variant: 'glass',
    },
  }
);

export const bottomSheetTitleStyles = cva(
  'text-lg font-semibold text-white',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const bottomSheetCloseButtonStyles = cva(
  'p-2 rounded-lg hover:bg-white/10 transition-colors',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20',
        outline: 'bg-transparent border border-white/20',
      },
    },
    defaultVariants: {
      variant: 'glass',
    },
  }
);

export const bottomSheetContentStyles = cva(
  'p-4 overflow-y-auto',
  {
    variants: {
      maxHeight: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      maxHeight: false,
    },
  }
);

export const bottomSheetFooterStyles = cva(
  'flex items-center justify-end p-4 border-t border-white/20 gap-2',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20 border-white/20',
        outline: 'bg-transparent border-white/20',
      },
    },
    defaultVariants: {
      variant: 'glass',
    },
  }
);