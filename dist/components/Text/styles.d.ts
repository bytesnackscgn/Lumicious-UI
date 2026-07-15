import { VariantProps } from 'class-variance-authority';
export declare const textStyles: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "xs" | "2xl" | null | undefined;
    weight?: "bold" | "light" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    color?: "primary" | "secondary" | "white" | "tertiary" | "blue" | "purple" | "pink" | "green" | "yellow" | "red" | "indigo" | null | undefined;
    gradient?: boolean | null | undefined;
    gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TextVariants = VariantProps<typeof textStyles>;
