import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

mkdirSync("demo-dist", { recursive: true });

await esbuild.build({
  entryPoints: ["demo/index.tsx"],
  bundle: true,
  outfile: "demo-dist/bundle.js",
  minify: true,
  treeShaking: true,
  sourcemap: false,
  plugins: [sassPlugin({ style: "compressed" })],
});

const css = readFileSync("demo-dist/bundle.css", "utf-8");
let html = readFileSync("demo/index.html", "utf-8");

html = html
  .replace(
    '<link rel="stylesheet" href="./bundle.css" />',
    `<style>${css}</style>`,
  )
  .replace(
    '<script type="module" src="./bundle.js"></script>',
    '<script type="module" src="./bundle.js" defer></script>',
  );

writeFileSync("demo-dist/index.html", html);
writeFileSync("demo-dist/404.html", html);
writeFileSync("demo-dist/.nojekyll", "");

console.log("Built successfully!");
