/**
 * Writes Notion update payloads for Preview page / Preview image columns.
 * Run updates via Notion MCP notion-update-page (batch externally).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalog = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../public/component-catalog.json"), "utf8"),
);
const byCode = Object.fromEntries(catalog.components.map((c) => [c.code, c]));

// Paste query results JSON from notion-query-database-view into .notion-batches/notion-rows.json
const rowsPath = path.join(__dirname, "../.notion-batches/notion-rows.json");
if (!fs.existsSync(rowsPath)) {
  console.error("Missing .notion-batches/notion-rows.json — export DB query results first.");
  process.exit(1);
}

const rows = JSON.parse(fs.readFileSync(rowsPath, "utf8"));
const updates = [];

for (const row of rows) {
  const item = byCode[row.Code];
  if (!item) continue;
  const pageId = row.url.replace(/^https:\/\/www\.notion\.so\//, "").replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, "$1-$2-$3-$4-$5");
  updates.push({
    page_id: pageId,
    command: "update_properties",
    properties: {
      "Preview page": item.previewPage,
      "Preview image": item.previewImage,
      "Site preview": item.visualLibrary,
    },
  });
}

const out = path.join(__dirname, "../.notion-batches/notion-updates.json");
fs.writeFileSync(out, JSON.stringify(updates, null, 2));
console.log(`Wrote ${updates.length} updates to ${out}`);
