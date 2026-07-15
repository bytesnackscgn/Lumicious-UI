import { ColorPickerProps, ColorFormat } from './types';
declare const __VLS_export: import('vue').DefineComponent<ColorPickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    "update:format": (value: ColorFormat) => any;
}, string, import('vue').PublicProps, Readonly<ColorPickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:format"?: ((value: ColorFormat) => any) | undefined;
}>, {
    size: import('./types').ColorSize;
    disabled: boolean;
    modelValue: string;
    format: ColorFormat;
    showAlpha: boolean;
    presetColors: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
