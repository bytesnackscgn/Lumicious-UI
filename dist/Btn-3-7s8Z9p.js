import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { createBlock, createCommentVNode, createElementBlock, createTextVNode, createVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref } from "vue";
const buttonStyles = cva("l-btn relative overflow-hidden transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-medium select-none disabled:opacity-50 disabled:pointer-events-none", {
	variants: {
		variant: {
			glass: "glass border-white/20 text-white hover:bg-white/20",
			solid: "text-white border-transparent",
			outline: "bg-transparent border",
			ghost: "bg-transparent border-transparent hover:bg-white/10"
		},
		size: {
			sm: "text-xs px-3 py-1.5 rounded-lg",
			md: "text-sm px-6 py-2 rounded-xl",
			lg: "text-base px-8 py-3 rounded-2xl",
			xl: "text-lg px-10 py-4 rounded-[1.25rem]"
		},
		color: {
			primary: "",
			secondary: "",
			positive: "",
			negative: "",
			white: ""
		}
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "primary",
			className: "bg-blue-600/80 hover:bg-blue-500"
		},
		{
			variant: "solid",
			color: "negative",
			className: "bg-red-600/80 hover:bg-red-500"
		},
		{
			variant: "outline",
			color: "primary",
			className: "border-blue-400 text-blue-400 hover:bg-blue-400/10"
		}
	],
	defaultVariants: {
		variant: "glass",
		size: "md",
		color: "primary"
	}
});
var _hoisted_1 = ["disabled"], _hoisted_2 = {
	key: 0,
	class: "animate-spin"
}, _hoisted_3 = {
	key: 2,
	class: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50"
}, LBtn_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LBtn",
	props: {
		label: {},
		size: { default: "md" },
		variant: { default: "glass" },
		color: { default: "primary" },
		blur: {
			type: Boolean,
			default: !0
		},
		flat: { type: Boolean },
		outline: { type: Boolean },
		loading: { type: Boolean },
		disabled: { type: Boolean },
		icon: {},
		iconRight: {}
	},
	emits: ["click"],
	setup(t) {
		return (n, r) => (openBlock(), createElementBlock("button", {
			class: normalizeClass(unref(cn)(unref(buttonStyles)({
				variant: t.variant,
				size: t.size,
				color: t.color
			}))),
			disabled: t.disabled || t.loading,
			onClick: r[0] ||= (e) => n.$emit("click", e)
		}, [
			renderSlot(n.$slots, "prepend", {}, () => [t.icon ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: t.icon,
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"])) : createCommentVNode("", !0)], !0),
			t.loading ? (openBlock(), createElementBlock("span", _hoisted_2, [createVNode(unref(LIcon_default), {
				name: "loader-2",
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["size"])])) : renderSlot(n.$slots, "default", { key: 1 }, () => [createTextVNode(toDisplayString(t.label), 1)], !0),
			renderSlot(n.$slots, "append", {}, () => [t.iconRight ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: t.iconRight,
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"])) : createCommentVNode("", !0)], !0),
			t.variant === "glass" ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("", !0)
		], 10, _hoisted_1));
	}
}), [["__scopeId", "data-v-d8c452a0"]]);
export { LBtn_default as t };
