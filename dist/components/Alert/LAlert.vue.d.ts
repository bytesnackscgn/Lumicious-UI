import { AlertProps } from './types';
declare var __VLS_1: {}, __VLS_8: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    actions?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import('vue').DefineComponent<AlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{}>, {
    variant: import('./types').AlertVariant;
    color: import('./types').AlertColor;
    dense: boolean;
    inline: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
