import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, createBlock, createCommentVNode, createElementBlock, createVNode, defineComponent, normalizeClass, openBlock, ref, toDisplayString, unref } from "vue";
const fabStyles = cva("fixed z-50 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95", {
	variants: {
		size: {
			sm: "w-12 h-12 text-xs",
			md: "w-14 h-14 text-sm",
			lg: "w-16 h-16 text-base"
		},
		variant: {
			glass: "glass border-white/20 text-white hover:bg-white/20",
			solid: "text-white border-transparent",
			outline: "bg-transparent border"
		},
		color: {
			primary: "",
			secondary: "",
			positive: "",
			negative: "",
			white: ""
		},
		extended: {
			true: "px-4 rounded-full",
			false: "rounded-full"
		},
		mini: {
			true: "w-10 h-10 text-xs",
			false: ""
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
		size: "md",
		variant: "glass",
		color: "primary",
		extended: !1,
		mini: !1
	}
}), fabRippleStyles = cva("absolute rounded-full bg-white/30 animate-ping", {
	variants: { size: {
		sm: "w-12 h-12",
		md: "w-14 h-14",
		lg: "w-16 h-16"
	} },
	defaultVariants: { size: "md" }
}), FAB_POSITIONS = {
	"bottom-right": "bottom-4 right-4",
	"bottom-left": "bottom-4 left-4",
	"top-right": "top-4 right-4",
	"top-left": "top-4 left-4",
	center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
};
var _hoisted_1 = ["disabled"], _hoisted_2 = {
	key: 0,
	class: "animate-spin"
}, _hoisted_3 = {
	key: 1,
	class: "flex items-center gap-2"
}, _hoisted_4 = {
	key: 1,
	class: "font-medium"
}, _hoisted_5 = {
	key: 2,
	class: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50"
}, LFab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LFab",
	props: {
		icon: { default: "plus" },
		label: {},
		size: { default: "md" },
		variant: { default: "glass" },
		color: { default: "primary" },
		position: { default: "bottom-right" },
		disabled: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		ripple: {
			type: Boolean,
			default: !0
		},
		mini: {
			type: Boolean,
			default: !1
		},
		extended: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(n, { emit: r }) {
		let a = n, o = r;
		ref([]);
		let s = (e) => {
			a.disabled || a.loading || (o("click", e), a.ripple && c(e));
		}, c = (e) => {
			let t = e.currentTarget, n = t.getBoundingClientRect(), r = Math.max(n.width, n.height), i = document.createElement("span");
			i.className = fabRippleStyles(), i.style.width = `${r}px`, i.style.height = `${r}px`, i.style.left = `${e.clientX - n.left - r / 2}px`, i.style.top = `${e.clientY - n.top - r / 2}px`, t.style.overflow = "hidden", t.appendChild(i), setTimeout(() => {
				i.remove();
			}, 600);
		};
		return (r, a) => (openBlock(), createElementBlock("button", {
			class: normalizeClass(unref(cn)(unref(fabStyles)({
				size: n.size,
				variant: n.variant,
				color: n.color,
				extended: n.extended,
				mini: n.mini
			}), unref(FAB_POSITIONS)[n.position])),
			disabled: n.disabled || n.loading,
			onClick: s
		}, [n.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(LIcon_default), {
			name: "loader-2",
			size: n.size === "sm" ? "xs" : "sm"
		}, null, 8, ["size"])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [n.icon && !n.extended ? (openBlock(), createBlock(unref(LIcon_default), {
			key: 0,
			name: n.icon,
			size: n.size === "sm" ? "xs" : "sm"
		}, null, 8, ["name", "size"])) : createCommentVNode("", !0), n.extended ? (openBlock(), createElementBlock("div", _hoisted_3, [n.icon ? (openBlock(), createBlock(unref(LIcon_default), {
			key: 0,
			name: n.icon,
			size: n.size === "sm" ? "xs" : "sm"
		}, null, 8, ["name", "size"])) : createCommentVNode("", !0), n.label ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(n.label), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0)], 64)), n.variant === "glass" && !n.loading ? (openBlock(), createElementBlock("div", _hoisted_5)) : createCommentVNode("", !0)], 10, _hoisted_1));
	}
}), [["__scopeId", "data-v-b7ccd2ca"]]);
export { LFab_default as t };
