import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createElementBlock, defineComponent, normalizeClass, openBlock, renderSlot, unref, useCssVars } from "vue";
const btnGroupStyles = cva("l-btn-group inline-flex transition-all duration-300 overflow-hidden", {
	variants: {
		spread: {
			true: "w-full flex",
			false: ""
		},
		outline: {
			true: "border border-white/20",
			false: ""
		},
		rounded: {
			true: "rounded-2xl",
			false: "rounded-xl"
		}
	},
	defaultVariants: {
		spread: !1,
		outline: !1,
		rounded: !1
	}
});
var LBtnGroup_default = /* @__PURE__ */ defineComponent({
	__name: "LBtnGroup",
	props: {
		spread: {
			type: Boolean,
			default: !1
		},
		outline: {
			type: Boolean,
			default: !1
		},
		flat: { type: Boolean },
		rounded: {
			type: Boolean,
			default: !1
		},
		push: { type: Boolean },
		stretch: { type: Boolean },
		glossy: { type: Boolean },
		class: {}
	},
	setup(t) {
		useCssVars((e) => ({ v34806b2e: e.spread ? 1 : 0 }));
		let n = t;
		return (r, i) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(btnGroupStyles)({
			spread: t.spread,
			outline: t.outline,
			rounded: t.rounded
		}), n.class)) }, [renderSlot(r.$slots, "default")], 2));
	}
});
export { btnGroupStyles as n, LBtnGroup_default as t };
