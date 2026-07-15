import "../LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "../dist-DzHoqs8r.js";
import { t as LBtn_default } from "../Btn-3-7s8Z9p.js";
import "../Icon-CWAq-V7z.js";
import "../gradients-De3BC9os.js";
import { t as LHeadline_default } from "../Headline-BEIrkHOV.js";
import { t as LSeparator_default } from "../Separator-BjS2s0UL.js";
import { Fragment, Transition, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, nextTick, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, watch, withCtx } from "vue";
const bottomSheetOverlayStyles = cva("fixed inset-0 z-40 bg-black/50 backdrop-blur-sm pointer-events-auto"), bottomSheetContainerStyles = cva("fixed z-50 overflow-y-auto transition-all duration-300 transform", {
	variants: {
		position: {
			bottom: "bottom-0 left-0 right-0",
			top: "top-0 left-0 right-0",
			left: "left-0 top-0 bottom-0",
			right: "right-0 top-0 bottom-0"
		},
		size: {
			auto: "",
			full: "h-full"
		},
		variant: {
			glass: "glass border-white/20",
			solid: "bg-white/20",
			outline: "bg-transparent border-2 border-white/20"
		},
		rounded: {
			true: "",
			false: ""
		},
		show: {
			true: "opacity-100",
			false: "opacity-0 pointer-events-none"
		}
	},
	compoundVariants: [
		{
			position: "bottom",
			rounded: !0,
			className: "rounded-t-2xl"
		},
		{
			position: "top",
			rounded: !0,
			className: "rounded-b-2xl"
		},
		{
			position: "left",
			rounded: !0,
			className: "rounded-r-2xl"
		},
		{
			position: "right",
			rounded: !0,
			className: "rounded-l-2xl"
		},
		{
			position: "bottom",
			show: !1,
			className: "translate-y-full"
		},
		{
			position: "bottom",
			show: !0,
			className: "translate-y-0"
		},
		{
			position: "top",
			show: !1,
			className: "-translate-y-full"
		},
		{
			position: "top",
			show: !0,
			className: "translate-y-0"
		},
		{
			position: "left",
			show: !1,
			className: "-translate-x-full"
		},
		{
			position: "left",
			show: !0,
			className: "translate-x-0"
		},
		{
			position: "right",
			show: !1,
			className: "translate-x-full"
		},
		{
			position: "right",
			show: !0,
			className: "translate-x-0"
		}
	],
	defaultVariants: {
		position: "bottom",
		size: "auto",
		variant: "glass",
		rounded: !0,
		show: !1
	}
}), bottomSheetHeaderStyles = cva("flex items-center justify-between p-4", {
	variants: {},
	defaultVariants: {}
}), bottomSheetTitleStyles = cva("text-lg font-semibold text-white", {
	variants: {},
	defaultVariants: {}
}), bottomSheetContentStyles = cva("overflow-y-auto max-h-[80vh] p-4", {
	variants: {},
	defaultVariants: {}
}), bottomSheetFooterStyles = cva("flex items-center justify-end p-4 gap-2", {
	variants: {},
	defaultVariants: {}
});
var _hoisted_1 = ["aria-labelledby"], LBottomSheet_default = /* @__PURE__ */ defineComponent({
	__name: "LBottomSheet",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		title: {},
		size: { default: "auto" },
		variant: { default: "glass" },
		position: { default: "bottom" },
		closable: {
			type: Boolean,
			default: !0
		},
		persistent: {
			type: Boolean,
			default: !1
		},
		overlay: {
			type: Boolean,
			default: !0
		},
		closeOnOverlay: {
			type: Boolean,
			default: !0
		},
		closeOnEscape: {
			type: Boolean,
			default: !0
		},
		maxHeight: { default: "" },
		maxWidth: { default: "" },
		showCloseButton: {
			type: Boolean,
			default: !0
		},
		rounded: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"update:modelValue",
		"open",
		"close",
		"opened",
		"closed"
	],
	setup(t, { expose: r, emit: i }) {
		let a = t, o = i, s = ref(a.modelValue), c = ref(!1), l = computed(() => a.overlay && (s.value || c.value)), u = () => {
			s.value || (c.value = !0, s.value = !0, o("update:modelValue", !0), o("open"), nextTick(() => {
				let e = h.value?.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");
				e && e.focus();
			}));
		}, d = () => {
			!s.value || a.persistent || (c.value = !0, s.value = !1, o("update:modelValue", !1), o("close"));
		}, f = () => {
			s.value ? d() : u();
		}, p = () => {
			a.closeOnOverlay && !a.persistent && d();
		}, m = (e) => {
			a.closeOnEscape && !a.persistent && e.key === "Escape" && d();
		}, h = ref(), g = ref();
		watch(() => a.modelValue, (e) => {
			e !== s.value && (e ? u() : d());
		}), onMounted(() => {
			document.addEventListener("keydown", m);
		}), onUnmounted(() => {
			document.removeEventListener("keydown", m);
		});
		let _ = () => {
			c.value = !1, s.value ? o("opened") : o("closed");
		}, v = `bottomsheet-${Math.random().toString(36).substring(2, 9)}`, y = computed(() => a.title ? `bottom-sheet-title-${v}` : void 0);
		return r({
			open: u,
			close: d,
			toggle: f,
			overlayRef: g,
			containerRef: h
		}), (n, r) => (openBlock(), createElementBlock(Fragment, null, [createVNode(Transition, {
			"enter-active-class": "transition-opacity duration-300",
			"leave-active-class": "transition-opacity duration-300",
			"enter-from-class": "opacity-0",
			"enter-to-class": "opacity-100",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: withCtx(() => [l.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "overlayRef",
				ref: g,
				class: normalizeClass(unref(cn)(unref(bottomSheetOverlayStyles)(), "l-bottomsheet")),
				onClick: p
			}, null, 2)) : createCommentVNode("", !0)]),
			_: 1
		}), createElementVNode("div", {
			ref_key: "containerRef",
			ref: h,
			class: normalizeClass(unref(cn)(unref(bottomSheetContainerStyles)({
				position: t.position,
				size: t.size,
				variant: t.variant,
				rounded: t.rounded,
				show: s.value
			}))),
			style: normalizeStyle({
				maxHeight: t.maxHeight || void 0,
				maxWidth: t.maxWidth || void 0
			}),
			onTransitionend: _,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": y.value
		}, [
			t.title || t.showCloseButton ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)(unref(bottomSheetHeaderStyles)()))
			}, [t.title ? (openBlock(), createBlock(unref(LHeadline_default), {
				key: 0,
				level: 2,
				size: "md",
				color: "white",
				id: y.value
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(t.title), 1)]),
				_: 1
			}, 8, ["id"])) : createCommentVNode("", !0), t.showCloseButton && t.closable ? (openBlock(), createBlock(unref(LBtn_default), {
				key: 1,
				icon: "x",
				size: "md",
				color: "white",
				variant: "ghost",
				class: "w-8 h-8 !p-2",
				onClick: d,
				"aria-label": "Close"
			})) : createCommentVNode("", !0)], 2)) : createCommentVNode("", !0),
			t.title || t.showCloseButton ? (openBlock(), createBlock(unref(LSeparator_default), { key: 1 })) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(bottomSheetContentStyles)())) }, [renderSlot(n.$slots, "default")], 2),
			n.$slots.footer ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(LSeparator_default)), createElementVNode("div", { class: normalizeClass(unref(cn)(unref(bottomSheetFooterStyles)())) }, [renderSlot(n.$slots, "footer")], 2)], 64)) : createCommentVNode("", !0)
		], 46, _hoisted_1)], 64));
	}
});
export { LBottomSheet_default as LBottomSheet, bottomSheetContainerStyles, bottomSheetContentStyles, bottomSheetFooterStyles, bottomSheetHeaderStyles, bottomSheetOverlayStyles, bottomSheetTitleStyles };
