import { ChipProps } from './types';
declare var __VLS_1: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ChipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    remove: () => any;
}, string, import('vue').PublicProps, Readonly<ChipProps> & Readonly<{
    onRemove?: (() => any) | undefined;
}>, {
    variant: import('./types').ChipVariant;
    size: import('./types').ChipSize;
    removable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
