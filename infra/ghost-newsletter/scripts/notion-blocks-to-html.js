/**
 * n8n Code node: paste this file body into "Notion blocks → HTML".
 * Input: $input.first().json (Notion blocks API response)
 * Output: { html, plainText }
 */
const blocks = $input.first().json.results ?? $input.first().json;

function richTextToHtml(richText = []) {
  return richText
    .map((t) => {
      let s = escapeHtml(t.plain_text ?? "");
      if (t.annotations?.bold) s = `<strong>${s}</strong>`;
      if (t.annotations?.italic) s = `<em>${s}</em>`;
      if (t.href) s = `<a href="${escapeHtml(t.href)}">${s}</a>`;
      return s;
    })
    .join("");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function blockToHtml(block) {
  const type = block.type;
  const data = block[type] ?? {};

  switch (type) {
    case "paragraph":
      return `<p>${richTextToHtml(data.rich_text)}</p>`;
    case "heading_1":
      return `<h1>${richTextToHtml(data.rich_text)}</h1>`;
    case "heading_2":
      return `<h2>${richTextToHtml(data.rich_text)}</h2>`;
    case "heading_3":
      return `<h3>${richTextToHtml(data.rich_text)}</h3>`;
    case "bulleted_list_item":
      return `<li>${richTextToHtml(data.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li>${richTextToHtml(data.rich_text)}</li>`;
    case "quote":
      return `<blockquote>${richTextToHtml(data.rich_text)}</blockquote>`;
    case "divider":
      return "<hr />";
    case "image": {
      const url = data.file?.external?.url ?? data.file?.file?.url ?? data.external?.url;
      const caption = richTextToHtml(data.caption);
      if (!url) return "";
      return `<figure><img src="${escapeHtml(url)}" alt="" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
    }
    default:
      return data.rich_text ? `<p>${richTextToHtml(data.rich_text)}</p>` : "";
  }
}

const list = Array.isArray(blocks) ? blocks : [];
const parts = [];
let inList = false;

for (const block of list) {
  const t = block.type;
  const isLi = t === "bulleted_list_item" || t === "numbered_list_item";
  if (isLi && !inList) {
    parts.push(t === "numbered_list_item" ? "<ol>" : "<ul>");
    inList = true;
  }
  if (!isLi && inList) {
    parts.push("</ul>");
    inList = false;
  }
  if (!isLi) parts.push(blockToHtml(block));
  else parts.push(blockToHtml(block));
}
if (inList) parts.push("</ul>");

const html = parts.join("\n");
const plainText = list
  .map((b) => (b[b.type]?.rich_text ?? []).map((r) => r.plain_text).join(""))
  .filter(Boolean)
  .join("\n\n");

return [{ json: { html, plainText } }];
