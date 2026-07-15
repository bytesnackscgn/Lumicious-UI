import { CarouselProps } from './types';
declare var __VLS_1: {
    currentIndex: number;
    isPlaying: boolean;
    items: import('./types').CarouselItem[];
    itemsCount: number;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    startAutoplay: () => void;
    stopAutoplay: () => void;
    toggleAutoplay: () => void;
    autoplay: boolean;
    enableIndicators: boolean;
    showArrows: boolean;
    loop: boolean;
    direction: import('./types').CarouselDirection;
    size: import('./types').CarouselSize;
    variant: import('./types').CarouselVariant;
}, __VLS_3: {
    item: import('./types').CarouselItem;
    index: number;
}, __VLS_15: {
    currentIndex: number;
    isPlaying: boolean;
    items: import('./types').CarouselItem[];
    itemsCount: number;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    startAutoplay: () => void;
    stopAutoplay: () => void;
    toggleAutoplay: () => void;
    autoplay: boolean;
    enableIndicators: boolean;
    showArrows: boolean;
    loop: boolean;
    direction: import('./types').CarouselDirection;
    size: import('./types').CarouselSize;
    variant: import('./types').CarouselVariant;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    item?: (props: typeof __VLS_3) => any;
} & {
    indicators?: (props: typeof __VLS_15) => any;
};
declare const __VLS_base: import('vue').DefineComponent<CarouselProps, {
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    startAutoplay: () => void;
    stopAutoplay: () => void;
    toggleAutoplay: () => void;
    currentIndex: import('vue').Ref<number, number>;
    isPlaying: import('vue').Ref<boolean, boolean>;
    itemsCount: import('vue').ComputedRef<number>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (index: number) => any;
    slide: (direction: "prev" | "next") => any;
}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{
    onChange?: ((index: number) => any) | undefined;
    onSlide?: ((direction: "prev" | "next") => any) | undefined;
}>, {
    variant: import('./types').CarouselVariant;
    size: import('./types').CarouselSize;
    direction: import('./types').CarouselDirection;
    autoplay: boolean;
    interval: number;
    enableIndicators: boolean;
    showArrows: boolean;
    loop: boolean;
    currentIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
