import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, toDisplayString, unref } from "vue";
const toggleStyles = cva("l-toggle inline-flex items-center cursor-pointer select-none transition-all duration-300", {
	variants: {
		disable: {
			true: "opacity-50 pointer-events-none",
			false: ""
		},
		dense: {
			true: "gap-2",
			false: "gap-3"
		}
	},
	defaultVariants: {
		disable: !1,
		dense: !1
	}
}), toggleTrackStyles = cva("l-toggle__track relative transition-all duration-300 rounded-full bg-white/10 border border-white/10", {
	variants: {
		checked: {
			true: "bg-blue-600/50 border-blue-500/50",
			false: ""
		},
		size: {
			xs: "w-6 h-3.5",
			sm: "w-8 h-4.5",
			md: "w-10 h-6",
			lg: "w-12 h-7",
			xl: "w-16 h-9"
		}
	},
	defaultVariants: {
		checked: !1,
		size: "md"
	}
}), toggleThumbStyles = cva("l-toggle__thumb absolute top-0.5 left-0.5 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden", {
	variants: {
		checked: {
			true: "translate-x-full",
			false: "translate-x-0"
		},
		size: {
			xs: "w-2.5 h-2.5",
			sm: "w-3.5 h-3.5",
			md: "w-5 h-5",
			lg: "w-6 h-6",
			xl: "w-8 h-8"
		}
	},
	compoundVariants: [
		{
			size: "xs",
			checked: !0,
			className: "translate-x-2.5"
		},
		{
			size: "sm",
			checked: !0,
			className: "translate-x-3.5"
		},
		{
			size: "md",
			checked: !0,
			className: "translate-x-4"
		},
		{
			size: "lg",
			checked: !0,
			className: "translate-x-5"
		},
		{
			size: "xl",
			checked: !0,
			className: "translate-x-7"
		}
	],
	defaultVariants: {
		checked: !1,
		size: "md"
	}
});
var _hoisted_1 = {
	key: 0,
	class: "text-white/80 select-none"
}, _hoisted_2 = {
	key: 1,
	class: "text-white/80 select-none"
}, LToggle_default = /* @__PURE__ */ defineComponent({
	__name: "LToggle",
	props: {
		modelValue: { type: Boolean },
		label: {},
		leftLabel: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		},
		color: {},
		size: { default: "md" },
		dense: {
			type: Boolean,
			default: !1
		},
		icon: {},
		checkedIcon: {},
		uncheckedIcon: {},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: n }) {
		let r = e, i = n, a = () => {
			r.disable || i("update:modelValue", !r.modelValue);
		}, o = computed(() => r.modelValue && r.checkedIcon ? r.checkedIcon : !r.modelValue && r.uncheckedIcon ? r.uncheckedIcon : r.icon);
		return (t, n) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(toggleStyles)({
				disable: e.disable,
				dense: e.dense
			}), r.class)),
			onClick: a
		}, [
			e.label && e.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(e.label), 1)) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(toggleTrackStyles)({
				checked: e.modelValue,
				size: e.size
			}))) }, [createElementVNode("div", { class: normalizeClass(unref(cn)(unref(toggleThumbStyles)({
				checked: e.modelValue,
				size: e.size
			}))) }, [o.value ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: o.value,
				size: e.size === "xs" ? "xs" : "sm",
				class: "text-slate-900"
			}, null, 8, ["name", "size"])) : createCommentVNode("", !0)], 2)], 2),
			e.label && !e.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(e.label), 1)) : createCommentVNode("", !0)
		], 2));
	}
});
export { toggleTrackStyles as i, toggleStyles as n, toggleThumbStyles as r, LToggle_default as t };
