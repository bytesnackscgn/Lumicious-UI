import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { computed, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, unref } from "vue";
const linearProgressStyles = cva("l-linear-progress relative overflow-hidden transition-all duration-300 w-full", {
	variants: { rounded: {
		true: "rounded-full",
		false: "rounded-none"
	} },
	defaultVariants: { rounded: !0 }
});
var LLinearProgress_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LLinearProgress",
	props: {
		value: { default: 0 },
		buffer: {},
		indeterminate: {
			type: Boolean,
			default: !1
		},
		query: {
			type: Boolean,
			default: !1
		},
		color: { default: "primary" },
		trackColor: {},
		height: { default: "4px" },
		rounded: {
			type: Boolean,
			default: !0
		},
		class: {}
	},
	setup(e) {
		let t = e, r = computed(() => t.indeterminate || t.query ? "100%" : `${Math.min(1, Math.max(0, t.value)) * 100}%`), i = computed(() => ({
			primary: "bg-blue-500",
			positive: "bg-green-500",
			negative: "bg-red-500",
			warning: "bg-amber-500",
			info: "bg-cyan-500",
			white: "bg-white"
		})[t.color] || ""), a = computed(() => i.value ? {} : { backgroundColor: t.color });
		return (n, o) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(linearProgressStyles)({ rounded: e.rounded }), t.class)),
			style: normalizeStyle({
				height: e.height,
				backgroundColor: e.trackColor || "rgba(255, 255, 255, 0.1)"
			})
		}, [createElementVNode("div", {
			class: normalizeClass(unref(cn)("l-linear-progress__bar h-full transition-all duration-300", i.value, e.indeterminate && "l-linear-progress__bar--indeterminate", e.query && "l-linear-progress__bar--query")),
			style: normalizeStyle({
				width: r.value,
				...a.value
			})
		}, null, 6)], 6));
	}
}), [["__scopeId", "data-v-fff958bf"]]);
export { linearProgressStyles as n, LLinearProgress_default as t };
