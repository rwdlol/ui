import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@rwdlol/ui/styles.css": resolve(import.meta.dirname, "src/styles/global.scss"),
      "@rwdlol/ui": resolve(import.meta.dirname, "src/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    pool: "forks", // fixes hanging/freezing issues on Windows
    css: true,
  },
});
