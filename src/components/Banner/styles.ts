import { cva } from 'class-variance-authority';

export const alertStyles = cva(
  'l-Alert flex items-center gap-4 transition-all duration-300 rounded-2xl w-full',
  {
    variants: {
      variant: {
        glass: 'glass border-white/10 text-white',
        solid: 'border-transparent text-white',
        outline: 'bg-transparent border border-white/20 text-white',
      },
      color: {
        primary: '',
        positive: '',
        negative: '',
        warning: '',
        info: '',
      },
      dense: {
        true: 'p-3',
        false: 'p-4',
      },
    },
    compoundVariants: [
      // --- Glass Variants ---
      {
        variant: 'glass',
        color: 'primary',
        className: 'bg-blue-500/10 border-blue-400/20 text-blue-100',
      },
      {
        variant: 'glass',
        color: 'positive',
        className: 'bg-emerald-500/10 border-emerald-400/20 text-emerald-100',
      },
      {
        variant: 'glass',
        color: 'negative',
        className: 'bg-red-500/10 border-red-400/20 text-red-100',
      },
      {
        variant: 'glass',
        color: 'warning',
        className: 'bg-amber-500/10 border-amber-400/20 text-amber-100',
      },
      {
        variant: 'glass',
        color: 'info',
        className: 'bg-sky-500/10 border-sky-400/20 text-sky-100',
      },

      // --- Solid Variants ---
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20',
      },
      {
        variant: 'solid',
        color: 'positive',
        className: 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/20',
      },
      {
        variant: 'solid',
        color: 'negative',
        className: 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/20',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-900/20',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-900/20',
      },

      // --- Outline Variants ---
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-500/50 text-blue-200 hover:bg-blue-500/5',
      },
      {
        variant: 'outline',
        color: 'positive',
        className: 'border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/5',
      },
      {
        variant: 'outline',
        color: 'negative',
        className: 'border-red-500/50 text-red-200 hover:bg-red-500/5',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-amber-500/50 text-amber-200 hover:bg-amber-500/5',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-sky-500/50 text-sky-200 hover:bg-sky-500/5',
      },
    ],
    defaultVariants: {
      variant: 'glass',
      color: 'primary',
      dense: false,
    },
  }
);
