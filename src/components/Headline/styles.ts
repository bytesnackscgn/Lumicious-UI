import { cva, type VariantProps } from 'class-variance-authority';
import { defaultCvaGradientOptions, gradientOptions } from '@/constants/ui/gradients';
import { defaultCvaColorOptions } from '@/constants/ui/color';

export const headlineStyles = cva(
  'l-headline font-black tracking-tight transition-all duration-300',
  {
    variants: {
      size: {
        xs: 'text-sm',
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
        '3xl': 'text-4xl',
        '4xl': 'text-5xl',
        '5xl': 'text-6xl',
        '6xl': 'text-7xl',
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
      size: '3xl',
      color: 'white',
      gradient: false,
      gradientDirection: 'to-r',
    },
  }
);

export type HeadlineVariants = VariantProps<typeof headlineStyles>;
