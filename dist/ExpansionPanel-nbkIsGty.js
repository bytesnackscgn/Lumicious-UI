import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Transition, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, openBlock, ref, renderSlot, toDisplayString, unref, vShow, watch, withCtx, withDirectives } from "vue";
const expansionStyles = cva("l-expansion-panel w-full glass border-white/10 rounded-2xl overflow-hidden transition-all duration-300", {
	variants: { disable: {
		true: "opacity-50 pointer-events-none",
		false: ""
	} },
	defaultVariants: { disable: !1 }
}), expansionHeaderStyles = "l-expansion-panel__header flex items-center gap-4 px-6 py-4 cursor-pointer select-none hover:bg-white/5 transition-colors", expansionContentStyles = "l-expansion-panel__content transition-all duration-300 overflow-hidden", expansionBodyStyles = "p-6 border-t border-white/5";
var _hoisted_1 = ["aria-expanded", "tabindex"], _hoisted_2 = {
	key: 0,
	class: "shrink-0"
}, _hoisted_3 = { class: "flex-grow" }, _hoisted_4 = { class: "text-white font-semibold" }, _hoisted_5 = {
	key: 0,
	class: "text-white/40 text-xs"
}, _hoisted_6 = { class: "shrink-0" }, LExpansionPanel_default = /* @__PURE__ */ defineComponent({
	__name: "LExpansionPanel",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		label: {},
		caption: {},
		icon: {},
		disable: { type: Boolean },
		headerClass: {},
		contentClass: {},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(n, { emit: r }) {
		let a = n, o = r, s = ref(a.modelValue), c = `expansion-${Math.random().toString(36).substring(2, 9)}`, l = `${c}-header`, u = `${c}-content`;
		watch(() => a.modelValue, (e) => {
			s.value = e;
		});
		let d = () => {
			a.disable || (s.value = !s.value, o("update:modelValue", s.value));
		}, f = (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), d());
		}, p = (e) => {
			e.style.height = "0", e.style.opacity = "0";
		}, m = (e) => {
			let t = e;
			t.offsetHeight, t.style.height = t.scrollHeight + "px", t.style.opacity = "1";
		}, h = (e) => {
			let t = e;
			t.style.height = "auto";
		}, g = (e) => {
			let t = e;
			t.style.height = t.scrollHeight + "px", t.style.opacity = "1";
		}, _ = (e) => {
			let t = e;
			t.offsetHeight, t.style.height = "0", t.style.opacity = "0";
		};
		return (r, i) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(expansionStyles)({ disable: n.disable }), a.class)) }, [createElementVNode("div", {
			class: normalizeClass(unref(cn)(unref(expansionHeaderStyles), n.headerClass)),
			onClick: d,
			onKeydown: f,
			role: "button",
			"aria-expanded": s.value,
			"aria-controls": u,
			id: l,
			tabindex: a.disable ? -1 : 0
		}, [
			n.icon || r.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(r.$slots, "icon", {}, () => [createVNode(unref(LIcon_default), { name: n.icon }, null, 8, ["name"])])])) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, toDisplayString(n.label), 1), n.caption ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(n.caption), 1)) : createCommentVNode("", !0)]),
			createElementVNode("div", _hoisted_6, [createVNode(unref(LIcon_default), {
				name: "chevron-down",
				class: normalizeClass(["transition-transform duration-300", { "rotate-180": s.value }])
			}, null, 8, ["class"])])
		], 42, _hoisted_1), createVNode(Transition, {
			onBeforeEnter: p,
			onEnter: m,
			onAfterEnter: h,
			onBeforeLeave: g,
			onLeave: _
		}, {
			default: withCtx(() => [withDirectives(createElementVNode("div", {
				id: u,
				role: "region",
				"aria-labelledby": l,
				class: normalizeClass(unref(cn)(unref(expansionContentStyles), n.contentClass))
			}, [createElementVNode("div", { class: normalizeClass(unref(expansionBodyStyles)) }, [renderSlot(r.$slots, "default")], 2)], 2), [[vShow, s.value]])]),
			_: 3
		})], 2));
	}
});
export { expansionStyles as a, expansionHeaderStyles as i, expansionBodyStyles as n, expansionContentStyles as r, LExpansionPanel_default as t };
