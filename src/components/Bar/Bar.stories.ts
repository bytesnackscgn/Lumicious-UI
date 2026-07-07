import type { Meta, StoryObj } from "@storybook/vue3-vite";
import LBar from "./LBar.vue";
import { LBtn } from "../Btn";
import { LHeadline } from "../Headline";

const meta: Meta<any> = {
  title: "Lumicious/Layout/Bar",
  component: LBar,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    fixed: { control: "boolean" },
    blur: { control: "boolean" },
    width: { control: "number" },
    height: { control: "number" },
    padding: { control: "text" },
    rounded: { control: "boolean" },
    dense: { control: "boolean" },
  },
  args: {
    position: "top",
    fixed: false,
    blur: true,
    width: 80,
    height: 60,
    padding: "p-2",
    rounded: true,
    dense: false,
  },
} satisfies Meta<typeof LBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopBar: Story = {
  render: (args) => ({
    components: { LBar, LBtn, LHeadline },
    setup() {
      return { args };
    },
    template: `
      <div class="h-[600px] w-full bg-slate-900 overflow-hidden relative border border-white/10 rounded-xl">
        <LBar v-bind="args">
          <div class="flex flex-row gap-4 justify-center">
            <LHeadline color="white" :level="6">Menu</LHeadline>
            <LBtn icon="home" variant="ghost" />
            <LBtn icon="search" variant="ghost" />
            <LBtn icon="bell" variant="ghost" />
            <LBtn icon="settings" variant="ghost" />
            </div>
        </LBar>
      </div>
    `,
  }),
};

export const BottomBar: Story = {
  args: {
    position: "bottom",
  },
  render: (args) => ({
    components: { LBar, LBtn, LHeadline },
    setup() {
      return { args };
    },
    template: `
      <div class="h-[600px] w-full bg-slate-900 overflow-hidden relative rounded-xl">
        <LBar v-bind="args">
          <div class="flex flex-row gap-4 justify-center">
            <LHeadline color="white" :level="6">Menu</LHeadline>
            <LBtn icon="menu" variant="ghost" />
            <LBtn icon="home" variant="ghost" />
            <LBtn icon="search" variant="ghost" />
            <LBtn icon="bell" variant="ghost" />
            <LBtn icon="settings" variant="ghost" />
          </div>
        </LBar>
      </div>
    `,
  }),
};

export const LeftBar: Story = {
  args: {
    position: "left",
    width: 80,
  },
  render: (args) => ({
    components: { LBar, LBtn },
    setup() {
      return { args };
    },
    template: `
      <div class="h-[600px] w-full bg-slate-900 overflow-hidden relative border border-white/10 rounded-xl">
        <LBar v-bind="args">
            <div class="flex flex-col gap-4 items-center">
                <LBtn icon="menu" variant="ghost" />
                <LBtn icon="home" variant="ghost" />
                <LBtn icon="settings" variant="ghost" />
            </div>
        </LBar>
      </div>
    `,
  }),
};

export const RightBar: Story = {
  args: {
    position: "right",
    width: 80,
  },
  render: (args) => ({
    components: { LBar, LBtn },
    setup() {
      return { args };
    },
    template: `
      <div class="h-[600px] w-full bg-slate-900 overflow-hidden relative border border-white/10 rounded-xl">
        <LBar v-bind="args">
            <div class="flex flex-col gap-4 items-center">
                <LBtn icon="menu" variant="ghost" />
                <LBtn icon="home" variant="ghost" />
                <LBtn icon="settings" variant="ghost" />
            </div>
        </LBar>
      </div>
    `,
  }),
};
