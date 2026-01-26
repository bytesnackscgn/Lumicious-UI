// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueTs from "@vue/eslint-config-typescript";
import skippingFormatting from "@vue/eslint-config-prettier/skip-formatting";
import oxlint from "eslint-plugin-oxlint";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,ts,tsx,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...vueTs.configs.recommended,
  oxlint.configs["flat/recommended"],
  skippingFormatting,
  ...storybook.configs["flat/recommended"],
];
