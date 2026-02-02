import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LRange from './LRange.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Form/Range',
  component: LRange,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    label: { control: 'boolean' },
    color: { control: 'color' },
  },
  args: {
    modelValue: { min: 30, max: 70 },
    min: 0,
    max: 100,
    step: 1,
    label: true,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-12 bg-slate-900 flex items-center justify-center text-white w-full max-w-sm mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomStep: Story = {
  args: {
    step: 5,
    modelValue: { min: 20, max: 80 },
  },
};
