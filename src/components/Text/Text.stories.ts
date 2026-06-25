import type { Meta, StoryObj } from "@storybook/vue3-vite";
import LText from "./LText.vue";

const meta: Meta<any> = {
  title: "Lumicious/Typography/Text",
  component: LText,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold", "black"],
    },
    color: { control: 'select', options: ['white', 'blue', 'purple', 'pink', 'green', 'yellow', 'red', 'indigo'] },
    gradient: { control: "boolean" },
    gradientDirection: { control: 'select', options: ['to-r', 'to-l', 'to-t', 'to-b', 'to-tr', 'to-tl', 'to-br', 'to-bl'] },
    tag: { control: "text" },
    content: { control: "text" },
  },
  args: {
    size: "md",
    weight: "normal",
    gradient: false,
    content: "Lumicious UI Text Content",
  },
  decorators: [
    (story) => ({
      components: { story },
      template:
        '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
};

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

export const Default: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `<LText v-bind="args">{{ args.content }}</LText>`,
  }),
};

export const Gradient: Story = {
  args: {
    gradient: true,
    weight: "bold",
    size: "xl",
  },
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `<LText v-bind="args">{{ args.content }}</LText>`,
  }),
};

export const Sizes: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-2">
        <LText v-bind="{...args, size: 'xs'}">{{ args.content }} XS</LText>
        <LText v-bind="{...args, size: 'sm'}">{{ args.content }} SM</LText>
        <LText v-bind="{...args, size: 'md'}">{{ args.content }} MD</LText>
        <LText v-bind="{...args, size: 'lg'}">{{ args.content }} LG</LText>
        <LText v-bind="{...args, size: 'xl'}">{{ args.content }} XL</LText>
        <LText v-bind="{...args, size: '2xl'}">{{ args.content }} 2XL</LText>
      </div>
    `,
  }),
};

export const TextTagVariants: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <LText tag="h1">This is h1</LText>
        <LText tag="h2">This is h2</LText>
        <LText tag="h3">This is h3</LText>
        <LText tag="h4">This is h4</LText>
        <LText tag="h5">This is h5</LText>
        <LText tag="h6">This is h6</LText>
        <LText tag="p">{{ args.content }} Paragraph</LText>
        <LText tag="b">{{ args.content }} Bold</LText>
        <LText tag="strong">{{ args.content }} Strong</LText>
        <LText tag="span">{{ args.content }} Span</LText>
        <LText tag="em">{{ args.content }} Emphasized</LText>
        <LText tag="i">{{ args.content }} Italic</LText>
        <LText tag="u">{{ args.content }} Underlined</LText>
        <LText tag="mark">{{ args.content }} Marked</LText>
        <LText tag="small">{{ args.content }} Small</LText>
        <LText tag="del">{{ args.content }} Deleted</LText>
        <LText tag="s">{{ args.content }} Strikethrough</LText>
        <LText tag="ins">{{ args.content }} Inserted</LText>
        <LText tag="sub">{{ args.content }} Subscript</LText>
        <LText tag="sup">{{ args.content }} Superscript</LText>
        <LText tag="code">{{ args.content }} Code</LText>
        <LText tag="kbd">{{ args.content }} Keyboard</LText>
        <LText tag="cite">{{ args.content }} Citation</LText>
        <LText tag="q">{{ args.content }} Inline Quote</LText>
        <LText tag="blockquote">{{ args.content }} Blockquote</LText>
        <LText tag="pre">{{ args.content }} Preformatted</LText>
        <ul>
          <LText tag="li">List Item 1</LText>
          <LText tag="li">List Item 2</LText>
          <LText tag="li">List Item 3</LText>
        </ul>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <LText color="white">{{ args.content }} White</LText>
        <LText color="blue">{{ args.content }} Blue</LText>
        <LText color="purple">{{ args.content }} Purple</LText>
        <LText color="pink">{{ args.content }} Pink</LText>
        <LText color="green">{{ args.content }} Green</LText>
        <LText color="yellow">{{ args.content }} Yellow</LText>
        <LText color="red">{{ args.content }} Red</LText>
        <LText color="indigo">{{ args.content }} Indigo</LText>
      </div>
    `,
  }),
};

export const GradientColors: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <LText color="white" :gradient="true">{{ args.content }} White</LText>
        <LText color="blue" :gradient="true">{{ args.content }} Blue</LText>
        <LText color="purple" :gradient="true">{{ args.content }} Purple</LText>
        <LText color="pink" :gradient="true">{{ args.content }} Pink</LText>
        <LText color="green" :gradient="true">{{ args.content }} Green</LText>
        <LText color="yellow" :gradient="true">{{ args.content }} Yellow</LText>
        <LText color="red" :gradient="true">{{ args.content }} Red</LText>
        <LText color="indigo" :gradient="true">{{ args.content }} Indigo</LText>
      </div>
    `,
  }),
};

export const GradientDirections: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-6">
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-r">{{ args.content }} Right</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-l">{{ args.content }} Left</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-t">{{ args.content }} Top</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-b">{{ args.content }} Bottom</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-tr">{{ args.content }} Top-Right</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-tl">{{ args.content }} Top-Left</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-br">{{ args.content }} Bottom-Right</LText>
        </div>
        <div class="text-center">
          <LText color="purple" :gradient="true" gradient-direction="to-bl">{{ args.content }} Bottom-Left</LText>
        </div>
      </div>
    `,
  }),
};
