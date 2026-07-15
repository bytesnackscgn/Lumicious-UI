export interface RangeValue {
    min: number;
    max: number;
}
export interface RangeProps {
    modelValue?: RangeValue;
    min?: number;
    max?: number;
    step?: number;
    label?: boolean;
    disable?: boolean;
    readonly?: boolean;
    color?: string;
    class?: string;
}
