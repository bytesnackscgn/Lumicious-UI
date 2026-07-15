import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { computed, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, unref } from "vue";
const spinnerStyles = cva("l-spinner inline-block animate-spin", {
	variants: { size: {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-6 h-6",
		lg: "w-8 h-8",
		xl: "w-12 h-12"
	} },
	defaultVariants: { size: "md" }
});
var _hoisted_1 = ["stroke", "stroke-width"], LSpinner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LSpinner",
	props: {
		size: { default: "md" },
		color: {},
		thickness: { default: 5 }
	},
	setup(e) {
		let t = e, r = computed(() => typeof t.size == "number" ? {
			width: `${t.size}px`,
			height: `${t.size}px`
		} : {});
		return (t, n) => (openBlock(), createElementBlock("svg", {
			viewBox: "0 0 50 50",
			class: normalizeClass(unref(cn)(unref(spinnerStyles)({ size: typeof e.size == "string" ? e.size : void 0 }))),
			style: normalizeStyle(r.value)
		}, [createElementVNode("circle", {
			cx: "25",
			cy: "25",
			r: "20",
			fill: "none",
			stroke: e.color || "currentColor",
			"stroke-width": e.thickness,
			"stroke-linecap": "round",
			class: "l-spinner__path"
		}, null, 8, _hoisted_1)], 6));
	}
}), [["__scopeId", "data-v-36031454"]]);
export { spinnerStyles as n, LSpinner_default as t };
