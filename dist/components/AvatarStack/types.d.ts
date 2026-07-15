import { AvatarProps, AvatarSize } from '../Avatar/types';
export interface AvatarStackProps {
    items: AvatarProps[];
    limit?: number;
    size?: AvatarSize;
    rounded?: boolean;
    bordered?: boolean;
    expandOnHover?: boolean;
    position?: 'right' | 'left';
}
