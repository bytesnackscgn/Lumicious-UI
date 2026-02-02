import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LBtn from './LBtn.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Button',
  component: LBtn,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline', 'ghost'] },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'white'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    iconRight: { control: 'text' },
  },
  args: {
    label: 'Button',
    size: 'md',
    variant: 'glass',
    color: 'primary',
    loading: false,
    disabled: false,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
  },
};

export const WithIcons: Story = {
  args: {
    icon: 'mail',
    iconRight: 'arrow-right',
    label: 'Send Email',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Processing',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LBtn },
    setup() { return { args }; },
    template: `
      <div class="flex items-end gap-4">
        <LBtn label="Small" size="sm" />
        <LBtn label="Medium" size="md" />
        <LBtn label="Large" size="lg" />
        <LBtn label="Extra Large" size="xl" />
      </div>
    `,
  }),
};
