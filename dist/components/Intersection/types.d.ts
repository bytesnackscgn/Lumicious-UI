export type IntersectionThreshold = number | number[];
export type IntersectionRootMargin = string;
export interface IntersectionProps {
    threshold?: IntersectionThreshold;
    rootMargin?: IntersectionRootMargin;
    once?: boolean;
    fallback?: boolean;
    class?: string;
}
export interface IntersectionSlots {
    default: {
        isVisible: boolean;
    };
}
export type IntersectionEmits = {
    intersect: [entry: IntersectionObserverEntry];
    intersectOnce: [entry: IntersectionObserverEntry];
    leave: [entry: IntersectionObserverEntry];
};
export type IntersectionObserverProps = IntersectionProps;
