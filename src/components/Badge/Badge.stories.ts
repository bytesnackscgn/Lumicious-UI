import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LBadge from './LBadge.vue';

const meta = {
  title: 'Lumodo/Badge',
  component: LBadge,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'info', 'warning', 'white'] },
    pill: { control: 'boolean' },
    floating: { control: 'boolean' },
  },
  args: {
    label: '99+',
    size: 'md',
    variant: 'glass',
    color: 'primary',
    pill: true,
    floating: false
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glass: Story = {
  args: {
    variant: 'glass',
    label: 'New',
    color: 'primary'
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Hot',
    color: 'negative'
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Draft',
    color: 'primary'
  },
};

export const Floating: Story = {
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="p-12 bg-slate-900 flex items-center justify-center">
          <div class="w-12 h-12 bg-white/10 glass rounded-lg relative">
            <story />
          </div>
        </div>
      `,
    }),
  ],
  args: {
    floating: true,
    label: '1',
    pill: true,
    color: 'negative'
  },
};
