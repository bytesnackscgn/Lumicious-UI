import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LAlert from './LAlert.vue';
import { LBtn } from '../Btn';

const meta: Meta<any> = {
  title: 'Lumicious/Feedback/Alert',
  component: LAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'positive', 'negative', 'warning', 'info'] },
    dense: { control: 'boolean' },
  },
  args: {
    label: 'Welcome to the Lumicious UI documentation. Exploring glassmorphism foundations.',
    variant: 'glass',
    color: 'primary',
    dense: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-start justify-center text-white w-full"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'info',
  },
};

export const Dense: Story = {
  args: {
    icon: 'info',
    dense: true,
    color: 'info',
    label: 'This is a dense alert with info styling.',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    icon: 'alert-triangle',
    variant: 'solid',
    label: 'Your subscription is about to expire. Please update your billing info.',
  },
  render: (args) => ({
    components: { LAlert, LBtn },
    setup() { return { args }; },
    template: `
      <LAlert v-bind="args">
        <template #actions>
          <LBtn label="Update" size="sm" />
        </template>
      </LAlert>
    `,
  }),
};

export const Negative: Story = {
  args: {
    color: 'negative',
    icon: 'x-circle',
    variant: 'solid',
    label: 'Failed to sync data with the server. Checkout your connection.',
  },
  render: (args) => ({
    components: { LAlert, LBtn },
    setup() { return { args }; },
    template: `
      <LAlert v-bind="args">
        <template #actions>
          <LBtn label="Dismiss" variant="ghost" size="sm" />
          <LBtn label="Retry" size="sm" />
        </template>
      </LAlert>
    `,
  }),
};

const colors = ['primary', 'positive', 'negative', 'warning', 'info'];

export const GlassCollection: Story = {
  render: () => ({
    components: { LAlert },
    setup() { return { colors }; },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <LAlert 
          v-for="color in colors" 
          :key="color" 
          :color="color" 
          variant="glass" 
          icon="info"
          :label="'Glass variant with ' + color + ' color'"
        />
      </div>
    `,
  }),
};

export const SolidCollection: Story = {
  render: () => ({
    components: { LAlert },
    setup() { return { colors }; },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <LAlert 
          v-for="color in colors" 
          :key="color" 
          :color="color" 
          variant="solid" 
          icon="check-circle"
          :label="'Solid variant with ' + color + ' color'"
        />
      </div>
    `,
  }),
};

export const OutlineCollection: Story = {
  render: () => ({
    components: { LAlert },
    setup() { return { colors }; },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <LAlert 
          v-for="color in colors" 
          :key="color" 
          :color="color" 
          variant="outline" 
          icon="help-circle"
          :label="'Outline variant with ' + color + ' color'"
        />
      </div>
    `,
  }),
};
