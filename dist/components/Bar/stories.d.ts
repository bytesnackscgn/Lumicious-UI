import { StoryObj } from '@storybook/vue3-vite';
import { default as LBar } from './LBar.vue';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').BarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            fixed: boolean;
            rounded: boolean;
            width: number;
            height: number;
            position: import('./types').BarPosition;
            dense: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./types').BarProps> & Readonly<{}>, {}, {}, {}, {}, {
            fixed: boolean;
            rounded: boolean;
            width: number;
            height: number;
            position: import('./types').BarPosition;
            dense: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./types').BarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        fixed: boolean;
        rounded: boolean;
        width: number;
        height: number;
        position: import('./types').BarPosition;
        dense: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        } & {
            default?: (props: {}) => any;
        };
    });
    tags: string[];
    argTypes: {
        position: {
            control: "select";
            options: string[];
        };
        fixed: {
            control: "boolean";
        };
        rounded: {
            control: "boolean";
        };
        dense: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof LBar>;
export declare const Default: Story;
export declare const RoundedNone: Story;
export declare const Fixed: Story;
export declare const LeftPosition: Story;
export declare const RightPosition: Story;
export declare const Dense: Story;
export declare const LeftFixed: Story;
