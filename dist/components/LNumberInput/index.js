import { n as cn } from "../../dist-DzHoqs8r.js";
import { t as LField_default } from "../../Field-DGnE_m1f.js";
import "../../LinearProgress-DoEMuKr2.js";
import { computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, defineComponent, mergeProps, normalizeClass, openBlock, renderSlot, unref, withCtx } from "vue";
const buttonBaseStyles = "flex items-center justify-center min-w-[24px] bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 backdrop-blur-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:active:scale-100";
var _hoisted_1 = {
	key: 0,
	class: "flex flex-col gap-0.5"
}, _hoisted_2 = ["disabled"], _hoisted_3 = ["disabled"], _hoisted_4 = ["disabled"], _hoisted_5 = [
	"value",
	"min",
	"max",
	"step",
	"placeholder",
	"disabled",
	"readonly"
], _hoisted_6 = {
	key: 0,
	class: "flex flex-col gap-0.5"
}, _hoisted_7 = ["disabled"], _hoisted_8 = ["disabled"], _hoisted_9 = ["disabled"], LNumberInput_default = /* @__PURE__ */ defineComponent({
	__name: "LNumberInput",
	props: {
		modelValue: { default: 0 },
		min: { default: -Infinity },
		max: { default: Infinity },
		step: { default: 1 },
		layout: { default: "right" },
		placeholder: {},
		type: { default: "number" },
		label: {},
		stackLabel: { type: Boolean },
		hint: {},
		errorMessage: {},
		error: { type: Boolean },
		loading: { type: Boolean },
		filled: { type: Boolean },
		outlined: { type: Boolean },
		standout: { type: Boolean },
		borderless: { type: Boolean },
		rounded: { type: Boolean },
		square: { type: Boolean },
		dense: { type: Boolean },
		disable: { type: Boolean },
		readonly: { type: Boolean },
		class: {}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur"
	],
	setup(r, { emit: i }) {
		let a = r, o = i, s = computed(() => a.disable || a.loading), c = () => {
			if (s.value) return;
			let e = (a.modelValue || 0) + a.step;
			e <= a.max && o("update:modelValue", e);
		}, l = () => {
			if (s.value) return;
			let e = (a.modelValue || 0) - a.step;
			e >= a.min && o("update:modelValue", e);
		}, u = (e) => {
			let t = e.target, n = parseFloat(t.value);
			isNaN(n) || (n > a.max && (n = a.max), n < a.min && (n = a.min), o("update:modelValue", n));
		};
		return (n, i) => (openBlock(), createBlock(unref(LField_default), mergeProps(a, {
			"stack-label": !0,
			class: "l-number-input"
		}), {
			prepend: withCtx(() => [r.layout === "left" ? (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("button", {
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-t-sm h-4 text-[10px] leading-none px-1 py-0")),
				onClick: c,
				"aria-label": "Increment"
			}, "+", 10, _hoisted_2), createElementVNode("button", {
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-b-sm h-4 text-[10px] leading-none px-1 py-0")),
				onClick: l,
				"aria-label": "Decrement"
			}, "-", 10, _hoisted_3)])) : r.layout === "split" ? (openBlock(), createElementBlock("button", {
				key: 1,
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-md")),
				onClick: l,
				"aria-label": "Decrement"
			}, "-", 10, _hoisted_4)) : createCommentVNode("", !0), renderSlot(n.$slots, "prepend")]),
			control: withCtx(() => [createElementVNode("input", {
				type: "number",
				value: r.modelValue,
				min: r.min,
				max: r.max,
				step: r.step,
				placeholder: r.placeholder,
				disabled: s.value,
				readonly: r.readonly,
				class: normalizeClass(unref(cn)(unref("l-input__native w-full bg-transparent border-none outline-none text-white placeholder-white/20 transition-all duration-300 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] disabled:opacity-50 disabled:cursor-not-allowed"), a.dense ? "text-sm" : "text-base")),
				onInput: u,
				onFocus: i[0] ||= (e) => n.$emit("focus", e),
				onBlur: i[1] ||= (e) => n.$emit("blur", e)
			}, null, 42, _hoisted_5)]),
			append: withCtx(() => [r.layout === "right" ? (openBlock(), createElementBlock("div", _hoisted_6, [createElementVNode("button", {
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-t-sm h-4 text-[10px] leading-none px-1 py-0")),
				onClick: c,
				"aria-label": "Increment"
			}, "+", 10, _hoisted_7), createElementVNode("button", {
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-b-sm h-4 text-[10px] leading-none px-1 py-0")),
				onClick: l,
				"aria-label": "Decrement"
			}, "-", 10, _hoisted_8)])) : r.layout === "split" ? (openBlock(), createElementBlock("button", {
				key: 1,
				disabled: s.value,
				class: normalizeClass(unref(cn)(unref(buttonBaseStyles), "rounded-md")),
				onClick: c,
				"aria-label": "Increment"
			}, "+", 10, _hoisted_9)) : createCommentVNode("", !0), renderSlot(n.$slots, "append")]),
			_: 3
		}, 16));
	}
}), LNumberInput_default$1 = LNumberInput_default;
export { LNumberInput_default as LNumberInput, LNumberInput_default$1 as default };
