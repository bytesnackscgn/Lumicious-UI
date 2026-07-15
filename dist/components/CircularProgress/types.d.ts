export type CircularProgressSize = string | number;
export interface CircularProgressProps {
    value?: number;
    size?: CircularProgressSize;
    thickness?: number;
    indeterminate?: boolean;
    color?: string;
    trackColor?: string;
    instantFeedback?: boolean;
    class?: string;
}
