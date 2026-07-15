import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, toDisplayString, unref } from "vue";
const checkboxStyles = cva("l-checkbox inline-flex items-center cursor-pointer select-none transition-all duration-300", {
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
}), checkboxBoxStyles = cva("l-checkbox__inner relative flex items-center justify-center border-2 transition-all duration-300 rounded-md", {
	variants: {
		checked: {
			true: "bg-blue-500 border-blue-500",
			false: "bg-white/5 border-white/20"
		},
		size: {
			xs: "w-3 h-3",
			sm: "w-4 h-4",
			md: "w-5 h-5",
			lg: "w-6 h-6",
			xl: "w-8 h-8"
		}
	},
	defaultVariants: {
		checked: !1,
		size: "md"
	}
});
var _hoisted_1 = {
	key: 0,
	class: "text-white/80 select-none"
}, _hoisted_2 = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "white",
	"stroke-width": "4",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
	class: "w-[70%] h-[70%]"
}, _hoisted_3 = {
	key: 1,
	class: "text-white/80 select-none"
}, LCheckbox_default = /* @__PURE__ */ defineComponent({
	__name: "LCheckbox",
	props: {
		modelValue: { type: [Boolean, Array] },
		val: {},
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
		class: {}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: r }) {
		let i = t, a = r, o = computed(() => Array.isArray(i.modelValue) ? i.modelValue.includes(i.val) : i.modelValue === !0), s = () => {
			if (!i.disable) if (Array.isArray(i.modelValue)) {
				let e = [...i.modelValue], t = e.indexOf(i.val);
				t > -1 ? e.splice(t, 1) : e.push(i.val), a("update:modelValue", e);
			} else a("update:modelValue", !i.modelValue);
		};
		return (n, r) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(checkboxStyles)({
				disable: t.disable,
				dense: t.dense
			}), i.class)),
			onClick: s
		}, [
			t.label && t.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(t.label), 1)) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(checkboxBoxStyles)({
				checked: o.value,
				size: t.size
			}))) }, [o.value ? (openBlock(), createElementBlock("svg", _hoisted_2, [...r[0] ||= [createElementVNode("polyline", { points: "20 6 9 17 4 12" }, null, -1)]])) : createCommentVNode("", !0)], 2),
			t.label && !t.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(t.label), 1)) : createCommentVNode("", !0)
		], 2));
	}
});
export { checkboxBoxStyles as n, checkboxStyles as r, LCheckbox_default as t };
