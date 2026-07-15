/**
 * Validates image source URL
 */
export declare const validateImageSrc: (src: string) => boolean;
/**
 * Generates placeholder image data URL
 */
export declare const generatePlaceholder: (text?: string) => string;
/**
 * Debounce function for image loading
 */
export declare const debounce: <T extends (...args: any[]) => void>(func: T, delay: number) => T;
/**
 * Format image dimensions for display
 */
export declare const formatDimensions: (width?: number | string, height?: number | string) => string;
