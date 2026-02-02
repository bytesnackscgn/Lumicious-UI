import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LRating from './LRating.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Form/Rating',
  component: LRating,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
    icon: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  args: {
    modelValue: 3,
    max: 5,
    icon: 'star',
    size: 'md',
    color: '#eab308'
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hearts: Story = {
  args: {
    icon: 'heart',
    color: '#ff4d4f',
    modelValue: 4,
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    max: 10,
    modelValue: 7,
  },
};
