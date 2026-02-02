import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LRadio from './LRadio.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Form/Radio',
  component: LRadio,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    label: { control: 'text' },
    disable: { control: 'boolean' },
    leftLabel: { control: 'boolean' },
  },
  args: {
    modelValue: 'option1',
    val: 'option1',
    label: 'Select me',
    size: 'md',
    'onUpdate:modelValue': fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { LRadio },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-2">
        <LRadio v-bind="args" :modelValue="'opt2'" val="opt1" label="Option 1" />
        <LRadio v-bind="args" :modelValue="'opt2'" val="opt2" label="Option 2" />
        <LRadio v-bind="args" :modelValue="'opt2'" val="opt3" label="Option 3" />
        <p class="text-xs text-white/40 mt-4">Current selection: "opt2"</p>
      </div>
    `,
  }),
};
