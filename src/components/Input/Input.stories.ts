import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LInput from './LInput.vue';
import { LIcon } from '../Icon';

const meta: Meta<any> = {
  title: 'Lumicious/Form/Input',
  component: LInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    loading: { control: 'boolean' },
    dense: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'password', 'email', 'tel'] },
  },
  args: {
    modelValue: '',
    label: 'Username',
    placeholder: 'Enter username',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white w-full max-w-sm mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  render: (args) => ({
    components: { LInput, LIcon },
    setup() { return { args }; },
    template: `
      <LInput v-bind="args">
        <template #prepend>
          <LIcon name="mail" size="sm" />
        </template>
        <template #append>
          <LIcon name="check" size="sm" class="text-green-400" />
        </template>
      </LInput>
    `,
  }),
  args: {
    label: 'Email Address',
    type: 'email',
    modelValue: 'user@example.com',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: true,
    errorMessage: 'Password must be at least 8 characters',
    modelValue: '12345',
  },
};

export const LoadingState: Story = {
  args: {
    label: 'Searching',
    loading: true,
    modelValue: 'Search query...',
  },
};

export const Dense: Story = {
  args: {
    label: 'Dense Input',
    dense: true,
    placeholder: 'Compact style',
  },
};
