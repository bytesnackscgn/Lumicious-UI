import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LText from './LText.vue';

const meta = {
  title: 'Lumodo/Typography/Text',
  component: LText,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    weight: { control: 'select', options: ['light', 'normal', 'medium', 'semibold', 'bold', 'black'] },
    gradient: { control: 'boolean' },
    tag: { control: 'text' },
  },
  args: {
    size: 'md',
    weight: 'normal',
    gradient: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story>Lumodo UI Text Content</story></div>',
    }),
  ],
} satisfies Meta<typeof LText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
  args: {
    gradient: true,
    weight: 'bold',
    size: 'xl',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LText },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-2">
        <LText size="xs">Extra Small Text</LText>
        <LText size="sm">Small Text</LText>
        <LText size="md">Medium (Default) Text</LText>
        <LText size="lg">Large Text</LText>
        <LText size="xl">Extra Large Text</LText>
        <LText size="2xl">2XL Text</LText>
      </div>
    `,
  }),
};
