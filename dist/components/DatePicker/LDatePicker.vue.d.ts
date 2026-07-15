import { DatePickerProps } from './types';
declare const __VLS_export: import('vue').DefineComponent<DatePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Date | Date[] | {
        start: Date;
        end: Date;
    } | undefined) => any;
}, string, import('vue').PublicProps, Readonly<DatePickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: Date | Date[] | {
        start: Date;
        end: Date;
    } | undefined) => any) | undefined;
}>, {
    variant: import('./types').DatePickerVariant;
    size: import('./types').DatePickerSize;
    disabled: boolean;
    placeholder: string;
    modelValue: Date | Date[] | {
        start: Date;
        end: Date;
    };
    mode: import('./types').DatePickerMode;
    format: string;
    readonly: boolean;
    locale: string;
    startView: "day" | "month" | "year";
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showTimePicker: boolean;
    timeFormat: "12h" | "24h";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
