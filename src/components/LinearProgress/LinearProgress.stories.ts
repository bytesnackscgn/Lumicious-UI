import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LLinearProgress from './LLinearProgress.vue';

const meta = {
  title: 'Lumodo/Progress/LinearProgress',
  component: LLinearProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    color: { control: 'select', options: ['primary', 'positive', 'negative', 'warning', 'info', 'white'] },
    indeterminate: { control: 'boolean' },
    query: { control: 'boolean' },
  },
  args: {
    value: 0.5,
    indeterminate: false,
    query: false,
    color: 'primary',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex flex-col items-center justify-center text-white w-full max-w-md mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LLinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    color: 'white',
  },
};

export const Query: Story = {
  args: {
    query: true,
    color: 'info',
  },
};

export const Colors: Story = {
  render: (args) => ({
    components: { LLinearProgress },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4 w-full">
        <LLinearProgress :value="0.2" color="primary" />
        <LLinearProgress :value="0.4" color="positive" />
        <LLinearProgress :value="0.6" color="warning" />
        <LLinearProgress :value="0.8" color="negative" />
      </div>
    `,
  }),
};
