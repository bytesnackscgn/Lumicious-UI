import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createBlock, createCommentVNode, createElementBlock, createTextVNode, createVNode, defineComponent, normalizeClass, openBlock, renderSlot, toDisplayString, unref, withModifiers } from "vue";
const chipStyles = cva("l-chip inline-flex items-center gap-1.5 font-medium transition-all duration-300 rounded-full select-none cursor-default", {
	variants: {
		variant: {
			glass: "glass border-white/20 text-white",
			solid: "text-white border-transparent bg-white/10",
			outline: "bg-transparent border border-white/20 text-white"
		},
		size: {
			sm: "text-[11px] px-2 py-0.5",
			md: "text-xs px-3 py-1",
			lg: "text-sm px-4 py-1.5"
		}
	},
	defaultVariants: {
		variant: "glass",
		size: "md"
	}
});
var LChip_default = /* @__PURE__ */ defineComponent({
	__name: "LChip",
	props: {
		label: {},
		size: { default: "md" },
		variant: { default: "glass" },
		color: {},
		icon: {},
		removable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["remove"],
	setup(t) {
		return (n, r) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(chipStyles)({
			variant: t.variant,
			size: t.size
		}))) }, [
			renderSlot(n.$slots, "prepend", {}, () => [t.icon ? (openBlock(), createBlock(unref(LIcon_default), {
				key: 0,
				name: t.icon,
				size: t.size === "sm" ? "xs" : "sm"
			}, null, 8, ["name", "size"])) : createCommentVNode("", !0)]),
			renderSlot(n.$slots, "default", {}, () => [createTextVNode(toDisplayString(t.label), 1)]),
			t.removable ? (openBlock(), createElementBlock("button", {
				key: 0,
				class: "hover:opacity-60 transition-opacity cursor-pointer flex items-center justify-center -mr-1",
				onClick: r[0] ||= withModifiers((e) => n.$emit("remove"), ["stop"])
			}, [createVNode(unref(LIcon_default), {
				name: "x",
				size: t.size === "sm" ? "xs" : "sm",
				"stroke-width": 3
			}, null, 8, ["size"])])) : createCommentVNode("", !0)
		], 2));
	}
});
export { chipStyles as n, LChip_default as t };
