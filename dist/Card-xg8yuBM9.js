import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { t as LHeadline_default } from "./Headline-BEIrkHOV.js";
import { t as LText_default } from "./Text-DvmCpZXS.js";
import { createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref, withCtx } from "vue";
const cardStyles = cva("l-card rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md", {
	variants: {
		variant: {
			glass: "glass border-white/20 text-white",
			"glass-dark": "glass-dark border-white/10 text-white",
			solid: "bg-white/5 border-transparent text-white",
			outline: "bg-transparent border border-white/20 text-white"
		},
		padding: {
			none: "p-0",
			sm: "p-4",
			md: "p-6",
			lg: "p-8"
		}
	},
	defaultVariants: {
		variant: "glass",
		padding: "md"
	}
});
var _hoisted_1 = {
	key: 0,
	class: "mb-4"
}, _hoisted_2 = { class: "l-card-content" }, _hoisted_3 = {
	key: 1,
	class: "mt-6 flex justify-end gap-3"
}, LCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LCard",
	props: {
		title: {},
		subtitle: {},
		variant: { default: "glass" },
		padding: { default: "md" }
	},
	setup(e) {
		return (t, n) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(cardStyles)({
			variant: e.variant,
			padding: e.padding
		}))) }, [
			t.$slots.header || e.title ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(t.$slots, "header", {}, () => [e.title ? (openBlock(), createBlock(unref(LHeadline_default), {
				key: 0,
				level: 3,
				size: "lg",
				class: "mb-1"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(e.title), 1)]),
				_: 1
			})) : createCommentVNode("", !0), e.subtitle ? (openBlock(), createBlock(unref(LText_default), {
				key: 1,
				size: "sm",
				class: "opacity-60"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(e.subtitle), 1)]),
				_: 1
			})) : createCommentVNode("", !0)], !0)])) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_2, [renderSlot(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_3, [renderSlot(t.$slots, "actions", {}, void 0, !0)])) : createCommentVNode("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-92995ff2"]]);
export { LCard_default as t };
