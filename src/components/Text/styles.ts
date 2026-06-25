import { cva, type VariantProps } from 'class-variance-authority';
import { defaultCvaGradientOptions, gradientOptions } from '@/constants/ui/gradients';
import { defaultCvaColorOptions } from '@/constants/ui/color';

export const textStyles = cva(
  'l-text transition-all duration-300',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        black: 'font-black',
      },
      color: defaultCvaColorOptions,
      gradient: {
        true: '',
        false: '',
      },
      gradientDirection: defaultCvaGradientOptions,
    },
    // @ts-ignore
    compoundVariants: gradientOptions,
    defaultVariants: {
      size: 'md',
      weight: 'normal',
      color: 'white',
      gradient: false,
      gradientDirection: 'to-r',
    },
  }
);

export type TextVariants = VariantProps<typeof textStyles>;