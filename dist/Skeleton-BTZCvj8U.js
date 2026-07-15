import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createElementBlock, defineComponent, normalizeClass, normalizeStyle, openBlock, unref } from "vue";
const skeletonStyles = cva("l-skeleton bg-white/5 relative overflow-hidden", {
	variants: {
		animation: {
			pulse: "animate-pulse",
			wave: "l-skeleton--wave",
			none: ""
		},
		square: {
			true: "rounded-none",
			false: "rounded-xl"
		},
		bordered: {
			true: "border border-white/5",
			false: ""
		}
	},
	defaultVariants: {
		animation: "wave",
		square: !1,
		bordered: !1
	}
});
var LSkeleton_default = /* @__PURE__ */ defineComponent({
	__name: "LSkeleton",
	props: {
		type: { default: "rect" },
		animation: { default: "wave" },
		width: {},
		height: {},
		size: {},
		bordered: {
			type: Boolean,
			default: !1
		},
		square: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(t) {
		let r = t, i = computed(() => {
			let e = {};
			if (r.width && (e.width = r.width), r.height && (e.height = r.height), r.type === "circle") {
				let t = r.size || r.width || "48px";
				e.width = t, e.height = t, e.borderRadius = "50%";
			} else r.type === "text" ? (e.height = r.height || "1em", e.width = r.width || "100%", e.marginTop = "0.35em", e.marginBottom = "0.35em") : r.type === "QBtn" && (e.width = r.width || "90px", e.height = r.height || "36px", e.borderRadius = "12px");
			return e;
		});
		return (n, a) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(skeletonStyles)({
				animation: t.animation,
				square: t.square,
				bordered: t.bordered
			}), r.class)),
			style: normalizeStyle(i.value)
		}, null, 6));
	}
});
export { skeletonStyles as n, LSkeleton_default as t };
