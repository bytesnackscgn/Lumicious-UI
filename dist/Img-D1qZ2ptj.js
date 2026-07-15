import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, ref, unref, watch } from "vue";
const imgStyles = cva("l-img transition-all duration-300", {
	variants: {
		size: {
			xs: "w-16 h-16",
			sm: "w-24 h-24",
			md: "w-32 h-32",
			lg: "w-48 h-48",
			xl: "w-64 h-64",
			full: "w-full h-full"
		},
		variant: {
			glass: "glass border-white/20",
			solid: "bg-white/10",
			outline: "border-2 border-white/40",
			ghost: "bg-transparent"
		},
		fit: {
			contain: "object-contain",
			cover: "object-cover",
			fill: "object-fill",
			none: "object-none"
		},
		rounded: {
			true: "rounded-lg",
			false: ""
		}
	},
	compoundVariants: [{
		variant: "glass",
		rounded: !0,
		className: "rounded-xl"
	}],
	defaultVariants: {
		size: "md",
		variant: "glass",
		fit: "cover",
		rounded: !1
	}
}), imgContainerStyles = cva("l-img-container relative overflow-hidden", {
	variants: { size: {
		xs: "w-16 h-16",
		sm: "w-24 h-24",
		md: "w-32 h-32",
		lg: "w-48 h-48",
		xl: "w-64 h-64",
		full: "w-full h-full"
	} },
	defaultVariants: { size: "md" }
});
var _hoisted_1 = [
	"src",
	"alt",
	"width",
	"height",
	"loading"
], _hoisted_2 = {
	key: 2,
	class: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50"
}, LImg_default = /* @__PURE__ */ defineComponent({
	__name: "LImg",
	props: {
		src: {},
		alt: {},
		width: {},
		height: {},
		size: { default: "md" },
		variant: { default: "glass" },
		fit: { default: "cover" },
		position: {},
		rounded: {
			type: Boolean,
			default: !1
		},
		loading: { default: "lazy" },
		placeholder: {},
		class: {}
	},
	emits: ["load", "error"],
	setup(t, { emit: n }) {
		let i = t, a = n, o = ref(!0), s = ref(!1), c = ref(i.src), l = (e) => {
			o.value = !1, s.value = !1, a("load", e);
		}, u = (e) => {
			o.value = !1, s.value = !0, a("error", e);
		}, d = () => {
			o.value = !0, s.value = !1, c.value = i.src + "?retry=" + Date.now();
		};
		return watch(() => i.src, (e, t) => {
			e !== t && (o.value = !0, s.value = !1, c.value = e);
		}), (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(imgContainerStyles)({ size: t.size }), i.class)) }, [
			s.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)("absolute inset-0 flex flex-col items-center justify-center", "bg-red-500/20 text-red-300"))
			}, [
				r[0] ||= createElementVNode("div", { class: "text-4xl mb-2" }, "⚠️", -1),
				r[1] ||= createElementVNode("div", { class: "text-sm text-center px-2" }, "Failed to load image", -1),
				createElementVNode("button", {
					onClick: d,
					class: "mt-2 px-3 py-1 text-xs bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
				}, " Retry ")
			], 2)) : createCommentVNode("", !0),
			o.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref(cn)("absolute inset-0 flex items-center justify-center", "bg-white/10 animate-pulse"))
			}, [...r[2] ||= [createElementVNode("div", { class: "w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" }, null, -1)]], 2)) : createCommentVNode("", !0),
			createElementVNode("img", {
				src: c.value,
				alt: t.alt,
				width: t.width,
				height: t.height,
				loading: t.loading,
				class: normalizeClass(unref(cn)(unref(imgStyles)({
					size: t.size,
					variant: t.variant,
					fit: t.fit,
					rounded: t.rounded
				}), "block w-full h-full", (o.value || s.value) && "opacity-0")),
				onLoad: l,
				onError: u
			}, null, 42, _hoisted_1),
			t.variant === "glass" ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", !0)
		], 2));
	}
});
export { LImg_default as t };
