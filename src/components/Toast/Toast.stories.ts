import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { LAvatarStack } from "../AvatarStack";
import LToastProvider from "./LToastProvider.vue";
import { useToast } from "./useToast";
import { LBtn } from "../Btn";
import { LBadge } from "../Badge";
import { defineComponent } from "vue";

const ToastDemo = defineComponent({
  components: { LBtn },
  setup() {
    const toast = useToast();

    const showToast = (position: any = "top-right") => {
      toast.add({
        message: `Notification at ${position}`,
        position,
        variant: "glass",
        color: "primary",
        icon: "info",
      });
    };

    const showVariant = (color: any) => {
      toast.add({
        message: `This is a ${color} message`,
        color,
        variant: "solid",
        icon: "check-circle",
      });
    };

    return { showToast, showVariant };
  },
  template: `
    <div class="relative flex flex-col gap-8 items-start">
      <div class="flex flex-col gap-2">
        <h3 class="text-white text-lg font-bold">Positions</h3>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showToast('top-left')" label="Top Left" size="sm" variant="outline" />
          <LBtn @click="showToast('top-center')" label="Top Center" size="sm" variant="outline" />
          <LBtn @click="showToast('top-right')" label="Top Right" size="sm" variant="outline" />
        </div>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showToast('bottom-left')" label="Bottom Left" size="sm" variant="outline" />
          <LBtn @click="showToast('bottom-center')" label="Bottom Center" size="sm" variant="outline" />
          <LBtn @click="showToast('bottom-right')" label="Bottom Right" size="sm" variant="outline" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-white text-lg font-bold">Variants</h3>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showVariant('primary')" label="Primary" color="primary" size="sm" />
          <LBtn @click="showVariant('positive')" label="Positive" color="positive" size="sm" />
          <LBtn @click="showVariant('negative')" label="Negative" color="negative" size="sm" />
          <LBtn @click="showVariant('warning')" label="Warning" color="warning" size="sm" />
          <LBtn @click="showVariant('info')" label="Info" color="info" size="sm" />
        </div>
      </div>
    </div>
  `,
});

const ToastCustomContent = defineComponent({
  components: { LBtn },
  setup() {
    const toast = useToast();

    const showCustomToast = () => {
      toast.add({
        message: "",
        variant: "glass",
        duration: 0,
        icon: "sparkles",
        position: "top-right",
      });
    };

    const showUpdateToast = () => {
      toast.add({
        message: "",
        variant: "glass",
        duration: 8000,
        icon: "refresh-cw",
        position: "top-right",
      });
    };

    const showOrderToast = () => {
      toast.add({
        message: "",
        color: "primary",
        variant: "solid",
        duration: 0,
        icon: "shopping-cart",
        position: "top-right",
      });
    };

    return { showCustomToast, showUpdateToast, showOrderToast };
  },
  template: `
    <div class="relative flex flex-col gap-4 items-start">
      <h3 class="text-white text-lg font-bold">Custom Content Layout</h3>
      <div class="flex flex-wrap gap-2">
        <LBtn @click="showCustomToast" label="Feature Announcement" size="sm" variant="outline" />
        <LBtn @click="showUpdateToast" label="Update Available" size="sm" variant="outline" />
        <LBtn @click="showOrderToast" label="Order Confirmation" size="sm" variant="outline" />
      </div>
    </div>
  `,
});

const meta: Meta<typeof LToastProvider> = {
  title: "Lumicious/Feedback/Toast",
  component: LToastProvider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["list", "stack"],
      description: "Controls the display mode of toasts",
    },
    stackOverlap: {
      control: { type: "range", min: 0, max: 100 },
      description: "Overlap amount in pixels for stack mode",
    },
    stackGap: {
      control: { type: "range", min: 0, max: 50 },
      description: "Gap between expanded items in pixels",
    },
    expandOnHover: {
      control: "boolean",
      description: "Whether to expand the stack on hover",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ToastDemo, LToastProvider },
    setup() {
      return { args };
    },
    template: `
      <LToastProvider v-bind="args">
        <div class="p-8 bg-slate-900 min-h-[400px] w-full flex items-center justify-center">
          <ToastDemo />
        </div>
      </LToastProvider>
    `,
  }),
  args: {
    variant: "list",
    stackOverlap: 40,
    stackGap: 8,
    expandOnHover: true,
  },
};

export const Stacked: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: "stack",
  },
};

export const CustomContent: Story = {
  render: (args) => ({
    components: { ToastCustomContent, LToastProvider },
    setup() {
      return { args };
    },
    template: `
      <LToastProvider v-bind="args">
        <template #content="{ toast }">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span v-if="toast.icon" class="text-lg" v-text="toast.icon" />
              <span class="font-semibold text-sm">
                <template v-if="toast.color === 'primary'">Order Confirmed</template>
                <template v-else-if="toast.icon === 'refresh-cw'">Update Available</template>
                <template v-else>New Feature</template>
              </span>
            </div>
            <p class="text-xs opacity-80 leading-relaxed">
              <template v-if="toast.color === 'primary'">Your order #LMD-2841 has been confirmed and is being processed.</template>
              <template v-else-if="toast.icon === 'refresh-cw'">Version 3.2.0 is ready to install. New features and bug fixes included.</template>
              <template v-else>We've added AI-powered suggestions to your dashboard. Check them out now.</template>
            </p>
            <div class="flex items-center gap-2 mt-1">
              <LBtn size="xs" color="primary" variant="solid" label="View" class="!px-3 !py-1 !text-xs" />
              <LBtn size="xs" variant="ghost" label="Dismiss" class="!px-3 !py-1 !text-xs" @click="toast.dismissible" />
            </div>
          </div>
        </template>
        <div class="p-8 bg-slate-900 min-h-[400px] w-full flex items-center justify-center">
          <ToastCustomContent />
        </div>
      </LToastProvider>
    `,
  }),
  args: {
    variant: "list",
    stackOverlap: 40,
    stackGap: 8,
    expandOnHover: true,
  },
};

