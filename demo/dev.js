import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const ctx = await esbuild.context({
  entryPoints: ["demo/index.tsx"],
  bundle: true,
  outfile: "demo/bundle.js",
  plugins: [sassPlugin()],
  sourcemap: false,
});

await ctx.watch();

const { port } = await ctx.serve({
  servedir: "demo",
  fallback: "demo/index.html",
  port: 3000,
});

console.log(`Demo app running at http://localhost:${port}`);
