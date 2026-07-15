import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createElementBlock, createTextVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref } from "vue";
const badgeStyles = cva("l-badge inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300", {
	variants: {
		variant: {
			glass: "glass border-white/20 text-white shadow-lg",
			solid: "border-transparent text-white",
			outline: "bg-transparent border"
		},
		size: {
			xs: "text-[10px] px-1.5 py-0.5 rounded-sm",
			sm: "text-[11px] px-2 py-0.5 rounded-md",
			md: "text-[13px] px-2.5 py-1 rounded-lg",
			lg: "text-[15px] px-3 py-1.5 rounded-xl"
		},
		color: {
			primary: "",
			secondary: "",
			positive: "",
			negative: "",
			info: "",
			warning: "",
			white: ""
		},
		pill: { true: "rounded-full" },
		floating: { true: "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10" }
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "primary",
			className: "bg-blue-600/80"
		},
		{
			variant: "solid",
			color: "negative",
			className: "bg-red-600/80"
		},
		{
			variant: "outline",
			color: "primary",
			className: "border-blue-400 text-blue-400"
		},
		{
			variant: "glass",
			color: "primary",
			className: "bg-blue-500/20 text-white"
		}
	],
	defaultVariants: {
		variant: "glass",
		size: "md",
		color: "primary",
		pill: !1,
		floating: !1
	}
});
var LBadge_default = /* @__PURE__ */ defineComponent({
	__name: "LBadge",
	props: {
		label: {},
		size: { default: "md" },
		variant: { default: "glass" },
		color: { default: "primary" },
		floating: {
			type: Boolean,
			default: !1
		},
		pill: {
			type: Boolean,
			default: !1
		},
		outline: { type: Boolean }
	},
	setup(e) {
		return (t, n) => (openBlock(), createElementBlock("span", { class: normalizeClass(unref(cn)(unref(badgeStyles)({
			variant: e.variant,
			size: e.size,
			color: e.color,
			pill: e.pill,
			floating: e.floating
		}))) }, [renderSlot(t.$slots, "default", {}, () => [createTextVNode(toDisplayString(e.label), 1)])], 2));
	}
});
export { badgeStyles as n, LBadge_default as t };
