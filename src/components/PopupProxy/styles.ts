import { cva } from 'class-variance-authority';

export const popupProxyStyles = cva(
  'l-popup-proxy-popup transition-all duration-200 ease-out',
  {
    variants: {
      placement: {
        top: '',
        'top-start': '',
        'top-end': '',
        bottom: '',
        'bottom-start': '',
        'bottom-end': '',
        left: '',
        'left-start': '',
        'left-end': '',
        right: '',
        'right-start': '',
        'right-end': '',
      },
    },
    defaultVariants: {
      placement: 'bottom',
    },
  }
);