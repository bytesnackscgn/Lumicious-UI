import { VariantProps } from 'class-variance-authority';
export declare const headlineStyles: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | null | undefined;
    color?: "primary" | "secondary" | "white" | "tertiary" | "blue" | "purple" | "pink" | "green" | "yellow" | "red" | "indigo" | null | undefined;
    gradient?: boolean | null | undefined;
    gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type HeadlineVariants = VariantProps<typeof headlineStyles>;
