import { cva } from 'class-variance-authority';

export const bottomSheetOverlayStyles = cva(
  'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm pointer-events-auto'
);

export const bottomSheetContainerStyles = cva(
  'fixed z-50 overflow-y-auto transition-all duration-300 transform',
  {
    variants: {
      position: {
        bottom: 'bottom-0 left-0 right-0',
        top: 'top-0 left-0 right-0',
        left: 'left-0 top-0 bottom-0',
        right: 'right-0 top-0 bottom-0',
      },
      size: {
        auto: '',
        full: 'h-full',
      },
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20',
        outline: 'bg-transparent border-2 border-white/20',
      },
      rounded: {
        true: '',
        false: '',
      },
      show: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
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
      {
        position: 'bottom',
        show: false,
        className: 'translate-y-full',
      },
      {
        position: 'bottom',
        show: true,
        className: 'translate-y-0',
      },
      {
        position: 'top',
        show: false,
        className: '-translate-y-full',
      },
      {
        position: 'top',
        show: true,
        className: 'translate-y-0',
      },
      {
        position: 'left',
        show: false,
        className: '-translate-x-full',
      },
      {
        position: 'left',
        show: true,
        className: 'translate-x-0',
      },
      {
        position: 'right',
        show: false,
        className: 'translate-x-full',
      },
      {
        position: 'right',
        show: true,
        className: 'translate-x-0',
      },
    ],
    defaultVariants: {
      position: 'bottom',
      size: 'auto',
      variant: 'glass',
      rounded: true,
      show: false,
    },
  }
);

export const bottomSheetHeaderStyles = cva(
  'flex items-center justify-between p-4',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const bottomSheetTitleStyles = cva(
  'text-lg font-semibold text-white',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const bottomSheetContentStyles = cva(
  'overflow-y-auto max-h-[80vh] p-4',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const bottomSheetFooterStyles = cva(
  'flex items-center justify-end p-4 gap-2',
  {
    variants: {},
    defaultVariants: {},
  }
);