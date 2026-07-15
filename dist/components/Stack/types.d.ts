export interface StackProps {
    /**
     * Direction of the stack
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Controls the overlap of items.
     * Positive value means items overlap by this amount.
     * This is the default state "tightness".
     * @default 0
     */
    overlap?: number;
    /**
     * Controls the gap between items when expanded (hover/focus).
     * This is the "open" state spacing.
     * @default 0
     */
    gap?: number;
    /**
     * Whether to enable auto-play focus cycling
     * @default false
     */
    playable?: boolean;
    /**
     * Interval for auto-play in milliseconds
     * @default 2000
     */
    interval?: number;
    /**
     * Whether to pause auto-play on hover
     * @default true
     */
    pauseOnHover?: boolean;
    /**
     * Whether to disable the hover expansion effect.
     * Automatically disabled if playable is enabled.
     * @default false
     */
    disableHover?: boolean;
    /**
     * Array of items to render (if using scoped slots)
     * If not provided, assumes default slot contains elements (less control)
     */
    items?: any[];
    /**
     * Z-index stacking order.
     * 'normal': later items are on top of earlier items (z-index increases with index)
     * 'reverse': earlier items are on top of later items (z-index decreases with index)
     * @default 'normal'
     */
    stackOrder?: 'normal' | 'reverse';
    /**
     * Additional classes to apply to each item wrapper
     */
    itemClass?: string;
}
