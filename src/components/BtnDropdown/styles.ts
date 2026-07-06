import { cva } from 'class-variance-authority';

export const btnDropdownStyles = cva(
  'l-btn-dropdown inline-flex transition-all duration-300 relative',
  {
    variants: {},
  }
);

export const btnDropdownMenuStyles = cva(
  'min-w-full mt-1 top-full left-0 origin-top-left'
);

export const btnDropdownLabelContainerStyles = cva(
  'flex items-center gap-2'
);

export const btnDropdownIconStyles = cva(
  'transition-transform duration-300',
  {
    variants: {
      isOpen: {
        true: 'rotate-180',
        false: '',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);
