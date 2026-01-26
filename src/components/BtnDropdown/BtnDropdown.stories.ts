import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LBtnDropdown from './LBtnDropdown.vue';
import { LList, LItem } from '../List';

const meta = {
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
            <LItem clickable label="Save" />
            <LItem clickable label="Update" />
            <LItem clickable label="Delete" class="text-red-400" />
        </LList>
      </LBtnDropdown>
    `,
  }),
};

export const Split: Story = {
  args: {
    split: true,
    label: 'Apply Filter',
    variant: 'solid',
    color: 'primary',
  },
  render: (args) => ({
    components: { LBtnDropdown, LList, LItem },
    setup() { return { args }; },
    template: `
      <LBtnDropdown v-bind="args">
        <LList dense padding class="w-48">
            <LItem clickable label="Filter by Name" />
            <LItem clickable label="Filter by Date" />
        </LList>
      </LBtnDropdown>
    `,
  }),
};
