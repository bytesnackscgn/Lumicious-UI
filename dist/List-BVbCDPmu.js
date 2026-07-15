import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createBlock, createCommentVNode, createElementBlock, createElementVNode, defineComponent, normalizeClass, normalizeStyle, openBlock, renderSlot, resolveDynamicComponent, toDisplayString, unref, withCtx } from "vue";
const listStyles = cva("l-list flex flex-col w-full transition-all duration-300", {
	variants: {
		bordered: {
			true: "glass border-white/10 rounded-2xl overflow-hidden",
			false: ""
		},
		padding: {
			true: "py-2",
			false: ""
		}
	},
	defaultVariants: {
		bordered: !1,
		padding: !1
	}
}), itemStyles = cva("l-item flex items-center gap-4 transition-all duration-300 relative select-none", {
	variants: {
		clickable: {
			true: "cursor-pointer hover:bg-white/5 active:bg-white/10",
			false: ""
		},
		dense: {
			true: "px-4 py-1.5 min-h-[40px]",
			false: "px-4 py-3 min-h-[56px]"
		},
		active: {
			true: "bg-white/10 text-white font-medium before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-blue-500 before:rounded-r-full",
			false: "text-white/80"
		},
		disabled: {
			true: "opacity-50 pointer-events-none",
			false: ""
		}
	},
	defaultVariants: {
		clickable: !1,
		dense: !1,
		active: !1,
		disabled: !1
	}
}), itemSectionStyles = cva("l-item-section flex flex-col justify-center shrink-0", {
	variants: {
		side: {
			true: "text-white/40 min-w-[40px]",
			false: "flex-grow min-w-0"
		},
		top: {
			true: "self-start pt-1",
			false: ""
		},
		avatar: {
			true: "min-w-[56px]",
			false: ""
		}
	},
	defaultVariants: {
		side: !1,
		top: !1,
		avatar: !1
	}
});
var LList_default = /* @__PURE__ */ defineComponent({
	__name: "LList",
	props: {
		bordered: {
			type: Boolean,
			default: !1
		},
		padding: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		},
		separator: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(listStyles)({
			bordered: e.bordered,
			padding: e.padding
		}), e.separator && "l-list--separator", t.class)) }, [renderSlot(n.$slots, "default")], 2));
	}
}), _hoisted_1 = { class: "flex items-center gap-3 w-full" }, _hoisted_2 = { class: "flex-1 min-w-0" }, _hoisted_3 = {
	key: 0,
	class: "text-white font-medium truncate"
}, _hoisted_4 = {
	key: 1,
	class: "text-white/50 text-sm truncate"
}, LItem_default = /* @__PURE__ */ defineComponent({
	__name: "LItem",
	props: {
		clickable: {
			type: Boolean,
			default: !1
		},
		active: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		to: {},
		tag: { default: "div" },
		class: {},
		label: {},
		icon: {},
		caption: {}
	},
	emits: ["click"],
	setup(t) {
		let i = t;
		return (a, o) => (openBlock(), createBlock(resolveDynamicComponent(t.tag), {
			class: normalizeClass(unref(cn)(unref(itemStyles)({
				clickable: t.clickable,
				dense: t.dense,
				active: t.active,
				disabled: t.disabled
			}), i.class)),
			onClick: o[0] ||= (e) => t.clickable && !t.disabled && a.$emit("click", e)
		}, {
			default: withCtx(() => [createElementVNode("div", _hoisted_1, [i.icon ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: i.icon,
				size: "sm",
				class: "text-white/60"
			}, null, 8, ["name"])) : createCommentVNode("", !0), createElementVNode("div", _hoisted_2, [
				i.label ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(i.label), 1)) : createCommentVNode("", !0),
				i.caption ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(i.caption), 1)) : createCommentVNode("", !0),
				!i.label && !i.icon && !i.caption ? renderSlot(a.$slots, "default", { key: 2 }) : createCommentVNode("", !0)
			])])]),
			_: 3
		}, 8, ["class"]));
	}
}), LItemSection_default = /* @__PURE__ */ defineComponent({
	__name: "LItemSection",
	props: {
		side: {
			type: Boolean,
			default: !1
		},
		top: {
			type: Boolean,
			default: !1
		},
		thumbnail: { type: Boolean },
		avatar: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(itemSectionStyles)({
			side: e.side,
			top: e.top,
			avatar: e.avatar
		}), t.class)) }, [renderSlot(n.$slots, "default")], 2));
	}
}), LItemLabel_default = /* @__PURE__ */ defineComponent({
	__name: "LItemLabel",
	props: {
		header: { type: Boolean },
		caption: { type: Boolean },
		overline: { type: Boolean },
		lines: {},
		class: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(unref(cn)("l-item-label", e.header ? "text-white/40 text-xs font-bold uppercase tracking-widest pt-4 pb-2" : "", e.caption ? "text-white/50 text-xs mt-1" : "", e.overline ? "text-white/40 text-[10px] uppercase tracking-tighter mb-1" : "", !e.header && !e.caption && !e.overline ? "text-base font-medium text-white" : "", t.class)),
			style: normalizeStyle(e.lines ? {
				display: "-webkit-box",
				"-webkit-box-orient": "vertical",
				"-webkit-line-clamp": e.lines,
				overflow: "hidden"
			} : {})
		}, [renderSlot(n.$slots, "default")], 6));
	}
});
export { itemSectionStyles as a, LList_default as i, LItemSection_default as n, itemStyles as o, LItem_default as r, listStyles as s, LItemLabel_default as t };
