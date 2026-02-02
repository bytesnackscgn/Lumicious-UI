import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LSpinner from './LSpinner.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Progress/Spinner',
  component: LSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: { control: 'color' },
    thickness: { control: 'number' },
  },
  args: {
    size: 'md',
    thickness: 5,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    color: '#3b82f6',
    size: 'lg',
  },
};

export const Thick: Story = {
  args: {
    thickness: 10,
    size: 'xl',
  },
};
