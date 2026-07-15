import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, renderSlot, unref } from "vue";
const circularProgressStyles = cva("l-circular-progress inline-block relative transition-all duration-300", {
	variants: { indeterminate: {
		true: "animate-spin",
		false: ""
	} },
	defaultVariants: { indeterminate: !1 }
});
var _hoisted_1 = {
	viewBox: "0 0 50 50",
	class: "w-full h-full -rotate-90"
}, _hoisted_2 = ["stroke", "stroke-width"], _hoisted_3 = ["stroke", "stroke-width"], _hoisted_4 = {
	key: 0,
	class: "absolute inset-0 flex items-center justify-center"
}, radius = 20, LCircularProgress_default = /* @__PURE__ */ defineComponent({
	__name: "LCircularProgress",
	props: {
		value: { default: 0 },
		size: { default: "48px" },
		thickness: { default: 3 },
		indeterminate: {
			type: Boolean,
			default: !1
		},
		color: { default: "#3b82f6" },
		trackColor: { default: "rgba(255, 255, 255, 0.1)" },
		instantFeedback: { type: Boolean },
		class: {}
	},
	setup(e) {
		let n = e, r = 2 * Math.PI * radius, i = computed(() => n.indeterminate ? r * .75 : r - Math.min(100, Math.max(0, n.value)) / 100 * r), a = computed(() => typeof n.size == "number" ? `${n.size}px` : n.size);
		return (t, o) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(circularProgressStyles)({ indeterminate: e.indeterminate }), n.class)),
			style: normalizeStyle({
				width: a.value,
				height: a.value
			})
		}, [(openBlock(), createElementBlock("svg", _hoisted_1, [createElementVNode("circle", {
			cx: "25",
			cy: "25",
			r: radius,
			fill: "none",
			stroke: e.trackColor,
			"stroke-width": e.thickness
		}, null, 8, _hoisted_2), createElementVNode("circle", {
			cx: "25",
			cy: "25",
			r: radius,
			fill: "none",
			stroke: e.color,
			"stroke-width": e.thickness,
			"stroke-linecap": "round",
			class: "transition-all duration-300 ease-in-out",
			style: normalizeStyle({
				strokeDasharray: r,
				strokeDashoffset: i.value
			})
		}, null, 12, _hoisted_3)])), t.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_4, [renderSlot(t.$slots, "default")])) : createCommentVNode("", !0)], 6));
	}
});
export { circularProgressStyles as n, LCircularProgress_default as t };
