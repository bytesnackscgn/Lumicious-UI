import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref } from "vue";
const chatMessageStyles = cva("l-chat-message flex gap-3 max-w-xs lg:max-w-md", {
	variants: {
		variant: {
			sent: "justify-end",
			received: "justify-start"
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg"
		}
	},
	defaultVariants: {
		variant: "received",
		size: "md"
	}
}), chatMessageBubbleStyles = cva("l-chat-message-bubble relative rounded-2xl px-4 py-2 glass border-white/20 transition-all duration-200", {
	variants: {
		variant: {
			sent: "bg-blue-500/20 border-blue-400/30 text-white",
			received: "bg-white/10 border-white/20 text-gray-800"
		},
		size: {
			sm: "text-sm px-3 py-1.5",
			md: "text-base px-4 py-2",
			lg: "text-lg px-5 py-2.5"
		}
	},
	defaultVariants: {
		variant: "received",
		size: "md"
	}
}), chatMessageAvatarStyles = cva("l-chat-message-avatar flex-shrink-0 rounded-full overflow-hidden glass border-white/20", {
	variants: { size: {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12"
	} },
	defaultVariants: { size: "md" }
}), chatMessageTimestampStyles = cva("l-chat-message-timestamp text-xs opacity-60 mt-1", {
	variants: { variant: {
		sent: "text-right",
		received: "text-left"
	} },
	defaultVariants: { variant: "received" }
}), chatMessageStatusStyles = cva("l-chat-message-status inline-flex items-center gap-1 ml-2", {
	variants: { status: {
		sent: "text-blue-400",
		delivered: "text-green-400",
		read: "text-green-500",
		failed: "text-red-400"
	} },
	defaultVariants: { status: "sent" }
});
var _hoisted_1 = ["src", "alt"], _hoisted_2 = {
	key: 1,
	class: "w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold"
}, _hoisted_3 = { class: "flex flex-col" }, _hoisted_4 = {
	key: 0,
	class: "flex items-center gap-2"
}, _hoisted_5 = { class: "animate-spin" }, _hoisted_6 = {
	key: 1,
	class: "break-words"
}, _hoisted_7 = { class: "text-xs" }, LChatMessage_default = /* @__PURE__ */ defineComponent({
	__name: "LChatMessage",
	props: {
		id: {},
		content: {},
		variant: { default: "received" },
		size: { default: "md" },
		timestamp: {},
		avatar: {},
		username: {},
		status: { default: "sent" },
		loading: {
			type: Boolean,
			default: !1
		},
		showAvatar: {
			type: Boolean,
			default: !0
		},
		showTimestamp: {
			type: Boolean,
			default: !0
		},
		showStatus: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["click"],
	setup(n, { emit: a }) {
		let o = n, s = computed(() => {
			if (!o.timestamp) return "";
			let e = o.timestamp instanceof Date ? o.timestamp : new Date(o.timestamp), t = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(t / (1e3 * 60)), r = Math.floor(t / (1e3 * 60 * 60)), i = Math.floor(t / (1e3 * 60 * 60 * 24));
			return n < 1 ? "just now" : n < 60 ? `${n}m ago` : r < 24 ? `${r}h ago` : i < 7 ? `${i}d ago` : e.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			});
		}), c = () => {
			switch (o.status) {
				case "sent": return "send";
				case "delivered": return "check";
				case "read": return "check-double";
				case "failed": return "x-circle";
				default: return "send";
			}
		}, l = () => {
			switch (o.status) {
				case "sent": return "Sent";
				case "delivered": return "Delivered";
				case "read": return "Read";
				case "failed": return "Failed";
				default: return "Sent";
			}
		};
		return (r, a) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(chatMessageStyles)({
				variant: n.variant,
				size: n.size
			}))),
			onClick: a[0] ||= (e) => r.$emit("click", e)
		}, [
			n.variant === "received" && n.showAvatar ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(chatMessageAvatarStyles)({ size: n.size }))
			}, [n.avatar ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: n.avatar,
				alt: n.username || "User avatar",
				class: "w-full h-full object-cover"
			}, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(n.username?.charAt(0).toUpperCase() || "U"), 1))], 2)) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_3, [createElementVNode("div", { class: normalizeClass(unref(cn)(unref(chatMessageBubbleStyles)({
				variant: n.variant,
				size: n.size
			}))) }, [n.loading ? (openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(LIcon_default), {
				name: "loader-2",
				size: "sm"
			})]), a[1] ||= createElementVNode("span", { class: "opacity-70" }, "Sending...", -1)])) : (openBlock(), createElementBlock("div", _hoisted_6, [renderSlot(r.$slots, "default", {}, () => [createTextVNode(toDisplayString(n.content), 1)])])), n.variant === "sent" && n.showStatus && !n.loading ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(unref(chatMessageStatusStyles)({ status: n.status }))
			}, [createVNode(unref(LIcon_default), {
				name: c(),
				size: n.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"]), createElementVNode("span", _hoisted_7, toDisplayString(l()), 1)], 2)) : createCommentVNode("", !0)], 2), n.showTimestamp && !n.loading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(chatMessageTimestampStyles)({ variant: n.variant }))
			}, toDisplayString(s.value), 3)) : createCommentVNode("", !0)]),
			n.variant === "sent" && n.showAvatar ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref(chatMessageAvatarStyles)({ size: n.size }))
			}, [...a[2] ||= [createElementVNode("div", { class: "w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold" }, " Me ", -1)]], 2)) : createCommentVNode("", !0)
		], 2));
	}
});
export { LChatMessage_default as t };
