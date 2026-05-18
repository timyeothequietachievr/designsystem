import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCES = [
  {
    kit: "marketing",
    source: path.join(ROOT, "design/components/tailwind-marketing-v4/react"),
    outPrefix: "",
    categoryPrefix: "",
    idPrefix: "",
  },
  {
    kit: "application-ui",
    source: path.join(ROOT, "design/components/application-ui-v4/react"),
    outPrefix: "application-ui",
    categoryPrefix: "application-ui / ",
    idPrefix: "application-ui-",
  },
  {
    kit: "ecommerce",
    source: path.join(ROOT, "design/components/ecommerce-v4/react"),
    outPrefix: "ecommerce",
    categoryPrefix: "ecommerce / ",
    idPrefix: "ecommerce-",
  },
];
const OUT = path.join(ROOT, "src/components/tailwind-showcase/blocks");

function toExportName(relPath) {
  const parts = relPath
    .replace(/\.jsx$/, "")
    .split(/[/\\]/)
    .flatMap((segment) => segment.split(/[-.]/))
    .filter(Boolean);

  const name = parts
    .map((part) => {
      const cleaned = part.replace(/[^a-zA-Z0-9]/g, "");
      if (!cleaned) return "";
      if (/^\d+$/.test(cleaned)) return `N${cleaned}`;
      return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    })
    .join("");

  return /^[A-Za-z_]/.test(name) ? name : `Block${name}`;
}

function restyle(source, rel) {
  let s = source;

  // Drop dark-mode variants (TQA site is warm light-first)
  s = s.replace(/\s+dark:[^\s"']+/g, "");

  const replacements = [
    [/bg-indigo-600/g, "bg-ember"],
    [/bg-indigo-500/g, "bg-ember"],
    [/hover:bg-indigo-500/g, "hover:bg-ember-deep"],
    [/hover:bg-indigo-400/g, "hover:bg-ember-deep"],
    [/focus-visible:outline-indigo-600/g, "focus-visible:outline-ember"],
    [/focus-visible:outline-indigo-500/g, "focus-visible:outline-ember"],
    [/text-indigo-600/g, "text-ember"],
    [/text-indigo-400/g, "text-ember"],
    [/ring-indigo-200/g, "ring-ember-200"],
    [/bg-indigo-50/g, "bg-ember-100"],
    [/bg-white/g, "bg-paper"],
    [/bg-gray-50/g, "bg-paper-soft"],
    [/bg-gray-100/g, "bg-paper-soft"],
    [/bg-gray-900/g, "bg-ink"],
    [/bg-gray-800/g, "bg-ink"],
    [/text-gray-900/g, "text-charcoal"],
    [/text-gray-800/g, "text-charcoal"],
    [/text-gray-700/g, "text-warm-700"],
    [/text-gray-600/g, "text-warm-500"],
    [/text-gray-500/g, "text-warm-500"],
    [/text-gray-400/g, "text-warm-500"],
    [/text-white/g, "text-paper"],
    [/ring-gray-900/g, "ring-charcoal"],
    [/ring-gray-200/g, "ring-paper-200"],
    [/border-gray-200/g, "border-paper-200"],
    [/border-gray-900/g, "border-charcoal"],
    [/divide-gray-900/g, "divide-charcoal/10"],
    [/divide-gray-500/g, "divide-paper-200"],
    [/hover:bg-gray-50/g, "hover:bg-paper-soft"],
    [/from-indigo-/g, "from-ember-"],
    [/to-indigo-/g, "to-ember-"],
    [/stroke-gray-900/g, "stroke-charcoal"],
    [/fill-gray-900/g, "fill-charcoal"],
    [/font-semibold tracking-tight/g, "font-display font-semibold tracking-tight"],
  ];

  for (const [pattern, replacement] of replacements) {
    s = s.replace(pattern, replacement);
  }

  s = s.replace(
    /https:\/\/tailwindcss\.com\/plus-assets\/[^"']+/g,
    "/assets/logo-tqa.jpg",
  );

  // Tailwind UI source bug: page example references bare `tiers` instead of pricing.tiers
  if (rel.includes("page-examples/pricing-pages/02-with-comparison-table")) {
    s = s.replace(/\{tiers\.map\(/g, "{pricing.tiers.map(");
  }

  s = s.replace(
    /export default function Example\(\)/g,
    "export default function TailwindBlock()",
  );

  s = s.replace(/^(['"]use client['"];?\s*\n)+/, "");
  s = s.replace(/^\/\/ @ts-nocheck\s*\n+/, "");
  s = `// @ts-nocheck\n"use client";\n\n${s}`;

  return s;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".jsx")) files.push(full);
  }
  return files;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const registry = [];

for (const sourceDef of SOURCES) {
  if (!fs.existsSync(sourceDef.source)) {
    console.warn(`Skipping ${sourceDef.kit}; source not found at ${sourceDef.source}`);
    continue;
  }

  const files = walk(sourceDef.source).sort();

  for (const file of files) {
    const rel = path.relative(sourceDef.source, file);
    const outRel = path
      .join(sourceDef.outPrefix, rel)
      .replace(/\.jsx$/, ".tsx");
    const exportName = toExportName(outRel);
    const category = `${sourceDef.categoryPrefix}${rel
      .split(path.sep)
      .slice(0, -1)
      .join(" / ")}`;
    const label = path.basename(rel, ".jsx");

    const content = restyle(fs.readFileSync(file, "utf8"), rel);
    const outPath = path.join(OUT, outRel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, content);

    registry.push({
      id: `${sourceDef.idPrefix}${rel.replace(/\.jsx$/, "").replace(/[/\\]/g, "-")}`,
      exportName,
      importPath: `./blocks/${outRel.replace(/\\/g, "/").replace(/\.tsx$/, "")}`,
      category,
      label,
    });
  }
}

const registryTs = `// @ts-nocheck
// Auto-generated by scripts/build-tailwind-showcase.mjs — do not edit manually
export type TailwindShowcaseEntry = {
  id: string;
  category: string;
  label: string;
  Component: React.ComponentType;
};

import type React from "react";

${registry
  .map(
    (r) =>
      `import ${r.exportName} from "${r.importPath}";`,
  )
  .join("\n")}

export const tailwindShowcaseRegistry: TailwindShowcaseEntry[] = [
${registry
  .map(
    (r) =>
      `  { id: ${JSON.stringify(r.id)}, category: ${JSON.stringify(r.category)}, label: ${JSON.stringify(r.label)}, Component: ${r.exportName} },`,
  )
  .join("\n")}
];
`;

fs.writeFileSync(
  path.join(ROOT, "src/components/tailwind-showcase/registry.ts"),
  registryTs,
);

console.log(`Converted ${registry.length} Tailwind components.`);
