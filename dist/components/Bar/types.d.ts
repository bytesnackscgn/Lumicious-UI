export type BarPosition = 'top' | 'bottom' | 'left' | 'right';
export interface BarProps {
    position?: BarPosition;
    fixed?: boolean;
    blur?: boolean;
    width?: number;
    height?: number;
    padding?: string;
    rounded?: boolean;
    dense?: boolean;
    wrapperPadding?: string;
    class?: string;
}
