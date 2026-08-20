import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  root: "demo",
  base: "/ui/", // GitHub Pages path
  css: {
    transformer: "lightningcss",
  },
  build: {
    outDir: resolve(__dirname, "demo-dist"),
    emptyOutDir: true,
    minify: "esbuild",
    cssMinify: "lightningcss",
  },
  server: {
    port: 3000,
  },
});
