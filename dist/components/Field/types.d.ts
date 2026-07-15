export type FieldVariant = 'outlined' | 'filled' | 'ghost';
export interface FieldProps {
    label?: string;
    stackLabel?: boolean;
    hint?: string;
    errorMessage?: string;
    error?: boolean;
    loading?: boolean;
    filled?: boolean;
    outlined?: boolean;
    standout?: boolean;
    borderless?: boolean;
    rounded?: boolean;
    square?: boolean;
    dense?: boolean;
    disable?: boolean;
    readonly?: boolean;
    class?: string;
}
