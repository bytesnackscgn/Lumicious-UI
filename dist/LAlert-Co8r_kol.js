import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref } from "vue";
const alertStyles = cva("l-Alert flex items-center gap-4 transition-all duration-300 rounded-2xl w-full", {
	variants: {
		variant: {
			glass: "glass border-white/10 text-white",
			solid: "border-transparent text-white",
			outline: "bg-transparent border border-white/20 text-white"
		},
		color: {
			primary: "",
			positive: "",
			negative: "",
			warning: "",
			info: ""
		},
		dense: {
			true: "p-3",
			false: "p-4"
		}
	},
	compoundVariants: [
		{
			variant: "glass",
			color: "primary",
			className: "bg-blue-500/10 border-blue-400/20 text-blue-100"
		},
		{
			variant: "glass",
			color: "positive",
			className: "bg-emerald-500/10 border-emerald-400/20 text-emerald-100"
		},
		{
			variant: "glass",
			color: "negative",
			className: "bg-red-500/10 border-red-400/20 text-red-100"
		},
		{
			variant: "glass",
			color: "warning",
			className: "bg-amber-500/10 border-amber-400/20 text-amber-100"
		},
		{
			variant: "glass",
			color: "info",
			className: "bg-sky-500/10 border-sky-400/20 text-sky-100"
		},
		{
			variant: "solid",
			color: "primary",
			className: "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20"
		},
		{
			variant: "solid",
			color: "positive",
			className: "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/20"
		},
		{
			variant: "solid",
			color: "negative",
			className: "bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/20"
		},
		{
			variant: "solid",
			color: "warning",
			className: "bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-900/20"
		},
		{
			variant: "solid",
			color: "info",
			className: "bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-900/20"
		},
		{
			variant: "outline",
			color: "primary",
			className: "border-blue-500/50 text-blue-200 hover:bg-blue-500/5"
		},
		{
			variant: "outline",
			color: "positive",
			className: "border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/5"
		},
		{
			variant: "outline",
			color: "negative",
			className: "border-red-500/50 text-red-200 hover:bg-red-500/5"
		},
		{
			variant: "outline",
			color: "warning",
			className: "border-amber-500/50 text-amber-200 hover:bg-amber-500/5"
		},
		{
			variant: "outline",
			color: "info",
			className: "border-sky-500/50 text-sky-200 hover:bg-sky-500/5"
		}
	],
	defaultVariants: {
		variant: "glass",
		color: "primary",
		dense: !1
	}
});
var _hoisted_1 = {
	key: 0,
	class: "icon shrink-0"
}, _hoisted_2 = { class: "content flex-grow py-1" }, _hoisted_3 = {
	key: 1,
	class: "actions flex gap-2 pt-1"
}, LAlert_default = /* @__PURE__ */ defineComponent({
	__name: "LAlert",
	props: {
		label: {},
		variant: { default: "glass" },
		color: { default: "primary" },
		icon: {},
		dense: {
			type: Boolean,
			default: !1
		},
		inline: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(alertStyles)({
			variant: e.variant,
			color: e.color,
			dense: e.dense
		}), t.class)) }, [
			n.$slots.icon || e.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(n.$slots, "icon", {}, () => [createVNode(unref(LIcon_default), {
				name: e.icon,
				size: "md"
			}, null, 8, ["name"])])])) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_2, [renderSlot(n.$slots, "default", {}, () => [createTextVNode(toDisplayString(e.label), 1)])]),
			n.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_3, [renderSlot(n.$slots, "actions")])) : createCommentVNode("", !0)
		], 2));
	}
});
export { alertStyles as n, LAlert_default as t };
