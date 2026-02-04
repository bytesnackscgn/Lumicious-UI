import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LStack from './LStack.vue';
import { LAvatar } from '../Avatar';

const meta: Meta<any> = {
  title: 'Lumicious/Stack',
  component: LStack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'radio', options: ['horizontal', 'vertical'] },
    overlap: { control: 'number' },
    gap: { control: 'number' },
    disableHover: { control: 'boolean' },
    playable: { control: 'boolean' },
    interval: { control: 'number' },
  },
  args: {
    direction: 'horizontal',
    overlap: 10,
    gap: 10,
    disableHover: false,
    playable: false,
    interval: 2000,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center min-h-[300px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LStack>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for stacking
const avatars = [
  { component: LAvatar, props: { name: 'A', size: 'md' } },
  { component: LAvatar, props: { name: 'B', size: 'md' } },
  { component: LAvatar, props: { name: 'C', size: 'md' } },
  { component: LAvatar, props: { name: 'D', size: 'md' } },
];

const cards = [
    { id: 1, text: 'Card 1', color: 'bg-blue-500' },
    { id: 2, text: 'Card 2', color: 'bg-red-500' },
    { id: 3, text: 'Card 3', color: 'bg-green-500' },
];

export const Default: Story = {
  args: {
    items: avatars,
    overlap: 0,
    gap: 0,
  },
};

export const Overlapped: Story = {
  args: {
    items: avatars,
    overlap: 15,
    gap: 0,
  },
};

export const ExpandOnHover: Story = {
  args: {
    items: avatars,
    overlap: 15,
    gap: 10,
  },
};

export const DisabledHover: Story = {
  args: {
    items: avatars,
    overlap: 15,
    gap: 10,
    disableHover: true,
  },
};

export const Playable: Story = {
  args: {
    items: avatars,
    playable: true,
    overlap: 15,
    gap: 20,
    interval: 1000,
  },
};

export const CustomComponents: Story = {
    render: (args) => ({
        components: { LStack },
        setup() { return { args, cards }; },
        template: `
            <LStack v-bind="args" :items="cards">
                <template #item="{ item, active }">
                    <div 
                        class="w-32 h-48 rounded-xl shadow-lg flex items-center justify-center text-white font-bold transition-all duration-300"
                        :class="[item.color, active ? 'ring-4 ring-white' : '']"
                    >
                        {{ item.text }}
                    </div>
                </template>
            </LStack>
        `
    }),
    args: {
        playable: true,
        overlap: 50,
        gap: 20,
        interval: 2000,
    }
};
