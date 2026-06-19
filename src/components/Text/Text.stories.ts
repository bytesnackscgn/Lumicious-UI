import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LText from './LText.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Typography/Text',
  component: LText,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    weight: { control: 'select', options: ['light', 'normal', 'medium', 'semibold', 'bold', 'black'] },
    gradient: { control: 'boolean' },
    tag: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    size: 'md',
    weight: 'normal',
    gradient: false,
    content: 'Lumicious UI Text Content',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
}

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

export const Default: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() { return { args }; },
    template: `<LText v-bind="args">{{ args.content }}</LText>`,
  }),
};

export const Gradient: Story = {
  args: {
    gradient: true,
    weight: 'bold',
    size: 'xl',
  },
  render: (args: any) => ({
    components: { LText },
    setup() { return { args }; },
    template: `<LText v-bind="args">{{ args.content }}</LText>`,
  }),
};

export const Sizes: Story = {
  render: (args: any) => ({
    components: { LText },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-2">
        <LText size="xs" v-bind="args">{{ args.content }} XS</LText>
        <LText size="sm" v-bind="args">{{ args.content }} SM</LText>
        <LText size="md" v-bind="args">{{ args.content }} MD</LText>
        <LText size="lg" v-bind="args">{{ args.content }} LG</LText>
        <LText size="xl" v-bind="args">{{ args.content }} XL</LText>
        <LText size="2xl" v-bind="args">{{ args.content }} 2XL</LText>
      </div>
    `,
  }),
};