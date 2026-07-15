import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Transition, computed, createBlock, createCommentVNode, createElementBlock, createTextVNode, createVNode, defineComponent, inject, normalizeClass, openBlock, provide, renderSlot, toDisplayString, unref, vShow, withCtx, withDirectives } from "vue";
const tabsStyles = cva("l-tabs flex transition-all duration-300 relative", {
	variants: {
		vertical: {
			true: "flex-col border-r border-white/5",
			false: "flex-row border-b border-white/5"
		},
		align: {
			left: "justify-start",
			center: "justify-center",
			right: "justify-end",
			justify: "justify-around"
		}
	},
	defaultVariants: {
		vertical: !1,
		align: "left"
	}
}), tabStyles = cva("l-tab flex items-center justify-center gap-2 cursor-pointer select-none transition-all duration-300 relative px-6 py-3 min-h-[48px] font-medium text-white/50 hover:text-white/80", { variants: {
	active: {
		true: "text-white l-tab--active",
		false: ""
	},
	vertical: {
		true: "w-full justify-start",
		false: ""
	},
	disable: {
		true: "opacity-30 pointer-events-none",
		false: ""
	}
} });
var LTabs_default = /* @__PURE__ */ defineComponent({
	__name: "LTabs",
	props: {
		modelValue: { default: null },
		align: { default: "left" },
		vertical: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		},
		activeColor: {},
		indicatorColor: {},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = t;
		return provide("tabsContext", {
			currentTab: computed(() => n.modelValue),
			selectTab: (e) => {
				i("update:modelValue", e);
			},
			vertical: n.vertical
		}), (t, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(tabsStyles)({
			vertical: e.vertical,
			align: e.align
		}), n.class)) }, [renderSlot(t.$slots, "default")], 2));
	}
}), LTab_default = /* @__PURE__ */ defineComponent({
	__name: "LTab",
	props: {
		name: {},
		label: {},
		icon: {},
		disable: { type: Boolean },
		alert: { type: [Boolean, String] },
		class: {}
	},
	setup(t) {
		let n = t, a = inject("tabsContext", null), o = computed(() => a?.currentTab.value === n.name), c = () => {
			!n.disable && a && a.selectTab(n.name);
		};
		return (r, s) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(tabStyles)({
				active: o.value,
				vertical: unref(a)?.vertical,
				disable: t.disable
			}), n.class)),
			onClick: c
		}, [
			t.icon ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: t.icon,
				size: "sm"
			}, null, 8, ["name"])) : createCommentVNode("", !0),
			renderSlot(r.$slots, "default", {}, () => [createTextVNode(toDisplayString(t.label), 1)]),
			t.alert ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["w-2 h-2 rounded-full absolute top-2 right-4", typeof t.alert == "string" ? `bg-${t.alert}` : "bg-red-500"])
			}, null, 2)) : createCommentVNode("", !0),
			o.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(["absolute bg-blue-500 transition-all duration-300", unref(a)?.vertical ? "left-0 top-2 bottom-2 w-1 rounded-r-full" : "bottom-0 left-4 right-4 h-1 rounded-t-full"])
			}, null, 2)) : createCommentVNode("", !0)
		], 2));
	}
}), LTabPanels_default = /* @__PURE__ */ defineComponent({
	__name: "LTabPanels",
	props: {
		modelValue: {},
		animated: {
			type: Boolean,
			default: !0
		},
		vertical: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(e) {
		let t = e;
		return provide("tabPanelsContext", { currentPanel: computed(() => t.modelValue) }), (e, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("l-tab-panels overflow-hidden relative min-h-0", t.class)) }, [createVNode(Transition, {
			mode: "out-in",
			"enter-active-class": "transition-opacity duration-300 ease-out",
			"leave-active-class": "transition-opacity duration-300 ease-in",
			"enter-from-class": "opacity-0",
			"leave-to-class": "opacity-0"
		}, {
			default: withCtx(() => [(openBlock(), createElementBlock("div", { key: t.modelValue }, [renderSlot(e.$slots, "default")]))]),
			_: 3
		})], 2));
	}
}), LTabPanel_default = /* @__PURE__ */ defineComponent({
	__name: "LTabPanel",
	props: {
		name: {},
		class: {}
	},
	setup(e) {
		let t = e, n = inject("tabPanelsContext", null), i = computed(() => n?.currentPanel.value === t.name);
		return (e, n) => withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("l-tab-panel", t.class)) }, [renderSlot(e.$slots, "default")], 2)), [[vShow, i.value]]);
	}
});
export { tabStyles as a, LTabs_default as i, LTabPanels_default as n, tabsStyles as o, LTab_default as r, LTabPanel_default as t };
