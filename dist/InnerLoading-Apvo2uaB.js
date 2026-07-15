import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LSpinner_default } from "./Spinner-DhP0sbaZ.js";
import { Transition, createBlock, createCommentVNode, createElementBlock, createVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref, withCtx } from "vue";
const innerLoadingStyles = cva("l-inner-loading absolute inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-md bg-black/10", {
	variants: { showing: {
		true: "opacity-100 visible",
		false: "opacity-0 invisible pointer-events-none"
	} },
	defaultVariants: { showing: !1 }
});
var _hoisted_1 = {
	key: 0,
	class: "mt-2 text-white/80 text-sm font-medium"
}, LInnerLoading_default = /* @__PURE__ */ defineComponent({
	__name: "LInnerLoading",
	props: {
		showing: {
			type: Boolean,
			default: !1
		},
		color: {},
		size: { default: "md" },
		label: {},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createBlock(Transition, {
			"enter-active-class": "transition-opacity duration-300",
			"leave-active-class": "transition-opacity duration-300",
			"enter-from-class": "opacity-0",
			"leave-to-class": "opacity-0"
		}, {
			default: withCtx(() => [e.showing ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)(unref(innerLoadingStyles)({ showing: !0 }), t.class))
			}, [renderSlot(n.$slots, "default", {}, () => [createVNode(unref(LSpinner_default), {
				size: e.size,
				color: e.color
			}, null, 8, ["size", "color"]), e.label ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(e.label), 1)) : createCommentVNode("", !0)])], 2)) : createCommentVNode("", !0)]),
			_: 3
		}));
	}
});
export { innerLoadingStyles as n, LInnerLoading_default as t };
