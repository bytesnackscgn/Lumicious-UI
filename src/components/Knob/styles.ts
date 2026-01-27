import { cva } from 'class-variance-authority';

export const knobContainerStyles = cva(
  'l-knob-container relative flex flex-col items-center justify-center',
  {
    variants: {
      size: {
        xs: 'w-12 h-12',
        s: 'w-16 h-16',
        md: 'w-20 h-20',
        lg: 'w-24 h-24',
        xl: 'w-28 h-28',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

export const knobTrackStyles = cva(
  'absolute rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        glass: 'glass border-white/20',
        solid: 'bg-white/20',
        outline: 'bg-transparent border-2 border-white/20',
      },
      color: {
        primary: '',
        secondary: '',
        positive: '',
        negative: '',
        info: '',
        warning: '',
        white: '',
      },
    },
    compoundVariants: [
      // Primary colors
      {
        variant: 'glass',
        color: 'primary',
        className: 'bg-blue-500/20',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-500/20',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-400',
      },
      // Secondary colors
      {
        variant: 'glass',
        color: 'secondary',
        className: 'bg-gray-500/20',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-gray-500/20',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-gray-400',
      },
      // Positive colors
      {
        variant: 'glass',
        color: 'positive',
        className: 'bg-green-500/20',
      },
      {
        variant: 'solid',
        color: 'positive',
        className: 'bg-green-500/20',
      },
      {
        variant: 'outline',
        color: 'positive',
        className: 'border-green-400',
      },
      // Negative colors
      {
        variant: 'glass',
        color: 'negative',
        className: 'bg-red-500/20',
      },
      {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-500/20',
      },
      {
        variant: 'outline',
        color: 'negative',
        className: 'border-red-400',
      },
      // Info colors
      {
        variant: 'glass',
        color: 'info',
        className: 'bg-cyan-500/20',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-cyan-500/20',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-cyan-400',
      },
      // Warning colors
      {
        variant: 'glass',
        color: 'warning',
        className: 'bg-yellow-500/20',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-yellow-500/20',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-yellow-400',
      },
      // White colors
      {
        variant: 'glass',
        color: 'white',
        className: 'bg-white/20',
      },
      {
        variant: 'solid',
        color: 'white',
        className: 'bg-white/20',
      },
      {
        variant: 'outline',
        color: 'white',
        className: 'border-white',
      },
    ],
    defaultVariants: {
      variant: 'glass',
      color: 'primary',
    },
  }
);

export const knobProgressStyles = cva(
  'absolute rounded-full transition-all duration-200',
  {
    variants: {},
    defaultVariants: {},
  }
);

export const knobKnobStyles = cva(
  'absolute rounded-full transition-all duration-200 shadow-lg relative',
  {
    variants: {
      size: {
        xs: '',
        s: '',
        md: '',
        lg: '',
        xl: '',
      },
      variant: {
        glass: 'glass border-white/40',
        solid: 'bg-white/30',
        outline: 'bg-white/30 border-2 border-white/40',
      },
      color: {
        primary: '',
        secondary: '',
        positive: '',
        negative: '',
        info: '',
        warning: '',
        white: '',
      },
    },
    compoundVariants: [
      // Size variants
      {
        size: 'xs',
        className: 'w-3 h-3',
      },
      {
        size: 's',
        className: 'w-5 h-5',
      },
      {
        size: 'md',
        className: 'w-8 h-8',
      },
      {
        size: 'lg',
        className: 'w-10 h-10',
      },
      {
        size: 'xl',
        className: 'w-12 h-12',
      },
      // Primary colors
      {
        variant: 'glass',
        color: 'primary',
        className: 'bg-blue-500/40',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-500/40',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'bg-blue-500/40 border-blue-400',
      },
      // Secondary colors
      {
        variant: 'glass',
        color: 'secondary',
        className: 'bg-gray-500/40',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-gray-500/40',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'bg-gray-500/40 border-gray-400',
      },
      // Positive colors
      {
        variant: 'glass',
        color: 'positive',
        className: 'bg-green-500/40',
      },
      {
        variant: 'solid',
        color: 'positive',
        className: 'bg-green-500/40',
      },
      {
        variant: 'outline',
        color: 'positive',
        className: 'bg-green-500/40 border-green-400',
      },
      // Negative colors
      {
        variant: 'glass',
        color: 'negative',
        className: 'bg-red-500/40',
      },
      {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-500/40',
      },
      {
        variant: 'outline',
        color: 'negative',
        className: 'bg-red-500/40 border-red-400',
      },
      // Info colors
      {
        variant: 'glass',
        color: 'info',
        className: 'bg-cyan-500/40',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-cyan-500/40',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'bg-cyan-500/40 border-cyan-400',
      },
      // Warning colors
      {
        variant: 'glass',
        color: 'warning',
        className: 'bg-yellow-500/40',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-yellow-500/40',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'bg-yellow-500/40 border-yellow-400',
      },
      // White colors
      {
        variant: 'glass',
        color: 'white',
        className: 'bg-white/40',
      },
      {
        variant: 'solid',
        color: 'white',
        className: 'bg-white/40',
      },
      {
        variant: 'outline',
        color: 'white',
        className: 'bg-white/40 border-white',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'glass',
      color: 'primary',
    },
  }
);

export const knobValueStyles = cva(
  'text-white font-bold transition-all duration-200',
  {
    variants: {
      size: {
        xs: 'text-[10px] mt-1',
        s: 'text-sm mt-3',
        md: 'text-base mt-4',
        lg: 'text-lg mt-4',
        xl: 'text-xl mt-6',
      },
      showValue: {
        true: '',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      size: 'md',
      showValue: true,
    },
  }
);

export const knobIndicatorStyles = cva(
  'absolute rounded-full transition-all duration-200',
  {
    variants: {
      size: {
        xs: 'w-0.25 h-0.75',
        s: 'w-0.5 h-1.5',
        md: 'w-1 h-4',
        lg: 'w-1.5 h-6',
        xl: 'w-2 h-8',
      },
      color: {
        primary: 'bg-white',
        secondary: 'bg-gray-300',
        positive: 'bg-green-300',
        negative: 'bg-red-300',
        info: 'bg-cyan-300',
        warning: 'bg-yellow-300',
        white: 'bg-white',
      },
    },
    compoundVariants: [
      // Primary colors
      {
        size: 'xs',
        color: 'primary',
        className: 'w-0.25 h-0.75 bg-white',
      },
      {
        size: 's',
        color: 'primary',
        className: 'w-0.5 h-1.5 bg-white',
      },
      {
        size: 'md',
        color: 'primary',
        className: 'w-1 h-4 bg-white',
      },
      {
        size: 'lg',
        color: 'primary',
        className: 'w-1.5 h-6 bg-white',
      },
      {
        size: 'xl',
        color: 'primary',
        className: 'w-2 h-8 bg-white',
      },
      // Secondary colors
      {
        size: 'xs',
        color: 'secondary',
        className: 'w-0.25 h-0.75 bg-gray-300',
      },
      {
        size: 's',
        color: 'secondary',
        className: 'w-0.5 h-1.5 bg-gray-300',
      },
      {
        size: 'md',
        color: 'secondary',
        className: 'w-1 h-4 bg-gray-300',
      },
      {
        size: 'lg',
        color: 'secondary',
        className: 'w-1.5 h-6 bg-gray-300',
      },
      {
        size: 'xl',
        color: 'secondary',
        className: 'w-2 h-8 bg-gray-300',
      },
      // Positive colors
      {
        size: 'xs',
        color: 'positive',
        className: 'w-0.25 h-0.75 bg-green-300',
      },
      {
        size: 's',
        color: 'positive',
        className: 'w-0.5 h-1.5 bg-green-300',
      },
      {
        size: 'md',
        color: 'positive',
        className: 'w-1 h-4 bg-green-300',
      },
      {
        size: 'lg',
        color: 'positive',
        className: 'w-1.5 h-6 bg-green-300',
      },
      {
        size: 'xl',
        color: 'positive',
        className: 'w-2 h-8 bg-green-300',
      },
      // Negative colors
      {
        size: 'xs',
        color: 'negative',
        className: 'w-0.25 h-0.75 bg-red-300',
      },
      {
        size: 's',
        color: 'negative',
        className: 'w-0.5 h-1.5 bg-red-300',
      },
      {
        size: 'md',
        color: 'negative',
        className: 'w-1 h-4 bg-red-300',
      },
      {
        size: 'lg',
        color: 'negative',
        className: 'w-1.5 h-6 bg-red-300',
      },
      {
        size: 'xl',
        color: 'negative',
        className: 'w-2 h-8 bg-red-300',
      },
      // Info colors
      {
        size: 'xs',
        color: 'info',
        className: 'w-0.25 h-0.75 bg-cyan-300',
      },
      {
        size: 's',
        color: 'info',
        className: 'w-0.5 h-1.5 bg-cyan-300',
      },
      {
        size: 'md',
        color: 'info',
        className: 'w-1 h-4 bg-cyan-300',
      },
      {
        size: 'lg',
        color: 'info',
        className: 'w-1.5 h-6 bg-cyan-300',
      },
      {
        size: 'xl',
        color: 'info',
        className: 'w-2 h-8 bg-cyan-300',
      },
      // Warning colors
      {
        size: 'xs',
        color: 'warning',
        className: 'w-0.25 h-0.75 bg-yellow-300',
      },
      {
        size: 's',
        color: 'warning',
        className: 'w-0.5 h-1.5 bg-yellow-300',
      },
      {
        size: 'md',
        color: 'warning',
        className: 'w-1 h-4 bg-yellow-300',
      },
      {
        size: 'lg',
        color: 'warning',
        className: 'w-1.5 h-6 bg-yellow-300',
      },
      {
        size: 'xl',
        color: 'warning',
        className: 'w-2 h-8 bg-yellow-300',
      },
      // White colors
      {
        size: 'xs',
        color: 'white',
        className: 'w-0.25 h-0.75 bg-white',
      },
      {
        size: 's',
        color: 'white',
        className: 'w-0.5 h-2 bg-white',
      },
      {
        size: 'md',
        color: 'white',
        className: 'w-1 h-4 bg-white',
      },
      {
        size: 'lg',
        color: 'white',
        className: 'w-1.5 h-6 bg-white',
      },
      {
        size: 'xl',
        color: 'white',
        className: 'w-2 h-8 bg-white',
      },
    ],
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
);