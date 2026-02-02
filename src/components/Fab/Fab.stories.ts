import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LFab from './LFab.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Fab',
  component: LFab,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'white'] },
    position: { control: 'select', options: ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'center'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    ripple: { control: 'boolean' },
    mini: { control: 'boolean' },
    extended: { control: 'boolean' },
  },
  args: {
    icon: 'plus',
    label: 'Add',
    size: 'md',
    variant: 'glass',
    color: 'primary',
    position: 'bottom-right',
    disabled: false,
    loading: false,
    ripple: true,
    mini: false,
    extended: false,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[600px] relative"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LFab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: 'plus',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    icon: 'plus',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: 'plus',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    icon: 'plus',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    icon: 'plus',
  },
};

export const DifferentColors: Story = {
  render: (args) => ({
    components: { LFab },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <div class="text-white text-sm mb-2">Primary</div>
        <LFab color="primary" icon="plus" />

        <div class="text-white text-sm mb-2 mt-4">Secondary</div>
        <LFab color="secondary" icon="edit" />

        <div class="text-white text-sm mb-2 mt-4">Positive</div>
        <LFab color="positive" icon="check" />

        <div class="text-white text-sm mb-2 mt-4">Negative</div>
        <LFab color="negative" icon="trash-2" />
      </div>
    `,
  }),
};

export const DifferentPositions: Story = {
  render: (args) => ({
    components: { LFab },
    setup() { return { args }; },
    template: `
      <div class="relative h-96">
        <LFab
          position="top-left"
          icon="home"
          label="Home"
        />
        <LFab
          position="top-right"
          icon="settings"
          label="Settings"
        />
        <LFab
          position="bottom-left"
          icon="user"
          label="Profile"
        />
        <LFab
          position="bottom-right"
          icon="plus"
          label="Add"
        />
        <LFab
          position="center"
          icon="target"
          label="Target"
        />
      </div>
    `,
  }),
};

export const Extended: Story = {
  args: {
    extended: true,
    label: 'Create New',
    icon: 'plus',
  },
};

export const Mini: Story = {
  args: {
    mini: true,
    icon: 'plus',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    icon: 'plus',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: 'plus',
  },
};

export const NoRipple: Story = {
  args: {
    ripple: false,
    icon: 'plus',
  },
};

export const CustomIcons: Story = {
  render: (args) => ({
    components: { LFab },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <div class="text-white text-sm mb-2">Add Item</div>
        <LFab icon="plus" label="Add" />

        <div class="text-white text-sm mb-2 mt-4">Edit Item</div>
        <LFab icon="edit" label="Edit" />

        <div class="text-white text-sm mb-2 mt-4">Delete Item</div>
        <LFab icon="trash-2" label="Delete" color="negative" />

        <div class="text-white text-sm mb-2 mt-4">Save Changes</div>
        <LFab icon="save" label="Save" color="positive" />
      </div>
    `,
  }),
};
