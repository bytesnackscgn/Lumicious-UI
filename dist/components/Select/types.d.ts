import { FieldProps } from '../Field/types';
export interface SelectOption {
    label: string;
    value: any;
    disable?: boolean;
    description?: string;
    [key: string]: any;
}
export interface SelectProps extends FieldProps {
    modelValue?: any;
    options: (string | number | SelectOption)[];
    multiple?: boolean;
    useChips?: boolean;
    placeholder?: string;
    class?: string;
}
