import { n as cn, t as cva } from "./dist-DzHoqs8r.js";
import { createElementBlock, defineComponent, normalizeClass, onMounted, onUnmounted, openBlock, ref, renderSlot, unref, vShow, watch, withDirectives, withModifiers } from "vue";
const menuStyles = cva("l-menu glass absolute z-[2000] overflow-y-auto rounded-xl p-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200", {
	variants: { showing: {
		true: "block",
		false: "hidden"
	} },
	defaultVariants: { showing: !1 }
});
var LMenu_default = /* @__PURE__ */ defineComponent({
	__name: "LMenu",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		anchor: {},
		self: {},
		offset: {},
		fit: { type: Boolean },
		cover: { type: Boolean },
		persistent: {
			type: Boolean,
			default: !1
		},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = t, i = n, a = ref(r.modelValue), o = ref(null);
		watch(() => r.modelValue, (e) => {
			a.value = e;
		});
		let s = () => {
			a.value = !1, i("update:modelValue", !1);
		}, c = (e) => {
			r.persistent || !a.value || o.value && !o.value.contains(e.target) && setTimeout(() => {
				a.value && s();
			}, 10);
		};
		return onMounted(() => {
			document.addEventListener("mousedown", c);
		}), onUnmounted(() => {
			document.removeEventListener("mousedown", c);
		}), (t, n) => withDirectives((openBlock(), createElementBlock("div", {
			ref_key: "menuRef",
			ref: o,
			class: normalizeClass(unref(cn)(unref(menuStyles)({ showing: !0 }), r.class)),
			onClick: n[0] ||= withModifiers(() => {}, ["stop"])
		}, [renderSlot(t.$slots, "default")], 2)), [[vShow, a.value]]);
	}
});
export { menuStyles as n, LMenu_default as t };
