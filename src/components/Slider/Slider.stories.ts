import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LSlider from './LSlider.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Form/Slider',
  component: LSlider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    label: { control: 'boolean' },
    color: { control: 'color' },
  },
  args: {
    modelValue: 50,
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
} satisfies Meta<typeof LSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.75,
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    modelValue: 30,
  },
};
