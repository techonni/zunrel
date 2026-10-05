// Crée les pins Pinterest (1000 × 1500, 2:3, minimalistes, couleurs du site) dans public/pins/<slug>.jpg
// et le CSV docs/growth/pinterest-notion.csv (sans date : publication immédiate).
// Usage : node --experimental-strip-types scripts/make-pins.mjs (Playwright requis).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";
const root = new URL("..", import.meta.url).pathname;
const { previewSvg } = await import(`${root}src/lib/previews.ts`);
const site = readFileSync(`${root}src/lib/site.ts`, "utf8");
const posts = [...site.matchAll(/title: "((?:[^"\\]|\\.)+)", description: "((?:[^"\\]|\\.)+)", slug: "([^"]+)"/g)]
  .map((m) => ({ title: m[1].replace(/\\"/g, '"'), description: m[2], slug: m[3] }));
const BOARD = "Notion pour débutants";
mkdirSync(`${root}public/pins`, { recursive: true });
const html = (p) => `<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1000px;height:1500px;background:#fafaf7;color:#111;font-family:Inter,-apple-system,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;padding:90px 80px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:16px;font-size:34px;font-weight:600;letter-spacing:-.01em}
.card{margin-top:70px;border:2px solid #e4e4df;border-radius:28px;overflow:hidden;background:#efefea}
.card svg{display:block;width:100%;height:auto}
h1{margin-top:80px;font-size:84px;line-height:1.05;font-weight:600;letter-spacing:-.03em}
.rule{width:80px;height:4px;background:#3d3d3d;margin:48px 0 40px}
p{font-size:36px;line-height:1.4;color:#6e6e6e}
.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:center;border-top:2px solid #e4e4df;padding-top:36px;font-size:30px;color:#6e6e6e}
.foot b{color:#111;font-weight:600}
</style></head><body>
<div class="brand"><svg width="52" height="52" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#000"/><path d="M20 21h24L20 43h24" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>Zunrel</div>
<div class="card">${previewSvg(p.slug, "card")}</div>
<h1>${p.title}</h1><div class="rule"></div><p>${p.description}</p>
<div class="foot"><span>Notion pour débutants</span><b>zunrel.com</b></div>
</body></html>`;
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1000, height: 1500 } })).newPage();
const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
const rows = ["Title,Media URL,Pinterest board,Thumbnail,Description,Link,Publish date,Keywords"];
for (const p of posts) {
  await pg.setContent(html(p), { waitUntil: "networkidle" });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: `${root}public/pins/${p.slug}.jpg`, type: "jpeg", quality: 92 });
  const desc = `${p.description} Guide gratuit en français sur zunrel.com.`;
  rows.push([q(p.title), `https://zunrel.com/pins/${p.slug}.jpg`, q(BOARD), "", q(desc),
    `https://zunrel.com/blog/${p.slug}/?utm_source=pinterest&utm_medium=social&utm_campaign=pin-notion&utm_content=${p.slug}`, "", q("notion, notion débutant, productivité, organisation, base de données")].join(","));
  console.log("ok", p.slug);
}
await b.close();
writeFileSync(`${root}docs/growth/pinterest-notion.csv`, rows.join("\n") + "\n");
