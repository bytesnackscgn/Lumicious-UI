import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LChip from './LChip.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Chip',
  component: LChip,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    icon: { control: 'text' },
    removable: { control: 'boolean' },
  },
  args: {
    label: 'Design',
    size: 'md',
    variant: 'glass',
    removable: false,
    onRemove: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'tag',
    label: 'Categorized',
  },
};

export const Removable: Story = {
  args: {
    removable: true,
    label: 'Deletable',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LChip },
    setup() { return { args }; },
    template: `
      <div class="flex items-end gap-3">
        <LChip label="Small" size="sm" />
        <LChip label="Medium" size="md" />
        <LChip label="Large" size="lg" />
      </div>
    `,
  }),
};
