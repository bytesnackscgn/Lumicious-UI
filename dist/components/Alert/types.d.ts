export type AlertVariant = 'glass' | 'solid' | 'outline';
export type AlertColor = 'primary' | 'positive' | 'negative' | 'warning' | 'info';
export interface AlertProps {
    label?: string;
    variant?: AlertVariant;
    color?: AlertColor;
    icon?: string;
    dense?: boolean;
    inline?: boolean;
    class?: string;
}
