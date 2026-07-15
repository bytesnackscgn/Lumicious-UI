import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createElementBlock, defineComponent, normalizeClass, onMounted, onUnmounted, openBlock, ref, renderSlot, unref } from "vue";
const tooltipStyles = cva("l-tooltip glass-dark absolute z-[5000] px-2 py-1 rounded-md text-[10px] font-bold text-white whitespace-nowrap pointer-events-none shadow-xl border border-white/10", {
	variants: { showing: {
		true: "animate-in fade-in zoom-in-95 duration-200",
		false: "hidden"
	} },
	defaultVariants: { showing: !1 }
});
var LTooltip_default = /* @__PURE__ */ defineComponent({
	__name: "LTooltip",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		anchor: {},
		self: {},
		offset: {},
		delay: { default: 300 },
		hideDelay: { default: 0 },
		class: {}
	},
	setup(t) {
		let n = t, i = ref(n.modelValue), a = ref(null), o = null, s = () => {
			clearTimeout(o), o = setTimeout(() => {
				i.value = !0;
			}, n.delay);
		}, c = () => {
			clearTimeout(o), o = setTimeout(() => {
				i.value = !1;
			}, n.hideDelay);
		};
		return onMounted(() => {
			let e = a.value?.parentElement;
			e && (e.addEventListener("mouseenter", s), e.addEventListener("mouseleave", c), getComputedStyle(e).position === "static" && (e.style.position = "relative"));
		}), onUnmounted(() => {
			let e = a.value?.parentElement;
			e && (e.removeEventListener("mouseenter", s), e.removeEventListener("mouseleave", c)), clearTimeout(o);
		}), (t, r) => (openBlock(), createElementBlock("div", {
			ref_key: "tooltipRef",
			ref: a,
			class: normalizeClass(unref(cn)(unref(tooltipStyles)({ showing: i.value }), "bottom-full left-1/2 -translate-x-1/2 mb-2", n.class))
		}, [renderSlot(t.$slots, "default")], 2));
	}
});
export { tooltipStyles as n, LTooltip_default as t };
