import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function hslToHex(h: number, s: number, l: number): string;
