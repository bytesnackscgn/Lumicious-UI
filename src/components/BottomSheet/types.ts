export type BottomSheetSize = 'auto' | 'full';
export type BottomSheetVariant = 'glass' | 'solid' | 'outline';
export type BottomSheetPosition = 'bottom' | 'top' | 'left' | 'right';

export interface BottomSheetProps {
  modelValue?: boolean;
  title?: string;
  size?: BottomSheetSize;
  variant?: BottomSheetVariant;
  position?: BottomSheetPosition;
  closable?: boolean;
  persistent?: boolean;
  overlay?: boolean;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  maxHeight?: string;
  maxWidth?: string;
  showCloseButton?: boolean;
  rounded?: boolean;
}

export interface BottomSheetEmits {
  (e: 'update:modelValue', open: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
  (e: 'opened'): void;
  (e: 'closed'): void;
}