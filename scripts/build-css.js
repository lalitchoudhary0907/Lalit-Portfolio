/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const { compile, optimize } = require("@tailwindcss/node");
const { Scanner } = require("@tailwindcss/oxide");

async function build() {
  const root = path.resolve(__dirname, "..");
  const scanner = new Scanner({
    sources: [{ base: root, pattern: "src/**/*.{js,ts,jsx,tsx,html}", negated: false }]
  });
  const candidates = scanner.scan();
  console.log(`[build-css] Scanned ${candidates.length} candidate utility tokens from src/`);

  const inputPath = path.join(root, "src/app/globals.css");
  const outputPath = path.join(root, "src/app/tailwind-built.css");
  const inputCss = fs.readFileSync(inputPath, "utf8");

  const compiler = await compile(inputCss, {
    base: root,
    onDependency: () => {}
  });

  const rawCss = compiler.build(candidates);
  const { code } = optimize(rawCss, { minify: false });

  fs.writeFileSync(outputPath, code, "utf8");
  console.log(`[build-css] Wrote ${code.length} bytes of compiled Tailwind CSS to src/app/tailwind-built.css`);
}

build().catch((err) => {
  console.error("[build-css] Error compiling Tailwind:", err);
  process.exit(1);
});
