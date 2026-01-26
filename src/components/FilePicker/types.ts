export type FilePickerAccept = string | string[];

export interface FilePickerProps {
  accept?: FilePickerAccept;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxFiles?: number;
  maxSize?: number; // in bytes
}

export interface FilePickerEmits {
  (e: 'update:modelValue', files: File[]): void;
  (e: 'change', files: File[]): void;
  (e: 'select', files: File[]): void;
}

export interface FileItem {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}