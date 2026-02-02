import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LAvatar from './LAvatar.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Avatar',
  component: LAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    rounded: { control: 'boolean' },
    bordered: { control: 'boolean' },
    src: { control: 'text' },
    name: { control: 'text' },
    icon: { control: 'text' },
  },
  args: {
    size: 'md',
    rounded: true,
    bordered: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    name: 'John Doe',
  },
};

export const Initials: Story = {
  args: {
    name: 'Jane Smith',
  },
};

export const Icon: Story = {
  args: {
    icon: 'user',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LAvatar },
    setup() { return { args }; },
    template: `
      <div class="flex items-end gap-4">
        <LAvatar name="XS" size="xs" />
        <LAvatar name="SM" size="sm" />
        <LAvatar name="MD" size="md" />
        <LAvatar name="LG" size="lg" />
        <LAvatar name="XL" size="xl" />
      </div>
    `,
  }),
};

export const Square: Story = {
  args: {
    name: 'SQ',
    rounded: false,
    size: 'lg',
  },
};

export const Bordered: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bordered: true,
    size: 'lg',
  },
};
