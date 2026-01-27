import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateField(value: any, rules: any[]): string | null {
  for (const rule of rules) {
    if (typeof rule === 'function') {
      const result = rule(value);
      if (typeof result === 'string') {
        return result;
      }
      if (result === false) {
        return 'This field is invalid';
      }
    } else if (typeof rule === 'string') {
      switch (rule) {
        case 'required':
          if (!value || (typeof value === 'string' && value.trim() === '')) {
            return 'This field is required';
          }
          break;
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (value && !emailRegex.test(value)) {
            return 'Please enter a valid email address';
          }
          break;
        case 'url':
          const urlRegex = /^https?:\/\/.+\..+/;
          if (value && !urlRegex.test(value)) {
            return 'Please enter a valid URL';
          }
          break;
        case 'number':
          if (value && isNaN(Number(value))) {
            return 'Please enter a valid number';
          }
          break;
      }
    }
  }
  return null;
}

export function validateForm(values: Record<string, any>, fields: FormField[]): Record<string, string> {
  const errors: Record<string, string> = {};
  
  for (const field of fields) {
    const error = validateField(values[field.name], field.rules || []);
    if (error) {
      errors[field.name] = error;
    }
  }
  
  return errors;
}

export function isFormValid(errors: Record<string, string>): boolean {
  return Object.keys(errors).length === 0;
}

export function getFormInitialValues(fields: FormField[]): Record<string, any> {
  const values: Record<string, any> = {};
  
  for (const field of fields) {
    values[field.name] = field.value || '';
  }
  
  return values;
}