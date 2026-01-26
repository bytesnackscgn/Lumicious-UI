import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LSkeleton from './LSkeleton.vue';

const meta = {
  title: 'Lumodo/Progress/Skeleton',
  component: LSkeleton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'rect', 'circle', 'QBtn'] },
    animation: { control: 'select', options: ['wave', 'pulse', 'none'] },
  },
  args: {
    type: 'rect',
    animation: 'wave',
    width: '100%',
    height: '100px',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center text-white w-full max-w-md mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProfileCard: Story = {
  render: (args) => ({
    components: { LSkeleton },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-6 w-full p-6 glass rounded-2xl">
        <div class="flex items-center gap-4">
            <LSkeleton type="circle" size="64px" />
            <div class="flex-grow flex flex-col gap-2">
                <LSkeleton type="text" width="60%" height="20px" />
                <LSkeleton type="text" width="40%" height="16px" />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <LSkeleton type="text" />
            <LSkeleton type="text" />
            <LSkeleton type="text" width="80%" />
        </div>
        <div class="flex justify-end pt-2">
            <LSkeleton type="QBtn" />
        </div>
      </div>
    `,
  }),
};
