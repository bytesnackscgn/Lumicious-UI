export type CarouselSize = 'sm' | 'md' | 'lg' | 'xl';
export type CarouselVariant = 'glass' | 'solid' | 'outline';
export type CarouselDirection = 'horizontal' | 'vertical';
export type CarouselAutoplay = 'play' | 'pause' | 'stop';
export interface CarouselItem {
    id: string | number;
    content?: string;
    image?: string;
    title?: string;
    description?: string;
}
export interface CarouselProps {
    items?: CarouselItem[];
    size?: CarouselSize;
    variant?: CarouselVariant;
    direction?: CarouselDirection;
    autoplay?: boolean;
    interval?: number;
    enableIndicators?: boolean;
    showArrows?: boolean;
    loop?: boolean;
    currentIndex?: number;
}
