import { ItemProps } from './types';
declare var __VLS_15: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_15) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    tag: string;
    disabled: boolean;
    dense: boolean;
    clickable: boolean;
    active: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
