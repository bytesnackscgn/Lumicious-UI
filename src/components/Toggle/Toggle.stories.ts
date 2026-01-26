import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LToggle from './LToggle.vue';

const meta = {
  title: 'Lumodo/Form/Toggle',
  component: LToggle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    disable: { control: 'boolean' },
    leftLabel: { control: 'boolean' },
    icon: { control: 'text' },
    checkedIcon: { control: 'text' },
    uncheckedIcon: { control: 'text' },
  },
  args: {
    modelValue: true,
    label: 'Notifications',
    size: 'md',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    checkedIcon: 'check',
    uncheckedIcon: 'x',
    modelValue: false,
    label: 'Status',
  },
};

export const DarkMode: Story = {
  args: {
    checkedIcon: 'moon',
    uncheckedIcon: 'sun',
    modelValue: true,
    label: 'Theme',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LToggle },
    setup() { return { args }; },
    template: `
      <div class="flex items-center gap-4">
        <LToggle v-bind="args" size="xs" label="XS" />
        <LToggle v-bind="args" size="sm" label="SM" />
        <LToggle v-bind="args" size="md" label="MD" />
        <LToggle v-bind="args" size="lg" label="LG" />
        <LToggle v-bind="args" size="xl" label="XL" />
      </div>
    `,
  }),
};
