// Exporte l'aperçu de chaque article en PNG 1200 × 630 (image og) dans public/og/<slug>.png.
// Usage : node scripts/export-previews.mjs (Playwright doit être installé à côté du script ;
// sinon, copier le script là où Playwright est installé et lancer ZUNREL_ROOT=/chemin/du/site node export-previews.mjs).
import { mkdirSync, readFileSync } from "node:fs";
import { chromium } from "playwright";
const root = process.env.ZUNREL_ROOT ? process.env.ZUNREL_ROOT.replace(/\/?$/, "/") : new URL("..", import.meta.url).pathname;
const { previewSvg } = await import(`${root}src/lib/previews.ts`);
const site = readFileSync(`${root}src/lib/site.ts`, "utf8");
const slugs = [...site.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
mkdirSync(`${root}public/og`, { recursive: true });
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1200, height: 630 } })).newPage();
for (const slug of slugs) {
  await p.setContent(`<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><style>body{margin:0}svg{display:block}</style></head><body>${previewSvg(slug, "og")}</body></html>`, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: `${root}public/og/${slug}.png` });
  console.log("ok", slug);
}
await b.close();
