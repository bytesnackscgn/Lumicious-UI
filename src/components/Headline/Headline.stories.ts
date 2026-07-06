import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LHeadline from './LHeadline.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Typography/Headline',
  component: LHeadline,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number', min: 1, max: 6 },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] },
    color: { control: 'select', options: ['white', 'blue', 'purple', 'pink', 'green', 'yellow', 'red', 'indigo'] },
    gradient: { control: 'boolean' },
    gradientDirection: { control: 'select', options: ['to-r', 'to-l', 'to-t', 'to-b', 'to-tr', 'to-tl', 'to-br', 'to-bl'] },
    content: { control: 'text' },
  },
  args: {
    level: 2,
    gradient: false,
    color: 'white',
    gradientDirection: 'to-r',
    content: 'Lumicious UI Headline',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex flex-col items-center justify-center"><story /></div>',
    }),
  ],
};

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

export const Default: Story = {
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `<LHeadline v-bind="args">{{ args.content }}</LHeadline>`,
  }),
};

export const Gradient: Story = {
  args: {
    gradient: true,
    level: 1,
    size: '5xl',
  },
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `<LHeadline v-bind="args">{{ args.content }}</LHeadline>`,
  }),
};

export const Levels: Story = {
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline :level="1" v-bind="args">{{ args.content }} 1</LHeadline>
        <LHeadline :level="2" v-bind="args">{{ args.content }} 2</LHeadline>
        <LHeadline :level="3" v-bind="args">{{ args.content }} 3</LHeadline>
        <LHeadline :level="4" v-bind="args">{{ args.content }} 4</LHeadline>
        <LHeadline :level="5" v-bind="args">{{ args.content }} 5</LHeadline>
        <LHeadline :level="6" v-bind="args">{{ args.content }} 6</LHeadline>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline color="primary">{{ args.content }} Primary</LHeadline>
        <LHeadline color="secondary">{{ args.content }} Secondary</LHeadline>
        <LHeadline color="tertiary">{{ args.content }} Tertiary</LHeadline>
        <LHeadline color="white">{{ args.content }} White</LHeadline>
        <LHeadline color="blue">{{ args.content }} Blue</LHeadline>
        <LHeadline color="purple">{{ args.content }} Purple</LHeadline>
        <LHeadline color="pink">{{ args.content }} Pink</LHeadline>
        <LHeadline color="green">{{ args.content }} Green</LHeadline>
        <LHeadline color="yellow">{{ args.content }} Yellow</LHeadline>
        <LHeadline color="red">{{ args.content }} Red</LHeadline>
        <LHeadline color="indigo">{{ args.content }} Indigo</LHeadline>
      </div>
    `,
  }),
};

export const GradientColors: Story = {
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline color="white" :gradient="true">{{ args.content }} White</LHeadline>
        <LHeadline color="blue" :gradient="true">{{ args.content }} Blue</LHeadline>
        <LHeadline color="purple" :gradient="true">{{ args.content }} Purple</LHeadline>
        <LHeadline color="pink" :gradient="true">{{ args.content }} Pink</LHeadline>
        <LHeadline color="green" :gradient="true">{{ args.content }} Green</LHeadline>
        <LHeadline color="yellow" :gradient="true">{{ args.content }} Yellow</LHeadline>
        <LHeadline color="red" :gradient="true">{{ args.content }} Red</LHeadline>
        <LHeadline color="indigo" :gradient="true">{{ args.content }} Indigo</LHeadline>
      </div>
    `,
  }),
};

export const GradientDirections: Story = {
  render: (args: any) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-6">
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-r">{{ args.content }} Right</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-l">{{ args.content }} Left</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-t">{{ args.content }} Top</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-b">{{ args.content }} Bottom</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-tr">{{ args.content }} Top-Right</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-tl">{{ args.content }} Top-Left</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-br">{{ args.content }} Bottom-Right</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-bl">{{ args.content }} Bottom-Left</LHeadline>
        </div>
      </div>
    `,
  }),
};
