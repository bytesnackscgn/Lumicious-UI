import { cva } from 'class-variance-authority';

export const optionGroupStyles = cva(
  'l-option-group flex transition-all duration-300',
  {
    variants: {
      inline: {
        true: 'flex-row flex-wrap gap-4',
        false: 'flex-col gap-2',
      },
    },
    defaultVariants: {
      inline: false,
    },
  }
);
