import { t as LIcon_default } from "../../LIcon-CeVFYSDO.js";
import { n as cn, t as cva } from "../../dist-DzHoqs8r.js";
import "../../Icon-CWAq-V7z.js";
import { t as _plugin_vue_export_helper_default } from "../../_plugin-vue_export-helper-DEfhU8Eg.js";
import { Fragment, computed, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, normalizeClass, openBlock, ref, renderList, toDisplayString, unref, watch, withModifiers } from "vue";
const filePickerStyles = cva("glass border-white/20 rounded-xl overflow-hidden transition-all duration-300", {
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
}), fileDropZoneStyles = cva("border-2 border-dashed border-white/30 rounded-lg p-8 text-center transition-all duration-300", {
	variants: {
		isDragOver: {
			true: "border-white/60 bg-white/10",
			false: ""
		},
		size: {
			sm: "p-4",
			md: "p-6",
			lg: "p-8"
		}
	},
	defaultVariants: {
		isDragOver: !1,
		size: "md"
	}
}), fileItemStyles = cva("glass border-white/20 rounded-lg p-3 flex items-center gap-3 transition-all duration-200 hover:bg-white/10", {
	variants: { size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base"
	} },
	defaultVariants: { size: "md" }
}), fileButtonStyles = cva("glass border-white/20 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 active:scale-95", {
	variants: { size: {
		sm: "text-xs px-3 py-1.5",
		md: "text-sm px-4 py-2",
		lg: "text-base px-6 py-3"
	} },
	defaultVariants: { size: "md" }
}), DEFAULT_FILE_ICONS = {
	"image/": "image",
	"video/": "video",
	"audio/": "music",
	"application/pdf": "file-text",
	"application/msword": "file-text",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "file-text",
	"text/": "file-text",
	"application/json": "code",
	"application/zip": "archive",
	"application/x-rar-compressed": "archive",
	"application/x-7z-compressed": "archive",
	default: "file"
};
function formatFileSize(e, t = 2) {
	if (e === 0) return "0 Bytes";
	let n = 1024, r = t < 0 ? 0 : t, i = [
		"Bytes",
		"KB",
		"MB",
		"GB",
		"TB"
	], a = Math.floor(Math.log(e) / Math.log(n));
	return parseFloat((e / n ** +a).toFixed(r)) + " " + i[a];
}
function getFileIcon(e) {
	for (let [t, n] of Object.entries(DEFAULT_FILE_ICONS)) if (t !== "default" && e.startsWith(t)) return n;
	return DEFAULT_FILE_ICONS.default;
}
function generateFileId() {
	return Math.random().toString(36).substr(2, 9);
}
function validateFile(e, t, n, r) {
	return n && e.size > n || r && e.size < r ? !1 : t ? Array.isArray(t) ? t.some((t) => t.startsWith(".") ? e.name.toLowerCase().endsWith(t.toLowerCase()) : e.type === t || e.type.startsWith(t + "/")) : t.startsWith(".") ? e.name.toLowerCase().endsWith(t.toLowerCase()) : e.type === t || e.type.startsWith(t + "/") : !0;
}
function getFileItems(e) {
	return (Array.isArray(e) ? e : Array.from(e)).map((e) => ({
		file: e,
		id: generateFileId(),
		name: e.name,
		size: e.size,
		type: e.type,
		url: URL.createObjectURL(e)
	}));
}
function revokeFileUrls(e) {
	e.forEach((e) => {
		e.url && URL.revokeObjectURL(e.url);
	});
}
var _hoisted_1 = { class: "relative" }, _hoisted_2 = [
	"accept",
	"multiple",
	"disabled"
], _hoisted_3 = ["data-drag-over"], _hoisted_4 = { class: "flex items-center gap-3" }, _hoisted_5 = { class: "flex-1" }, _hoisted_6 = { class: "text-sm font-medium text-white/90" }, _hoisted_7 = { class: "text-xs text-white/60" }, _hoisted_8 = {
	key: 0,
	class: "mt-2 space-y-2"
}, _hoisted_9 = { class: "flex items-center gap-3 flex-1" }, _hoisted_10 = { class: "flex-1 min-w-0" }, _hoisted_11 = { class: "font-medium text-white/90 truncate" }, _hoisted_12 = { class: "text-xs text-white/60" }, _hoisted_13 = ["onClick"], _hoisted_14 = {
	key: 0,
	class: "flex justify-end"
}, LFilePicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LFilePicker",
	props: {
		modelValue: { default: void 0 },
		size: { default: "md" },
		variant: { default: "glass" },
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		accept: { default: void 0 },
		maxSize: { default: void 0 },
		minSize: { default: void 0 },
		placeholder: { default: "Drop files here or click to browse" },
		buttonText: { default: "Choose Files" },
		dragDrop: {
			type: Boolean,
			default: !0
		},
		clearable: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:modelValue"],
	setup(n, { emit: r }) {
		let o = n, s = r, c = ref(), l = ref([]), u = ref(!1), d = ref(!1), f = computed(() => l.value.length ? o.multiple ? `${l.value.length} file${l.value.length > 1 ? "s" : ""} selected` : l.value[0]?.name || o.placeholder : o.placeholder), p = (e) => {
			if (o.disabled || o.readonly) return;
			let t = (Array.isArray(e) ? e : Array.from(e)).filter((e) => validateFile(e, o.accept, o.maxSize, o.minSize));
			if (t.length === 0) return;
			let n = getFileItems(t);
			o.multiple ? l.value = [...l.value, ...n] : l.value = n.slice(0, 1), m();
		}, m = () => {
			o.multiple ? s("update:modelValue", l.value.map((e) => e.file)) : s("update:modelValue", l.value[0]?.file || void 0);
		}, h = (e) => {
			let t = e.target;
			t.files && p(t.files), t.value = "";
		}, g = (e) => {
			e.preventDefault(), u.value = !1, !(o.disabled || o.readonly || !e.dataTransfer?.files) && p(e.dataTransfer.files);
		}, _ = (e) => {
			e.preventDefault(), !o.disabled && !o.readonly && (u.value = !0);
		}, v = () => {
			u.value = !1;
		}, y = (e) => {
			if (o.disabled || o.readonly) return;
			let t = l.value.splice(e, 1)[0];
			t?.url && URL.revokeObjectURL(t.url), m();
		}, b = () => {
			o.disabled || o.readonly || !o.clearable || (revokeFileUrls(l.value), l.value = [], m());
		}, x = () => {
			!o.disabled && !o.readonly && c.value && c.value.click();
		}, S = () => {
			x();
		};
		return watch(() => o.modelValue, (e) => {
			e || (revokeFileUrls(l.value), l.value = []);
		}, { immediate: !0 }), watch(() => l.value, (e, t) => {
			revokeFileUrls(t.filter((t) => !e.some((e) => e.id === t.id)));
		}, { deep: !0 }), (r, a) => (openBlock(), createElementBlock("div", _hoisted_1, [
			createElementVNode("input", {
				ref_key: "inputRef",
				ref: c,
				type: "file",
				accept: Array.isArray(n.accept) ? n.accept.join(",") : n.accept,
				multiple: n.multiple,
				disabled: n.disabled,
				onChange: h,
				class: "hidden"
			}, null, 40, _hoisted_2),
			createElementVNode("div", {
				class: normalizeClass(unref(cn)(unref(filePickerStyles)({
					size: n.size,
					variant: n.variant,
					disabled: n.disabled
				}))),
				onClick: S,
				onDrop: g,
				onDragover: _,
				onDragleave: v,
				"data-drag-over": u.value
			}, [createElementVNode("div", _hoisted_4, [
				createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, toDisplayString(f.value), 1), createElementVNode("div", _hoisted_7, toDisplayString(o.accept ? `Accepted: ${Array.isArray(o.accept) ? o.accept.join(", ") : o.accept}` : "All files supported"), 1)]),
				createVNode(unref(LIcon_default), {
					name: "upload",
					class: "text-white/60"
				}),
				createVNode(unref(LIcon_default), {
					name: "chevron-down",
					class: normalizeClass(["text-white/60 transition-transform duration-200", { "rotate-180": d.value }])
				}, null, 8, ["class"])
			])], 42, _hoisted_3),
			l.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.value, (r, i) => (openBlock(), createElementBlock("div", {
				key: r.id,
				class: normalizeClass(unref(cn)(unref(fileItemStyles)({ size: n.size })))
			}, [createElementVNode("div", _hoisted_9, [
				createVNode(unref(LIcon_default), {
					name: unref(getFileIcon)(r.type),
					class: "text-white/60 flex-shrink-0"
				}, null, 8, ["name"]),
				createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, toDisplayString(r.name), 1), createElementVNode("div", _hoisted_12, toDisplayString(unref(formatFileSize)(r.size)), 1)]),
				!n.disabled && !n.readonly && n.clearable ? (openBlock(), createElementBlock("button", {
					key: 0,
					onClick: withModifiers((e) => y(i), ["stop"]),
					class: "p-1 rounded-lg hover:bg-white/10 transition-colors"
				}, [createVNode(unref(LIcon_default), {
					name: "x",
					class: "w-4 h-4 text-white/60"
				})], 8, _hoisted_13)) : createCommentVNode("", !0)
			])], 2))), 128)), n.clearable && !n.disabled && !n.readonly ? (openBlock(), createElementBlock("div", _hoisted_14, [createElementVNode("button", {
				onClick: b,
				class: normalizeClass(unref(cn)(unref(fileButtonStyles)({ size: n.size })))
			}, " Clear All ", 2)])) : createCommentVNode("", !0)])) : createCommentVNode("", !0),
			n.dragDrop && u.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref(cn)(unref(fileDropZoneStyles)({
					isDragOver: u.value,
					size: n.size
				}))),
				onClick: x
			}, [
				createVNode(unref(LIcon_default), {
					name: "upload-cloud",
					class: "w-8 h-8 text-white/60 mx-auto mb-2"
				}),
				a[0] ||= createElementVNode("div", { class: "text-sm font-medium text-white/90" }, "Drop files here", -1),
				a[1] ||= createElementVNode("div", { class: "text-xs text-white/60 mt-1" }, "Click to browse or drag and drop", -1)
			], 2)) : createCommentVNode("", !0)
		]));
	}
}), [["__scopeId", "data-v-7a20b07d"]]);
export { LFilePicker_default as LFilePicker };
