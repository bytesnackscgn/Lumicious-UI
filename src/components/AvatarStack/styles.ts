import { cva } from 'class-variance-authority';

export const avatarStackStyles = cva(
  'flex items-center isolate',
  {
    variants: {
      size: {
        xs: '-space-x-2',
        sm: '-space-x-3',
        md: '-space-x-4',
        lg: '-space-x-5',
        xl: '-space-x-6',
      },
      expandOnHover: {
        true: 'hover:space-x-1',
        false: ''
      },
      position: {
        right: 'flex-row',
        left: 'flex-row-reverse space-x-reverse'
      }
    },
    defaultVariants: {
      size: 'md',
      expandOnHover: false,
      position: 'right'
    }
  }
);

export const avatarItemStyles = cva(
  'relative transition-all duration-300 ring-2 ring-slate-900', // ring to separate avatars
  {
    variants: {
      zIndex: {
        0: 'z-0',
        10: 'z-10',
        20: 'z-20',
        30: 'z-30',
        40: 'z-40',
        50: 'z-50',
      },
      hover: {
        true: 'hover:z-50 hover:scale-110',
        false: ''
      }
    },
    defaultVariants: {
      hover: true
    }
  }
);
