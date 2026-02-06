import type { InjectionKey } from 'vue';
import type { AlertColor, AlertVariant } from '../Banner/types';

export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export interface ToastOptions {
  id?: string;
  message: string;
  variant?: AlertVariant;
  color?: AlertColor;
  icon?: string;
  duration?: number; // in ms, 0 for infinite
  position?: ToastPosition;
  dismissible?: boolean;
}

export interface Toast extends Required<Omit<ToastOptions, 'id' | 'icon'>> {
  id: string;
  icon?: string;
  dense: boolean;
}

export interface ToastContext {
  add: (options: ToastOptions) => string;
  remove: (id: string) => void;
}

export const ToastInjectionKey: InjectionKey<ToastContext> = Symbol('LToast');
