import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as defaultCvaColorOptions } from "./color-CfLgT3S7.js";
import { n as gradientOptions, t as defaultCvaGradientOptions } from "./gradients-De3BC9os.js";
import { createBlock, defineComponent, normalizeClass, openBlock, renderSlot, resolveDynamicComponent, unref, withCtx } from "vue";
const textStyles = cva("l-text transition-all duration-300", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl"
		},
		weight: {
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			black: "font-black"
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
		size: "md",
		weight: "normal",
		color: "white",
		gradient: !1,
		gradientDirection: "to-r"
	}
});
var LText_default = /* @__PURE__ */ defineComponent({
	__name: "LText",
	props: {
		tag: { default: "p" },
		size: { default: "md" },
		weight: { default: "normal" },
		gradient: {
			type: Boolean,
			default: !1
		},
		color: { default: "white" },
		gradientDirection: { default: "to-r" }
	},
	setup(e) {
		return (t, n) => (openBlock(), createBlock(resolveDynamicComponent(e.tag), { class: normalizeClass(unref(cn)(unref(textStyles)({
			size: e.size,
			weight: e.weight,
			color: e.color,
			gradient: e.gradient
		}))) }, {
			default: withCtx(() => [renderSlot(t.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
});
export { textStyles as n, LText_default as t };
