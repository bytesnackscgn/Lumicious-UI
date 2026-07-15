import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, computed, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, openBlock, renderList, toDisplayString, unref } from "vue";
const paginationStyles = cva("l-pagination flex items-center justify-center gap-2", {
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base"
		},
		color: {
			primary: "text-blue-400",
			secondary: "text-gray-400",
			white: "text-white"
		},
		shape: {
			rounded: "rounded-full",
			square: "rounded"
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		color: "primary",
		shape: "rounded",
		disabled: !1
	}
}), paginationButtonStyles = cva("l-pagination-button flex items-center justify-center transition-all duration-200 hover:bg-white/10 active:scale-95", {
	variants: {
		size: {
			sm: "w-8 h-8 text-xs",
			md: "w-10 h-10 text-sm",
			lg: "w-12 h-12 text-base"
		},
		color: {
			primary: "text-blue-400 hover:bg-blue-400/20",
			secondary: "text-gray-400 hover:bg-gray-400/20",
			white: "text-white hover:bg-white/20"
		},
		shape: {
			rounded: "rounded-full",
			square: "rounded"
		},
		active: {
			true: "bg-blue-400/20 text-blue-400",
			false: ""
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		color: "primary",
		shape: "rounded",
		active: !1,
		disabled: !1
	}
});
cva("l-pagination-ellipsis flex items-center justify-center text-gray-500", {
	variants: { size: {
		sm: "w-8 h-8 text-xs",
		md: "w-10 h-10 text-sm",
		lg: "w-12 h-12 text-base"
	} },
	defaultVariants: { size: "md" }
});
const paginationInputStyles = cva("l-pagination-input bg-transparent border border-white/20 rounded px-2 py-1 text-center focus:outline-none focus:border-blue-400", {
	variants: { size: {
		sm: "text-xs w-16",
		md: "text-sm w-20",
		lg: "text-base w-24"
	} },
	defaultVariants: { size: "md" }
}), paginationSelectStyles = cva("l-pagination-select bg-transparent border border-white/20 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
});
var _hoisted_1 = {
	key: 0,
	class: "text-sm text-gray-400"
}, _hoisted_2 = ["disabled"], _hoisted_3 = ["disabled"], _hoisted_4 = ["onClick", "disabled"], _hoisted_5 = ["disabled"], _hoisted_6 = ["disabled"], _hoisted_7 = {
	key: 3,
	class: "flex items-center gap-2"
}, _hoisted_8 = ["disabled"], _hoisted_9 = ["value", "selected"], _hoisted_10 = {
	key: 4,
	class: "flex items-center gap-2"
}, _hoisted_11 = [
	"max",
	"value",
	"disabled"
], LPagination_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LPagination",
	props: {
		total: {},
		current: {},
		pageSize: { default: 10 },
		showSizeChanger: {
			type: Boolean,
			default: !1
		},
		showQuickJumper: {
			type: Boolean,
			default: !1
		},
		showTotal: {
			type: Boolean,
			default: !0
		},
		size: { default: "md" },
		color: { default: "primary" },
		shape: { default: "rounded" },
		disabled: {
			type: Boolean,
			default: !1
		},
		hideOnSinglePage: {
			type: Boolean,
			default: !1
		},
		ellipsis: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["change", "pageSizeChange"],
	setup(n, { emit: r }) {
		let a = n, o = r, s = computed(() => Math.ceil(a.total / a.pageSize)), c = computed(() => a.hideOnSinglePage && s.value <= 1), l = () => {
			if (!a.ellipsis || s.value <= 7) return Array.from({ length: s.value }, (e, t) => t + 1);
			let e = [], t = a.current;
			if (e.push(1), t <= 3) for (let t = 2; t <= 4; t++) t < s.value - 1 && e.push(t);
			else if (t >= s.value - 2) for (let t = s.value - 3; t <= s.value - 1; t++) t > 1 && e.push(t);
			else for (let n = t - 1; n <= t + 1; n++) n > 1 && n < s.value - 1 && e.push(n);
			return s.value > 1 && e.push(s.value), [...new Set(e)].sort((e, t) => e - t);
		}, u = (e) => {
			e >= 1 && e <= s.value && e !== a.current && !a.disabled && o("change", e);
		}, d = () => {
			a.current > 1 && !a.disabled && o("change", a.current - 1);
		}, f = () => {
			a.current < s.value && !a.disabled && o("change", a.current + 1);
		}, p = () => {
			a.current > 1 && !a.disabled && o("change", 1);
		}, m = () => {
			a.current < s.value && !a.disabled && o("change", s.value);
		}, h = (e) => {
			let t = e.target, n = parseInt(t.value);
			n !== a.pageSize && !a.disabled && o("pageSizeChange", n);
		}, g = (e) => {
			let t = e.target, n = parseInt(t.value);
			n >= 1 && n <= s.value && !a.disabled && o("change", n);
		}, _ = () => `${(a.current - 1) * a.pageSize + 1}-${Math.min(a.current * a.pageSize, a.total)} of ${a.total}`;
		return (r, i) => c.value ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(unref(cn)(unref(paginationStyles)({
				size: n.size,
				color: n.color,
				shape: n.shape,
				disabled: n.disabled
			})))
		}, [
			n.showTotal ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_()), 1)) : createCommentVNode("", !0),
			s.value > 7 && n.current > 3 ? (openBlock(), createElementBlock("button", {
				key: 1,
				class: normalizeClass(unref(cn)(unref(paginationButtonStyles)({
					size: n.size,
					color: n.color,
					shape: n.shape,
					disabled: n.disabled
				}))),
				onClick: p,
				disabled: n.disabled || n.current === 1
			}, [createVNode(unref(LIcon_default), {
				name: "chevrons-left",
				size: "xs"
			})], 10, _hoisted_2)) : createCommentVNode("", !0),
			createElementVNode("button", {
				class: normalizeClass(unref(cn)(unref(paginationButtonStyles)({
					size: n.size,
					color: n.color,
					shape: n.shape,
					disabled: n.disabled
				}))),
				onClick: d,
				disabled: n.disabled || n.current === 1
			}, [createVNode(unref(LIcon_default), {
				name: "chevron-left",
				size: "xs"
			})], 10, _hoisted_3),
			(openBlock(!0), createElementBlock(Fragment, null, renderList(l(), (e) => (openBlock(), createElementBlock("button", {
				key: e,
				class: normalizeClass(unref(cn)(unref(paginationButtonStyles)({
					size: n.size,
					color: n.color,
					shape: n.shape,
					active: e === n.current,
					disabled: n.disabled
				}))),
				onClick: (t) => u(Number(e)),
				disabled: n.disabled
			}, toDisplayString(e), 11, _hoisted_4))), 128)),
			createElementVNode("button", {
				class: normalizeClass(unref(cn)(unref(paginationButtonStyles)({
					size: n.size,
					color: n.color,
					shape: n.shape,
					disabled: n.disabled
				}))),
				onClick: f,
				disabled: n.disabled || n.current === s.value
			}, [createVNode(unref(LIcon_default), {
				name: "chevron-right",
				size: "xs"
			})], 10, _hoisted_5),
			s.value > 7 && n.current < s.value - 2 ? (openBlock(), createElementBlock("button", {
				key: 2,
				class: normalizeClass(unref(cn)(unref(paginationButtonStyles)({
					size: n.size,
					color: n.color,
					shape: n.shape,
					disabled: n.disabled
				}))),
				onClick: m,
				disabled: n.disabled || n.current === s.value
			}, [createVNode(unref(LIcon_default), {
				name: "chevrons-right",
				size: "xs"
			})], 10, _hoisted_6)) : createCommentVNode("", !0),
			n.showSizeChanger ? (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("select", {
				class: normalizeClass(unref(cn)(unref(paginationSelectStyles)({ size: n.size }))),
				onChange: h,
				disabled: n.disabled
			}, [(openBlock(), createElementBlock(Fragment, null, renderList([
				10,
				20,
				50,
				100
			], (e) => createElementVNode("option", {
				key: e,
				value: e,
				selected: n.pageSize === e
			}, toDisplayString(e) + " / page ", 9, _hoisted_9)), 64))], 42, _hoisted_8)])) : createCommentVNode("", !0),
			n.showQuickJumper ? (openBlock(), createElementBlock("div", _hoisted_10, [i[0] ||= createElementVNode("span", { class: "text-sm text-gray-400" }, "Go to", -1), createElementVNode("input", {
				class: normalizeClass(unref(cn)(unref(paginationInputStyles)({ size: n.size }))),
				type: "number",
				min: 1,
				max: s.value,
				value: n.current,
				onChange: g,
				disabled: n.disabled
			}, null, 42, _hoisted_11)])) : createCommentVNode("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-9f19df21"]]);
export { LPagination_default as t };
