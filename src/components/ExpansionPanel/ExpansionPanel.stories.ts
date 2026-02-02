import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LExpansionPanel from './LExpansionPanel.vue';
import { LText } from '../Text';

const meta: Meta<any> = {
  title: 'Lumodo/Layout/ExpansionPanel',
  component: LExpansionPanel,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    caption: { control: 'text' },
    icon: { control: 'text' },
    disable: { control: 'boolean' },
  },
  args: {
    label: 'Expandable Section',
    caption: 'Useful for detailed info',
    icon: 'info',
    modelValue: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white w-full max-w-lg mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LExpansionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LExpansionPanel, LText },
    setup() { return { args }; },
    template: `
      <LExpansionPanel v-bind="args">
        <LText>
          This is the content inside the expansion panel. It can contain any elements, including other components like buttons or lists.
        </LText>
      </LExpansionPanel>
    `,
  }),
};

export const Group: Story = {
  render: (args) => ({
    components: { LExpansionPanel, LText },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-2 w-full">
        <LExpansionPanel label="Account" icon="user">
            <LText>Manage your user account.</LText>
        </LExpansionPanel>
        <LExpansionPanel label="Security" icon="shield">
            <LText>Privacy and security settings.</LText>
        </LExpansionPanel>
        <LExpansionPanel label="Help" icon="help-circle">
            <LText>Get assistance and support.</LText>
        </LExpansionPanel>
      </div>
    `,
  }),
};
