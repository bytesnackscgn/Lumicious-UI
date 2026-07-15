import { BottomSheetProps } from './types';
declare var __VLS_25: {}, __VLS_32: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_25) => any;
} & {
    footer?: (props: typeof __VLS_32) => any;
};
declare const __VLS_base: import('vue').DefineComponent<BottomSheetProps, {
    open: () => void;
    close: () => void;
    toggle: () => void;
    overlayRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    containerRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (open: boolean) => any;
    close: () => any;
    open: () => any;
    opened: () => any;
    closed: () => any;
}, string, import('vue').PublicProps, Readonly<BottomSheetProps> & Readonly<{
    "onUpdate:modelValue"?: ((open: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
}>, {
    variant: import('./types').BottomSheetVariant;
    size: import('./types').BottomSheetSize;
    rounded: boolean;
    position: import('./types').BottomSheetPosition;
    modelValue: boolean;
    persistent: boolean;
    overlay: boolean;
    closable: boolean;
    closeOnOverlay: boolean;
    closeOnEscape: boolean;
    maxHeight: string;
    maxWidth: string;
    showCloseButton: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
