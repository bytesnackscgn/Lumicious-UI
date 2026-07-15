import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { computed, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, toDisplayString, unref } from "vue";
const radioStyles = cva("l-radio inline-flex items-center cursor-pointer select-none transition-all duration-300", {
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
}), radioCircleStyles = cva("l-radio__inner relative flex items-center justify-center border-2 transition-all duration-300 rounded-full", {
	variants: {
		checked: {
			true: "border-blue-500",
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
	class: "w-[60%] h-[60%] bg-blue-500 rounded-full animate-in zoom-in-50 duration-200"
}, _hoisted_3 = {
	key: 1,
	class: "text-white/80 select-none"
}, LRadio_default = /* @__PURE__ */ defineComponent({
	__name: "LRadio",
	props: {
		modelValue: {},
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
	setup(e, { emit: n }) {
		let r = e, i = n, a = computed(() => r.modelValue === r.val), o = () => {
			r.disable || i("update:modelValue", r.val);
		};
		return (t, n) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(radioStyles)({
				disable: e.disable,
				dense: e.dense
			}), r.class)),
			onClick: o
		}, [
			e.label && e.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(e.label), 1)) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(radioCircleStyles)({
				checked: a.value,
				size: e.size
			}))) }, [a.value ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", !0)], 2),
			e.label && !e.leftLabel ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(e.label), 1)) : createCommentVNode("", !0)
		], 2));
	}
});
export { radioCircleStyles as n, radioStyles as r, LRadio_default as t };
