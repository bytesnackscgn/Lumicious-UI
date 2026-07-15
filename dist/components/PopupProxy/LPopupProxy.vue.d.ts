import { PopupProxyProps } from './types';
declare var __VLS_1: {
    isOpen: boolean;
    toggle: () => void;
}, __VLS_9: {
    isOpen: true;
    close: () => void;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: import('vue').DefineComponent<PopupProxyProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    toggle: (isOpen: boolean) => any;
    open: () => any;
}, string, import('vue').PublicProps, Readonly<PopupProxyProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onToggle?: ((isOpen: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {
    disabled: boolean;
    autoClose: boolean;
    offset: number;
    placement: import('./types').PopupProxyPlacement;
    trigger: import('./types').PopupProxyTrigger;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
