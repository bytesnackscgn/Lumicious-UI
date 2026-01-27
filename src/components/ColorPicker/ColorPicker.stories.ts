import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LColorPicker from './LColorPicker.vue';

const meta = {
  title: 'Lumodo/ColorPicker',
  component: LColorPicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    format: { control: 'select', options: ['hex', 'rgb', 'hsl'] },
    disabled: { control: 'boolean' },
    showAlpha: { control: 'boolean' },
    modelValue: { control: 'color' },
  },
  args: {
    modelValue: '#3B82F6',
    size: 'md',
    format: 'hex',
    disabled: false,
    showAlpha: false,
    'update:modelValue': fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center min-h-[400px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    modelValue: '#3B82F6',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    modelValue: '#EF4444',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    modelValue: '#10B981',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: '#F59E0B',
  },
};

export const WithCustomColors: Story = {
  args: {
    presetColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    modelValue: '#4ECDC4',
  },
};

export const DifferentFormats: Story = {
  render: (args) => ({
    components: { LColorPicker },
    setup() { return { args }; },
    template: `
      <div class="space-y-6">
        <div class="text-white text-sm mb-2">HEX Format</div>
        <LColorPicker v-model="args.modelValue" format="hex" />
        
        <div class="text-white text-sm mb-2 mt-4">RGB Format</div>
        <LColorPicker v-model="args.modelValue" format="rgb" />
        
        <div class="text-white text-sm mb-2 mt-4">HSL Format</div>
        <LColorPicker v-model="args.modelValue" format="hsl" />
      </div>
    `,
  }),
  args: {
    modelValue: '#8B5CF6',
  },
};