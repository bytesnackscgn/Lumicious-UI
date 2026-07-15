import { InputProps } from './types';
declare var __VLS_9: {}, __VLS_12: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_9) => any;
} & {
    append?: (props: typeof __VLS_12) => any;
} & {
    append?: (props: typeof __VLS_16) => any;
};
declare const __VLS_base: import('vue').DefineComponent<InputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: (event: FocusEvent) => any;
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
    focus: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<InputProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
}>, {
    type: string;
    modelValue: string | number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
