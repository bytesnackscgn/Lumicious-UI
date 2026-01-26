import { cva } from 'class-variance-authority';

export const btnDropdownStyles = cva(
  'l-btn-dropdown inline-flex transition-all duration-300 relative',
  {
    variants: {
      split: {
        true: '',
        false: '',
      },
    },
  }
);
