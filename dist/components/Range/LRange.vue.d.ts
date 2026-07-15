import { RangeProps, RangeValue } from './types';
declare const __VLS_export: import('vue').DefineComponent<RangeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: RangeValue) => any;
    change: (value: RangeValue) => any;
}, string, import('vue').PublicProps, Readonly<RangeProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: RangeValue) => any) | undefined;
    onChange?: ((value: RangeValue) => any) | undefined;
}>, {
    label: boolean;
    modelValue: RangeValue;
    min: number;
    max: number;
    step: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
