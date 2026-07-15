import { n as cn, t as cva } from "../../dist-DzHoqs8r.js";
import { Teleport, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, watch } from "vue";
const popupProxyStyles = cva("l-popup-proxy-popup transition-all duration-200 ease-out", {
	variants: { placement: {
		top: "",
		"top-start": "",
		"top-end": "",
		bottom: "",
		"bottom-start": "",
		"bottom-end": "",
		left: "",
		"left-start": "",
		"left-end": "",
		right: "",
		"right-start": "",
		"right-end": ""
	} },
	defaultVariants: { placement: "bottom" }
});
var _hoisted_1 = { class: "l-popup-proxy relative inline-block" }, _hoisted_2 = { class: "px-4 py-2 glass border-white/20 rounded-lg" }, _hoisted_3 = { class: "glass border-white/20 rounded-xl shadow-xl" }, LPopupProxy_default = /* @__PURE__ */ defineComponent({
	__name: "LPopupProxy",
	props: {
		trigger: { default: "click" },
		placement: { default: "bottom" },
		offset: { default: 8 },
		autoClose: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		triggerText: {},
		triggerClass: {},
		popupClass: {}
	},
	emits: [
		"open",
		"close",
		"toggle"
	],
	setup(t, { emit: i }) {
		let a = t, o = i, s = ref(!1), c = ref(null), l = ref(null), u = computed(() => {
			if (!s.value || !c.value || !l.value) return {};
			let e = c.value.getBoundingClientRect(), t = l.value.getBoundingClientRect(), n = {
				position: "absolute",
				zIndex: "1000"
			};
			switch (a.placement) {
				case "top":
					n.bottom = `${window.innerHeight - e.top + a.offset}px`, n.left = `${e.left + (e.width - t.width) / 2}px`;
					break;
				case "top-start":
					n.bottom = `${window.innerHeight - e.top + a.offset}px`, n.left = `${e.left}px`;
					break;
				case "top-end":
					n.bottom = `${window.innerHeight - e.top + a.offset}px`, n.left = `${e.right - t.width}px`;
					break;
				case "bottom":
					n.top = `${e.bottom + a.offset}px`, n.left = `${e.left + (e.width - t.width) / 2}px`;
					break;
				case "bottom-start":
					n.top = `${e.bottom + a.offset}px`, n.left = `${e.left}px`;
					break;
				case "bottom-end":
					n.top = `${e.bottom + a.offset}px`, n.left = `${e.right - t.width}px`;
					break;
				case "left":
					n.top = `${e.top + (e.height - t.height) / 2}px`, n.right = `${window.innerWidth - e.left + a.offset}px`;
					break;
				case "left-start":
					n.top = `${e.top}px`, n.right = `${window.innerWidth - e.left + a.offset}px`;
					break;
				case "left-end":
					n.top = `${e.bottom - t.height}px`, n.right = `${window.innerWidth - e.left + a.offset}px`;
					break;
				case "right":
					n.top = `${e.top + (e.height - t.height) / 2}px`, n.left = `${e.right + a.offset}px`;
					break;
				case "right-start":
					n.top = `${e.top}px`, n.left = `${e.right + a.offset}px`;
					break;
				case "right-end":
					n.top = `${e.bottom - t.height}px`, n.left = `${e.right + a.offset}px`;
					break;
			}
			return n;
		}), d = () => {
			a.disabled || (s.value = !0, o("open"), o("toggle", !0));
		}, f = () => {
			a.disabled || (s.value = !1, o("close"), o("toggle", !1));
		}, p = () => {
			s.value ? f() : d();
		}, m = (e) => {
			!a.disabled && s.value && c.value && l.value && !c.value.contains(e.target) && !l.value.contains(e.target) && f();
		}, h = (e) => {
			e.key === "Escape" && s.value && f();
		}, g = (e) => {
			e.preventDefault(), e.stopPropagation(), a.trigger === "click" && p();
		}, _ = () => {
			a.trigger === "hover" && !s.value && d();
		}, v = () => {
			a.trigger === "hover" && s.value && !a.autoClose && setTimeout(() => {
				s.value && f();
			}, 200);
		};
		return watch(() => a.disabled, (e) => {
			e && s.value && f();
		}), onMounted(() => {
			typeof window < "u" && (document.addEventListener("click", m), document.addEventListener("keydown", h));
		}), onUnmounted(() => {
			typeof window < "u" && (document.removeEventListener("click", m), document.removeEventListener("keydown", h));
		}), (r, i) => (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
			ref_key: "triggerRef",
			ref: c,
			class: normalizeClass(unref(cn)("cursor-pointer", a.triggerClass)),
			onClick: g,
			onMouseenter: _,
			onMouseleave: v
		}, [renderSlot(r.$slots, "trigger", {
			isOpen: s.value,
			toggle: p
		}, () => [createElementVNode("button", _hoisted_2, toDisplayString(t.triggerText || "Open"), 1)])], 34), (openBlock(), createBlock(Teleport, { to: "body" }, [s.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref_key: "popupRef",
			ref: l,
			class: normalizeClass(unref(cn)(unref(popupProxyStyles)({ placement: t.placement }), a.popupClass)),
			style: normalizeStyle(u.value)
		}, [createElementVNode("div", _hoisted_3, [renderSlot(r.$slots, "default", {
			isOpen: s.value,
			close: f
		})])], 6)) : createCommentVNode("", !0)]))]));
	}
});
export { LPopupProxy_default as LPopupProxy };
