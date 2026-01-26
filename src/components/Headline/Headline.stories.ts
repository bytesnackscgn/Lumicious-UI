import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LHeadline from './LHeadline.vue';

const meta = {
  title: 'Lumodo/Typography/Headline',
  component: LHeadline,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number', min: 1, max: 6 },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] },
    gradient: { control: 'boolean' },
  },
  args: {
    level: 2,
    gradient: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex flex-col items-center justify-center text-white"><story>Lumodo UI Headline</story></div>',
    }),
  ],
} satisfies Meta<typeof LHeadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
  args: {
    gradient: true,
    level: 1,
    size: '5xl',
  },
};

export const Levels: Story = {
  render: (args) => ({
    components: { LHeadline },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-4">
        <LHeadline :level="1">Headline Level 1</LHeadline>
        <LHeadline :level="2">Headline Level 2</LHeadline>
        <LHeadline :level="3">Headline Level 3</LHeadline>
        <LHeadline :level="4">Headline Level 4</LHeadline>
        <LHeadline :level="5">Headline Level 5</LHeadline>
        <LHeadline :level="6">Headline Level 6</LHeadline>
      </div>
    `,
  }),
};
