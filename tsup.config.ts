import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/component/index.ts",
    "src/section/index.ts",
    "src/page/index.ts",
  ],
  format: ["esm"], // no need "cjs" *testing version
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [
    sassPlugin({
      style: "compressed",
    }),
  ],
});
