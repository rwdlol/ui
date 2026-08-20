import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import { transform } from "lightningcss";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/component/index.ts",
    "src/page/index.ts",
    "src/section/index.ts",
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
      type: "css",
      async transform(source, resolveDir, filePath) {
        const { code } = transform({
          filename: filePath || "style.css", // Required by Lightning CSS
          code: Buffer.from(source),
          minify: true,
          sourceMap: false,
          targets: {
            chrome: 90 << 16,
            firefox: 88 << 16,
            safari: 14 << 16,
          },
        });
        return new TextDecoder().decode(code);
      },
    }),
  ],
});
