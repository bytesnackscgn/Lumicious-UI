import { ToastPosition } from './types';
interface Props {
    variant?: "list" | "stack";
    stackOverlap?: number;
    stackGap?: number;
    expandOnHover?: boolean;
}
declare var __VLS_1: {}, __VLS_21: {
    toast: {
        id: string;
        icon?: string | undefined;
        dense: boolean;
        variant: import('..').AlertVariant;
        color: import('..').AlertColor;
        position: ToastPosition;
        duration: number;
        message: string;
        dismissible: boolean;
    };
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_21) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "list" | "stack";
    stackOverlap: number;
    stackGap: number;
    expandOnHover: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
