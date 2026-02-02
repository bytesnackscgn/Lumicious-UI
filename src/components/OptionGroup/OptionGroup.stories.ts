import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LOptionGroup from './LOptionGroup.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Form/OptionGroup',
  component: LOptionGroup,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['radio', 'checkbox', 'toggle'] },
    inline: { control: 'boolean' },
    dense: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  args: {
    options: [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2', disable: true },
        { label: 'Option 3', value: 'opt3' },
    ],
    type: 'radio',
    modelValue: 'opt1',
    inline: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LOptionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio: Story = {};

export const CheckboxItems: Story = {
  args: {
    type: 'checkbox',
    modelValue: ['opt1', 'opt3'],
  },
};

export const Toggles: Story = {
  args: {
    type: 'toggle',
    modelValue: ['opt1'],
    inline: true,
  },
};
