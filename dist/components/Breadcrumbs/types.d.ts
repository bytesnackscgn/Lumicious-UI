import { Component } from 'vue';
export type BreadcrumbSize = "sm" | "md" | "lg";
export type BreadcrumbColor = "primary" | "secondary" | "white";
export interface BreadcrumbItem {
    label: string;
    href?: string;
    disabled?: boolean;
    rel?: string;
    /** Lucide icon name to render as prefix via LIcon */
    icon?: string;
    /** Args passed to the custom linkComponent when rendering this item */
    args?: Record<string, unknown>;
    /** Per-item click handler. Fires before the global onClick. */
    onClick?: (item: BreadcrumbItem) => void;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    size?: BreadcrumbSize;
    color?: BreadcrumbColor;
    separator?: string;
    maxItems?: number;
    ellipsis?: boolean;
    /** Custom link component for rendering items with href (e.g. NuxtLink, RouterLink) */
    linkComponent?: string | Component;
    /** Custom click handler. Called when a non-disabled item is clicked. */
    onClick?: (item: BreadcrumbItem) => void;
}
