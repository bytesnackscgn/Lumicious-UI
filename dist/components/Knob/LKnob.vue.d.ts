import { KnobProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<KnobProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    input: (value: number) => any;
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<KnobProps> & Readonly<{
    onInput?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    variant: import('./types').KnobVariant;
    size: import('./types').KnobSize;
    color: import('./types').KnobColor | string;
    disabled: boolean;
    modelValue: number;
    readonly: boolean;
    min: number;
    max: number;
    step: number;
    showValue: boolean;
    valuePrecision: number;
    trackWidth: number;
    knobSize: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
