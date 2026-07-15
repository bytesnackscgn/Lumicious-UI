import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Fragment, computed, createElementBlock, createVNode, defineComponent, normalizeClass, openBlock, ref, renderList, unref } from "vue";
const ratingStyles = cva("l-rating inline-flex items-center gap-1", {
	variants: { disable: {
		true: "opacity-50 pointer-events-none",
		false: ""
	} },
	defaultVariants: { disable: !1 }
}), ratingIconStyles = "l-rating__icon cursor-pointer transition-all duration-200 active:scale-125";
var _hoisted_1 = ["onMouseenter", "onClick"], LRating_default = /* @__PURE__ */ defineComponent({
	__name: "LRating",
	props: {
		modelValue: { default: 0 },
		max: { default: 5 },
		icon: { default: "star" },
		iconSelected: {},
		iconHalf: {},
		color: { default: "#eab308" },
		size: { default: "md" },
		readonly: { type: Boolean },
		disable: { type: Boolean },
		half: { type: Boolean },
		class: {}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: i }) {
		let a = t, o = i, s = ref(0), c = computed(() => s.value || a.modelValue), l = (e) => {
			!a.disable && !a.readonly && o("update:modelValue", e);
		}, u = (e) => {
			!a.disable && !a.readonly && (s.value = e);
		}, d = () => {
			s.value = 0;
		};
		return (r, i) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(ratingStyles)({ disable: t.disable }), a.class)),
			onMouseleave: d
		}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(t.max, (n) => (openBlock(), createElementBlock("div", {
			key: n,
			class: normalizeClass(unref(cn)(unref(ratingIconStyles))),
			onMouseenter: (e) => u(n),
			onClick: (e) => l(n)
		}, [createVNode(unref(LIcon_default), {
			name: n <= c.value && t.iconSelected || t.icon,
			size: t.size,
			color: n <= c.value ? t.color : "rgba(255,255,255,0.1)",
			"stroke-width": n <= c.value ? 2 : 1
		}, null, 8, [
			"name",
			"size",
			"color",
			"stroke-width"
		])], 42, _hoisted_1))), 128))], 34));
	}
});
export { ratingIconStyles as n, ratingStyles as r, LRating_default as t };
