import type { ImgProps } from './types';

/**
 * Validates image source URL
 */
export const validateImageSrc = (src: string): boolean => {
  try {
    new URL(src);
    return true;
  } catch {
    return false;
  }
};

/**
 * Generates placeholder image data URL
 */
export const generatePlaceholder = (text: string = 'Image'): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  canvas.width = 200;
  canvas.height = 200;
  
  // Background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(0, 0, 200, 200);
  
  // Border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, 200, 200);
  
  // Text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 100, 100);
  
  return canvas.toDataURL();
};

/**
 * Debounce function for image loading
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T => {
  let timeoutId: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  }) as T;
};

/**
 * Format image dimensions for display
 */
export const formatDimensions = (
  width?: number | string,
  height?: number | string
): string => {
  if (!width && !height) return '';
  if (!width) return `×${height}`;
  if (!height) return `${width}×`;
  return `${width}×${height}`;
};