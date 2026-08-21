import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    !process.env.STORYBOOK &&
      dts({
        insertTypesEntry: true,
        include: ["src"],
        exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
      }),
  ].filter(Boolean),
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false, // bundle all CSS into one file
    sourcemap: false,
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.ts"),
        "component/index": resolve(import.meta.dirname, "src/component/index.ts"),
        "section/index": resolve(import.meta.dirname, "src/section/index.ts"),
        "page/index": resolve(import.meta.dirname, "src/page/index.ts"),
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        preserveModules: false,
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "styles.css";
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
