import { ButtonProps } from './types';
declare var __VLS_1: {}, __VLS_13: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    append?: (props: typeof __VLS_15) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    variant: import('./types').ButtonVariant;
    size: import('./types').ButtonSize;
    color: import('./types').ButtonColor;
    blur: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
