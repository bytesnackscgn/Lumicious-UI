export type ProgressColor = 'primary' | 'positive' | 'negative' | 'warning' | 'info' | 'white';
export interface LinearProgressProps {
    value?: number;
    buffer?: number;
    indeterminate?: boolean;
    query?: boolean;
    color?: ProgressColor | string;
    trackColor?: string;
    height?: string;
    rounded?: boolean;
    class?: string;
}
