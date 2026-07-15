import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, toDisplayString, unref, watch } from "vue";
const knobContainerStyles = cva("l-knob-container relative flex flex-col items-center justify-center", {
	variants: {
		size: {
			xs: "w-12 h-12",
			s: "w-16 h-16",
			md: "w-20 h-20",
			lg: "w-24 h-24",
			xl: "w-28 h-28"
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: "cursor-pointer"
		}
	},
	defaultVariants: {
		size: "md",
		disabled: !1
	}
}), knobTrackStyles = cva("absolute rounded-full transition-all duration-200", {
	variants: {
		variant: {
			glass: "glass border-white/20",
			solid: "bg-white/20",
			outline: "bg-transparent border-2 border-white/20"
		},
		color: {
			primary: "",
			secondary: "",
			positive: "",
			negative: "",
			info: "",
			warning: "",
			white: ""
		}
	},
	compoundVariants: [
		{
			variant: "glass",
			color: "primary",
			className: "bg-blue-500/20"
		},
		{
			variant: "solid",
			color: "primary",
			className: "bg-blue-500/20"
		},
		{
			variant: "outline",
			color: "primary",
			className: "border-blue-400"
		},
		{
			variant: "glass",
			color: "secondary",
			className: "bg-gray-500/20"
		},
		{
			variant: "solid",
			color: "secondary",
			className: "bg-gray-500/20"
		},
		{
			variant: "outline",
			color: "secondary",
			className: "border-gray-400"
		},
		{
			variant: "glass",
			color: "positive",
			className: "bg-green-500/20"
		},
		{
			variant: "solid",
			color: "positive",
			className: "bg-green-500/20"
		},
		{
			variant: "outline",
			color: "positive",
			className: "border-green-400"
		},
		{
			variant: "glass",
			color: "negative",
			className: "bg-red-500/20"
		},
		{
			variant: "solid",
			color: "negative",
			className: "bg-red-500/20"
		},
		{
			variant: "outline",
			color: "negative",
			className: "border-red-400"
		},
		{
			variant: "glass",
			color: "info",
			className: "bg-cyan-500/20"
		},
		{
			variant: "solid",
			color: "info",
			className: "bg-cyan-500/20"
		},
		{
			variant: "outline",
			color: "info",
			className: "border-cyan-400"
		},
		{
			variant: "glass",
			color: "warning",
			className: "bg-yellow-500/20"
		},
		{
			variant: "solid",
			color: "warning",
			className: "bg-yellow-500/20"
		},
		{
			variant: "outline",
			color: "warning",
			className: "border-yellow-400"
		},
		{
			variant: "glass",
			color: "white",
			className: "bg-white/20"
		},
		{
			variant: "solid",
			color: "white",
			className: "bg-white/20"
		},
		{
			variant: "outline",
			color: "white",
			className: "border-white"
		}
	],
	defaultVariants: {
		variant: "glass",
		color: "primary"
	}
}), knobProgressStyles = cva("absolute rounded-full transition-all duration-200", {
	variants: {},
	defaultVariants: {}
}), knobKnobStyles = cva("absolute rounded-full transition-all duration-200 shadow-lg relative", {
	variants: {
		size: {
			xs: "",
			s: "",
			md: "",
			lg: "",
			xl: ""
		},
		variant: {
			glass: "glass border-white/40",
			solid: "bg-white/30",
			outline: "bg-white/30 border-2 border-white/40"
		},
		color: {
			primary: "",
			secondary: "",
			positive: "",
			negative: "",
			info: "",
			warning: "",
			white: ""
		}
	},
	compoundVariants: [
		{
			size: "xs",
			className: "w-3 h-3"
		},
		{
			size: "s",
			className: "w-5 h-5"
		},
		{
			size: "md",
			className: "w-8 h-8"
		},
		{
			size: "lg",
			className: "w-10 h-10"
		},
		{
			size: "xl",
			className: "w-12 h-12"
		},
		{
			variant: "glass",
			color: "primary",
			className: "bg-blue-500/40"
		},
		{
			variant: "solid",
			color: "primary",
			className: "bg-blue-500/40"
		},
		{
			variant: "outline",
			color: "primary",
			className: "bg-blue-500/40 border-blue-400"
		},
		{
			variant: "glass",
			color: "secondary",
			className: "bg-gray-500/40"
		},
		{
			variant: "solid",
			color: "secondary",
			className: "bg-gray-500/40"
		},
		{
			variant: "outline",
			color: "secondary",
			className: "bg-gray-500/40 border-gray-400"
		},
		{
			variant: "glass",
			color: "positive",
			className: "bg-green-500/40"
		},
		{
			variant: "solid",
			color: "positive",
			className: "bg-green-500/40"
		},
		{
			variant: "outline",
			color: "positive",
			className: "bg-green-500/40 border-green-400"
		},
		{
			variant: "glass",
			color: "negative",
			className: "bg-red-500/40"
		},
		{
			variant: "solid",
			color: "negative",
			className: "bg-red-500/40"
		},
		{
			variant: "outline",
			color: "negative",
			className: "bg-red-500/40 border-red-400"
		},
		{
			variant: "glass",
			color: "info",
			className: "bg-cyan-500/40"
		},
		{
			variant: "solid",
			color: "info",
			className: "bg-cyan-500/40"
		},
		{
			variant: "outline",
			color: "info",
			className: "bg-cyan-500/40 border-cyan-400"
		},
		{
			variant: "glass",
			color: "warning",
			className: "bg-yellow-500/40"
		},
		{
			variant: "solid",
			color: "warning",
			className: "bg-yellow-500/40"
		},
		{
			variant: "outline",
			color: "warning",
			className: "bg-yellow-500/40 border-yellow-400"
		},
		{
			variant: "glass",
			color: "white",
			className: "bg-white/40"
		},
		{
			variant: "solid",
			color: "white",
			className: "bg-white/40"
		},
		{
			variant: "outline",
			color: "white",
			className: "bg-white/40 border-white"
		}
	],
	defaultVariants: {
		size: "md",
		variant: "glass",
		color: "primary"
	}
}), knobValueStyles = cva("text-white font-bold transition-all duration-200", {
	variants: {
		size: {
			xs: "text-[10px] mt-1",
			s: "text-sm mt-3",
			md: "text-base mt-4",
			lg: "text-lg mt-4",
			xl: "text-xl mt-6"
		},
		showValue: {
			true: "",
			false: "opacity-0"
		}
	},
	defaultVariants: {
		size: "md",
		showValue: !0
	}
}), knobIndicatorStyles = cva("absolute rounded-full transition-all duration-200", {
	variants: {
		size: {
			xs: "w-0.25 h-0.75",
			s: "w-0.5 h-1.5",
			md: "w-1 h-4",
			lg: "w-1.5 h-6",
			xl: "w-2 h-8"
		},
		color: {
			primary: "bg-white",
			secondary: "bg-gray-300",
			positive: "bg-green-300",
			negative: "bg-red-300",
			info: "bg-cyan-300",
			warning: "bg-yellow-300",
			white: "bg-white"
		}
	},
	compoundVariants: [
		{
			size: "xs",
			color: "primary",
			className: "w-0.25 h-0.75 bg-white"
		},
		{
			size: "s",
			color: "primary",
			className: "w-0.5 h-1.5 bg-white"
		},
		{
			size: "md",
			color: "primary",
			className: "w-1 h-4 bg-white"
		},
		{
			size: "lg",
			color: "primary",
			className: "w-1.5 h-6 bg-white"
		},
		{
			size: "xl",
			color: "primary",
			className: "w-2 h-8 bg-white"
		},
		{
			size: "xs",
			color: "secondary",
			className: "w-0.25 h-0.75 bg-gray-300"
		},
		{
			size: "s",
			color: "secondary",
			className: "w-0.5 h-1.5 bg-gray-300"
		},
		{
			size: "md",
			color: "secondary",
			className: "w-1 h-4 bg-gray-300"
		},
		{
			size: "lg",
			color: "secondary",
			className: "w-1.5 h-6 bg-gray-300"
		},
		{
			size: "xl",
			color: "secondary",
			className: "w-2 h-8 bg-gray-300"
		},
		{
			size: "xs",
			color: "positive",
			className: "w-0.25 h-0.75 bg-green-300"
		},
		{
			size: "s",
			color: "positive",
			className: "w-0.5 h-1.5 bg-green-300"
		},
		{
			size: "md",
			color: "positive",
			className: "w-1 h-4 bg-green-300"
		},
		{
			size: "lg",
			color: "positive",
			className: "w-1.5 h-6 bg-green-300"
		},
		{
			size: "xl",
			color: "positive",
			className: "w-2 h-8 bg-green-300"
		},
		{
			size: "xs",
			color: "negative",
			className: "w-0.25 h-0.75 bg-red-300"
		},
		{
			size: "s",
			color: "negative",
			className: "w-0.5 h-1.5 bg-red-300"
		},
		{
			size: "md",
			color: "negative",
			className: "w-1 h-4 bg-red-300"
		},
		{
			size: "lg",
			color: "negative",
			className: "w-1.5 h-6 bg-red-300"
		},
		{
			size: "xl",
			color: "negative",
			className: "w-2 h-8 bg-red-300"
		},
		{
			size: "xs",
			color: "info",
			className: "w-0.25 h-0.75 bg-cyan-300"
		},
		{
			size: "s",
			color: "info",
			className: "w-0.5 h-1.5 bg-cyan-300"
		},
		{
			size: "md",
			color: "info",
			className: "w-1 h-4 bg-cyan-300"
		},
		{
			size: "lg",
			color: "info",
			className: "w-1.5 h-6 bg-cyan-300"
		},
		{
			size: "xl",
			color: "info",
			className: "w-2 h-8 bg-cyan-300"
		},
		{
			size: "xs",
			color: "warning",
			className: "w-0.25 h-0.75 bg-yellow-300"
		},
		{
			size: "s",
			color: "warning",
			className: "w-0.5 h-1.5 bg-yellow-300"
		},
		{
			size: "md",
			color: "warning",
			className: "w-1 h-4 bg-yellow-300"
		},
		{
			size: "lg",
			color: "warning",
			className: "w-1.5 h-6 bg-yellow-300"
		},
		{
			size: "xl",
			color: "warning",
			className: "w-2 h-8 bg-yellow-300"
		},
		{
			size: "xs",
			color: "white",
			className: "w-0.25 h-0.75 bg-white"
		},
		{
			size: "s",
			color: "white",
			className: "w-0.5 h-2 bg-white"
		},
		{
			size: "md",
			color: "white",
			className: "w-1 h-4 bg-white"
		},
		{
			size: "lg",
			color: "white",
			className: "w-1.5 h-6 bg-white"
		},
		{
			size: "xl",
			color: "white",
			className: "w-2 h-8 bg-white"
		}
	],
	defaultVariants: {
		size: "md",
		color: "primary"
	}
});
var _hoisted_1 = { class: "flex flex-col items-center" }, LKnob_default = /* @__PURE__ */ defineComponent({
	__name: "LKnob",
	props: {
		modelValue: { default: 0 },
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		size: { default: "md" },
		variant: { default: "glass" },
		color: { default: "primary" },
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		showValue: {
			type: Boolean,
			default: !0
		},
		valuePrecision: { default: 0 },
		trackWidth: { default: 8 },
		knobSize: { default: 20 }
	},
	emits: [
		"update:modelValue",
		"change",
		"input"
	],
	setup(t, { emit: a }) {
		let s = t, c = a, l = ref(), u = ref(), d = ref(!1), f = ref(0), p = ref(s.modelValue), m = computed(() => {
			let e = s.max - s.min, t = (p.value - s.min) / e * 360;
			return Math.max(0, Math.min(360, t));
		}), h = computed(() => p.value.toFixed(s.valuePrecision)), g = computed(() => {
			switch (s.size) {
				case "xs": return 40;
				case "s": return 70;
				case "md": return 100;
				case "lg": return 120;
				case "xl": return 140;
				default: return 100;
			}
		}), _ = computed(() => s.knobSize), v = computed(() => g.value - s.trackWidth), y = (e) => {
			s.disabled || s.readonly || (d.value = !0, f.value = T(e), D(f.value), document.addEventListener("mousemove", b), document.addEventListener("mouseup", x));
		}, b = (e) => {
			d.value && D(T(e));
		}, x = () => {
			d.value && (d.value = !1, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", x));
		}, S = (e) => {
			if (s.disabled || s.readonly) return;
			e.preventDefault(), d.value = !0;
			let t = e.touches[0];
			f.value = E(t), D(f.value), document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("touchend", w);
		}, C = (e) => {
			if (!d.value) return;
			e.preventDefault();
			let t = e.touches[0];
			D(E(t));
		}, w = () => {
			d.value && (d.value = !1, document.removeEventListener("touchmove", C), document.removeEventListener("touchend", w));
		}, T = (e) => {
			if (!l.value) return 0;
			let t = l.value.getBoundingClientRect(), n = t.left + t.width / 2, r = t.top + t.height / 2, i = e.clientX - n, a = e.clientY - r, o = Math.atan2(a, i) * (180 / Math.PI);
			return o = (o + 90 + 360) % 360, o;
		}, E = (e) => {
			if (!l.value) return 0;
			let t = l.value.getBoundingClientRect(), n = t.left + t.width / 2, r = t.top + t.height / 2, i = e.clientX - n, a = e.clientY - r, o = Math.atan2(a, i) * (180 / Math.PI);
			return o = (o + 90 + 360) % 360, o;
		}, D = (e) => {
			let t = s.max - s.min, n = e / 360, r = s.min + n * t;
			r = Math.round(r / s.step) * s.step, r = Math.max(s.min, Math.min(s.max, r)), r !== p.value && (p.value = r, c("update:modelValue", r), c("input", r));
		}, O = () => {
			if (s.disabled || s.readonly) return;
			s.max - s.min;
			let e = s.step || 1, t = p.value + e;
			t > s.max ? p.value = s.min : p.value = t, c("update:modelValue", p.value), c("change", p.value), c("input", p.value);
		};
		return watch(() => s.modelValue, (e) => {
			e !== p.value && (p.value = e);
		}), onUnmounted(() => {
			document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", x), document.removeEventListener("touchmove", C), document.removeEventListener("touchend", w);
		}), (n, a) => (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
			ref_key: "containerRef",
			ref: l,
			class: normalizeClass([unref(cn)(unref(knobContainerStyles)({
				size: t.size,
				disabled: t.disabled
			})), "relative inline-block"]),
			onMousedown: y,
			onTouchstart: S,
			onClick: O
		}, [
			createElementVNode("div", {
				class: normalizeClass([unref(cn)(unref(knobTrackStyles)({
					variant: t.variant,
					color: t.color
				})), "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"]),
				style: normalizeStyle({
					width: `${g.value}px`,
					height: `${g.value}px`
				})
			}, null, 6),
			createElementVNode("div", {
				class: normalizeClass([unref(cn)(unref(knobProgressStyles)()), "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"]),
				style: normalizeStyle({
					width: `${v.value}px`,
					height: `${v.value}px`,
					borderRadius: "50%",
					background: `conic-gradient(
          rgba(255, 255, 255, 0.3) 0deg,
          rgba(255, 255, 255, 0.3) ${m.value}deg,
          transparent ${m.value}deg
        )`
				})
			}, null, 6),
			createElementVNode("div", {
				ref_key: "knobRef",
				ref: u,
				style: normalizeStyle({
					width: `${_.value}px`,
					height: `${_.value}px`,
					transform: `translate(-50%, -50%) rotate(${m.value}deg) translateY(${-((g.value - _.value) / 2)}px)`
				}),
				class: "absolute top-1/2 left-1/2 origin-center"
			}, [createElementVNode("div", { class: normalizeClass([unref(cn)(unref(knobIndicatorStyles)()), "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"]) }, null, 2)], 4)
		], 34), createElementVNode("div", { class: normalizeClass([unref(cn)(unref(knobValueStyles)({
			size: t.size,
			showValue: t.showValue
		})), "block"]) }, toDisplayString(h.value), 3)]));
	}
});
export { knobProgressStyles as a, knobKnobStyles as i, knobContainerStyles as n, knobTrackStyles as o, knobIndicatorStyles as r, knobValueStyles as s, LKnob_default as t };
