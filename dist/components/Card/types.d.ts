export type CardVariant = 'glass' | 'glass-dark' | 'solid' | 'outline';
export interface CardProps {
    title?: string;
    subtitle?: string;
    variant?: CardVariant;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
