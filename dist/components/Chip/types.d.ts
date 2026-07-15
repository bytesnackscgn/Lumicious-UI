export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipVariant = 'glass' | 'solid' | 'outline';
export interface ChipProps {
    label?: string;
    size?: ChipSize;
    variant?: ChipVariant;
    color?: string;
    icon?: string;
    removable?: boolean;
}
