import "../LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "../dist-DzHoqs8r.js";
import "../Icon-CWAq-V7z.js";
import { t as LAvatar_default } from "../Avatar-DU20UsrY.js";
import "../Img-D1qZ2ptj.js";
import { t as LStack_default } from "../Stack-DEXjQPTS.js";
import { computed, createBlock, createCommentVNode, createElementBlock, defineComponent, mergeProps, normalizeClass, normalizeStyle, openBlock, toDisplayString, unref, withCtx } from "vue";
var LAvatarStack_default = /* @__PURE__ */ defineComponent({
	__name: "LAvatarStack",
	props: {
		items: { default: () => [] },
		limit: { default: 5 },
		size: { default: "md" },
		rounded: {
			type: Boolean,
			default: !0
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		expandOnHover: {
			type: Boolean,
			default: !1
		},
		position: { default: "right" }
	},
	setup(t) {
		let i = t, a = {
			xs: 24,
			sm: 32,
			md: 48,
			lg: 64,
			xl: 96
		}, o = computed(() => (typeof i.size == "number" ? i.size : a[i.size] || 48) / 3), s = computed(() => i.items ? Math.max(0, i.items.length - i.limit) : 0), c = computed(() => {
			let e = (i.items ? i.items.slice(0, i.limit) : []).map((e, t) => ({
				type: "avatar",
				props: e,
				id: t
			}));
			return s.value > 0 && e.push({
				type: "counter",
				props: { count: s.value },
				id: "counter"
			}), e;
		}), l = computed(() => {
			if (typeof i.size == "number") return "";
			switch (i.size) {
				case "xs": return "w-6 h-6 text-[10px]";
				case "sm": return "w-8 h-8 text-xs";
				case "md": return "w-12 h-12 text-sm";
				case "lg": return "w-16 h-16 text-base";
				case "xl": return "w-24 h-24 text-xl";
				default: return "w-12 h-12 text-sm";
			}
		}), u = computed(() => typeof i.size == "number" ? {
			width: `${i.size}px`,
			height: `${i.size}px`,
			fontSize: `${i.size / 3}px`
		} : {});
		return (r, i) => (openBlock(), createBlock(unref(LStack_default), {
			items: c.value,
			overlap: o.value,
			gap: 0,
			"disable-hover": !t.expandOnHover,
			"stack-order": t.position === "right" ? "reverse" : "normal",
			class: normalizeClass(unref(cn)(t.position === "left" && "flex-row-reverse")),
			"item-class": unref(cn)("rounded-full", "hover:z-50 hover:scale-110 transition-all duration-300")
		}, {
			item: withCtx(({ item: n }) => [n.type === "avatar" ? (openBlock(), createBlock(unref(LAvatar_default), mergeProps({ key: 0 }, n.props, {
				size: t.size,
				rounded: t.rounded,
				bordered: !1,
				class: "ring-2 ring-slate-900"
			}), null, 16, ["size", "rounded"])) : n.type === "counter" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref(cn)("flex items-center justify-center bg-slate-800 text-white font-bold ring-2 ring-slate-900", t.rounded ? "rounded-full" : "rounded-xl", l.value)),
				style: normalizeStyle(u.value)
			}, " +" + toDisplayString(n.props.count), 7)) : createCommentVNode("", !0)]),
			_: 1
		}, 8, [
			"items",
			"overlap",
			"disable-hover",
			"stack-order",
			"class",
			"item-class"
		]));
	}
});
const avatarStackStyles = cva("flex items-center isolate", {
	variants: {
		size: {
			xs: "-space-x-2",
			sm: "-space-x-3",
			md: "-space-x-4",
			lg: "-space-x-5",
			xl: "-space-x-6"
		},
		expandOnHover: {
			true: "hover:space-x-1",
			false: ""
		},
		position: {
			right: "flex-row",
			left: "flex-row-reverse space-x-reverse"
		}
	},
	defaultVariants: {
		size: "md",
		expandOnHover: !1,
		position: "right"
	}
}), avatarItemStyles = cva("relative transition-all duration-300 ring-2 ring-slate-900", {
	variants: {
		zIndex: {
			0: "z-0",
			10: "z-10",
			20: "z-20",
			30: "z-30",
			40: "z-40",
			50: "z-50"
		},
		hover: {
			true: "hover:z-50 hover:scale-110",
			false: ""
		}
	},
	defaultVariants: { hover: !0 }
});
export { LAvatarStack_default as LAvatarStack, avatarItemStyles, avatarStackStyles };
