export interface ListProps {
    bordered?: boolean;
    padding?: boolean;
    dense?: boolean;
    separator?: boolean;
    class?: string;
}
export interface ItemProps {
    clickable?: boolean;
    active?: boolean;
    dense?: boolean;
    disabled?: boolean;
    to?: string;
    tag?: string;
    class?: string;
    label?: string;
    icon?: string;
    caption?: string;
}
export interface ItemSectionProps {
    side?: boolean;
    top?: boolean;
    thumbnail?: boolean;
    avatar?: boolean;
    class?: string;
}
