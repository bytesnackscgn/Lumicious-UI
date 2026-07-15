import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { glob } from "glob";
import path from "path";

// Generate entry points for each component
const componentEntries = glob.sync("src/components/*/index.ts").reduce<Record<string, string>>((acc, file) => {
  const name = path.basename(path.dirname(file));
  acc[`components/${name}`] = file;
  return acc;
}, {});

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        ...componentEntries
      },
      formats: ["es", "umd"],
      name: "LumiciousUI"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.includes("style.css")) {
            return "lumicious-ui.css";
          }
          return "[name]-[hash][extname]";
        }
      }
    }
  }
});