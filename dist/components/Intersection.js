import { n as cn, t as cva } from "../dist-DzHoqs8r.js";
import { createElementBlock, defineComponent, normalizeClass, onMounted, onUnmounted, openBlock, ref, renderSlot, unref, watch } from "vue";
const intersectionStyles = cva("l-intersection transition-all duration-500", {
	variants: { isVisible: {
		true: "opacity-100 translate-y-0",
		false: "opacity-0 translate-y-4"
	} },
	defaultVariants: { isVisible: !1 }
});
var LIntersection_default = /* @__PURE__ */ defineComponent({
	__name: "LIntersection",
	props: {
		threshold: { default: .1 },
		rootMargin: { default: "0px" },
		once: {
			type: Boolean,
			default: !0
		},
		fallback: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	emits: [
		"intersect",
		"intersectOnce",
		"leave"
	],
	setup(t, { emit: n }) {
		let r = t, i = n, a = ref(!1), o = ref(null), s = ref(null), c = () => {
			s.value && (o.value = new IntersectionObserver((e) => {
				e.forEach((e) => {
					e.isIntersecting ? (a.value = !0, i("intersect", e), r.once && (i("intersectOnce", e), o.value && o.value.unobserve(s.value))) : (a.value = !1, i("leave", e));
				});
			}, {
				threshold: r.threshold,
				rootMargin: r.rootMargin
			}), o.value.observe(s.value));
		}, l = () => {
			o.value && s.value && (o.value.unobserve(s.value), o.value.disconnect(), o.value = null), r.fallback && (a.value = !1);
		};
		return watch(() => [
			r.threshold,
			r.rootMargin,
			r.once
		], () => {
			l(), c();
		}, { deep: !0 }), onMounted(() => {
			c();
		}), onUnmounted(() => {
			l();
		}), (t, n) => (openBlock(), createElementBlock("div", {
			ref_key: "elementRef",
			ref: s,
			class: normalizeClass(unref(cn)(unref(intersectionStyles)({ isVisible: a.value }), r.class))
		}, [renderSlot(t.$slots, "default", { isVisible: a.value })], 2));
	}
});
export { LIntersection_default as LIntersection };
