import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, computed, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, ref, renderList, toDisplayString, unref, vShow, watch, withDirectives, withModifiers } from "vue";
const colorPickerStyles = cva("glass border-white/20 rounded-xl overflow-hidden transition-all duration-300", {
	variants: {
		size: {
			sm: "p-2",
			md: "p-4",
			lg: "p-6"
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: "cursor-pointer"
		}
	},
	defaultVariants: {
		size: "md",
		disabled: !1
	}
}), colorSwatchStyles = cva("w-8 h-8 rounded-lg border-2 border-white/20 transition-all duration-200 hover:scale-110", { variants: { selected: {
	true: "ring-2 ring-white ring-offset-2 ring-offset-transparent",
	false: ""
} } }), colorInputStyles = cva("glass border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
}), DEFAULT_PRESET_COLORS = [
	"#3B82F6",
	"#EF4444",
	"#10B981",
	"#F59E0B",
	"#8B5CF6",
	"#EC4899",
	"#6366F1",
	"#14B8A6",
	"#F97316",
	"#84CC16",
	"#06B6D4",
	"#A855F7",
	"#F43F5E",
	"#0EA5E9",
	"#22C55E"
], COLOR_FORMATS = {
	hex: {
		label: "HEX",
		pattern: /^#[0-9A-F]{6}$/i
	},
	rgb: {
		label: "RGB",
		pattern: /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i
	},
	hsl: {
		label: "HSL",
		pattern: /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/i
	}
};
var _hoisted_1 = { class: "relative" }, _hoisted_2 = { class: "flex items-center gap-3" }, _hoisted_3 = { class: "flex-1" }, _hoisted_4 = { class: "text-sm font-medium text-white/90" }, _hoisted_5 = { class: "absolute top-full left-0 mt-2 z-50 glass border-white/20 rounded-xl shadow-xl overflow-hidden" }, _hoisted_6 = { class: "p-4" }, _hoisted_7 = { class: "mb-4" }, _hoisted_8 = { class: "relative flex gap-2 mt-2" }, _hoisted_9 = ["value", "disabled"], _hoisted_10 = [
	"value",
	"placeholder",
	"disabled"
], _hoisted_11 = { class: "grid grid-cols-6 gap-2" }, _hoisted_12 = ["onClick", "disabled"], _hoisted_13 = { class: "mt-4 pt-4 border-t border-white/10" }, _hoisted_14 = { class: "flex gap-2" }, _hoisted_15 = ["onClick", "disabled"], LColorPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LColorPicker",
	props: {
		modelValue: { default: "#3B82F6" },
		format: { default: "hex" },
		size: { default: "md" },
		disabled: {
			type: Boolean,
			default: !1
		},
		showAlpha: {
			type: Boolean,
			default: !1
		},
		presetColors: { default: () => DEFAULT_PRESET_COLORS },
		label: {}
	},
	emits: ["update:modelValue", "update:format"],
	setup(n, { emit: r }) {
		let o = n, s = r, c = ref(!1), l = ref(o.modelValue), u = ref(o.modelValue);
		computed(() => o.presetColors.includes(l.value));
		let d = (e) => {
			l.value = e, s("update:modelValue", e), c.value = !1;
		}, f = (e) => {
			let t = e.target;
			u.value = t.value, s("update:modelValue", t.value);
		}, p = () => {
			o.disabled || (c.value = !c.value);
		}, m = () => {
			c.value = !1;
		};
		return watch(() => o.modelValue, (e) => {
			l.value = e, u.value = e;
		}), (r, a) => (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
			class: normalizeClass(unref(cn)(unref(colorPickerStyles)({
				size: n.size,
				disabled: n.disabled
			}))),
			onClick: p
		}, [createElementVNode("div", _hoisted_2, [
			createElementVNode("div", {
				class: "w-8 h-8 rounded-lg border-2 border-white/20 transition-all duration-200",
				style: normalizeStyle({ backgroundColor: l.value })
			}, null, 4),
			createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, toDisplayString(l.value), 1), a[1] ||= createElementVNode("div", { class: "text-xs text-white/60" }, "Click to select color", -1)]),
			createVNode(unref(LIcon_default), {
				name: "chevron-down",
				class: normalizeClass(["text-white/60 transition-transform duration-200", { "rotate-180": c.value }])
			}, null, 8, ["class"])
		])], 2), withDirectives(createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [
			createElementVNode("div", _hoisted_7, [createElementVNode("div", { class: "flex items-center justify-between" }, [a[2] ||= createElementVNode("label", { class: "block text-sm font-medium text-white/90" }, "Custom Color", -1), createElementVNode("button", {
				class: "px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 transition-all duration-200",
				onClick: m
			}, " Submit ")]), createElementVNode("div", _hoisted_8, [createElementVNode("input", {
				value: u.value,
				onInput: f,
				class: normalizeClass(unref(cn)(unref(colorInputStyles)({ size: n.size }))),
				type: "color",
				disabled: n.disabled,
				onClick: a[0] ||= withModifiers(() => {}, ["stop"])
			}, null, 42, _hoisted_9), createElementVNode("input", {
				value: u.value,
				onInput: f,
				class: normalizeClass(unref(cn)(unref(colorInputStyles)({ size: n.size }))),
				type: "text",
				placeholder: `Enter ${n.format.toUpperCase()} color`,
				disabled: n.disabled
			}, null, 42, _hoisted_10)])]),
			createElementVNode("div", null, [a[3] ||= createElementVNode("label", { class: "block text-sm font-medium text-white/90 mb-2" }, "Preset Colors", -1), createElementVNode("div", _hoisted_11, [(openBlock(!0), createElementBlock(Fragment, null, renderList(n.presetColors, (e) => (openBlock(), createElementBlock("button", {
				key: e,
				class: normalizeClass(unref(cn)(unref(colorSwatchStyles)({ selected: e === l.value }))),
				style: normalizeStyle({ backgroundColor: e }),
				onClick: (t) => d(e),
				disabled: n.disabled
			}, null, 14, _hoisted_12))), 128))])]),
			createElementVNode("div", _hoisted_13, [a[4] ||= createElementVNode("label", { class: "block text-sm font-medium text-white/90 mb-2" }, "Format", -1), createElementVNode("div", _hoisted_14, [(openBlock(!0), createElementBlock(Fragment, null, renderList(unref(COLOR_FORMATS), (e, i) => (openBlock(), createElementBlock("button", {
				key: i,
				class: normalizeClass(unref(cn)("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200", i === o.format ? "bg-white/20 text-white" : "bg-transparent text-white/60 hover:bg-white/10")),
				onClick: (e) => r.$emit("update:format", i),
				disabled: n.disabled
			}, toDisplayString(e.label), 11, _hoisted_15))), 128))])])
		])], 512), [[vShow, c.value]])]));
	}
}), [["__scopeId", "data-v-bd2a267f"]]);
export { LColorPicker_default as t };
