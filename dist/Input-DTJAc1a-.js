import { n as cn } from "./dist-DzHoqs8r.js";
import { t as LField_default } from "./Field-DGnE_m1f.js";
import { createBlock, createElementVNode, createSlots, defineComponent, mergeProps, normalizeClass, onMounted, openBlock, ref, renderSlot, unref, withCtx } from "vue";
const inputBaseStyles = "l-input__native w-full bg-transparent border-none outline-none text-white placeholder-white/20 transition-all duration-300";
var _hoisted_1 = [
	"type",
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"autocomplete"
], LInput_default = /* @__PURE__ */ defineComponent({
	__name: "LInput",
	props: {
		modelValue: { default: "" },
		type: { default: "text" },
		placeholder: {},
		autofocus: { type: Boolean },
		autocomplete: {},
		mask: {},
		rules: {},
		lazyRules: { type: [Boolean, String] },
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
		"blur",
		"clear"
	],
	setup(n, { emit: a }) {
		let o = n, s = a, c = ref(null), l = (e) => {
			let t = e.target;
			s("update:modelValue", t.value);
		}, u = () => {
			s("update:modelValue", ""), s("clear"), c.value?.focus();
		};
		return onMounted(() => {
			o.autofocus && c.value?.focus();
		}), (r, i) => (openBlock(), createBlock(unref(LField_default), mergeProps(o, {
			"stack-label": !0,
			class: "l-input"
		}), createSlots({
			control: withCtx(() => [createElementVNode("input", {
				ref_key: "inputRef",
				ref: c,
				type: n.type,
				value: n.modelValue,
				placeholder: n.placeholder,
				disabled: n.disable,
				readonly: n.readonly,
				autocomplete: n.autocomplete,
				class: normalizeClass(unref(cn)(unref(inputBaseStyles), o.dense ? "text-sm" : "text-base")),
				onInput: l,
				onFocus: i[0] ||= (e) => r.$emit("focus", e),
				onBlur: i[1] ||= (e) => r.$emit("blur", e)
			}, null, 42, _hoisted_1)]),
			_: 2
		}, [
			r.$slots.prepend ? {
				name: "prepend",
				fn: withCtx(() => [renderSlot(r.$slots, "prepend")]),
				key: "0"
			} : void 0,
			r.$slots.append ? {
				name: "append",
				fn: withCtx(() => [renderSlot(r.$slots, "append")]),
				key: "1"
			} : void 0,
			n.modelValue && !n.disable && !n.readonly ? {
				name: "append",
				fn: withCtx(() => [createElementVNode("button", {
					class: "hover:opacity-60 transition-opacity cursor-pointer text-white/40",
					onClick: u
				}, [...i[2] ||= [createElementVNode("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "3",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [createElementVNode("line", {
					x1: "18",
					y1: "6",
					x2: "6",
					y2: "18"
				}), createElementVNode("line", {
					x1: "6",
					y1: "6",
					x2: "18",
					y2: "18"
				})], -1)]]), renderSlot(r.$slots, "append")]),
				key: "2"
			} : void 0
		]), 1040));
	}
});
export { inputBaseStyles as n, LInput_default as t };
