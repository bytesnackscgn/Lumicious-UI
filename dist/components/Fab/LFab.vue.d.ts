import { FabProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<FabProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<FabProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    variant: import('./types').FabVariant;
    size: import('./types').FabSize;
    color: "primary" | "secondary" | "positive" | "negative" | "white";
    loading: boolean;
    disabled: boolean;
    icon: string;
    position: import('./types').FabPosition;
    extended: boolean;
    mini: boolean;
    ripple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
