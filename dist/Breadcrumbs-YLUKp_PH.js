import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { n as solidColors } from "./color-CfLgT3S7.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, defineComponent, mergeProps, normalizeClass, openBlock, renderList, resolveDynamicComponent, toDisplayString, unref, withCtx } from "vue";
const breadcrumbsStyles = cva("l-breadcrumbs flex items-center gap-1 text-sm font-medium", {
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base"
		},
		color: solidColors
	},
	defaultVariants: { size: "md" }
}), breadcrumbItemStyles = cva("l-breadcrumb-item flex items-center gap-1 transition-colors duration-200 hover:text-blue-300", {
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base"
		},
		color: solidColors,
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		color: "primary",
		disabled: !1
	}
}), separatorStyles = cva("l-breadcrumb-separator text-gray-500", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
});
var _hoisted_1 = { class: "flex items-center space-x-1" }, _hoisted_2 = [
	"href",
	"title",
	"rel",
	"onClick"
], _hoisted_3 = ["onClick"], LBreadcrumbs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LBreadcrumbs",
	props: {
		items: {},
		size: { default: "md" },
		color: { default: "primary" },
		separator: { default: "/" },
		maxItems: { default: 0 },
		ellipsis: {
			type: Boolean,
			default: !0
		},
		linkComponent: {},
		onClick: {}
	},
	emits: ["click"],
	setup(n, { emit: r }) {
		let i = n, o = r, s = (e, t) => {
			e.disabled || (e.onClick?.(e), i.onClick?.(e), o("click", e, t));
		}, c = () => {
			let e = i.items, t = i.maxItems;
			if (!t || e.length <= t) return e;
			if (i.ellipsis) {
				let n = e.slice(0, Math.floor(t / 2)), r = e.slice(-(t - Math.floor(t / 2) - 1));
				return [
					...n,
					{
						label: "...",
						href: void 0,
						disabled: !0
					},
					...r
				];
			}
			return e.slice(0, t);
		};
		return (r, o) => (openBlock(), createElementBlock("nav", {
			class: normalizeClass(unref(cn)(unref(breadcrumbsStyles)({
				size: n.size,
				color: n.color
			}))),
			"aria-label": "Breadcrumbs"
		}, [createElementVNode("ol", _hoisted_1, [(openBlock(!0), createElementBlock(Fragment, null, renderList(c(), (r, a) => (openBlock(), createElementBlock("li", {
			key: a,
			class: "flex items-center"
		}, [a > 0 ? (openBlock(), createElementBlock("span", {
			key: 0,
			class: normalizeClass([unref(cn)(unref(separatorStyles)({ size: n.size })), "mx-2"])
		}, toDisplayString(i.separator), 3)) : createCommentVNode("", !0), !r.disabled && n.linkComponent ? (openBlock(), createBlock(resolveDynamicComponent(n.linkComponent), mergeProps({
			key: 1,
			ref_for: !0
		}, r.args, {
			class: unref(cn)(unref(breadcrumbItemStyles)({
				size: n.size,
				color: n.color,
				disabled: !1
			})),
			onClick: (e) => s(r, a)
		}), {
			default: withCtx(() => [r.icon ? (openBlock(), createBlock(LIcon_default, {
				key: 0,
				name: r.icon,
				size: "sm"
			}, null, 8, ["name"])) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(r.label), 1)]),
			_: 2
		}, 1040, ["class", "onClick"])) : !r.disabled && r.href ? (openBlock(), createElementBlock("a", {
			key: 2,
			href: r.href,
			title: r.label,
			rel: r.rel,
			class: normalizeClass(unref(cn)(unref(breadcrumbItemStyles)({
				size: n.size,
				color: n.color,
				disabled: !1
			}))),
			onClick: (e) => s(r, a)
		}, [r.icon ? (openBlock(), createBlock(LIcon_default, {
			key: 0,
			name: r.icon,
			size: "sm"
		}, null, 8, ["name"])) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(r.label), 1)], 10, _hoisted_2)) : r.disabled ? (openBlock(), createElementBlock("span", {
			key: 4,
			class: normalizeClass(unref(cn)(unref(breadcrumbItemStyles)({
				size: n.size,
				color: n.color,
				disabled: !0
			})))
		}, [r.icon ? (openBlock(), createBlock(LIcon_default, {
			key: 0,
			name: r.icon,
			size: "sm"
		}, null, 8, ["name"])) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(r.label), 1)], 2)) : (openBlock(), createElementBlock("button", {
			key: 3,
			class: normalizeClass(unref(cn)(unref(breadcrumbItemStyles)({
				size: n.size,
				color: n.color,
				disabled: !1
			}))),
			onClick: (e) => s(r, a)
		}, [r.icon ? (openBlock(), createBlock(LIcon_default, {
			key: 0,
			name: r.icon,
			size: "sm"
		}, null, 8, ["name"])) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(r.label), 1)], 10, _hoisted_3))]))), 128))])], 2));
	}
}), [["__scopeId", "data-v-2c6dd5b0"]]);
export { LBreadcrumbs_default as t };
