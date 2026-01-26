import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LFilePicker from './LFilePicker.vue';

const meta = {
  title: 'Lumodo/FilePicker',
  component: LFilePicker,
  tags: ['autodocs'],
  argTypes: {
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    maxFiles: { control: 'number' },
    maxSize: { control: 'number' },
  },
  args: {
    accept: '*',
    multiple: false,
    disabled: false,
    placeholder: 'Choose files...',
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center w-full"><div class="w-full max-w-md"><story /></div></div>',
    }),
  ],
} satisfies Meta<typeof LFilePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Choose files...',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    placeholder: 'Choose multiple files...',
  },
};

export const ImageOnly: Story = {
  args: {
    accept: 'image/*',
    placeholder: 'Choose images...',
  },
};

export const DocumentOnly: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    placeholder: 'Choose documents...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'File picker disabled',
  },
};

export const WithLimits: Story = {
  args: {
    multiple: true,
    maxFiles: 3,
    maxSize: 5 * 1024 * 1024, // 5MB
    placeholder: 'Max 3 files, 5MB each',
  },
};