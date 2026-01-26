import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LSeparator from './LSeparator.vue';

const meta = {
  title: 'Lumodo/Separator',
  component: LSeparator,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    color: { control: 'select', options: ['white', 'glass', 'dark'] },
    inset: { control: 'boolean' },
  },
  args: {
    orientation: 'horizontal',
    inset: false,
    color: 'white',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[100px] flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LSeparator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 h-[200px] flex items-center justify-center"><story /></div>',
    }),
  ],
  args: {
    orientation: 'vertical',
  },
};

export const Inset: Story = {
  args: {
    inset: true,
  },
};

export const Glass: Story = {
  args: {
    color: 'glass',
  },
};
