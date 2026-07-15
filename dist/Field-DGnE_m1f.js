import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LLinearProgress_default } from "./LinearProgress-DoEMuKr2.js";
import { createBlock, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref } from "vue";
const fieldStyles = cva("l-field flex flex-col w-full transition-all duration-300 relative", {
	variants: {
		error: {
			true: "l-field--error",
			false: ""
		},
		disable: {
			true: "opacity-50 pointer-events-none",
			false: ""
		},
		dense: {
			true: "l-field--dense",
			false: ""
		}
	},
	defaultVariants: {
		error: !1,
		disable: !1,
		dense: !1
	}
}), fieldControlStyles = cva("l-field__control relative flex items-center transition-all duration-300 min-h-[56px] px-3", {
	variants: {
		variant: {
			outlined: "glass border-white/20 hover:border-white/40 focus-within:border-blue-500 rounded-xl",
			filled: "bg-white/5 border-b border-white/20 hover:bg-white/10 focus-within:border-blue-500 rounded-t-xl",
			ghost: "bg-transparent border-none"
		},
		error: {
			true: "border-red-500/50 focus-within:border-red-500",
			false: ""
		},
		dense: {
			true: "min-h-[40px]",
			false: ""
		}
	},
	defaultVariants: {
		variant: "outlined",
		error: !1,
		dense: !1
	}
});
var _hoisted_1 = {
	key: 0,
	class: "l-field__prepend mr-3 shrink-0 flex items-center"
}, _hoisted_2 = { class: "l-field__control-container flex-grow relative flex items-center" }, _hoisted_3 = {
	key: 1,
	class: "l-field__append ml-3 shrink-0 flex items-center gap-2"
}, _hoisted_4 = {
	key: 0,
	class: "animate-spin w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
}, _hoisted_5 = { class: "l-field__bottom min-h-[1.5rem] mt-1 pr-3 flex items-start text-[11px]" }, _hoisted_6 = {
	key: 0,
	class: "text-red-400 font-medium"
}, _hoisted_7 = {
	key: 1,
	class: "text-white/40"
}, LField_default = /* @__PURE__ */ defineComponent({
	__name: "LField",
	props: {
		label: {},
		stackLabel: {
			type: Boolean,
			default: !1
		},
		hint: {},
		errorMessage: {},
		error: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		filled: { type: Boolean },
		outlined: {
			type: Boolean,
			default: !0
		},
		standout: { type: Boolean },
		borderless: { type: Boolean },
		rounded: { type: Boolean },
		square: { type: Boolean },
		dense: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(e) {
		let t = e, n = t.borderless ? "ghost" : t.filled ? "filled" : "outlined";
		return (r, i) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(fieldStyles)({
			error: e.error,
			disable: e.disable,
			dense: e.dense
		}), t.class)) }, [
			e.label && (e.stackLabel || r.$slots.control) ? (openBlock(), createElementBlock("label", {
				key: 0,
				class: normalizeClass(["l-field__label text-white/50 text-xs font-semibold mb-1 ml-1 select-none", { "text-red-400": e.error }])
			}, toDisplayString(e.label), 3)) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(fieldControlStyles)({
				variant: unref(n),
				error: e.error,
				dense: e.dense
			}))) }, [
				r.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(r.$slots, "prepend")])) : createCommentVNode("", !0),
				createElementVNode("div", _hoisted_2, [
					renderSlot(r.$slots, "control"),
					renderSlot(r.$slots, "default"),
					e.label && !e.stackLabel ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(["absolute left-0 transition-all pointer-events-none text-white/40", e.dense ? "text-sm" : "text-base"])
					}, toDisplayString(e.label), 3)) : createCommentVNode("", !0)
				]),
				r.$slots.append || e.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [renderSlot(r.$slots, "append"), e.loading ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("", !0)])) : createCommentVNode("", !0),
				e.loading ? (openBlock(), createBlock(unref(LLinearProgress_default), {
					key: 2,
					indeterminate: "",
					class: "absolute bottom-0 left-0 right-0 h-[2px]",
					rounded: !1
				})) : createCommentVNode("", !0)
			], 2),
			createElementVNode("div", _hoisted_5, [
				e.error && e.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(e.errorMessage), 1)) : e.hint ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(e.hint), 1)) : createCommentVNode("", !0),
				i[0] ||= createElementVNode("div", { class: "flex-grow" }, null, -1),
				renderSlot(r.$slots, "counter")
			])
		], 2));
	}
});
export { fieldControlStyles as n, fieldStyles as r, LField_default as t };
