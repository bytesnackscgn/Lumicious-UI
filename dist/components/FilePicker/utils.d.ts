import { ClassValue } from 'clsx';
import { FileAccept, FileItem } from './types';
export declare function cn(...inputs: ClassValue[]): string;
export declare function formatFileSize(bytes: number, decimals?: number): string;
export declare function getFileIcon(fileType: string): string;
export declare function generateFileId(): string;
export declare function validateFile(file: File, accept?: FileAccept, maxSize?: number, minSize?: number): boolean;
export declare function getFileItems(files: FileList | File[]): FileItem[];
export declare function revokeFileUrls(fileItems: FileItem[]): void;
