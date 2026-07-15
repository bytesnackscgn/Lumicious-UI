import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Fragment, computed, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, mergeProps, normalizeClass, normalizeProps, onMounted, onUnmounted, openBlock, provide, reactive, ref, renderList, renderSlot, toDisplayString, unref, useSlots, watch } from "vue";
const carouselStyles = cva("l-carousel relative overflow-hidden transition-all duration-500 w-full", {
	variants: {
		size: {
			sm: "h-48",
			md: "h-64",
			lg: "h-96",
			xl: "h-[28rem]"
		},
		variant: {
			glass: "glass border-white/20",
			solid: "bg-white/90 border-transparent",
			outline: "bg-transparent border"
		},
		direction: {
			horizontal: "flex-row",
			vertical: "flex-col"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "glass",
		direction: "horizontal"
	}
}), carouselItemStyles = cva("l-carousel-item absolute inset-0 transition-all duration-500 ease-in-out", {
	variants: {
		active: {
			true: "translate-x-0 translate-y-0 opacity-100 z-10",
			false: "opacity-0 z-0"
		},
		direction: {
			horizontal: "",
			vertical: ""
		}
	},
	compoundVariants: [{
		active: !1,
		direction: "horizontal",
		class: "translate-x-full translate-y-0"
	}, {
		active: !1,
		direction: "vertical",
		class: "translate-x-0 translate-y-full"
	}],
	defaultVariants: {
		active: !1,
		direction: "horizontal"
	}
}), carouselControlsStyles = cva("l-carousel-controls absolute flex items-center justify-center gap-2", {
	variants: { direction: {
		horizontal: "flex-row bottom-4 left-1/2 transform -translate-x-1/2",
		vertical: "flex-col right-4 top-1/2 transform -translate-y-1/2"
	} },
	defaultVariants: { direction: "horizontal" }
}), carouselArrowStyles = cva("l-carousel-arrow glass border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-200", {
	variants: { size: {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12",
		xl: "w-14 h-14"
	} },
	defaultVariants: { size: "md" }
});
var _hoisted_1 = ["aria-label"], _hoisted_2 = { class: "relative w-full h-full overflow-hidden" }, _hoisted_3 = [
	"aria-hidden",
	"aria-label",
	"id"
], _hoisted_4 = { class: "w-full h-full flex items-center justify-center p-4" }, _hoisted_5 = { class: "glass border-white/20 rounded-xl p-6 max-w-full w-full md:max-w-2xl text-center shadow-xl" }, _hoisted_6 = ["src", "alt"], _hoisted_7 = {
	key: 1,
	class: "text-xl md:text-2xl font-bold mb-2 text-white"
}, _hoisted_8 = {
	key: 2,
	class: "text-white/70 text-sm md:text-base"
}, _hoisted_9 = ["innerHTML"], _hoisted_10 = {
	key: 1,
	class: "w-full h-full flex items-center justify-center text-gray-500"
}, _hoisted_11 = ["aria-disabled", "tabindex"], _hoisted_12 = ["aria-disabled", "tabindex"], _hoisted_13 = [
	"onClick",
	"aria-label",
	"aria-selected",
	"tabindex",
	"id",
	"aria-controls"
], _hoisted_14 = {
	key: 2,
	class: "absolute top-4 right-4 z-10"
}, _hoisted_15 = ["aria-label", "aria-pressed"], _hoisted_16 = { class: "sr-only" }, _hoisted_17 = {
	"aria-live": "polite",
	"aria-atomic": "true",
	class: "sr-only"
}, _hoisted_18 = { key: 0 }, LCarousel_default = /* @__PURE__ */ defineComponent({
	__name: "LCarousel",
	props: {
		items: {},
		size: { default: "md" },
		variant: { default: "glass" },
		direction: { default: "horizontal" },
		autoplay: {
			type: Boolean,
			default: !1
		},
		interval: { default: 3e3 },
		enableIndicators: {
			type: Boolean,
			default: !0
		},
		showArrows: {
			type: Boolean,
			default: !0
		},
		loop: {
			type: Boolean,
			default: !0
		},
		currentIndex: { default: 0 }
	},
	emits: ["change", "slide"],
	setup(t, { expose: i, emit: a }) {
		let o = t, s = a, c = useSlots(), l = ref(o.currentIndex), u = ref(o.autoplay), d = ref(null), f = computed(() => o.items?.length || 0), p = () => {
			if (f.value === 0) return;
			let e = o.loop ? (l.value + 1) % f.value : Math.min(l.value + 1, f.value - 1);
			e !== l.value && (l.value = e, s("change", e), s("slide", "next"));
		}, m = () => {
			if (f.value === 0) return;
			let e = o.loop ? (l.value - 1 + f.value) % f.value : Math.max(l.value - 1, 0);
			e !== l.value && (l.value = e, s("change", e), s("slide", "prev"));
		}, h = (e) => {
			f.value === 0 || e === l.value || (l.value = e, s("change", e));
		}, g = () => {
			o.autoplay && o.interval > 0 && (_(), u.value = !0, d.value = setInterval(p, o.interval));
		}, _ = () => {
			d.value &&= (clearInterval(d.value), null), u.value = !1;
		}, v = () => {
			u.value ? _() : g();
		}, y = reactive({
			currentIndex: l,
			isPlaying: u,
			items: computed(() => o.items || []),
			itemsCount: f,
			nextSlide: p,
			prevSlide: m,
			goToSlide: h,
			startAutoplay: g,
			stopAutoplay: _,
			toggleAutoplay: v,
			autoplay: computed(() => o.autoplay),
			enableIndicators: computed(() => o.enableIndicators),
			showArrows: computed(() => o.showArrows),
			loop: computed(() => o.loop),
			direction: computed(() => o.direction),
			size: computed(() => o.size),
			variant: computed(() => o.variant)
		});
		return provide("carouselState", y), i({
			nextSlide: p,
			prevSlide: m,
			goToSlide: h,
			startAutoplay: g,
			stopAutoplay: _,
			toggleAutoplay: v,
			currentIndex: l,
			isPlaying: u,
			itemsCount: f
		}), watch(() => o.autoplay, (e) => {
			e ? g() : _();
		}), watch(() => o.interval, () => {
			u.value && g();
		}), watch(() => o.currentIndex, (e) => {
			e !== l.value && (l.value = e);
		}), onMounted(() => {
			o.autoplay && g();
		}), onUnmounted(() => {
			_();
		}), (r, i) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(carouselStyles)({
				size: t.size,
				variant: t.variant,
				direction: t.direction
			}))),
			"aria-label": `Carousel with ${f.value} items`,
			role: "region",
			"aria-roledescription": "carousel"
		}, [unref(c).default ? renderSlot(r.$slots, "default", normalizeProps(mergeProps({ key: 0 }, y))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
			createElementVNode("div", _hoisted_2, [t.items && t.items.length > 0 ? (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(t.items, (e, n) => (openBlock(), createElementBlock("div", {
				key: e.id,
				class: normalizeClass(unref(cn)(unref(carouselItemStyles)({
					active: n === l.value,
					direction: t.direction
				}))),
				"aria-hidden": n !== l.value,
				"aria-label": `Slide ${n + 1} of ${t.items.length}`,
				role: "tabpanel",
				id: `carousel-slide-${n}`
			}, [createElementVNode("div", _hoisted_4, [renderSlot(r.$slots, "item", {
				item: e,
				index: n
			}, () => [createElementVNode("div", _hoisted_5, [
				e.image ? (openBlock(), createElementBlock("img", {
					key: 0,
					src: e.image,
					alt: e.title || `Slide ${n + 1}`,
					class: "w-full h-48 md:h-64 object-cover rounded-lg mb-4",
					loading: "lazy"
				}, null, 8, _hoisted_6)) : createCommentVNode("", !0),
				e.title ? (openBlock(), createElementBlock("h3", _hoisted_7, toDisplayString(e.title), 1)) : createCommentVNode("", !0),
				e.description ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(e.description), 1)) : createCommentVNode("", !0),
				e.content ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: "mt-4 text-white/90",
					innerHTML: e.content
				}, null, 8, _hoisted_9)) : createCommentVNode("", !0)
			])])])], 10, _hoisted_3))), 128)) : (openBlock(), createElementBlock("div", _hoisted_10, " No items to display "))]),
			t.showArrows && f.value > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createElementVNode("button", {
				class: normalizeClass(unref(cn)(unref(carouselArrowStyles)({ size: t.size }), "absolute z-10", t.direction === "horizontal" ? "left-4 top-1/2 -translate-y-1/2" : "top-4 left-1/2 -translate-x-1/2")),
				onClick: m,
				"aria-label": "Previous slide",
				"aria-disabled": !t.loop && l.value === 0,
				tabindex: !t.loop && l.value === 0 ? -1 : 0
			}, [createVNode(unref(LIcon_default), {
				name: t.direction === "horizontal" ? "chevron-left" : "chevron-up",
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"]), i[0] ||= createElementVNode("span", { class: "sr-only" }, "Previous", -1)], 10, _hoisted_11), createElementVNode("button", {
				class: normalizeClass(unref(cn)(unref(carouselArrowStyles)({ size: t.size }), "absolute z-10", t.direction === "horizontal" ? "right-4 top-1/2 -translate-y-1/2" : "bottom-4 left-1/2 -translate-x-1/2")),
				onClick: p,
				"aria-label": "Next slide",
				"aria-disabled": !t.loop && l.value === f.value - 1,
				tabindex: !t.loop && l.value === f.value - 1 ? -1 : 0
			}, [createVNode(unref(LIcon_default), {
				name: t.direction === "horizontal" ? "chevron-right" : "chevron-down",
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"]), i[1] ||= createElementVNode("span", { class: "sr-only" }, "Next", -1)], 10, _hoisted_12)], 64)) : createCommentVNode("", !0),
			t.enableIndicators && f.value > 1 ? renderSlot(r.$slots, "indicators", normalizeProps(mergeProps({ key: 1 }, y)), () => [createElementVNode("div", {
				class: normalizeClass(unref(cn)(unref(carouselControlsStyles)({ direction: t.direction }), "z-10")),
				role: "tablist"
			}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(t.items, (e, n) => (openBlock(), createElementBlock("button", {
				key: n,
				class: normalizeClass(unref(cn)("rounded-full transition-all duration-300", "w-2 h-2", n === l.value ? t.direction === "horizontal" ? "bg-white w-6" : "bg-white h-6" : "bg-white/30 hover:bg-white/50")),
				onClick: (e) => h(n),
				"aria-label": `Go to slide ${n + 1}`,
				"aria-selected": n === l.value,
				tabindex: n === l.value ? 0 : -1,
				id: `carousel-dot-${n}`,
				role: "tab",
				"aria-controls": `carousel-slide-${n}`
			}, null, 10, _hoisted_13))), 128))], 2)]) : createCommentVNode("", !0),
			t.autoplay ? (openBlock(), createElementBlock("div", _hoisted_14, [createElementVNode("button", {
				class: normalizeClass(unref(cn)("glass border-white/20 rounded-full p-1.5 hover:bg-white/20 transition-all duration-200", t.size === "sm" ? "w-6 h-6" : t.size === "md" ? "w-8 h-8" : t.size === "lg" ? "w-10 h-10" : "w-12 h-12")),
				onClick: v,
				"aria-label": u.value ? "Pause autoplay" : "Start autoplay",
				"aria-pressed": u.value
			}, [createVNode(unref(LIcon_default), {
				name: u.value ? "pause" : "play",
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"]), createElementVNode("span", _hoisted_16, toDisplayString(u.value ? "Pause" : "Play"), 1)], 10, _hoisted_15)])) : createCommentVNode("", !0)
		], 64)), createElementVNode("div", _hoisted_17, [f.value > 0 ? (openBlock(), createElementBlock("span", _hoisted_18, " Slide " + toDisplayString(l.value + 1) + " of " + toDisplayString(f.value), 1)) : createCommentVNode("", !0)])], 10, _hoisted_1));
	}
});
export { carouselStyles as a, carouselItemStyles as i, carouselArrowStyles as n, carouselControlsStyles as r, LCarousel_default as t };
