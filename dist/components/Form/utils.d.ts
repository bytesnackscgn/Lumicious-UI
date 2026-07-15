import { ClassValue } from 'clsx';
import { FormField } from './types';
export declare function cn(...inputs: ClassValue[]): string;
export declare function validateField(value: any, rules: any[]): string | null;
export declare function validateForm(values: Record<string, any>, fields: FormField[]): Record<string, string>;
export declare function isFormValid(errors: Record<string, string>): boolean;
export declare function getFormInitialValues(fields: FormField[]): Record<string, any>;
