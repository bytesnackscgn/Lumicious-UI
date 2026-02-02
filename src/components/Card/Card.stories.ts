import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LCard from './LCard.vue';
import { LBtn } from '../Btn';

const meta: Meta<any> = {
  title: 'Lumicious/Card',
  component: LCard,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['glass', 'glass-dark', 'solid', 'outline'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    variant: 'glass',
    padding: 'md',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[300px] flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Standard Glass Card',
    subtitle: 'Subtitle goes here',
  },
  render: (args) => ({
    components: { LCard, LBtn },
    setup() { return { args }; },
    template: `
      <LCard v-bind="args">
        <p class="text-white/80">
          This is the content area of the card. You can put anything here.
        </p>
        <template #actions>
          <LBtn label="Cancel" variant="ghost" />
          <LBtn label="Accept" />
        </template>
      </LCard>
    `,
  }),
};

export const Dark: Story = {
  args: {
    variant: 'glass-dark',
    title: 'Dark Theme Card',
    subtitle: 'Deeply transparent',
  },
  render: (args) => ({
    components: { LCard },
    setup() { return { args }; },
    template: `
      <LCard v-bind="args">
        <p class="text-white/80">
          Dark glass variant for high contrast areas.
        </p>
      </LCard>
    `,
  }),
};
