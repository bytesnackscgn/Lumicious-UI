export type SkeletonType = 'text' | 'rect' | 'circle' | 'QBtn' | 'QBadge' | 'QChip' | 'QToolbar';
export interface SkeletonProps {
    type?: SkeletonType;
    animation?: 'wave' | 'pulse' | 'none';
    width?: string;
    height?: string;
    size?: string;
    bordered?: boolean;
    square?: boolean;
    class?: string;
}
