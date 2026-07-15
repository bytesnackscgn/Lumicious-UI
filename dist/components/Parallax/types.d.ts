export type ParallaxDirection = 'up' | 'down' | 'left' | 'right';
export interface ParallaxProps {
    speed?: number;
    direction?: ParallaxDirection;
    disabled?: boolean;
    class?: string;
}
export interface ParallaxSlots {
    default: {};
}
export type ParallaxEmits = {
    scroll: [progress: number];
};
export type ParallaxObserverProps = ParallaxProps;
