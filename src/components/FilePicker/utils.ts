import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function getFileIcon(fileType: string): string {
  for (const [prefix, icon] of Object.entries(DEFAULT_FILE_ICONS)) {
    if (prefix === 'default') continue;
    if (fileType.startsWith(prefix)) {
      return icon;
    }
  }
  return DEFAULT_FILE_ICONS.default;
}

export function generateFileId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function validateFile(file: File, accept?: FileAccept, maxSize?: number, minSize?: number): boolean {
  // Check file size
  if (maxSize && file.size > maxSize) return false;
  if (minSize && file.size < minSize) return false;
  
  // Check file type
  if (accept) {
    if (Array.isArray(accept)) {
      return accept.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type === type || file.type.startsWith(type + '/');
      });
    } else {
      if (accept.startsWith('.')) {
        return file.name.toLowerCase().endsWith(accept.toLowerCase());
      }
      return file.type === accept || file.type.startsWith(accept + '/');
    }
  }
  
  return true;
}

export function getFileItems(files: FileList | File[]): FileItem[] {
  const fileArray = Array.isArray(files) ? files : Array.from(files);
  return fileArray.map(file => ({
    file,
    id: generateFileId(),
    name: file.name,
    size: file.size,
    type: file.type,
    url: URL.createObjectURL(file),
  }));
}

export function revokeFileUrls(fileItems: FileItem[]): void {
  fileItems.forEach(item => {
    if (item.url) {
      URL.revokeObjectURL(item.url);
    }
  });
}