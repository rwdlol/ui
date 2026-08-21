import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(import.meta.dirname, "demo"),
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
