import { cva } from 'class-variance-authority';

export const knobContainerStyles = cva(
  'l-knob-container relative flex flex-col items-center justify-center',
  {
    variants: {
      size: {
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-40 h-40',
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
  'absolute rounded-full transition-all duration-200 shadow-lg',
  {
    variants: {
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
    ],
    defaultVariants: {
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
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
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
  'absolute w-1 h-4 bg-white rounded-full transition-all duration-200',
  {
    variants: {},
    defaultVariants: {},
  }
);