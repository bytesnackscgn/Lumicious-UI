import { BtnDropdownProps } from './types';
declare var __VLS_10: {}, __VLS_25: {};
type __VLS_Slots = {} & {
    label?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_25) => any;
};
declare const __VLS_base: import('vue').DefineComponent<BtnDropdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<BtnDropdownProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    icon: string;
    modelValue: boolean;
    autoClose: boolean;
    hideIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
