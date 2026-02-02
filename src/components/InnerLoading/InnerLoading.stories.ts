import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LInnerLoading from './LInnerLoading.vue';
import { LCard } from '../Card';

const meta: Meta<any> = {
  title: 'Lumodo/Progress/InnerLoading',
  component: LInnerLoading,
  tags: ['autodocs'],
  argTypes: {
    showing: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    label: { control: 'text' },
  },
  args: {
    showing: true,
    size: 'lg',
    label: 'Please wait...',
  },
} satisfies Meta<typeof LInnerLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverCard: Story = {
  render: (args) => ({
    components: { LInnerLoading, LCard },
    setup() { return { args }; },
    template: `
      <div class="p-8 bg-slate-900 flex items-center justify-center">
          <LCard class="w-full max-w-sm relative h-48 flex items-center justify-center bg-white/5">
                <p class="text-white/20">Secret Content Hidden</p>
                <LInnerLoading v-bind="args" />
          </LCard>
      </div>
    `,
  }),
};
