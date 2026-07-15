import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { glob } from "glob";
import path from "path";
import dts from "vite-plugin-dts";

// Generate entry points for each component
const componentEntries = glob
  .sync("src/components/*/index.ts")
  .reduce<Record<string, string>>((acc, file) => {
    const name = path.basename(path.dirname(file));
    acc[`components/${name}/index`] = file;
    return acc;
  }, {});

// Add barrel entry for components/index
componentEntries["components/index"] = fileURLToPath(
  new URL("./src/components/index.ts", import.meta.url),
);

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["src/**/*.ts", "src/**/*.vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        ...componentEntries,
      },
      formats: ["es", "cjs"],
      name: "LumiciousUI",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.names?.some((name) => name.includes("style")) || 
            assetInfo.names?.some((name) => name.includes("lumicious-ui")) ||
            assetInfo.names?.includes("style.css") ||
            assetInfo.names?.includes("lumicious-ui")
          ) {
            return "lumicious-ui.css";
          }

          return "[name]-[hash][extname]";
        },
      },
    },
  },
});
