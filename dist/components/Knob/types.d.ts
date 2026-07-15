export type KnobSize = 'xs' | 's' | 'md' | 'lg' | 'xl';
export type KnobVariant = 'glass' | 'solid' | 'outline';
export type KnobColor = 'primary' | 'secondary' | 'positive' | 'negative' | 'info' | 'warning' | 'white';
export interface KnobProps {
    modelValue?: number;
    min?: number;
    max?: number;
    step?: number;
    size?: KnobSize;
    variant?: KnobVariant;
    color?: KnobColor | string;
    disabled?: boolean;
    readonly?: boolean;
    showValue?: boolean;
    valuePrecision?: number;
    trackWidth?: number;
    knobSize?: number;
}
export interface KnobEmits {
    (e: 'update:modelValue', value: number): void;
    (e: 'change', value: number): void;
    (e: 'input', value: number): void;
}
