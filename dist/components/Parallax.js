import { n as cn, t as cva } from "../dist-DzHoqs8r.js";
import { computed, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, renderSlot, unref } from "vue";
const parallaxStyles = cva("l-parallax relative overflow-hidden", {
	variants: {
		direction: {
			up: "",
			down: "",
			left: "",
			right: ""
		},
		disabled: {
			true: "pointer-events-none",
			false: ""
		}
	},
	defaultVariants: {
		direction: "up",
		disabled: !1
	}
});
var LParallax_default = /* @__PURE__ */ defineComponent({
	__name: "LParallax",
	props: {
		speed: { default: .5 },
		direction: { default: "up" },
		disabled: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	emits: ["scroll"],
	setup(t, { emit: a }) {
		let s = t, c = a, l = ref(null), u = ref(null), d = ref(0), f = ref(!1), p = computed(() => {
			if (!f.value || s.disabled) return {};
			let e = Math.min(Math.max(d.value * s.speed, -100), 100);
			return s.direction === "up" ? { transform: `translateY(${e}px)` } : s.direction === "down" ? { transform: `translateY(${-e}px)` } : s.direction === "left" ? { transform: `translateX(${e}px)` } : s.direction === "right" ? { transform: `translateX(${-e}px)` } : {};
		}), m = () => {
			if (!l.value || !u.value || s.disabled) return;
			let e = u.value.getBoundingClientRect(), t = l.value.getBoundingClientRect(), n = t.top - e.top, r = t.height, i = e.height, a = (i - n) / (i + r), o = Math.max(0, Math.min(1, a));
			d.value = o * 100, c("scroll", o);
		}, h = ref(null), g = () => {
			u.value && (h.value = new IntersectionObserver((e) => {
				e.forEach((e) => {
					f.value = e.isIntersecting, f.value && m();
				});
			}, { threshold: [
				0,
				.1,
				.5,
				1
			] }), h.value.observe(u.value));
		};
		return onMounted(() => {
			g(), typeof window < "u" && (window.addEventListener("scroll", m, { passive: !0 }), window.addEventListener("resize", m)), m();
		}), onUnmounted(() => {
			h.value && u.value && h.value.unobserve(u.value), typeof window < "u" && (window.removeEventListener("scroll", m), window.removeEventListener("resize", m));
		}), (n, a) => (openBlock(), createElementBlock("div", {
			ref_key: "containerRef",
			ref: u,
			class: normalizeClass(unref(cn)(unref(parallaxStyles)({
				direction: t.direction,
				disabled: t.disabled
			}), s.class))
		}, [createElementVNode("div", {
			ref_key: "elementRef",
			ref: l,
			style: normalizeStyle(p.value)
		}, [renderSlot(n.$slots, "default")], 4)], 2));
	}
});
export { LParallax_default as LParallax };
