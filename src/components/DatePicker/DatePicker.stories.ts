import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LDatePicker from './LDatePicker.vue';

const meta: Meta<any> = {
  title: 'Lumodo/DatePicker',
  component: LDatePicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    mode: { control: 'select', options: ['single', 'range', 'multiple'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    showTimePicker: { control: 'boolean' },
    timeFormat: { control: 'select', options: ['12h', '24h'] },
  },
  args: {
    modelValue: undefined,
    size: 'md',
    variant: 'glass',
    mode: 'single',
    disabled: false,
    readonly: false,
    placeholder: 'Select date',
    format: 'YYYY-MM-DD',
    locale: 'en',
    startView: 'day',
    weekStartsOn: 1,
    showTimePicker: false,
    timeFormat: '24h',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center min-h-[500px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    modelValue: undefined,
  },
};

export const SingleMode: Story = {
  args: {
    mode: 'single',
    placeholder: 'Select a date',
  },
};

export const RangeMode: Story = {
  args: {
    mode: 'range',
    placeholder: 'Select date range',
  },
};

export const MultipleMode: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple dates',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    modelValue: undefined,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    modelValue: undefined,
  },
};

export const SolidVariant: Story = {
  args: {
    variant: 'solid',
    modelValue: undefined,
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    modelValue: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: undefined,
  },
};

export const WithDateRange: Story = {
  args: {
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
    modelValue: undefined,
  },
};

export const DifferentViews: Story = {
  render: (args) => ({
    components: { LDatePicker },
    setup() { return { args }; },
    template: `
      <div class="space-y-6">
        <div class="text-white text-sm mb-2">Day View</div>
        <LDatePicker v-model="args.modelValue" start-view="day" />
        
        <div class="text-white text-sm mb-2 mt-4">Month View</div>
        <LDatePicker v-model="args.modelValue" start-view="month" />
        
        <div class="text-white text-sm mb-2 mt-4">Year View</div>
        <LDatePicker v-model="args.modelValue" start-view="year" />
      </div>
    `,
  }),
  args: {
    modelValue: undefined,
  },
};