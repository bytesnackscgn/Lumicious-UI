export interface RatingProps {
    modelValue?: number;
    max?: number;
    icon?: string;
    iconSelected?: string;
    iconHalf?: string;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
    readonly?: boolean;
    disable?: boolean;
    half?: boolean;
    class?: string;
}
