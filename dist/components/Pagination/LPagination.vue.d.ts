import { PaginationProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (page: number) => any;
    pageSizeChange: (size: number) => any;
}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{
    onChange?: ((page: number) => any) | undefined;
    onPageSizeChange?: ((size: number) => any) | undefined;
}>, {
    size: import('./types').PaginationSize;
    color: import('./types').PaginationColor;
    disabled: boolean;
    ellipsis: boolean;
    shape: import('./types').PaginationShape;
    pageSize: number;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    showTotal: boolean;
    hideOnSinglePage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
