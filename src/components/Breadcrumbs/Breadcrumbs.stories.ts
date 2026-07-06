import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "@storybook/test";
import LBreadcrumbs from "./LBreadcrumbs.vue";

const meta: Meta<any> = {
  title: "Lumicious/Breadcrumbs",
  component: LBreadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "secondary", "white", "blue", "purple", "pink", "green", "yellow", "red", "indigo"] },
    separator: { control: "text" },
    maxItems: { control: "number" },
    ellipsis: { control: "boolean" },
  },
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Breadcrumbs", href: "/components/breadcrumbs" },
    ],
    size: "md",
    color: "primary",
    separator: "/",
    maxItems: 0,
    ellipsis: true,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template:
        '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Avatar Stories", href: "/?path=/docs/lumicious-avatar--docs" },
      {
        label: "Avatar Image Story",
        href: "/?path=/story/lumicious-avatar--image",
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", icon: "home" },
      { label: "Profile", icon: "user" },
      { label: "Edit", icon: "pencil" },
    ],
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    items: [{ label: "Home" }, { label: "Profile" }, { label: "Edit" }],
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    items: [{ label: "Home" }, { label: "Profile" }, { label: "Edit" }],
  },
};

export const Colors: Story = {
  render: () => ({
    components: { LBreadcrumbs },
    setup() {
      const colors = ["primary", "secondary", "tertiary", "white", "blue", "purple", "pink", "green", "yellow", "red", "indigo"];
      const items = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/profile" },
        { label: "Settings", href: "/settings" }
      ];
      return { colors, items };
    },
    template: `
      <div class="flex flex-col gap-6">
        <div v-for="color in colors" :key="color" class="flex items-center">
          <LBreadcrumbs :items="items" :color="color" />
        </div>
      </div>
    `,
  }),
};

export const CustomSeparator: Story = {
  args: {
    separator: "→",
    items: [{ label: "Home" }, { label: "Profile" }, { label: "Edit" }],
  },
};

export const WithEllipsis: Story = {
  args: {
    maxItems: 3,
    ellipsis: true,
    items: Array.from({ length: 8 }, (_, i) => ({
      label: `Page ${i + 1}`,
    })),
  },
};

export const DisabledItems: Story = {
  args: {
    items: [
      { label: 'Home',  },
      { label: 'Profile', disabled: true },
      { label: 'Edit',  },
    ],
  },
};