import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Teleport, Transition, createBlock, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, onUnmounted, openBlock, ref, renderSlot, unref, watch, withCtx, withModifiers } from "vue";
const dialogBackdropStyles = cva("l-dialog__backdrop fixed inset-0 z-[3000] flex transition-all duration-300 backdrop-blur-md bg-black/40", {
	variants: {
		position: {
			center: "items-center justify-center p-4",
			top: "items-start justify-center p-4",
			bottom: "items-end justify-center p-4 pt-20",
			left: "items-center justify-start p-4 pr-20",
			right: "items-center justify-end p-4 pl-20"
		},
		fullHeight: {
			true: "items-stretch justify-start",
			false: ""
		}
	},
	defaultVariants: {
		position: "center",
		fullHeight: !1
	}
}), dialogContentStyles = cva("l-dialog__content glass border-white/10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col", {
	variants: {
		fullWidth: {
			true: "w-full",
			false: ""
		},
		fullHeight: {
			true: "h-full",
			false: ""
		}
	},
	defaultVariants: {
		fullWidth: !1,
		fullHeight: !1
	}
});
var LDialog_default = /* @__PURE__ */ defineComponent({
	__name: "LDialog",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		persistent: {
			type: Boolean,
			default: !1
		},
		fullWidth: { type: Boolean },
		fullHeight: { type: Boolean },
		position: { default: "center" }
	},
	emits: ["update:modelValue", "hide"],
	setup(t, { emit: n }) {
		let i = t, a = n, o = ref(i.modelValue);
		watch(() => i.modelValue, (e) => {
			o.value = e, e ? document.body.style.overflow = "hidden" : (document.body.style.overflow = "", a("hide"));
		});
		let s = () => {
			i.persistent || a("update:modelValue", !1);
		};
		return onUnmounted(() => {
			document.body.style.overflow = "";
		}), (n, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, {
			"enter-active-class": "transition-opacity duration-300",
			"leave-active-class": "transition-opacity duration-200",
			"enter-from-class": "opacity-0",
			"leave-to-class": "opacity-0"
		}, {
			default: withCtx(() => [o.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)(unref(dialogBackdropStyles)({ position: t.position }))),
				onClick: withModifiers(s, ["self"])
			}, [createVNode(Transition, {
				appear: "",
				"enter-active-class": "transition-all duration-300 ease-out",
				"leave-active-class": "transition-all duration-200 ease-in",
				"enter-from-class": i.position === "center" ? "opacity-0 scale-95" : "translate-y-full opacity-0",
				"leave-to-class": i.position === "center" ? "opacity-0 scale-95" : "translate-y-full opacity-0"
			}, {
				default: withCtx(() => [createElementVNode("div", { class: normalizeClass(unref(cn)(unref(dialogContentStyles)({
					fullWidth: t.fullWidth,
					fullHeight: t.fullHeight
				}))) }, [renderSlot(n.$slots, "default")], 2)]),
				_: 3
			}, 8, ["enter-from-class", "leave-to-class"])], 2)) : createCommentVNode("", !0)]),
			_: 3
		})]));
	}
});
export { dialogBackdropStyles as n, dialogContentStyles as r, LDialog_default as t };
