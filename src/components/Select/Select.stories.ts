import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LSelect from './LSelect.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Form/Select',
  component: LSelect,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    useChips: { control: 'boolean' },
    label: { control: 'text' },
    options: { control: 'object' },
  },
  args: {
    label: 'Framework',
    options: [
        { label: 'Vue.js', value: 'vue', description: 'The progressive framework' },
        { label: 'React', value: 'react', description: 'A JavaScript library for building UIs' },
        { label: 'Angular', value: 'angular', description: 'The platform for the future' },
        { label: 'Svelte', value: 'svelte', description: 'Cybernetically enhanced web apps', disable: true },
    ],
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[400px] flex items-start justify-center text-white w-full max-w-sm mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 'vue',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    modelValue: ['vue', 'react'],
  },
};

export const Chips: Story = {
  args: {
    multiple: true,
    useChips: true,
    modelValue: ['vue', 'react'],
  },
};
