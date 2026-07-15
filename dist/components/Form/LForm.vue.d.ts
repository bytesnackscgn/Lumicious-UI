import { FormProps, FormField, FormState } from './types';
declare var __VLS_1: {
    registerField: (field: FormField) => void;
    unregisterField: (fieldName: string) => void;
    updateFieldValue: (fieldName: string, value: any) => void;
    validateFieldOnField: (fieldName: string) => void;
    handleFieldBlur: (fieldName: string) => void;
    formValues: Record<string, any>;
    formErrors: Record<string, string>;
    formTouched: Record<string, boolean>;
    formState: FormState;
}, __VLS_3: {
    field: {
        name: string;
        label?: string | undefined;
        type?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        readonly?: boolean | undefined;
        placeholder?: string | undefined;
        rules?: any[] | undefined;
        error?: string | undefined;
        value?: any;
    };
    value: any;
}, __VLS_5: {
    submit: (event: Event) => Promise<void>;
    cancel: () => void;
    reset: () => void;
    loading: boolean;
    disabled: boolean;
};
type __VLS_Slots = {} & {
    fields?: (props: typeof __VLS_1) => any;
} & {
    options?: (props: typeof __VLS_3) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<FormProps, {
    registerField: (field: FormField) => void;
    unregisterField: (fieldName: string) => void;
    updateFieldValue: (fieldName: string, value: any) => void;
    validateFieldOnField: (fieldName: string) => void;
    validateFormFields: () => boolean;
    handleSubmit: (event: Event) => Promise<void>;
    handleCancel: () => void;
    resetForm: () => void;
    clearErrors: () => void;
    formState: import('vue').ComputedRef<FormState>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Record<string, any>) => any;
    cancel: () => any;
    submit: (values: Record<string, any>) => any;
    validate: (errors: Record<string, string>) => any;
}, string, import('vue').PublicProps, Readonly<FormProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: Record<string, any>) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onSubmit?: ((values: Record<string, any>) => any) | undefined;
    onValidate?: ((errors: Record<string, string>) => any) | undefined;
}>, {
    variant: import('./types').FormVariant;
    size: import('./types').FormSize;
    loading: boolean;
    disabled: boolean;
    modelValue: Record<string, any>;
    readonly: boolean;
    layout: import('./types').FormLayout;
    labelPosition: "top" | "left" | "right";
    spacing: "sm" | "md" | "lg";
    validateOn: import('./types').FormValidationMode;
    showErrors: boolean;
    submitText: string;
    cancelText: string;
    validateOnChange: boolean;
    validateOnBlur: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
