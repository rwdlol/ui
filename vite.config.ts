import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: {
        chrome: 90 << 16,
        firefox: 88 << 16,
        safari: 14 << 16,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",
    cssMinify: "lightningcss",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "component/index": resolve(__dirname, "src/component/index.ts"),
        "section/index": resolve(__dirname, "src/section/index.ts"),
        "page/index": resolve(__dirname, "src/page/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
