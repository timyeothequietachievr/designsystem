/**
 * Capture PNG previews for each component code (c1–c196).
 * Requires: npm install -D playwright && npx playwright install chromium
 *
 * Usage:
 *   npm run dev   # in another terminal
 *   node scripts/capture-component-previews.mjs
 *
 * Or against production:
 *   BASE_URL=https://websitetqa.thequietachievr.com node scripts/capture-component-previews.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/component-previews");
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const catalog = JSON.parse(
  fs.readFileSync(path.join(ROOT, "public/component-catalog.json"), "utf8"),
);

async function main() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.error(
      "Playwright not installed. Run: npm install -D playwright && npx playwright install chromium",
    );
    process.exit(1);
  }

  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  let ok = 0;
  let fail = 0;

  for (const item of catalog.components) {
    const url = `${BASE_URL}/preview/${item.code}`;
    const outPath = path.join(OUT, `${item.code}.png`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
      await page.waitForTimeout(400);
      const target = page.locator("[data-component-code]").first();
      await target.screenshot({ path: outPath });
      ok++;
      if (ok % 20 === 0) console.log(`Captured ${ok}/${catalog.components.length}…`);
    } catch (err) {
      fail++;
      console.warn(`Failed ${item.code}:`, err.message);
    }
  }

  await browser.close();
  console.log(`Done. ${ok} saved to public/component-previews/, ${fail} failed.`);
}

main();
