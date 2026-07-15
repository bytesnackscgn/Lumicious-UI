import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LChip_default } from "./Chip-BUrQnALR.js";
import { t as LField_default } from "./Field-DGnE_m1f.js";
import { Fragment, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, mergeProps, normalizeClass, onMounted, onUnmounted, openBlock, ref, renderList, toDisplayString, unref, withCtx } from "vue";
const selectStyles = cva("l-select relative cursor-pointer outline-none select-none", {
	variants: { disable: {
		true: "opacity-50 pointer-events-none",
		false: ""
	} },
	defaultVariants: { disable: !1 }
}), selectMenuStyles = cva("l-select__menu glass absolute z-[1000] mt-2 w-full max-h-[300px] overflow-y-auto rounded-xl p-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200", {
	variants: { showing: {
		true: "block",
		false: "hidden"
	} },
	defaultVariants: { showing: !1 }
});
var _hoisted_1 = { class: "flex flex-wrap gap-1 w-full min-h-[1.5em] items-center" }, _hoisted_2 = {
	key: 0,
	class: "text-white text-sm"
}, _hoisted_3 = {
	key: 0,
	class: "text-white"
}, _hoisted_4 = {
	key: 3,
	class: "text-white/40"
}, _hoisted_5 = ["onClick"], _hoisted_6 = { class: "flex flex-col" }, _hoisted_7 = { class: "text-sm font-medium" }, _hoisted_8 = {
	key: 0,
	class: "text-[10px] opacity-60"
}, _hoisted_9 = {
	key: 0,
	class: "p-4 text-center text-white/40 text-xs"
}, LSelect_default = /* @__PURE__ */ defineComponent({
	__name: "LSelect",
	props: {
		modelValue: { default: null },
		options: {},
		multiple: {
			type: Boolean,
			default: !1
		},
		useChips: {
			type: Boolean,
			default: !1
		},
		placeholder: {},
		class: {},
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
		readonly: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur"
	],
	setup(n, { emit: i }) {
		let a = n, o = i, s = ref(!1), c = ref(null), l = computed(() => a.options.map((e) => typeof e == "string" || typeof e == "number" ? {
			label: String(e),
			value: e
		} : e)), u = computed(() => {
			if (a.multiple) {
				let e = Array.isArray(a.modelValue) ? a.modelValue : [];
				return l.value.filter((t) => e.includes(t.value));
			}
			let e = l.value.find((e) => e.value === a.modelValue);
			return e ? [e] : [];
		}), d = computed(() => a.multiple ? "" : u.value[0]?.label || ""), f = () => {
			!a.disable && !a.readonly && (s.value = !s.value);
		}, p = (e) => {
			if (!e.disable) if (a.multiple) {
				let t = Array.isArray(a.modelValue) ? [...a.modelValue] : [], n = t.indexOf(e.value);
				n > -1 ? t.splice(n, 1) : t.push(e.value), o("update:modelValue", t);
			} else o("update:modelValue", e.value), s.value = !1;
		}, m = (e) => {
			c.value && !c.value.contains(e.target) && (s.value = !1);
		};
		return onMounted(() => {
			document.addEventListener("mousedown", m);
		}), onUnmounted(() => {
			document.removeEventListener("mousedown", m);
		}), (r, i) => (openBlock(), createElementBlock("div", {
			ref_key: "selectRef",
			ref: c,
			class: normalizeClass(unref(cn)(unref(selectStyles)({ disable: n.disable }), a.class))
		}, [createVNode(unref(LField_default), mergeProps(a, {
			"stack-label": !0,
			onClick: f
		}), {
			control: withCtx(() => [createElementVNode("div", _hoisted_1, [n.multiple && n.useChips ? (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(u.value, (e) => (openBlock(), createBlock(unref(LChip_default), {
				key: e.value,
				label: e.label,
				size: "sm",
				removable: "",
				onRemove: (t) => p(e)
			}, null, 8, ["label", "onRemove"]))), 128)) : n.multiple ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [u.value.length ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(u.value.length) + " selected ", 1)) : createCommentVNode("", !0)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [d.value ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(d.value), 1)) : createCommentVNode("", !0)], 64)), !u.value.length && n.placeholder ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(n.placeholder), 1)) : createCommentVNode("", !0)])]),
			append: withCtx(() => [createVNode(unref(LIcon_default), {
				name: "chevron-down",
				size: "sm",
				class: normalizeClass(["transition-transform duration-300", { "rotate-180": s.value }])
			}, null, 8, ["class"])]),
			_: 1
		}, 16), createElementVNode("div", { class: normalizeClass(unref(cn)(unref(selectMenuStyles)({ showing: s.value }))) }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.value, (e) => (openBlock(), createElementBlock("div", {
			key: e.value,
			class: normalizeClass(["px-3 py-2 rounded-lg cursor-pointer transition-colors", [e.value === n.modelValue || Array.isArray(n.modelValue) && n.modelValue.includes(e.value) ? "bg-blue-500/20 text-blue-400" : "text-white/80 hover:bg-white/5", e.disable ? "opacity-30 pointer-events-none" : ""]]),
			onClick: (t) => p(e)
		}, [createElementVNode("div", _hoisted_6, [createElementVNode("span", _hoisted_7, toDisplayString(e.label), 1), e.description ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(e.description), 1)) : createCommentVNode("", !0)])], 10, _hoisted_5))), 128)), l.value.length ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_9, " No options available "))], 2)], 2));
	}
});
export { selectMenuStyles as n, selectStyles as r, LSelect_default as t };
