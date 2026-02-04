import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LAvatarStack from './LAvatarStack.vue';

const meta: Meta<any> = {
  title: 'Lumicious/AvatarStack',
  component: LAvatarStack,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    rounded: { control: 'boolean' },
    limit: { control: 'number' },
    expandOnHover: { control: 'boolean' },
    position: { control: 'radio', options: ['right', 'left'] },
  },
  args: {
    size: 'md',
    rounded: true,
    limit: 5,
    expandOnHover: true,
    position: 'right',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LAvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

const users = [
  { name: 'John Doe', src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop' },
  { name: 'Jane Smith', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Robert Johnson', src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop' },
  { name: 'Emily Davis', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  { name: 'Michael Wilson', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Sarah Brown', src: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=200&h=200&fit=crop' },
  { name: 'David Miller', src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop' },
  { name: 'Lisa Anderson', src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop' },
];

const initialUsers = [
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Robert Johnson' },
  { name: 'Emily Davis' },
  { name: 'Michael Wilson' },
];

const iconUsers = [
  { icon: 'user' },
  { icon: 'settings' },
  { icon: 'bell' },
  { icon: 'star' },
  { icon: 'heart' },
];

const mixedUsers = [
  { name: 'John Doe', src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop' },
  { name: 'Jane Smith' },
  { icon: 'settings' },
  { name: 'Emily Davis', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  { icon: 'star' },
];

export const Default: Story = {
  args: {
    items: users,
  },
};

export const Small: Story = {
  args: {
    items: users,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items: users,
    size: 'lg',
  },
};

export const Limited: Story = {
  args: {
    items: users,
    limit: 3,
  },
};

export const Reverse: Story = {
  args: {
    items: users,
    position: 'left',
  },
};

export const NoHover: Story = {
  args: {
    items: users,
    expandOnHover: false,
  },
};

export const CustomSize: Story = {
    args: {
        items: users,
        size: 50,
    }
}

export const Initials: Story = {
  args: {
    items: initialUsers,
  },
};

export const Icons: Story = {
  args: {
    items: iconUsers,
  },
};

export const Mixed: Story = {
  args: {
    items: mixedUsers,
  },
};

export const Square: Story = {
  args: {
    items: users,
    rounded: false,
  },
};
