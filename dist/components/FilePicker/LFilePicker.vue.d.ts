import { FilePickerProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<FilePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: File | File[] | undefined) => any;
}, string, import('vue').PublicProps, Readonly<FilePickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: File | File[] | undefined) => any) | undefined;
}>, {
    variant: import('./types').FilePickerVariant;
    size: import('./types').FilePickerSize;
    disabled: boolean;
    placeholder: string;
    modelValue: File | File[];
    multiple: boolean;
    readonly: boolean;
    accept: import('./types').FileAccept;
    maxSize: number;
    minSize: number;
    buttonText: string;
    dragDrop: boolean;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
