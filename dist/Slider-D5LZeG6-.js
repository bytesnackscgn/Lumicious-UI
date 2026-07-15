import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, toDisplayString, unref } from "vue";
const sliderStyles = cva("l-slider relative w-full h-10 flex items-center cursor-pointer select-none", {
	variants: { disable: {
		true: "opacity-50 pointer-events-none",
		false: ""
	} },
	defaultVariants: { disable: !1 }
}), sliderTrackStyles = "l-slider__track absolute w-full h-1 rounded-full bg-white/10 overflow-hidden", sliderSelectionStyles = "l-slider__selection absolute h-full bg-blue-500 transition-all duration-100", sliderThumbStyles = "l-slider__thumb absolute w-5 h-5 rounded-full bg-white border-2 border-blue-500 shadow-lg transform -translate-x-1/2 transition-transform duration-100 active:scale-125";
var _hoisted_1 = {
	key: 0,
	class: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200"
}, LSlider_default = /* @__PURE__ */ defineComponent({
	__name: "LSlider",
	props: {
		modelValue: { default: 0 },
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		label: {
			type: Boolean,
			default: !1
		},
		labelValue: {},
		disable: { type: Boolean },
		readonly: { type: Boolean },
		color: {},
		class: {}
	},
	emits: ["update:modelValue", "change"],
	setup(t, { emit: a }) {
		let o = t, s = a, c = ref(null), l = ref(!1), u = computed(() => {
			let e = (o.modelValue - o.min) / (o.max - o.min) * 100;
			return Math.min(100, Math.max(0, e));
		}), d = (e) => {
			if (!c.value || o.disable || o.readonly) return;
			let t = c.value.getBoundingClientRect(), n = "touches" in e ? e.touches[0]?.clientX : e.clientX;
			if (n === void 0) return;
			let r = (n - t.left) / t.width, i = o.min + r * (o.max - o.min);
			o.step > 0 && (i = Math.round(i / o.step) * o.step), i = Math.min(o.max, Math.max(o.min, i)), s("update:modelValue", i);
		}, f = (e) => {
			l.value = !0, d(e), window.addEventListener("mousemove", p), window.addEventListener("mouseup", m), window.addEventListener("touchmove", p), window.addEventListener("touchend", m);
		}, p = (e) => {
			l.value && d(e);
		}, m = () => {
			l.value = !1, s("change", o.modelValue), window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", m);
		};
		return onUnmounted(() => {
			window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m);
		}), (n, a) => (openBlock(), createElementBlock("div", {
			ref_key: "sliderRef",
			ref: c,
			class: normalizeClass(unref(cn)(unref(sliderStyles)({ disable: t.disable }), o.class)),
			onMousedown: f,
			onTouchstartPassive: f
		}, [createElementVNode("div", { class: normalizeClass(unref(sliderTrackStyles)) }, [createElementVNode("div", {
			class: normalizeClass(unref(sliderSelectionStyles)),
			style: normalizeStyle({
				width: `${u.value}%`,
				backgroundColor: t.color
			})
		}, null, 6)], 2), createElementVNode("div", {
			class: normalizeClass(unref(sliderThumbStyles)),
			style: normalizeStyle({
				left: `${u.value}%`,
				borderColor: t.color
			})
		}, [t.label ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(t.labelValue ?? t.modelValue), 1)) : createCommentVNode("", !0)], 6)], 34));
	}
});
export { sliderTrackStyles as a, sliderThumbStyles as i, sliderSelectionStyles as n, sliderStyles as r, LSlider_default as t };
