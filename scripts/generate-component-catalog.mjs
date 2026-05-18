import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const base = "https://websitetqa.thequietachievr.com";
const previewBase = `${base}/component-previews`;

function previewImageUrl(code) {
  const previewPage = `${base}/preview/${code}`;
  const localPng = path.join(ROOT, "public/component-previews", `${code}.png`);
  if (fs.existsSync(localPng)) {
    return `${previewBase}/${code}.png`;
  }
  // Live thumbnail via public preview route (works in Notion gallery before PNG capture)
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(previewPage)}?w=900`;
}

const revampCatalog = [
  { code: "c1", slug: "navigation", title: "Navigation", source: "revamp" },
  { code: "c2", slug: "hero-portrait-split", title: "Hero — portrait split", source: "revamp" },
  { code: "c3", slug: "segmenter", title: "Segmenter", source: "revamp" },
  { code: "c4", slug: "thesis-band", title: "Thesis band", source: "revamp" },
  { code: "c5", slug: "social-proof-strip", title: "Social proof strip", source: "revamp" },
  { code: "c6", slug: "sound-familiar", title: "Sound familiar", source: "revamp" },
  { code: "c7", slug: "coaching-summary", title: "Coaching summary", source: "revamp" },
  { code: "c8", slug: "toni-block", title: "Toni block", source: "revamp" },
  { code: "c9", slug: "book-block", title: "Book block", source: "revamp" },
  { code: "c10", slug: "latest-writing", title: "Latest writing", source: "revamp" },
  { code: "c11", slug: "start-here", title: "Start here", source: "revamp" },
  { code: "c12", slug: "school-block", title: "School block", source: "revamp" },
  { code: "c13", slug: "playbooks-band", title: "Playbooks band", source: "revamp" },
  { code: "c14", slug: "newsletter-band", title: "Newsletter band", source: "revamp" },
  { code: "c15", slug: "elsewhere-strip", title: "Elsewhere strip", source: "revamp" },
  { code: "c16", slug: "footer-rev", title: "Footer", source: "revamp" },
  { code: "c17", slug: "toni-bubble", title: "Toni bubble (floating)", source: "revamp" },
];

const revampAlt = [
  { code: null, slug: "hero-editorial", title: "Hero — editorial (alt)", source: "revamp" },
  { code: null, slug: "hero-magazine", title: "Hero — magazine (alt)", source: "revamp" },
  { code: null, slug: "hero-masthead", title: "Hero — masthead (alt)", source: "revamp" },
];

const registryPath = path.join(
  ROOT,
  "src/components/tailwind-showcase/registry.ts",
);
const registrySource = fs.readFileSync(registryPath, "utf8");
const idMatches = [
  ...registrySource.matchAll(
    /\{\s*id:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*label:\s*"([^"]+)"/g,
  ),
];

const revampCount = revampCatalog.length;
const tailwind = idMatches.map((match, index) => {
  const code = `c${revampCount + index + 1}`;
  return {
    code,
    slug: match[1],
    title: match[3].replace(/-/g, " "),
    source: "tailwind",
    category: match[2],
    previewImage: previewImageUrl(code),
    previewPage: `${base}/preview/${code}`,
    visualLibrary: `${base}/visual-library#${match[1]}`,
  };
});

const revampWithUrls = revampCatalog.map((item) => ({
  ...item,
  previewImage: previewImageUrl(item.code),
  previewPage: `${base}/preview/${item.code}`,
  visualLibrary: `${base}/visual-library#${item.slug}`,
}));

const catalog = {
  generatedAt: new Date().toISOString(),
  revampRange: `c1–c${revampCount}`,
  tailwindRange:
    tailwind.length > 0
      ? `${tailwind[0].code}–${tailwind[tailwind.length - 1].code}`
      : null,
  total: revampCount + tailwind.length,
  components: [...revampWithUrls, ...tailwind],
  revampAlternates: revampAlt,
};

const outPath = path.join(ROOT, "public/component-catalog.json");
fs.writeFileSync(outPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(
  `Wrote ${catalog.total} components (+ ${revampAlt.length} alt heroes) to public/component-catalog.json`,
);
