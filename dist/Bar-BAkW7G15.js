import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createCommentVNode, createElementBlock, defineComponent, normalizeClass, normalizeStyle, openBlock, renderSlot, unref } from "vue";
const barStyles = cva("l-bar glass border border-white/10 flex flex-col h-full z-50 transition-all duration-300 py-3 px-4", {
	variants: {
		fixed: {
			true: "fixed",
			false: "relative"
		},
		rounded: {
			true: "rounded-lg",
			false: "rounded-none"
		},
		dense: {
			true: "py-2 px-3",
			false: "py-3 px-4"
		}
	},
	defaultVariants: {
		fixed: !1,
		rounded: !0,
		dense: !1
	}
}), barWrapperStyles = cva("relative p-4 flex flex-col shrink-1", {
	variants: {
		position: {
			top: "top-0 w-full",
			bottom: "bottom-0 w-full",
			left: "left-0  h-full",
			right: "right-0  h-full"
		},
		dense: {
			true: "p-6",
			false: ""
		}
	},
	defaultVariants: { dense: !1 }
});
var LBar_default = /* @__PURE__ */ defineComponent({
	__name: "LBar",
	props: {
		position: { default: "top" },
		fixed: {
			type: Boolean,
			default: !1
		},
		blur: { type: Boolean },
		width: { default: 80 },
		height: { default: 60 },
		padding: {},
		rounded: {
			type: Boolean,
			default: !0
		},
		dense: {
			type: Boolean,
			default: !1
		},
		wrapperPadding: {},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(barWrapperStyles)({
			position: e.position,
			dense: e.dense
		}))) }, [["top", "bottom"].includes(e.position) ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(unref(cn)(unref(barStyles)({
				fixed: e.fixed,
				dense: e.dense,
				rounded: e.rounded
			}), t.class)),
			style: normalizeStyle({ height: `${e.height}px` })
		}, [renderSlot(n.$slots, "default")], 6)) : ["left", "right"].includes(e.position) ? (openBlock(), createElementBlock("aside", {
			key: 1,
			class: normalizeClass(unref(cn)(unref(barStyles)({
				fixed: e.fixed,
				dense: e.dense,
				rounded: e.rounded
			}), t.class)),
			style: normalizeStyle({
				width: `${e.width}px`,
				padding: e.rounded ? "" : "0"
			})
		}, [renderSlot(n.$slots, "default")], 6)) : createCommentVNode("", !0)], 2));
	}
});
export { barStyles as n, barWrapperStyles as r, LBar_default as t };
