import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LBtnGroup from './LBtnGroup.vue';
import { LBtn } from '../Btn';

const meta: Meta<any> = {
  title: 'Lumicious/Actions/ButtonGroup',
  component: LBtnGroup,
  tags: ['autodocs'],
  argTypes: {
    spread: { control: 'boolean' },
    outline: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
  args: {
    spread: false,
    outline: false,
    rounded: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white w-full max-w-sm mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBtnGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LBtnGroup, LBtn },
    setup() { return { args }; },
    template: `
      <LBtnGroup v-bind="args">
        <LBtn icon="play" />
        <LBtn icon="pause" />
        <LBtn icon="skip-forward" />
      </LBtnGroup>
    `,
  }),
};

export const Spread: Story = {
  args: {
    spread: true,
  },
  render: (args) => ({
    components: { LBtnGroup, LBtn },
    setup() { return { args }; },
    template: `
      <LBtnGroup v-bind="args">
        <LBtn label="One" />
        <LBtn label="Two" />
        <LBtn label="Three" />
      </LBtnGroup>
    `,
  }),
};
