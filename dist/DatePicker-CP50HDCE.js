import { t as LIcon_default } from "./LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, computed, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, openBlock, ref, renderList, toDisplayString, unref, watch } from "vue";
const datePickerStyles = cva("glass border-white/20 rounded-xl overflow-hidden transition-all duration-300", {
	variants: {
		size: {
			sm: "p-2",
			md: "p-4",
			lg: "p-6"
		},
		variant: {
			glass: "bg-white/10 backdrop-blur-lg",
			solid: "bg-white/90 text-gray-900",
			outline: "bg-transparent"
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: "cursor-pointer"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "glass",
		disabled: !1
	}
}), calendarGridStyles = cva("grid grid-cols-7 gap-1", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
}), dayButtonStyles = cva("aspect-square rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10", {
	variants: {
		size: {
			sm: "text-xs p-1",
			md: "text-sm p-2",
			lg: "text-base p-3"
		},
		isCurrentMonth: {
			true: "",
			false: "text-white/30"
		},
		isToday: {
			true: "bg-white/20 font-semibold",
			false: ""
		},
		isSelected: {
			true: "bg-white/30 ring-2 ring-white/50",
			false: ""
		},
		isInRange: {
			true: "bg-white/10",
			false: ""
		},
		isDisabled: {
			true: "opacity-30 cursor-not-allowed",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		isCurrentMonth: !0,
		isToday: !1,
		isSelected: !1,
		isInRange: !1,
		isDisabled: !1
	}
}), navigationButtonStyles = cva("p-2 rounded-lg hover:bg-white/10 transition-all duration-200", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
});
function formatDate(e, t = "YYYY-MM-DD") {
	let n = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getDate()).padStart(2, "0"), a = String(e.getHours()).padStart(2, "0"), o = String(e.getMinutes()).padStart(2, "0");
	return t.replace("YYYY", n.toString()).replace("MM", r).replace("DD", i).replace("HH", a).replace("mm", o);
}
function isDateInRange(e, t, n) {
	return !(t && e < t || n && e > n);
}
function getDaysInMonth(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function getFirstDayOfMonth(e, t, n = 1) {
	return (new Date(e, t, 1).getDay() - n + 7) % 7;
}
function generateMonthDays(e, t, n = 1) {
	let r = getDaysInMonth(e, t), i = getFirstDayOfMonth(e, t, n), a = [], o = getDaysInMonth(e, t - 1);
	for (let n = i - 1; n >= 0; n--) a.push(new Date(e, t - 1, o - n));
	for (let n = 1; n <= r; n++) a.push(new Date(e, t, n));
	let s = 42 - a.length;
	for (let n = 1; n <= s; n++) a.push(new Date(e, t + 1, n));
	return a;
}
function getMonthName(e, t = "en") {
	return [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	][e];
}
function getWeekdayName(e, t = "en", n = !1) {
	return (n ? [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	] : [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	])[e];
}
var _hoisted_1 = { class: "relative" }, _hoisted_2 = { class: "flex items-center gap-3" }, _hoisted_3 = { class: "flex-1" }, _hoisted_4 = { class: "text-sm font-medium text-white/90" }, _hoisted_5 = { class: "p-4" }, _hoisted_6 = { class: "flex items-center justify-between mb-4" }, _hoisted_7 = ["disabled"], _hoisted_8 = ["disabled"], _hoisted_9 = { class: "text-center" }, _hoisted_10 = { class: "font-semibold text-white" }, _hoisted_11 = { class: "text-sm text-white/60" }, _hoisted_12 = ["disabled"], _hoisted_13 = ["disabled"], _hoisted_14 = ["onClick", "disabled"], _hoisted_15 = { class: "flex justify-between mt-4 pt-4 border-t border-white/10" }, _hoisted_16 = ["disabled"], _hoisted_17 = ["disabled"], LDatePicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LDatePicker",
	props: {
		modelValue: { default: void 0 },
		size: { default: "md" },
		variant: { default: "glass" },
		mode: { default: "single" },
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		placeholder: { default: "Select date" },
		format: { default: "YYYY-MM-DD" },
		locale: { default: "en" },
		startView: { default: "day" },
		minDate: {},
		maxDate: {},
		weekStartsOn: { default: 1 },
		showTimePicker: {
			type: Boolean,
			default: !1
		},
		timeFormat: { default: "24h" }
	},
	emits: ["update:modelValue"],
	setup(n, { emit: r }) {
		let c = n, l = r, u = ref(!1), d = ref(/* @__PURE__ */ new Date()), f = ref(null), p = ref({
			start: null,
			end: null
		}), m = ref([]);
		computed(() => c.startView);
		let h = computed(() => d.value.getFullYear()), g = computed(() => d.value.getMonth());
		computed(() => d.value.getDate());
		let _ = computed(() => /* @__PURE__ */ new Date()), v = computed(() => generateMonthDays(h.value, g.value, c.weekStartsOn)), y = computed(() => {
			let e = [];
			for (let t = 0; t < 7; t++) {
				let n = (c.weekStartsOn + t) % 7;
				e.push(getWeekdayName(n, c.locale, !0));
			}
			return e;
		}), b = computed(() => c.modelValue ? Array.isArray(c.modelValue) ? c.modelValue.length > 0 ? c.modelValue.map((e) => formatDate(e)).join(" - ") : c.placeholder : typeof c.modelValue == "object" && "start" in c.modelValue ? `${formatDate(c.modelValue.start)} - ${formatDate(c.modelValue.end)}` : formatDate(c.modelValue) : c.placeholder), x = (e) => c.mode === "single" ? f.value && formatDate(e) === formatDate(f.value) : c.mode === "range" ? p.value.start && formatDate(e) === formatDate(p.value.start) || p.value.end && formatDate(e) === formatDate(p.value.end) : c.mode === "multiple" ? m.value.some((t) => formatDate(e) === formatDate(t)) : !1, S = (e) => {
			if (c.mode !== "range" || !p.value.start) return !1;
			let t = p.value.start, n = p.value.end;
			return n ? e > t && e < n : e > t && e <= d.value;
		}, C = (e) => {
			if (!(c.disabled || c.readonly)) {
				if (c.mode === "single") f.value = e, l("update:modelValue", e), c.readonly || (u.value = !1);
				else if (c.mode === "range") p.value.start ? p.value.end ? p.value = {
					start: e,
					end: null
				} : e >= p.value.start ? (p.value.end = e, l("update:modelValue", {
					start: p.value.start,
					end: p.value.end
				})) : p.value = {
					start: e,
					end: null
				} : p.value.start = e, c.readonly || (u.value = !1);
				else if (c.mode === "multiple") {
					let t = m.value.findIndex((t) => formatDate(t) === formatDate(e));
					t > -1 ? m.value.splice(t, 1) : m.value.push(e), l("update:modelValue", [...m.value]);
				}
			}
		}, w = (e) => {
			e === "prev" ? d.value = new Date(h.value, g.value - 1, 1) : d.value = new Date(h.value, g.value + 1, 1);
		}, T = (e) => {
			e === "prev" ? d.value = new Date(h.value - 1, g.value, 1) : d.value = new Date(h.value + 1, g.value, 1);
		}, E = () => {
			c.disabled || (u.value = !u.value);
		}, D = () => {
			u.value = !1;
		}, O = () => {
			f.value = null, p.value = {
				start: null,
				end: null
			}, m.value = [], l("update:modelValue", void 0);
		};
		return watch(() => c.modelValue, (e) => {
			e || (f.value = null, p.value = {
				start: null,
				end: null
			}, m.value = []);
		}, { immediate: !0 }), (r, a) => (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
			class: normalizeClass(unref(cn)(unref(datePickerStyles)({
				size: n.size,
				variant: n.variant,
				disabled: n.disabled
			}))),
			onClick: E
		}, [createElementVNode("div", _hoisted_2, [
			createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, toDisplayString(b.value), 1), a[4] ||= createElementVNode("div", { class: "text-xs text-white/60" }, "Click to select date", -1)]),
			createVNode(unref(LIcon_default), {
				name: "calendar",
				class: "text-white/60"
			}),
			createVNode(unref(LIcon_default), {
				name: "chevron-down",
				class: normalizeClass(["text-white/60 transition-transform duration-200", { "rotate-180": u.value }])
			}, null, 8, ["class"])
		])], 2), u.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "absolute top-full left-0 mt-2 z-50 glass border-white/20 rounded-xl shadow-xl overflow-hidden",
			onClick: D
		}, [createElementVNode("div", _hoisted_5, [
			createElementVNode("div", _hoisted_6, [
				createElementVNode("button", {
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: a[0] ||= (e) => T("prev"),
					disabled: n.disabled
				}, [createVNode(unref(LIcon_default), {
					name: "chevron-left",
					class: "w-4 h-4"
				})], 10, _hoisted_7),
				createElementVNode("button", {
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: a[1] ||= (e) => w("prev"),
					disabled: n.disabled
				}, [createVNode(unref(LIcon_default), {
					name: "chevron-left",
					class: "w-4 h-4"
				})], 10, _hoisted_8),
				createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, toDisplayString(unref(getMonthName)(g.value, n.locale)), 1), createElementVNode("div", _hoisted_11, toDisplayString(h.value), 1)]),
				createElementVNode("button", {
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: a[2] ||= (e) => w("next"),
					disabled: n.disabled
				}, [createVNode(unref(LIcon_default), {
					name: "chevron-right",
					class: "w-4 h-4"
				})], 10, _hoisted_12),
				createElementVNode("button", {
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: a[3] ||= (e) => T("next"),
					disabled: n.disabled
				}, [createVNode(unref(LIcon_default), {
					name: "chevron-right",
					class: "w-4 h-4"
				})], 10, _hoisted_13)
			]),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(calendarGridStyles)({ size: n.size }))) }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(y.value, (e) => (openBlock(), createElementBlock("div", {
				key: e,
				class: "text-center font-medium text-white/60 py-2"
			}, toDisplayString(e), 1))), 128))], 2),
			createElementVNode("div", { class: normalizeClass(unref(cn)(unref(calendarGridStyles)({ size: n.size }))) }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(v.value, (e) => (openBlock(), createElementBlock("button", {
				key: e.toString(),
				class: normalizeClass(unref(cn)(unref(dayButtonStyles)({
					size: n.size,
					isCurrentMonth: e.getMonth() === g.value,
					isToday: unref(formatDate)(e) === unref(formatDate)(_.value),
					isSelected: x(e),
					isInRange: S(e),
					isDisabled: n.disabled || !unref(isDateInRange)(e, c.minDate, c.maxDate)
				}))),
				onClick: (t) => C(e),
				disabled: n.disabled || !unref(isDateInRange)(e, c.minDate, c.maxDate)
			}, toDisplayString(e.getDate()), 11, _hoisted_14))), 128))], 2),
			createElementVNode("div", _hoisted_15, [
				c.modelValue ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: O,
					disabled: n.disabled
				}, " Clear ", 10, _hoisted_16)) : createCommentVNode("", !0),
				a[5] ||= createElementVNode("div", null, null, -1),
				createElementVNode("button", {
					class: normalizeClass(unref(cn)(unref(navigationButtonStyles)({ size: n.size }))),
					onClick: D,
					disabled: n.disabled
				}, " Done ", 10, _hoisted_17)
			])
		])])) : createCommentVNode("", !0)]));
	}
}), [["__scopeId", "data-v-fb2cfc15"]]);
export { LDatePicker_default as t };
