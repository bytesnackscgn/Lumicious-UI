import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createElementBlock, defineComponent, normalizeClass, openBlock, unref } from "vue";
const separatorStyles = cva("l-separator shrink-0 transition-all duration-300", {
	variants: {
		orientation: {
			horizontal: "h-[1px] w-full",
			vertical: "h-full w-[1px]"
		},
		color: {
			white: "bg-white/20",
			glass: "bg-white/10 backdrop-blur-sm",
			dark: "bg-black/20"
		},
		inset: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [{
		orientation: "horizontal",
		inset: !0,
		className: "mx-4 w-[calc(100%-2rem)]"
	}, {
		orientation: "vertical",
		inset: !0,
		className: "my-4 h-[calc(100%-2rem)]"
	}],
	defaultVariants: {
		orientation: "horizontal",
		color: "white",
		inset: !1
	}
});
var _hoisted_1 = ["aria-orientation"], LSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "LSeparator",
	props: {
		orientation: { default: "horizontal" },
		inset: {
			type: Boolean,
			default: !1
		},
		color: { default: "white" }
	},
	setup(e) {
		return (t, n) => (openBlock(), createElementBlock("div", {
			role: "separator",
			"aria-orientation": e.orientation,
			class: normalizeClass(unref(cn)(unref(separatorStyles)({
				orientation: e.orientation,
				color: e.color,
				inset: e.inset
			})))
		}, null, 10, _hoisted_1));
	}
});
export { separatorStyles as n, LSeparator_default as t };
