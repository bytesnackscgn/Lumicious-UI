export type ImgSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ImgVariant = 'glass' | 'solid' | 'outline' | 'ghost';
export type ImgFit = 'contain' | 'cover' | 'fill' | 'none';
export type ImgPosition = 'top' | 'center' | 'bottom' | 'left' | 'right';
export interface ImgProps {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    size?: ImgSize;
    variant?: ImgVariant;
    fit?: ImgFit;
    position?: ImgPosition;
    rounded?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: string;
    class?: string;
}
export type ImageProps = ImgProps;
