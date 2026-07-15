export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
export interface AvatarProps {
    src?: string;
    name?: string;
    size?: AvatarSize;
    rounded?: boolean;
    square?: boolean;
    bordered?: boolean;
    icon?: string;
    color?: string;
}
