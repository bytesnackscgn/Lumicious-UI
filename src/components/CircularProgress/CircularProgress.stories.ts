import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LCircularProgress from './LCircularProgress.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Progress/CircularProgress',
  component: LCircularProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'text' },
    thickness: { control: 'number' },
    indeterminate: { control: 'boolean' },
    color: { control: 'color' },
  },
  args: {
    value: 65,
    size: '64px',
    thickness: 4,
    indeterminate: false,
    color: '#3b82f6',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LCircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    size: '48px',
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { LCircularProgress },
    setup() { return { args }; },
    template: `
      <LCircularProgress v-bind="args">
        <span class="text-xs font-black">{{ args.value }}%</span>
      </LCircularProgress>
    `,
  }),
};
