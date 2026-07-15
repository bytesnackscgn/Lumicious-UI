import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Fragment, createBlock, createCommentVNode, createElementBlock, defineComponent, mergeProps, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, renderList, renderSlot, resolveDynamicComponent, toDisplayString, unref, watch } from "vue";
const stackStyles = cva("flex transition-all duration-300 isolate", {
	variants: { direction: {
		horizontal: "flex-row items-center",
		vertical: "flex-col items-center"
	} },
	defaultVariants: { direction: "horizontal" }
}), stackItemStyles = cva("transition-all duration-300 relative", {
	variants: {
		active: {
			true: "z-50 scale-110",
			false: "z-0 scale-100"
		},
		isPlayable: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [{
		isPlayable: !0,
		active: !1,
		className: "opacity-60 blur-[1px] grayscale-[0.5]"
	}, {
		isPlayable: !0,
		active: !0,
		className: "opacity-100 blur-none grayscale-0 ring-2 ring-white/50 rounded-lg"
	}],
	defaultVariants: {
		active: !1,
		isPlayable: !1
	}
});
var _hoisted_1 = ["onClick"], _hoisted_2 = { key: 1 }, LStack_default = /* @__PURE__ */ defineComponent({
	__name: "LStack",
	props: {
		direction: { default: "horizontal" },
		overlap: { default: 0 },
		gap: { default: 0 },
		playable: {
			type: Boolean,
			default: !1
		},
		interval: { default: 2e3 },
		pauseOnHover: {
			type: Boolean,
			default: !0
		},
		disableHover: {
			type: Boolean,
			default: !1
		},
		items: { default: () => [] },
		stackOrder: { default: "normal" },
		itemClass: {}
	},
	emits: [
		"update:active-index",
		"play",
		"pause"
	],
	setup(t, { emit: r }) {
		let i = t, o = r, s = ref(0), c = ref(!1), l = ref(!1), u = null, d = () => {
			!i.playable || u || (o("play"), u = setInterval(() => {
				c.value || (s.value = (s.value + 1) % i.items.length, o("update:active-index", s.value));
			}, i.interval));
		}, f = () => {
			u && (clearInterval(u), u = null, o("pause"));
		}, p = () => {
			l.value = !0, i.playable && i.pauseOnHover && (c.value = !0);
		}, m = () => {
			l.value = !1, i.playable && i.pauseOnHover && (c.value = !1);
		};
		watch(() => i.playable, (e) => {
			e ? d() : f();
		}), onMounted(() => {
			i.playable && d();
		}), onUnmounted(() => {
			f();
		});
		let h = (e) => {
			if (e === 0) return {};
			let t = i.direction === "horizontal" ? "marginLeft" : "marginTop", n = l.value && !i.playable && !i.disableHover ? i.gap : -i.overlap;
			return { [t]: `${n}px` };
		}, g = (e) => i.playable ? s.value === e ? 50 : 10 : i.stackOrder === "reverse" ? (i.items?.length || 50) - e : e;
		return (r, a) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(stackStyles)({ direction: t.direction }))),
			onMouseenter: p,
			onMouseleave: m
		}, [t.items.length > 0 ? (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(t.items, (n, a) => (openBlock(), createElementBlock("div", {
			key: a,
			class: normalizeClass(unref(cn)(unref(stackItemStyles)({
				active: t.playable ? s.value === a : !1,
				isPlayable: t.playable
			}), i.itemClass)),
			style: normalizeStyle({
				...h(a),
				zIndex: g(a)
			}),
			onClick: (e) => {
				s.value = a, o("update:active-index", a);
			}
		}, [renderSlot(r.$slots, "item", {
			item: n,
			index: a,
			active: s.value === a
		}, () => [n.component ? (openBlock(), createBlock(resolveDynamicComponent(n.component), mergeProps({
			key: 0,
			ref_for: !0
		}, n.props), null, 16)) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(n), 1))])], 14, _hoisted_1))), 128)) : renderSlot(r.$slots, "default", { key: 1 })], 34));
	}
});
export { stackItemStyles as n, stackStyles as r, LStack_default as t };
