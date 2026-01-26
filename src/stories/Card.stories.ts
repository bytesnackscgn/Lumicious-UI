import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../components/Card.vue';
import Button from './Button.vue'; // Importing the default Button from stories folder

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    title: 'Card Title',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This is a flexible card component. It uses slots for content distribution and has a smooth hover effect.</p>
      </Card>
    `,
  }),
};

export const WithActions: Story = {
  args: {
    title: 'Interactive Card',
  },
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This card demonstrates the use of the <code>#actions</code> slot to place buttons or other controls.</p>
        <template #actions>
          <Button primary label="Save" size="small" />
          <Button label="Discard" size="small" />
        </template>
      </Card>
    `,
  }),
};
