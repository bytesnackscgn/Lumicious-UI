import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, watch } from 'vue';
import LNumberInput from './LNumberInput.vue';

const meta: Meta<typeof LNumberInput> = {
  title: 'Lumicious/Form/NumberInput',
  component: LNumberInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    layout: { control: 'select', options: ['left', 'right', 'split'] },
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    loading: { control: 'boolean' },
    dense: { control: 'boolean' },
    disable: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
  args: {
    modelValue: 0,
    min: -10,
    max: 10,
    step: 1,
    layout: 'right',
    label: 'Number Input',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white w-full max-w-sm mx-auto"><story /></div>',
    }),
  ],
  render: (args) => ({
    components: { LNumberInput },
    setup() {
      const val = ref(args.modelValue);
      
      watch(
        () => args.modelValue,
        (newVal) => {
          val.value = newVal;
        }
      );

      return { args, val };
    },
    template: '<LNumberInput v-bind="args" v-model="val" />',
  }),
};

export default meta;

type Story = StoryObj<typeof LNumberInput>;

export const Default: Story = {};

export const LayoutLeft: Story = {
  args: {
    layout: 'left',
    label: 'Left Controls',
  },
};

export const LayoutSplit: Story = {
  args: {
    layout: 'split',
    label: 'Split Controls',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorMessage: 'Value is invalid',
    modelValue: 15,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
