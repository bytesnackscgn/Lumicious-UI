import { n as solidColors } from "./color-CfLgT3S7.js";
const getGradientClass = (e = "white", t = "to-r") => `bg-gradient-${t} ${gradientColors[e]} bg-clip-text text-transparent`, defaultCvaGradientOptions = {
	"to-r": "",
	"to-l": "",
	"to-t": "",
	"to-b": "",
	"to-tr": "",
	"to-tl": "",
	"to-br": "",
	"to-bl": ""
}, gradientColors = {
	white: "from-white via-gray-200 to-white/80",
	blue: "from-blue-500 via-blue-400 to-cyan-400",
	purple: "from-purple-600 via-purple-500 to-pink-500",
	pink: "from-pink-500 via-rose-400 to-red-400",
	green: "from-green-500 via-emerald-400 to-teal-400",
	yellow: "from-yellow-500 via-amber-400 to-orange-400",
	red: "from-red-500 via-rose-400 to-pink-400",
	indigo: "from-indigo-600 via-purple-500 to-pink-500"
}, gradientOptions = [
	{
		gradient: !1,
		color: "primary",
		class: solidColors.primary
	},
	{
		gradient: !1,
		color: "secondary",
		class: solidColors.secondary
	},
	{
		gradient: !1,
		color: "tertiary",
		class: solidColors.tertiary
	},
	{
		gradient: !1,
		color: "white",
		class: solidColors.white
	},
	{
		gradient: !1,
		color: "blue",
		class: solidColors.blue
	},
	{
		gradient: !1,
		color: "purple",
		class: solidColors.purple
	},
	{
		gradient: !1,
		color: "pink",
		class: solidColors.pink
	},
	{
		gradient: !1,
		color: "green",
		class: solidColors.green
	},
	{
		gradient: !1,
		color: "yellow",
		class: solidColors.yellow
	},
	{
		gradient: !1,
		color: "red",
		class: solidColors.red
	},
	{
		gradient: !1,
		color: "indigo",
		class: solidColors.indigo
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-r",
		class: getGradientClass("white", "to-r")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-l",
		class: getGradientClass("white", "to-l")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-t",
		class: getGradientClass("white", "to-t")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-b",
		class: getGradientClass("white", "to-b")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-tr",
		class: getGradientClass("white", "to-tr")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-tl",
		class: getGradientClass("white", "to-tl")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-br",
		class: getGradientClass("white", "to-br")
	},
	{
		gradient: !0,
		color: "white",
		gradientDirection: "to-bl",
		class: getGradientClass("white", "to-bl")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-r",
		class: getGradientClass("blue", "to-r")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-l",
		class: getGradientClass("blue", "to-l")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-t",
		class: getGradientClass("blue", "to-t")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-b",
		class: getGradientClass("blue", "to-b")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-tr",
		class: getGradientClass("blue", "to-tr")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-tl",
		class: getGradientClass("blue", "to-tl")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-br",
		class: getGradientClass("blue", "to-br")
	},
	{
		gradient: !0,
		color: "blue",
		gradientDirection: "to-bl",
		class: getGradientClass("blue", "to-bl")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-r",
		class: getGradientClass("purple", "to-r")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-l",
		class: getGradientClass("purple", "to-l")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-t",
		class: getGradientClass("purple", "to-t")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-b",
		class: getGradientClass("purple", "to-b")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-tr",
		class: getGradientClass("purple", "to-tr")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-tl",
		class: getGradientClass("purple", "to-tl")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-br",
		class: getGradientClass("purple", "to-br")
	},
	{
		gradient: !0,
		color: "purple",
		gradientDirection: "to-bl",
		class: getGradientClass("purple", "to-bl")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-r",
		class: getGradientClass("pink", "to-r")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-l",
		class: getGradientClass("pink", "to-l")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-t",
		class: getGradientClass("pink", "to-t")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-b",
		class: getGradientClass("pink", "to-b")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-tr",
		class: getGradientClass("pink", "to-tr")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-tl",
		class: getGradientClass("pink", "to-tl")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-br",
		class: getGradientClass("pink", "to-br")
	},
	{
		gradient: !0,
		color: "pink",
		gradientDirection: "to-bl",
		class: getGradientClass("pink", "to-bl")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-r",
		class: getGradientClass("green", "to-r")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-l",
		class: getGradientClass("green", "to-l")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-t",
		class: getGradientClass("green", "to-t")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-b",
		class: getGradientClass("green", "to-b")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-tr",
		class: getGradientClass("green", "to-tr")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-tl",
		class: getGradientClass("green", "to-tl")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-br",
		class: getGradientClass("green", "to-br")
	},
	{
		gradient: !0,
		color: "green",
		gradientDirection: "to-bl",
		class: getGradientClass("green", "to-bl")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-r",
		class: getGradientClass("yellow", "to-r")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-l",
		class: getGradientClass("yellow", "to-l")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-t",
		class: getGradientClass("yellow", "to-t")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-b",
		class: getGradientClass("yellow", "to-b")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-tr",
		class: getGradientClass("yellow", "to-tr")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-tl",
		class: getGradientClass("yellow", "to-tl")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-br",
		class: getGradientClass("yellow", "to-br")
	},
	{
		gradient: !0,
		color: "yellow",
		gradientDirection: "to-bl",
		class: getGradientClass("yellow", "to-bl")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-r",
		class: getGradientClass("red", "to-r")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-l",
		class: getGradientClass("red", "to-l")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-t",
		class: getGradientClass("red", "to-t")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-b",
		class: getGradientClass("red", "to-b")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-tr",
		class: getGradientClass("red", "to-tr")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-tl",
		class: getGradientClass("red", "to-tl")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-br",
		class: getGradientClass("red", "to-br")
	},
	{
		gradient: !0,
		color: "red",
		gradientDirection: "to-bl",
		class: getGradientClass("red", "to-bl")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-r",
		class: getGradientClass("indigo", "to-r")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-l",
		class: getGradientClass("indigo", "to-l")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-t",
		class: getGradientClass("indigo", "to-t")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-b",
		class: getGradientClass("indigo", "to-b")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-tr",
		class: getGradientClass("indigo", "to-tr")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-tl",
		class: getGradientClass("indigo", "to-tl")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-br",
		class: getGradientClass("indigo", "to-br")
	},
	{
		gradient: !0,
		color: "indigo",
		gradientDirection: "to-bl",
		class: getGradientClass("indigo", "to-bl")
	}
];
export { gradientOptions as n, defaultCvaGradientOptions as t };
