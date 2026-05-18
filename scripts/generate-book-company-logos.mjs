import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as si from "simple-icons";

const BLACK = "#000000";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets/company-logos");

function iconBySlug(slug) {
  const pascal =
    "si" +
    slug
      .split(/[-_]/)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");
  return si[pascal] ?? Object.values(si).find((i) => i.slug === slug);
}

function svg({ width, height, title, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 ${width} ${height}" aria-label="${title}">\n<title>${title}</title>\n${body}\n</svg>\n`;
}

function write(file, content) {
  fs.writeFileSync(path.join(outDir, file), content);
}

/** Icon + label wordmark, all black */
function wordmark(file, title, slug, label, opts = {}) {
  const icon = iconBySlug(slug);
  if (!icon) throw new Error(`No icon: ${slug}`);
  const scale = opts.scale ?? 0.82;
  const iy = opts.iconY ?? 9;
  const tx = opts.textX ?? 30;
  const fs = opts.fontSize ?? 16;
  const body = `<g transform="translate(0,${iy}) scale(${scale})"><path fill="${BLACK}" d="${icon.path}"/></g>
<text x="${tx}" y="30" fill="${BLACK}" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="${fs}" font-weight="${opts.fontWeight ?? 600}">${label}</text>`;
  write(file, svg({ width: opts.width ?? 168, height: 48, title, body }));
}

/** Icon only, all black */
function iconOnly(file, title, slug, opts = {}) {
  const icon = iconBySlug(slug);
  if (!icon) throw new Error(`No icon: ${slug}`);
  const scale = opts.scale ?? 1.05;
  const body = `<g transform="translate(0,4) scale(${scale})"><path fill="${BLACK}" d="${icon.path}"/></g>`;
  write(file, svg({ width: 48, height: 48, title, body }));
}

fs.mkdirSync(outDir, { recursive: true });

// Apple is kept as-is — do not regenerate apple.svg

wordmark("stripe.svg", "Stripe", "stripe", "stripe", { fontSize: 20, fontWeight: 500, textX: 32 });
wordmark("wise.svg", "Wise", "wise", "wise", { fontSize: 18, textX: 32 });
wordmark("xero.svg", "Xero", "xero", "Xero", { fontSize: 18, textX: 34 });
wordmark("atlassian.svg", "Atlassian", "atlassian", "ATLASSIAN", { fontSize: 11, textX: 28, width: 180 });
wordmark("google.svg", "Google", "google", "Google", { fontSize: 18, textX: 32 });
wordmark("deliveroo.svg", "Deliveroo", "deliveroo", "deliveroo", { fontSize: 15, fontWeight: 500 });
wordmark("just-eat-takeaway.svg", "Just Eat Takeaway", "justeat", "JUST EAT", { fontSize: 13, textX: 30, width: 200 });
wordmark("hubspot.svg", "HubSpot", "hubspot", "HubSpot", { fontSize: 17, textX: 32 });
wordmark("canva.svg", "Canva", "canva", "Canva", { fontSize: 20, fontWeight: 500, textX: 34 });
wordmark("paypal.svg", "PayPal", "paypal", "PayPal", { fontSize: 17, textX: 34 });
wordmark("shopify.svg", "Shopify", "shopify", "shopify", { fontSize: 17, fontWeight: 500 });
wordmark("amazon.svg", "Amazon", "amazon", "amazon", { fontSize: 18, fontWeight: 500, textX: 32 });
wordmark("meta.svg", "Meta", "meta", "Meta", { fontSize: 18, textX: 34 });
wordmark("vercel.svg", "Vercel", "vercel", "Vercel", { fontSize: 17, textX: 30 });

// Adobe — A mark + wordmark
write(
  "adobe.svg",
  svg({
    width: 120,
    height: 48,
    title: "Adobe",
    body: `<g transform="translate(0,8) scale(0.5)"><path fill="${BLACK}" d="M13.5 0 0 48h18.2L22.7 32.4 27.2 48H45.4L32 0H13.5zm6.7 28.5L18.2 8.5l2 20h-.1z"/></g>
<text x="30" y="32" fill="${BLACK}" font-family="system-ui,sans-serif" font-size="22" font-weight="600">Adobe</text>`,
  }),
);

// Microsoft — four squares + wordmark
write(
  "microsoft.svg",
  svg({
    width: 168,
    height: 48,
    title: "Microsoft",
    body: `<g fill="${BLACK}">
  <rect x="0" y="10" width="11" height="11"/><rect x="13" y="10" width="11" height="11"/>
  <rect x="0" y="23" width="11" height="11"/><rect x="13" y="23" width="11" height="11"/>
</g>
<text x="32" y="30" fill="${BLACK}" font-family="system-ui,sans-serif" font-size="17" font-weight="500">Microsoft</text>`,
  }),
);

// ResMed — dot wave + wordmark
write(
  "resmed.svg",
  svg({
    width: 130,
    height: 48,
    title: "ResMed",
    body: `<g fill="${BLACK}">
  <circle cx="4" cy="10" r="2"/><circle cx="12" cy="8" r="2.5"/><circle cx="20" cy="7" r="3"/>
  <circle cx="28" cy="8" r="2.5"/><circle cx="36" cy="10" r="2"/>
</g>
<text x="0" y="36" fill="${BLACK}" font-family="system-ui,sans-serif" font-size="20" font-weight="700" font-style="italic">ResMed</text>`,
  }),
);

// Assent — four interlocking diamond outlines
write(
  "assent.svg",
  svg({
    width: 120,
    height: 48,
    title: "Assent",
    body: `<g fill="none" stroke="${BLACK}" stroke-width="2.2">
  <path d="M8 18 L18 8 L28 18 L18 28 Z"/>
  <path d="M22 18 L32 8 L42 18 L32 28 Z"/>
  <path d="M36 18 L46 8 L56 18 L46 28 Z"/>
  <path d="M50 18 L60 8 L70 18 L60 28 Z"/>
</g>
<text x="0" y="44" fill="${BLACK}" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Assent</text>`,
  }),
);

// McKinsey — serif two-line lockup
write(
  "mckinsey.svg",
  svg({
    width: 140,
    height: 48,
    title: "McKinsey & Company",
    body: `<text x="0" y="22" fill="${BLACK}" font-family="Georgia,'Times New Roman',serif" font-size="20" font-weight="600">McKinsey</text>
<text x="0" y="40" fill="${BLACK}" font-family="Georgia,'Times New Roman',serif" font-size="14" font-weight="400">&amp; Company</text>`,
  }),
);

// Remove logos no longer used
for (const stale of [
  "vistaprint.svg",
  "dbs-bank.svg",
  "clearscore.svg",
  "domain.svg",
  "hipages.svg",
  "ibm.svg",
  "standard-chartered.svg",
]) {
  try {
    fs.unlinkSync(path.join(outDir, stale));
  } catch {
    /* ignore */
  }
}

console.log("Generated black company logos (apple.svg unchanged)");
