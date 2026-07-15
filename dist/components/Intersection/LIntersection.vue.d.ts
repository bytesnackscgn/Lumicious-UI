import { IntersectionProps } from './types';
declare var __VLS_1: {
    isVisible: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IntersectionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    leave: (entry: IntersectionObserverEntry) => any;
    intersect: (entry: IntersectionObserverEntry) => any;
    intersectOnce: (entry: IntersectionObserverEntry) => any;
}, string, import('vue').PublicProps, Readonly<IntersectionProps> & Readonly<{
    onLeave?: ((entry: IntersectionObserverEntry) => any) | undefined;
    onIntersect?: ((entry: IntersectionObserverEntry) => any) | undefined;
    onIntersectOnce?: ((entry: IntersectionObserverEntry) => any) | undefined;
}>, {
    rootMargin: import('./types').IntersectionRootMargin;
    threshold: import('./types').IntersectionThreshold;
    once: boolean;
    fallback: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
