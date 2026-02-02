import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LBtnDropdown from './LBtnDropdown.vue';
import { LList, LItem } from '../List';

const meta: Meta<any> = {
  title: 'Lumodo/Actions/BtnDropdown',
  component: LBtnDropdown,
  tags: ['autodocs'],
  argTypes: {
    split: { control: 'boolean' },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'white'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline', 'ghost'] },
  },
  args: {
    label: 'Actions',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-24 bg-slate-900 min-h-[300px] flex items-start justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBtnDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LBtnDropdown, LList, LItem },
    setup() { return { args }; },
    template: `
      <LBtnDropdown v-bind="args">
        <LList dense padding class="w-40">
            <LItem clickable label="Save" icon="save" />
            <LItem clickable label="Update" icon="edit" />
            <LItem clickable label="Delete" icon="delete" class="text-red-400" />
        </LList>
      </LBtnDropdown>
    `,
  }),
};

export const LabelOnly: Story = {
  render: (args) => ({
    components: { LBtnDropdown, LList, LItem },
    setup() { return { args }; },
    template: `
      <LBtnDropdown v-bind="args">
        <LList dense padding class="w-40">
            <LItem clickable label="Save" />
            <LItem clickable label="Update" />
            <LItem clickable label="Delete" class="text-red-400" />
        </LList>
      </LBtnDropdown>
    `,
  }),
};

export const WithCaption: Story = {
  render: (args) => ({
    components: { LBtnDropdown, LList, LItem },
    setup() { return { args }; },
    template: `
      <LBtnDropdown v-bind="args">
        <LList dense padding class="w-48">
            <LItem clickable label="Profile" icon="user" caption="Manage your account settings" />
            <LItem clickable label="Settings" icon="cog" caption="Configure application preferences" />
            <LItem clickable label="Logout" icon="log-out" caption="Sign out of your account" class="text-red-400" />
        </LList>
      </LBtnDropdown>
    `,
  }),
};

