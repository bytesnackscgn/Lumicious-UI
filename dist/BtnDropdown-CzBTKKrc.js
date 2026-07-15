import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LBtn_default } from "./Btn-3-7s8Z9p.js";
import { t as LMenu_default } from "./Menu-BL0H_9nJ.js";
import { createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, mergeProps, normalizeClass, openBlock, ref, renderSlot, toDisplayString, unref, useId, watch, withCtx, withModifiers } from "vue";
const btnDropdownStyles = cva("l-btn-dropdown inline-flex transition-all duration-300 relative", { variants: {} }), btnDropdownMenuStyles = cva("min-w-full mt-1 top-full left-0 origin-top-left"), btnDropdownLabelContainerStyles = cva("flex items-center gap-2"), btnDropdownIconStyles = cva("transition-transform duration-300", {
	variants: { isOpen: {
		true: "rotate-180",
		false: ""
	} },
	defaultVariants: { isOpen: !1 }
});
var LBtnDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "LBtnDropdown",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		contentClass: {},
		persistent: { type: Boolean },
		autoClose: {
			type: Boolean,
			default: !0
		},
		menuAnchor: {},
		menuSelf: {},
		hideIcon: {
			type: Boolean,
			default: !1
		},
		class: {},
		label: {},
		size: {},
		variant: {},
		color: {},
		blur: { type: Boolean },
		flat: { type: Boolean },
		outline: { type: Boolean },
		loading: { type: Boolean },
		disabled: { type: Boolean },
		icon: { default: "chevron-down" },
		iconRight: {}
	},
	emits: ["update:modelValue", "click"],
	setup(t, { emit: n }) {
		let i = t, a = n, o = ref(i.modelValue), s = useId();
		watch(() => i.modelValue, (e) => {
			o.value = e;
		});
		let c = (e) => {
			e && e.stopPropagation(), o.value = !o.value, a("update:modelValue", o.value);
		}, l = (e) => {
			c(e);
		}, u = (e) => {
			i.autoClose && e.target === e.currentTarget && (o.value = !1, a("update:modelValue", !1));
		};
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(btnDropdownStyles)(), i.class)) }, [createVNode(unref(LBtn_default), mergeProps(i, {
			class: i.class,
			icon: void 0,
			onClick: l,
			onMousedown: r[0] ||= withModifiers(() => {}, ["stop"]),
			"aria-haspopup": "true",
			"aria-expanded": o.value,
			"aria-controls": unref(s)
		}), {
			default: withCtx(() => [createElementVNode("div", { class: normalizeClass(unref(btnDropdownLabelContainerStyles)()) }, [renderSlot(n.$slots, "label", {}, () => [createTextVNode(toDisplayString(t.label), 1)]), t.hideIcon ? createCommentVNode("", !0) : (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: t.icon,
				size: "xs",
				class: normalizeClass(unref(btnDropdownIconStyles)({ isOpen: o.value }))
			}, null, 8, ["name", "class"]))], 2)]),
			_: 3
		}, 16, [
			"class",
			"aria-expanded",
			"aria-controls"
		]), createVNode(unref(LMenu_default), {
			id: unref(s),
			modelValue: o.value,
			"onUpdate:modelValue": [r[1] ||= (e) => o.value = e, r[2] ||= (e) => a("update:modelValue", e)],
			persistent: t.persistent,
			class: normalizeClass(unref(btnDropdownMenuStyles)()),
			role: "menu"
		}, {
			default: withCtx(() => [createElementVNode("div", {
				onClick: u,
				class: "outline-none"
			}, [renderSlot(n.$slots, "default")])]),
			_: 3
		}, 8, [
			"id",
			"modelValue",
			"persistent",
			"class"
		])], 2));
	}
});
export { btnDropdownStyles as a, btnDropdownMenuStyles as i, btnDropdownIconStyles as n, btnDropdownLabelContainerStyles as r, LBtnDropdown_default as t };
