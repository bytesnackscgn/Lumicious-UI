import { ImgProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<ImgProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    load: (event: Event) => any;
    error: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<ImgProps> & Readonly<{
    onLoad?: ((event: Event) => any) | undefined;
    onError?: ((event: Event) => any) | undefined;
}>, {
    variant: import('./types').ImgVariant;
    size: import('./types').ImgSize;
    loading: "lazy" | "eager";
    rounded: boolean;
    fit: import('./types').ImgFit;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
