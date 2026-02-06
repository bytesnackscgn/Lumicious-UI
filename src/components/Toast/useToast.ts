import { inject } from 'vue';
import { ToastInjectionKey, type ToastContext } from './types';

export function useToast(): ToastContext {
  const context = inject(ToastInjectionKey);
  
  if (!context) {
    throw new Error('useToast must be used within a LToastProvider');
  }
  
  return context;
}
