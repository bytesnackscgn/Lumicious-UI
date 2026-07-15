import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as LImg_default } from "./Img-D1qZ2ptj.js";
import { computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, ref, toDisplayString, unref, watch } from "vue";
const avatarStyles = cva("l-avatar glass overflow-hidden flex items-center justify-center transition-all duration-300 relative", {
	variants: {
		size: {
			xs: "w-6 h-6 text-[10px]",
			sm: "w-8 h-8 text-xs",
			md: "w-12 h-12 text-base",
			lg: "w-16 h-16 text-xl",
			xl: "w-24 h-24 text-4xl"
		},
		rounded: {
			true: "rounded-full",
			false: "rounded-xl"
		},
		bordered: { true: "ring-2 ring-white/20 ring-offset-2 ring-offset-transparent" }
	},
	defaultVariants: {
		size: "md",
		rounded: !0,
		bordered: !1
	}
});
var _hoisted_1 = {
	key: 1,
	class: "font-bold text-white opacity-80 select-none"
}, _hoisted_2 = {
	key: 3,
	class: "w-full h-full bg-white/5 flex items-center justify-center"
}, LAvatar_default = /* @__PURE__ */ defineComponent({
	__name: "LAvatar",
	props: {
		src: {},
		name: {},
		size: { default: "md" },
		rounded: {
			type: Boolean,
			default: !0
		},
		square: { type: Boolean },
		bordered: {
			type: Boolean,
			default: !1
		},
		icon: {},
		color: {}
	},
	setup(t) {
		let r = t, i = ref(!1);
		watch(() => r.src, () => {
			i.value = !1;
		});
		let a = computed(() => r.name ? r.name.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2) : ""), o = computed(() => typeof r.size == "number" ? {
			width: `${r.size}px`,
			height: `${r.size}px`
		} : {});
		return (n, r) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)(unref(avatarStyles)({
				size: typeof t.size == "string" ? t.size : void 0,
				rounded: t.rounded,
				bordered: t.bordered
			}))),
			style: normalizeStyle(o.value)
		}, [t.src && !i.value ? (openBlock(), createBlock(unref(LImg_default), {
			key: 0,
			src: t.src,
			alt: t.name,
			size: "full",
			variant: "ghost",
			onError: r[0] ||= (e) => i.value = !0
		}, null, 8, ["src", "alt"])) : t.name ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(a.value), 1)) : t.icon ? (openBlock(), createBlock(unref(LIcon_default), {
			key: 2,
			name: t.icon,
			size: t.size === "xs" ? "xs" : t.size === "sm" ? "sm" : "md"
		}, null, 8, ["name", "size"])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(LIcon_default), {
			name: "user",
			size: "sm"
		})])), r[1] ||= createElementVNode("div", { class: "absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" }, null, -1)], 6));
	}
});
export { avatarStyles as n, LAvatar_default as t };
