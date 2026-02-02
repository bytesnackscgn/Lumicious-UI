import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LIcon from './LIcon.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Icon',
  component: LIcon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: { control: 'color' },
    strokeWidth: { control: 'number' },
  },
  args: {
    name: 'activity',
    size: 'md',
    strokeWidth: 2,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'activity',
  },
};

export const Colored: Story = {
  args: {
    name: 'heart',
    color: '#ff4d4f',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LIcon },
    setup() { return { args }; },
    template: `
      <div class="flex items-end gap-4">
        <LIcon name="settings" size="xs" />
        <LIcon name="settings" size="sm" />
        <LIcon name="settings" size="md" />
        <LIcon name="settings" size="lg" />
        <LIcon name="settings" size="xl" />
      </div>
    `,
  }),
};
