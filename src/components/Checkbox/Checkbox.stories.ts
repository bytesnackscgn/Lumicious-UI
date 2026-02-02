import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LCheckbox from './LCheckbox.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Form/Checkbox',
  component: LCheckbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    disable: { control: 'boolean' },
    leftLabel: { control: 'boolean' },
  },
  args: {
    modelValue: true,
    label: 'Check me',
    size: 'md',
    'onUpdate:modelValue': fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ArraySelection: Story = {
  render: (args) => ({
    components: { LCheckbox },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-2">
        <LCheckbox v-bind="args" :modelValue="['val1']" val="val1" label="Option 1" />
        <LCheckbox v-bind="args" :modelValue="['val1']" val="val2" label="Option 2" />
        <p class="text-xs text-white/40 mt-4">Current selection: ["val1"]</p>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LCheckbox },
    setup() { return { args }; },
    template: `
      <div class="flex items-center gap-4">
        <LCheckbox v-bind="args" size="xs" label="XS" />
        <LCheckbox v-bind="args" size="sm" label="SM" />
        <LCheckbox v-bind="args" size="md" label="MD" />
        <LCheckbox v-bind="args" size="lg" label="LG" />
        <LCheckbox v-bind="args" size="xl" label="XL" />
      </div>
    `,
  }),
};
