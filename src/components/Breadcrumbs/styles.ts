import { solidColors } from '@/constants/ui/color';
import { cva } from 'class-variance-authority';

export const breadcrumbsStyles = cva(
  'l-breadcrumbs flex items-center gap-1 text-sm font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      color: solidColors,
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const breadcrumbItemStyles = cva(
  'l-breadcrumb-item flex items-center gap-1 transition-colors duration-200 hover:text-blue-300',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      color: solidColors,
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
      disabled: false,
    },
  }
);

export const separatorStyles = cva(
  'l-breadcrumb-separator text-gray-500',
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