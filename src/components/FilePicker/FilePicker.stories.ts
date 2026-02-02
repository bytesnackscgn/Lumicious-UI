import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LFilePicker from './LFilePicker.vue';

const meta: Meta<any> = {
  title: 'Lumicious/FilePicker',
  component: LFilePicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    multiple: { control: 'boolean' },
    accept: { control: 'text' },
    maxSize: { control: 'number' },
    minSize: { control: 'number' },
    dragDrop: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
  args: {
    modelValue: undefined,
    size: 'md',
    variant: 'glass',
    disabled: false,
    readonly: false,
    multiple: false,
    accept: undefined,
    maxSize: undefined,
    minSize: undefined,
    placeholder: 'Drop files here or click to browse',
    buttonText: 'Choose Files',
    dragDrop: true,
    clearable: true,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center min-h-[400px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LFilePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    modelValue: undefined,
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    placeholder: 'Select multiple files',
  },
};

export const ImageFiles: Story = {
  args: {
    accept: 'image/*',
    placeholder: 'Select images only',
  },
};

export const DocumentFiles: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    placeholder: 'Select documents only',
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

export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: undefined,
  },
};

export const WithSizeRestrictions: Story = {
  args: {
    maxSize: 5 * 1024 * 1024, // 5MB
    minSize: 1024, // 1KB
    placeholder: 'Files between 1KB and 5MB',
  },
};

export const NoDragDrop: Story = {
  args: {
    dragDrop: false,
    placeholder: 'Click to browse files',
  },
};

export const NotClearable: Story = {
  args: {
    clearable: false,
    placeholder: 'Files cannot be cleared',
  },
};

export const DifferentFileTypes: Story = {
  render: (args) => ({
    components: { LFilePicker },
    setup() { return { args }; },
    template: `
      <div class="space-y-6">
        <div class="text-white text-sm mb-2">Images Only</div>
        <LFilePicker
          accept="image/*"
          placeholder="Select images"
        />

        <div class="text-white text-sm mb-2 mt-4">Documents Only</div>
        <LFilePicker
          accept=".pdf,.doc,.docx"
          placeholder="Select documents"
        />

        <div class="text-white text-sm mb-2 mt-4">Multiple Files</div>
        <LFilePicker
          multiple
          placeholder="Select multiple files"
        />
      </div>
    `,
  }),
};