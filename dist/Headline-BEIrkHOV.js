import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as defaultCvaColorOptions } from "./color-CfLgT3S7.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { n as gradientOptions, t as defaultCvaGradientOptions } from "./gradients-De3BC9os.js";
import { computed, createBlock, defineComponent, normalizeClass, openBlock, renderSlot, resolveDynamicComponent, unref, withCtx } from "vue";
const headlineStyles = cva("l-headline font-black tracking-tight transition-all duration-300", {
	variants: {
		size: {
			xs: "text-sm",
			sm: "text-base",
			md: "text-lg",
			lg: "text-xl",
			xl: "text-2xl",
			"2xl": "text-3xl",
			"3xl": "text-4xl",
			"4xl": "text-5xl",
			"5xl": "text-6xl",
			"6xl": "text-7xl"
		},
		color: defaultCvaColorOptions,
		gradient: {
			true: "",
			false: ""
		},
		gradientDirection: defaultCvaGradientOptions
	},
	compoundVariants: gradientOptions,
	defaultVariants: {
		size: "3xl",
		color: "white",
		gradient: !1,
		gradientDirection: "to-r"
	}
});
var LHeadline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LHeadline",
	props: {
		level: { default: 2 },
		size: {},
		gradient: {
			type: Boolean,
			default: !1
		},
		color: { default: "white" },
		gradientDirection: { default: "to-r" }
	},
	setup(e) {
		let t = e, n = {
			1: "4xl",
			2: "3xl",
			3: "2xl",
			4: "xl",
			5: "lg",
			6: "md"
		}, r = computed(() => t.size || n[t.level]);
		return (n, i) => (openBlock(), createBlock(resolveDynamicComponent(`h${e.level}`), { class: normalizeClass(unref(cn)(unref(headlineStyles)({
			size: r.value,
			color: t.color,
			gradient: t.gradient,
			gradientDirection: t.gradientDirection
		}))) }, {
			default: withCtx(() => [renderSlot(n.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["class"]));
	}
}), [["__scopeId", "data-v-7968efdf"]]);
export { headlineStyles as n, LHeadline_default as t };
