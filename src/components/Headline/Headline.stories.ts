import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LHeadline from './LHeadline.vue';

const meta = {
  title: 'Lumodo/Typography/Headline',
  component: LHeadline,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number', min: 1, max: 6 },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] },
    color: { control: 'select', options: ['white', 'blue', 'purple', 'pink', 'green', 'yellow', 'red', 'indigo'] },
    gradient: { control: 'boolean' },
    gradientDirection: { control: 'select', options: ['to-r', 'to-l', 'to-t', 'to-b', 'to-tr', 'to-tl', 'to-br', 'to-bl'] },
  },
  args: {
    level: 2,
    gradient: false,
    color: 'white',
    gradientDirection: 'to-r',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex flex-col items-center justify-center text-white"><story>Lumodo UI Headline</story></div>',
    }),
  ],
} satisfies Meta<typeof LHeadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
  args: {
    gradient: true,
    level: 1,
    size: '5xl',
  },
};

export const Levels: Story = {
  render: (args) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline :level="1">Headline Level 1</LHeadline>
        <LHeadline :level="2">Headline Level 2</LHeadline>
        <LHeadline :level="3">Headline Level 3</LHeadline>
        <LHeadline :level="4">Headline Level 4</LHeadline>
        <LHeadline :level="5">Headline Level 5</LHeadline>
        <LHeadline :level="6">Headline Level 6</LHeadline>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: (args) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline color="white">White Headline</LHeadline>
        <LHeadline color="blue">Blue Headline</LHeadline>
        <LHeadline color="purple">Purple Headline</LHeadline>
        <LHeadline color="pink">Pink Headline</LHeadline>
        <LHeadline color="green">Green Headline</LHeadline>
        <LHeadline color="yellow">Yellow Headline</LHeadline>
        <LHeadline color="red">Red Headline</LHeadline>
        <LHeadline color="indigo">Indigo Headline</LHeadline>
      </div>
    `,
  }),
};

export const GradientColors: Story = {
  render: (args) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline color="white" :gradient="true">White Gradient</LHeadline>
        <LHeadline color="blue" :gradient="true">Blue Gradient</LHeadline>
        <LHeadline color="purple" :gradient="true">Purple Gradient</LHeadline>
        <LHeadline color="pink" :gradient="true">Pink Gradient</LHeadline>
        <LHeadline color="green" :gradient="true">Green Gradient</LHeadline>
        <LHeadline color="yellow" :gradient="true">Yellow Gradient</LHeadline>
        <LHeadline color="red" :gradient="true">Red Gradient</LHeadline>
        <LHeadline color="indigo" :gradient="true">Indigo Gradient</LHeadline>
      </div>
    `,
  }),
};

export const GradientDirections: Story = {
  render: (args) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-6">
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-r">Right Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-l">Left Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-t">Top Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-b">Bottom Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-tr">Top-Right Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-tl">Top-Left Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-br">Bottom-Right Gradient</LHeadline>
        </div>
        <div class="text-center">
          <LHeadline color="purple" :gradient="true" gradient-direction="to-bl">Bottom-Left Gradient</LHeadline>
        </div>
      </div>
    `,
  }),
};
