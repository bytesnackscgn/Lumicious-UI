import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { Fragment, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, defineComponent, normalizeClass, openBlock, ref, renderList, renderSlot, toDisplayString, unref, watch } from "vue";
const formStyles = cva("glass border-white/20 rounded-xl p-6 transition-all duration-300", {
	variants: {
		size: {
			sm: "p-4",
			md: "p-6",
			lg: "p-8"
		},
		variant: {
			glass: "bg-white/10 backdrop-blur-lg",
			solid: "bg-white/90 text-gray-900",
			outline: "bg-transparent"
		},
		layout: {
			vertical: "flex flex-col space-y-6",
			horizontal: "flex flex-row flex-wrap items-center gap-6",
			inline: "flex flex-row flex-wrap items-center gap-4"
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		variant: "glass",
		layout: "vertical",
		disabled: !1
	}
}), formFieldStyles = cva("flex gap-4 transition-all duration-200", {
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base"
		},
		labelPosition: {
			top: "flex-col",
			left: "flex-row items-start",
			right: "flex-row items-start flex-row-reverse"
		},
		spacing: {
			sm: "space-y-2",
			md: "space-y-4",
			lg: "space-y-6"
		}
	},
	defaultVariants: {
		size: "md",
		labelPosition: "top",
		spacing: "md"
	}
}), formLabelStyles = cva("font-medium text-white/90 transition-all duration-200", {
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base"
		},
		required: {
			true: "after:content-['*'] after:ml-1 after:text-red-400",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		required: !1
	}
}), formErrorStyles = cva("text-sm text-red-400 mt-1 transition-all duration-200", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
}), formButtonStyles = cva("glass border-white/20 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 active:scale-95", {
	variants: {
		size: {
			sm: "text-xs px-4 py-1.5",
			md: "text-sm px-6 py-2",
			lg: "text-base px-8 py-3"
		},
		variant: {
			primary: "bg-blue-600/80 hover:bg-blue-500",
			secondary: "bg-gray-600/80 hover:bg-gray-500",
			success: "bg-green-600/80 hover:bg-green-500",
			danger: "bg-red-600/80 hover:bg-red-500"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "primary"
	}
}), FORM_DEFAULTS = {
	size: "md",
	layout: "vertical",
	variant: "glass",
	validateOn: "onBlur",
	labelPosition: "top",
	spacing: "md",
	showErrors: !0,
	validateOnChange: !0,
	validateOnBlur: !0
};
function validateField(e, t) {
	for (let n of t) if (typeof n == "function") {
		let t = n(e);
		if (typeof t == "string") return t;
		if (t === !1) return "This field is invalid";
	} else if (typeof n == "string") switch (n) {
		case "required":
			if (!e || typeof e == "string" && e.trim() === "") return "This field is required";
			break;
		case "email":
			if (e && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return "Please enter a valid email address";
			break;
		case "url":
			if (e && !/^https?:\/\/.+\..+/.test(e)) return "Please enter a valid URL";
			break;
		case "number":
			if (e && isNaN(Number(e))) return "Please enter a valid number";
			break;
	}
	return null;
}
function validateForm(e, t) {
	let n = {};
	for (let r of t) {
		let t = validateField(e[r.name], r.rules || []);
		t && (n[r.name] = t);
	}
	return n;
}
function isFormValid(e) {
	return Object.keys(e).length === 0;
}
function getFormInitialValues(e) {
	let t = {};
	for (let n of e) t[n.name] = n.value || "";
	return t;
}
var _hoisted_1 = { class: "flex-1" }, _hoisted_2 = [
	"value",
	"onInput",
	"onBlur",
	"type",
	"placeholder",
	"disabled",
	"readonly"
], _hoisted_3 = [
	"value",
	"onInput",
	"onBlur",
	"placeholder",
	"disabled",
	"readonly"
], _hoisted_4 = [
	"value",
	"onChange",
	"onBlur",
	"disabled",
	"readonly"
], _hoisted_5 = [
	"value",
	"onInput",
	"onBlur",
	"placeholder",
	"disabled",
	"readonly"
], _hoisted_6 = ["disabled"], _hoisted_7 = ["disabled"], LForm_default = /* @__PURE__ */ defineComponent({
	__name: "LForm",
	props: {
		modelValue: { default: () => ({}) },
		size: { default: FORM_DEFAULTS.size },
		layout: { default: FORM_DEFAULTS.layout },
		variant: { default: FORM_DEFAULTS.variant },
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		validateOn: { default: FORM_DEFAULTS.validateOn },
		labelPosition: { default: FORM_DEFAULTS.labelPosition },
		spacing: { default: FORM_DEFAULTS.spacing },
		showErrors: {
			type: Boolean,
			default: FORM_DEFAULTS.showErrors
		},
		loading: {
			type: Boolean,
			default: !1
		},
		submitText: { default: "Submit" },
		cancelText: { default: "Cancel" },
		validateOnChange: {
			type: Boolean,
			default: FORM_DEFAULTS.validateOnChange
		},
		validateOnBlur: {
			type: Boolean,
			default: FORM_DEFAULTS.validateOnBlur
		}
	},
	emits: [
		"update:modelValue",
		"submit",
		"cancel",
		"validate"
	],
	setup(n, { expose: a, emit: o }) {
		let s = n, c = o, l = ref([]), u = ref({}), d = ref({}), f = ref({}), p = ref(!1), m = computed(() => ({
			values: u.value,
			errors: d.value,
			touched: f.value,
			isValid: isFormValid(d.value),
			isDirty: Object.keys(f.value).some((e) => f.value[e])
		})), h = (e) => {
			l.value.push(e), u.value[e.name] || (u.value[e.name] = e.value || "");
		}, g = (e) => {
			l.value = l.value.filter((t) => t.name !== e), delete u.value[e], delete d.value[e], delete f.value[e];
		}, _ = (e, t) => {
			u.value[e] = t, c("update:modelValue", { ...u.value }), f.value[e] = !0, s.validateOnChange && v(e);
		}, v = (e) => {
			let t = l.value.find((t) => t.name === e);
			if (!t) return;
			let n = validateField(u.value[e], t.rules || []);
			n ? d.value[e] = n : delete d.value[e], c("validate", d.value);
		}, y = () => (d.value = validateForm(u.value, l.value), c("validate", d.value), isFormValid(d.value)), b = (e) => {
			f.value[e] = !0, s.validateOnBlur && v(e);
		}, x = async (e) => {
			if (e.preventDefault(), !(s.disabled || s.readonly || p.value) && (f.value = {}, l.value.forEach((e) => {
				f.value[e.name] = !0;
			}), y())) {
				p.value = !0;
				try {
					c("submit", { ...u.value });
				} finally {
					p.value = !1;
				}
			}
		}, S = () => {
			c("cancel");
		}, C = () => {
			u.value = getFormInitialValues(l.value), d.value = {}, f.value = {}, c("update:modelValue", { ...u.value });
		};
		return watch(() => s.modelValue, (e) => {
			e && (u.value = { ...e });
		}, { immediate: !0 }), a({
			registerField: h,
			unregisterField: g,
			updateFieldValue: _,
			validateFieldOnField: v,
			validateFormFields: y,
			handleSubmit: x,
			handleCancel: S,
			resetForm: C,
			clearErrors: () => {
				d.value = {}, c("validate", d.value);
			},
			formState: m
		}), (i, a) => (openBlock(), createElementBlock("form", {
			class: normalizeClass(unref(cn)(unref(formStyles)({
				size: n.size,
				variant: n.variant,
				layout: n.layout,
				disabled: n.disabled
			}))),
			onSubmit: x
		}, [renderSlot(i.$slots, "fields", {
			registerField: h,
			unregisterField: g,
			updateFieldValue: _,
			validateFieldOnField: v,
			handleFieldBlur: b,
			formValues: u.value,
			formErrors: d.value,
			formTouched: f.value,
			formState: m.value
		}, () => [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.value, (e) => (openBlock(), createElementBlock("div", {
			key: e.name,
			class: normalizeClass(unref(cn)(unref(formFieldStyles)({
				size: n.size,
				labelPosition: e.label ? n.labelPosition : "top",
				spacing: n.spacing
			})))
		}, [
			e.label ? (openBlock(), createElementBlock("label", {
				key: 0,
				class: normalizeClass(unref(cn)(unref(formLabelStyles)({
					size: n.size,
					required: e.required
				})))
			}, toDisplayString(e.label), 3)) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_1, [e.type === "text" || e.type === "email" || e.type === "url" ? (openBlock(), createElementBlock("input", {
				key: 0,
				value: u.value[e.name],
				onInput: (t) => _(e.name, t.target.value),
				onBlur: (t) => b(e.name),
				type: e.type,
				placeholder: e.placeholder,
				disabled: n.disabled || e.disabled,
				readonly: n.readonly || e.readonly,
				class: normalizeClass(unref(cn)("glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50", { "border-red-400": d.value[e.name] && f.value[e.name] }))
			}, null, 42, _hoisted_2)) : e.type === "textarea" ? (openBlock(), createElementBlock("textarea", {
				key: 1,
				value: u.value[e.name],
				onInput: (t) => _(e.name, t.target.value),
				onBlur: (t) => b(e.name),
				placeholder: e.placeholder,
				disabled: n.disabled || e.disabled,
				readonly: n.readonly || e.readonly,
				rows: 3,
				class: normalizeClass(unref(cn)("glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50", { "border-red-400": d.value[e.name] && f.value[e.name] }))
			}, null, 42, _hoisted_3)) : e.type === "select" ? (openBlock(), createElementBlock("select", {
				key: 2,
				value: u.value[e.name],
				onChange: (t) => _(e.name, t.target.value),
				onBlur: (t) => b(e.name),
				disabled: n.disabled || e.disabled,
				readonly: n.readonly || e.readonly,
				class: normalizeClass(unref(cn)("glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50", { "border-red-400": d.value[e.name] && f.value[e.name] }))
			}, [a[0] ||= createElementVNode("option", { value: "" }, "Select an option", -1), renderSlot(i.$slots, "options", {
				field: e,
				value: u.value[e.name]
			})], 42, _hoisted_4)) : (openBlock(), createElementBlock("input", {
				key: 3,
				value: u.value[e.name],
				onInput: (t) => _(e.name, t.target.value),
				onBlur: (t) => b(e.name),
				type: "text",
				placeholder: e.placeholder,
				disabled: n.disabled || e.disabled,
				readonly: n.readonly || e.readonly,
				class: normalizeClass(unref(cn)("glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50", { "border-red-400": d.value[e.name] && f.value[e.name] }))
			}, null, 42, _hoisted_5))]),
			n.showErrors && d.value[e.name] && f.value[e.name] ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref(cn)(unref(formErrorStyles)({ size: n.size })))
			}, toDisplayString(d.value[e.name]), 3)) : createCommentVNode("", !0)
		], 2))), 128))]), i.$slots.actions || n.submitText || n.cancelText ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(unref(cn)("flex gap-4 justify-end pt-4 border-t border-white/10", {
				"mt-6": n.layout === "vertical",
				"ml-auto": n.layout !== "vertical"
			}))
		}, [renderSlot(i.$slots, "actions", {
			submit: x,
			cancel: S,
			reset: C,
			loading: p.value,
			disabled: n.disabled || n.readonly
		}, () => [n.cancelText ? (openBlock(), createElementBlock("button", {
			key: 0,
			type: "button",
			disabled: n.disabled || n.readonly,
			class: normalizeClass(unref(cn)(unref(formButtonStyles)({
				size: n.size,
				variant: "secondary"
			}))),
			onClick: S
		}, toDisplayString(n.cancelText), 11, _hoisted_6)) : createCommentVNode("", !0), createElementVNode("button", {
			type: "submit",
			disabled: n.disabled || n.readonly || p.value || !m.value.isValid,
			class: normalizeClass(unref(cn)(unref(formButtonStyles)({
				size: n.size,
				variant: "primary"
			})))
		}, [p.value ? (openBlock(), createBlock(unref(LIcon_default), {
			key: 0,
			name: "loader-2",
			class: "animate-spin mr-2"
		})) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(n.submitText), 1)], 10, _hoisted_7)])], 2)) : createCommentVNode("", !0)], 34));
	}
});
export { LForm_default as t };
