export interface ToggleProps {
    modelValue: boolean;
    label?: string;
    leftLabel?: boolean;
    disable?: boolean;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    dense?: boolean;
    icon?: string;
    checkedIcon?: string;
    uncheckedIcon?: string;
    class?: string;
}
