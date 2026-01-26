export interface DialogProps {
  modelValue?: boolean;
  persistent?: boolean;
  maximized?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  class?: string;
}
