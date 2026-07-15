import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LCheckbox_default } from "./Checkbox-B0IQ2dkL.js";
import { t as LRadio_default } from "./Radio-B8E_DorK.js";
import { t as LToggle_default } from "./Toggle-CX5yrpSq.js";
import { Fragment, createBlock, createCommentVNode, createElementBlock, defineComponent, normalizeClass, openBlock, renderList, unref } from "vue";
const optionGroupStyles = cva("l-option-group flex transition-all duration-300", {
	variants: { inline: {
		true: "flex-row flex-wrap gap-4",
		false: "flex-col gap-2"
	} },
	defaultVariants: { inline: !1 }
});
var LOptionGroup_default = /* @__PURE__ */ defineComponent({
	__name: "LOptionGroup",
	props: {
		modelValue: {},
		options: {},
		type: { default: "radio" },
		inline: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		},
		leftLabel: { type: Boolean },
		color: {},
		size: {},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: a }) {
		let o = t, s = a, c = (e) => {
			s("update:modelValue", e);
		};
		return (a, s) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(optionGroupStyles)({ inline: t.inline }), o.class)) }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(t.options, (e) => (openBlock(), createElementBlock(Fragment, { key: e.value }, [t.type === "radio" ? (openBlock(), createBlock(unref(LRadio_default), {
			key: 0,
			"model-value": t.modelValue,
			val: e.value,
			label: e.label,
			disable: t.disable || e.disable,
			dense: t.dense,
			"left-label": t.leftLabel,
			color: t.color,
			size: t.size,
			"onUpdate:modelValue": c
		}, null, 8, [
			"model-value",
			"val",
			"label",
			"disable",
			"dense",
			"left-label",
			"color",
			"size"
		])) : t.type === "checkbox" ? (openBlock(), createBlock(unref(LCheckbox_default), {
			key: 1,
			"model-value": t.modelValue,
			val: e.value,
			label: e.label,
			disable: t.disable || e.disable,
			dense: t.dense,
			"left-label": t.leftLabel,
			color: t.color,
			size: t.size,
			"onUpdate:modelValue": c
		}, null, 8, [
			"model-value",
			"val",
			"label",
			"disable",
			"dense",
			"left-label",
			"color",
			"size"
		])) : t.type === "toggle" ? (openBlock(), createBlock(unref(LToggle_default), {
			key: 2,
			"model-value": Array.isArray(t.modelValue) ? t.modelValue.includes(e.value) : t.modelValue === e.value,
			label: e.label,
			disable: t.disable || e.disable,
			dense: t.dense,
			"left-label": t.leftLabel,
			color: t.color,
			size: t.size,
			"onUpdate:modelValue": (n) => {
				if (Array.isArray(t.modelValue)) {
					let r = [...t.modelValue], i = r.indexOf(e.value);
					n && i === -1 ? r.push(e.value) : !n && i > -1 && r.splice(i, 1), c(r);
				} else c(n ? e.value : null);
			}
		}, null, 8, [
			"model-value",
			"label",
			"disable",
			"dense",
			"left-label",
			"color",
			"size",
			"onUpdate:modelValue"
		])) : createCommentVNode("", !0)], 64))), 128))], 2));
	}
});
export { optionGroupStyles as n, LOptionGroup_default as t };
