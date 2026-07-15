export declare const defaultCvaGradientOptions: {
    "to-r": string;
    "to-l": string;
    "to-t": string;
    "to-b": string;
    "to-tr": string;
    "to-tl": string;
    "to-br": string;
    "to-bl": string;
};
export declare const _gradientDirectionClasses: string[];
export declare const gradientColors: Record<string, string>;
export declare const gradientOptions: ({
    gradient: boolean;
    color: string;
    class: string | undefined;
    gradientDirection?: undefined;
} | {
    gradient: boolean;
    color: string;
    gradientDirection: string;
    class: string;
})[];
