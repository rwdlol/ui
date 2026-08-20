import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { cpSync, mkdirSync, writeFileSync } from "node:fs";

mkdirSync("demo-dist", { recursive: true });
cpSync("demo/index.html", "demo-dist/index.html");

await esbuild.build({
  entryPoints: ["demo/index.tsx"],
  bundle: true,
  outfile: "demo-dist/bundle.js",
  minify: true,
  sourcemap: false,
  plugins: [sassPlugin({ style: "compressed" })],
});

writeFileSync("demo-dist/.nojekyll", "");

console.log("Demo build finished in demo-dist/");