const addonWinners = [
  {
    name: "Alice C.",
    src: "https://i.pravatar.cc/128?u=alice",
    color: "primary",
  },
  { name: "Bob K.", src: "https://i.pravatar.cc/128?u=bob", color: "warning" },
  {
    name: "Carol M.",
    src: "https://i.pravatar.cc/128?u=carol",
    color: "positive",
  },
  { name: "Dave J.", src: "https://i.pravatar.cc/128?u=dave", color: "info" },
];

const ToastAddonWinners = defineComponent({
  components: { LBtn },
  setup() {
    const toast = useToast();

    const showWinnersToast = () => {
      toast.add({
        message: "",
        color: "warning",
        variant: "solid",
        duration: 0,
        icon: "trophy",
        position: "top-right",
      });
    };

    const showPodiumToast = () => {
      toast.add({
        message: "",
        color: "positive",
        variant: "glass",
        duration: 0,
        icon: "award",
        position: "top-right",
      });
    };

    return { showWinnersToast, showPodiumToast, addonWinners };
  },
  template: `
    <div class="relative flex flex-col gap-4 items-start">
      <h3 class="text-white text-lg font-bold">Addon Winners</h3>
      <div class="flex flex-wrap gap-2">
        <LBtn @click="showWinnersToast" label="🎉 Show Winners" size="sm" color="warning" />
        <LBtn @click="showPodiumToast" label="🏆 Podium" size="sm" color="positive" />
      </div>
    </div>
  `,
});

export const WithAvatarStack: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => ({
    components: { ToastAddonWinners, LToastProvider, LAvatarStack, LBadge },
    setup() {
      return { args, addonWinners };
    },
    template: `
      <LToastProvider v-bind="args">
        <template #content="{ toast }">
          <div
            class="flex flex-col gap-3"
             :class="toast.variant === 'solid' ? '[&_*]:!text-white [&_i_svg]:!fill-white [&_i_svg]:!stroke-white' 
  : '[&_*]:!text-black [&_i]:!fill-black [&_i]:!stroke-black [&_i]:!bg-black [&_svg]:!fill-black [&_svg]:!stroke-black [&_svg]:!bg-black'"
          >
            <div class="flex flex-col gap-1.5 min-w-0">
              <div class="flex justify-between gap-2">
                <span class="font-semibold text-sm">Addon Giveaway</span>
                <LBadge label="LIVE" size="xs" class="uppercase tracking-wider" />
              </div>
              <LAvatarStack
              :items="addonWinners"
              size="sm"
              :limit="4"
              position="right"
              class="shrink-0 mt-0.5"
            />
              <p
                class="text-xs leading-relaxed"
              >
                <strong class="font-semibold">Alice, Bob, Carol &amp; Dave</strong> just won the <strong class="font-semibold">Premium Analytics Addon</strong> — lifetime access, no limits.
              </p>
              <div class="flex items-center gap-2 mt-1">
                <LBtn size="xs" color="warning" variant="solid" label="Claim yours" class="!px-3 !py-1 !text-xs" />
                <LBtn size="xs" variant="ghost" label="Dismiss" class="!px-3 !py-1 !text-xs" @click="toast.dismissible" />
              </div>
            </div>
          </div>
        </template>
        
        <div class="p-8 bg-slate-900 min-h-[500px] w-full flex items-start justify-start">
          <ToastAddonWinners />
        </div>
      </LToastProvider>
    `,
  }),
  args: {
    variant: "list",
    stackOverlap: 40,
    stackGap: 8,
    expandOnHover: true,
  },
};

export const WithPodium: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => ({
    components: { ToastAddonWinners, LToastProvider, LAvatarStack, LBadge },
    setup() {
      return { args, addonWinners };
    },
    template: `
      <LToastProvider v-bind="args">
        <template #content="{ toast }">
          <div
            class="flex flex-col gap-3"
            :class="toast.variant === 'solid' ? '[&_*]:!text-white' : '[&_*]:!text-black'"
          >
            <div class="flex items-center justify-center">
              <span class="font-semibold text-sm">Winners' Podium</span>
            </div>
            <LAvatarStack
              :items="addonWinners"
              size="md"
              :limit="4"
              position="right"
              class="justify-center"
            />
            <p
              class="text-xs leading-relaxed text-center"
            >
              <strong class="font-semibold">4 winners</strong> scored the <strong class="font-semibold">Premium Analytics Addon</strong> in this month's giveaway.
            </p>
            <LBtn size="xs" color="primary" variant="solid" label="See leaderboard" class="!px-3 !py-1 !text-xs w-full" />
          </div>
        </template>
        <div class="p-8 bg-slate-900 min-h-[500px] w-full flex items-start justify-start">
          <ToastAddonWinners />
        </div>
      </LToastProvider>
    `,
  }),
  args: {
    variant: "list",
    stackOverlap: 40,
    stackGap: 8,
    expandOnHover: true,
  },
};

