import { StackProps } from './types';
declare var __VLS_1: {
    item: any;
    index: number;
    active: boolean;
}, __VLS_8: {};
type __VLS_Slots = {} & {
    item?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<StackProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    pause: () => any;
    play: () => any;
    "update:active-index": (index: number) => any;
}, string, import('vue').PublicProps, Readonly<StackProps> & Readonly<{
    onPause?: (() => any) | undefined;
    onPlay?: (() => any) | undefined;
    "onUpdate:active-index"?: ((index: number) => any) | undefined;
}>, {
    items: any[];
    direction: "horizontal" | "vertical";
    interval: number;
    overlap: number;
    gap: number;
    playable: boolean;
    pauseOnHover: boolean;
    disableHover: boolean;
    stackOrder: "normal" | "reverse";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
