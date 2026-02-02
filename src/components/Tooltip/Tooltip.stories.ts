import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LTooltip from './LTooltip.vue';
import { LBtn } from '../Btn';

const meta: Meta<any> = {
  title: 'Lumodo/Overlays/Tooltip',
  component: LTooltip,
  tags: ['autodocs'],
  argTypes: {
    delay: { control: 'number' },
  },
  args: {
    delay: 300,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-24 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LTooltip, LBtn },
    setup() { return { args }; },
    template: `
      <LBtn label="Hover over me">
        <LTooltip v-bind="args">This is a premium glass tooltip</LTooltip>
      </LBtn>
    `,
  }),
};
