import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, onUnmounted, openBlock, ref, toDisplayString, unref } from "vue";
const rangeStyles = cva("l-range relative w-full h-10 flex items-center cursor-pointer select-none", {
	variants: { disable: {
		true: "opacity-50 pointer-events-none",
		false: ""
	} },
	defaultVariants: { disable: !1 }
}), rangeTrackStyles = "l-range__track absolute w-full h-1 rounded-full bg-white/10 overflow-hidden", rangeSelectionStyles = "l-range__selection absolute h-full bg-blue-500 transition-all duration-100", rangeThumbStyles = "l-range__thumb absolute w-5 h-5 rounded-full bg-white border-2 border-blue-500 shadow-lg transform -translate-x-1/2 transition-transform duration-100 active:scale-125 z-10";
var _hoisted_1 = {
	key: 0,
	class: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white"
}, _hoisted_2 = {
	key: 0,
	class: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white"
}, LRange_default = /* @__PURE__ */ defineComponent({
	__name: "LRange",
	props: {
		modelValue: { default: () => ({
			min: 20,
			max: 80
		}) },
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		label: {
			type: Boolean,
			default: !1
		},
		disable: { type: Boolean },
		readonly: { type: Boolean },
		color: {},
		class: {}
	},
	emits: ["update:modelValue", "change"],
	setup(t, { emit: o }) {
		let s = t, c = o, l = ref(null), u = ref(null), d = computed(() => {
			let e = (s.modelValue.min - s.min) / (s.max - s.min) * 100;
			return Math.min(100, Math.max(0, e));
		}), f = computed(() => {
			let e = (s.modelValue.max - s.min) / (s.max - s.min) * 100;
			return Math.min(100, Math.max(0, e));
		}), p = (e) => {
			if (!l.value || s.disable || s.readonly || !u.value) return;
			let t = l.value.getBoundingClientRect(), n = "touches" in e ? e.touches[0]?.clientX : e.clientX;
			if (n === void 0) return;
			let r = (n - t.left) / t.width, i = s.min + r * (s.max - s.min);
			s.step > 0 && (i = Math.round(i / s.step) * s.step), i = Math.min(s.max, Math.max(s.min, i));
			let a = { ...s.modelValue };
			u.value === "min" ? a.min = Math.min(i, s.modelValue.max) : a.max = Math.max(i, s.modelValue.min), c("update:modelValue", a);
		}, m = (e, t) => {
			u.value = e, window.addEventListener("mousemove", h), window.addEventListener("mouseup", g), window.addEventListener("touchmove", h), window.addEventListener("touchend", g);
		}, h = (e) => {
			p(e);
		}, g = () => {
			u.value = null, c("change", s.modelValue), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", g);
		};
		return onUnmounted(() => {
			window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", g);
		}), (n, o) => (openBlock(), createElementBlock("div", {
			ref_key: "rangeRef",
			ref: l,
			class: normalizeClass(unref(cn)(unref(rangeStyles)({ disable: t.disable }), s.class))
		}, [
			createElementVNode("div", { class: normalizeClass(unref(rangeTrackStyles)) }, [createElementVNode("div", {
				class: normalizeClass(unref(rangeSelectionStyles)),
				style: normalizeStyle({
					left: `${d.value}%`,
					width: `${f.value - d.value}%`,
					backgroundColor: t.color
				})
			}, null, 6)], 2),
			createElementVNode("div", {
				class: normalizeClass(unref(rangeThumbStyles)),
				style: normalizeStyle({
					left: `${d.value}%`,
					borderColor: t.color
				}),
				onMousedown: o[0] ||= (e) => m("min", e),
				onTouchstartPassive: o[1] ||= (e) => m("min", e)
			}, [t.label ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(t.modelValue.min), 1)) : createCommentVNode("", !0)], 38),
			createElementVNode("div", {
				class: normalizeClass(unref(rangeThumbStyles)),
				style: normalizeStyle({
					left: `${f.value}%`,
					borderColor: t.color
				}),
				onMousedown: o[2] ||= (e) => m("max", e),
				onTouchstartPassive: o[3] ||= (e) => m("max", e)
			}, [t.label ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(t.modelValue.max), 1)) : createCommentVNode("", !0)], 38)
		], 2));
	}
});
export { rangeTrackStyles as a, rangeThumbStyles as i, rangeSelectionStyles as n, rangeStyles as r, LRange_default as t };
