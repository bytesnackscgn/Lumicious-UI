import { NumberInputProps } from './types';
declare var __VLS_9: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_9) => any;
} & {
    append?: (props: typeof __VLS_13) => any;
};
declare const __VLS_base: import('vue').DefineComponent<NumberInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: (event: FocusEvent) => any;
    "update:modelValue": (value: number) => any;
    focus: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<NumberInputProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
}>, {
    type: string;
    modelValue: number;
    layout: "left" | "right" | "split";
    min: number;
    max: number;
    step: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
