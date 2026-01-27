export type FilePickerSize = 'sm' | 'md' | 'lg';
export type FilePickerVariant = 'glass' | 'solid' | 'outline';
export type FileAccept = string | string[];

export interface FilePickerProps {
  modelValue?: File | File[];
  size?: FilePickerSize;
  variant?: FilePickerVariant;
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  accept?: FileAccept;
  maxSize?: number; // in bytes
  minSize?: number; // in bytes
  placeholder?: string;
  buttonText?: string;
  dragDrop?: boolean;
  clearable?: boolean;
}

export interface FileItem {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}