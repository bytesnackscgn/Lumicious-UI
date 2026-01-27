import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LChatMessage from './LChatMessage.vue';

const meta = {
  title: 'Lumodo/ChatMessage',
  component: LChatMessage,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['sent', 'received'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    status: { control: 'select', options: ['sent', 'delivered', 'read', 'failed'] },
    loading: { control: 'boolean' },
    showAvatar: { control: 'boolean' },
    showTimestamp: { control: 'boolean' },
    showStatus: { control: 'boolean' },
  },
  args: {
    content: 'Hello! How are you doing today?',
    variant: 'received',
    size: 'md',
    status: 'sent',
    loading: false,
    showAvatar: true,
    showTimestamp: true,
    showStatus: true,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Received: Story = {
  args: {
    variant: 'received',
    content: 'Hello! How are you doing today?',
    username: 'Alice',
    avatar: 'https://via.placeholder.com/40x40?text=A',
  },
};

export const Sent: Story = {
  args: {
    variant: 'sent',
    content: 'I\'m doing great! Thanks for asking. How about you?',
    status: 'read',
  },
};

export const Loading: Story = {
  args: {
    variant: 'sent',
    content: 'This message is being sent...',
    loading: true,
  },
};

export const WithImage: Story = {
  args: {
    variant: 'received',
    content: 'Check out this amazing sunset!',
    username: 'Bob',
    avatar: 'https://via.placeholder.com/40x40?text=B',
  },
  render: (args) => ({
    components: { LChatMessage },
    setup() { return { args }; },
    template: `
      <LChatMessage v-bind="args">
        <div class="flex flex-col gap-2">
          <p>Check out this amazing sunset!</p>
          <img src="https://via.placeholder.com/200x100?text=Sunset" alt="Sunset" class="rounded-lg" />
        </div>
      </LChatMessage>
    `,
  }),
};

export const StatusVariants: Story = {
  render: (args) => ({
    components: { LChatMessage },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <LChatMessage 
          variant="sent" 
          content="Sent message" 
          :status="'sent'"
          v-bind="args"
        />
        <LChatMessage 
          variant="sent" 
          content="Delivered message" 
          :status="'delivered'"
          v-bind="args"
        />
        <LChatMessage 
          variant="sent" 
          content="Read message" 
          :status="'read'"
          v-bind="args"
        />
        <LChatMessage 
          variant="sent" 
          content="Failed message" 
          :status="'failed'"
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LChatMessage },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <LChatMessage size="sm" content="Small message" v-bind="args" />
        <LChatMessage size="md" content="Medium message" v-bind="args" />
        <LChatMessage size="lg" content="Large message" v-bind="args" />
      </div>
    `,
  }),
};

export const NoAvatar: Story = {
  args: {
    variant: 'received',
    content: 'Message without avatar',
    showAvatar: false,
  },
};

export const NoTimestamp: Story = {
  args: {
    variant: 'received',
    content: 'Message without timestamp',
    showTimestamp: false,
  },
};

export const NoStatus: Story = {
  args: {
    variant: 'sent',
    content: 'Message without status',
    showStatus: false,
  },
};

export const ChatConversation: Story = {
  render: (args) => ({
    components: { LChatMessage },
    setup() { return { args }; },
    template: `
      <div class="space-y-4 max-w-md">
        <LChatMessage 
          variant="received" 
          content="Hey there! How's it going?" 
          username="Alice"
          avatar="https://via.placeholder.com/40x40?text=A"
          :timestamp="new Date(Date.now() - 300000)"
          v-bind="args"
        />
        <LChatMessage 
          variant="sent" 
          content="Pretty good! Just working on some new features." 
          :status="'read'"
          :timestamp="new Date(Date.now() - 240000)"
          v-bind="args"
        />
        <LChatMessage 
          variant="received" 
          content="That sounds exciting! What kind of features?" 
          username="Alice"
          avatar="https://via.placeholder.com/40x40?text=A"
          :timestamp="new Date(Date.now() - 180000)"
          v-bind="args"
        />
        <LChatMessage 
          variant="sent" 
          content="We're adding a bunch of new UI components with glassmorphism design." 
          :status="'delivered'"
          :timestamp="new Date(Date.now() - 120000)"
          v-bind="args"
        />
        <LChatMessage 
          variant="received" 
          content="Wow, that sounds amazing! Can't wait to see them." 
          username="Alice"
          avatar="https://via.placeholder.com/40x40?text=A"
          :timestamp="new Date(Date.now() - 60000)"
          v-bind="args"
        />
      </div>
    `,
  }),
};