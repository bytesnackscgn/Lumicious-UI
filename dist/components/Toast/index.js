import "../../LIcon-CeVFYSDO.js";
import { t as LBtn_default } from "../../Btn-3-7s8Z9p.js";
import "../../Icon-CWAq-V7z.js";
import { t as LAlert_default } from "../../LAlert-Co8r_kol.js";
import { Fragment, Teleport, TransitionGroup, createBlock, createCommentVNode, createElementBlock, createSlots, createTextVNode, createVNode, defineComponent, inject, normalizeClass, normalizeStyle, openBlock, provide, reactive, ref, renderList, renderSlot, toDisplayString, unref, withCtx } from "vue";
const ToastInjectionKey = Symbol("LToast");
var _hoisted_1 = ["onMouseenter", "onMouseleave"], LToastProvider_default = /* @__PURE__ */ defineComponent({
	__name: "LToastProvider",
	props: {
		variant: { default: "list" },
		stackOverlap: { default: 40 },
		stackGap: { default: 8 },
		expandOnHover: {
			type: Boolean,
			default: !0
		}
	},
	setup(a) {
		let o = a, c = ref([]), l = reactive({
			"top-left": !1,
			"top-center": !1,
			"top-right": !1,
			"bottom-left": !1,
			"bottom-center": !1,
			"bottom-right": !1
		}), u = (e) => {
			let t = e.id || crypto.randomUUID(), n = {
				id: t,
				message: e.message,
				variant: e.variant || "glass",
				color: e.color || "primary",
				icon: e.icon,
				duration: e.duration ?? 5e3,
				position: e.position || "top-right",
				dismissible: e.dismissible ?? !0,
				dense: !0
			};
			return c.value.push(n), n.duration > 0 && setTimeout(() => {
				d(t);
			}, n.duration), t;
		}, d = (e) => {
			let t = c.value.findIndex((t) => t.id === e);
			t !== -1 && c.value.splice(t, 1);
		};
		provide(ToastInjectionKey, {
			add: u,
			remove: d
		});
		let f = (e) => c.value.filter((t) => t.position === e), p = [
			"top-left",
			"top-center",
			"top-right",
			"bottom-left",
			"bottom-center",
			"bottom-right"
		], m = {
			"top-left": "top-0 left-0 items-start",
			"top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
			"top-right": "top-0 right-0 items-end",
			"bottom-left": "bottom-0 left-0 items-start",
			"bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
			"bottom-right": "bottom-0 right-0 items-end"
		}, h = (e, t) => {
			if (o.variant !== "stack" || e === 0) return {};
			let n = l[t], r = t.includes("bottom"), i = n && o.expandOnHover ? o.stackGap : -o.stackOverlap;
			return {
				[r ? "marginBottom" : "marginTop"]: `${i}px`,
				zIndex: e
			};
		}, g = (e, t) => {
			l[e] = t;
		};
		return (o, s) => (openBlock(), createElementBlock(Fragment, null, [renderSlot(o.$slots, "default"), (openBlock(), createBlock(Teleport, { to: "body" }, [(openBlock(), createElementBlock(Fragment, null, renderList(p, (r) => (openBlock(), createElementBlock(Fragment, { key: r }, [f(r).length > 0 ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(["fixed z-50 p-4 flex w-full max-w-sm pointer-events-none transition-all duration-300", [
				m[r],
				r.includes("bottom") ? "flex-col-reverse" : "flex-col",
				a.variant === "list" ? "gap-2" : ""
			]]),
			onMouseenter: (e) => g(r, !0),
			onMouseleave: (e) => g(r, !1)
		}, [createVNode(TransitionGroup, {
			"enter-active-class": "transition-all duration-300 ease-out",
			"enter-from-class": "transform translate-y-2 opacity-0",
			"enter-to-class": "transform translate-y-0 opacity-100",
			"leave-active-class": "transition-all duration-200 ease-in",
			"leave-from-class": "transform translate-y-0 opacity-100",
			"leave-to-class": "transform translate-y-2 opacity-0",
			"move-class": "transition-all duration-300 ease-in-out"
		}, {
			default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(f(r), (n, i) => (openBlock(), createElementBlock("div", {
				key: n.id,
				class: "pointer-events-auto w-full transition-all duration-300 ease-in-out",
				style: normalizeStyle(h(i, r))
			}, [createVNode(LAlert_default, {
				variant: n.variant,
				color: n.color,
				icon: n.icon,
				dense: n.dense,
				class: "shadow-lg backdrop-blur-md"
			}, createSlots({
				default: withCtx(() => [renderSlot(o.$slots, "content", { toast: n }, () => [createTextVNode(toDisplayString(n.message), 1)])]),
				_: 2
			}, [n.dismissible ? {
				name: "actions",
				fn: withCtx(() => [createVNode(unref(LBtn_default), {
					icon: "x",
					variant: "ghost",
					size: "sm",
					class: "!p-1 h-6 w-6",
					onClick: (e) => d(n.id)
				}, null, 8, ["onClick"])]),
				key: "0"
			} : void 0]), 1032, [
				"variant",
				"color",
				"icon",
				"dense"
			])], 4))), 128))]),
			_: 2
		}, 1024)], 42, _hoisted_1)) : createCommentVNode("", !0)], 64))), 64))]))], 64));
	}
});
function useToast() {
	let e = inject(ToastInjectionKey);
	if (!e) throw Error("useToast must be used within a LToastProvider");
	return e;
}
export { LToastProvider_default as LToastProvider, ToastInjectionKey, useToast };
