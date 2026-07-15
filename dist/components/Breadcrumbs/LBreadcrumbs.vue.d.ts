import { BreadcrumbsProps, BreadcrumbItem } from './types';
declare const __VLS_export: import('vue').DefineComponent<BreadcrumbsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (item: BreadcrumbItem, index: number) => any;
}, string, import('vue').PublicProps, Readonly<BreadcrumbsProps> & Readonly<{
    onClick?: ((item: BreadcrumbItem, index: number) => any) | undefined;
}>, {
    size: import('./types').BreadcrumbSize;
    color: import('./types').BreadcrumbColor;
    separator: string;
    maxItems: number;
    ellipsis: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
