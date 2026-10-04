// Plan du site pour Google : toutes les pages publiques de Zunrel.
import type { APIRoute } from "astro";
import { posts } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? "https://zunrel.com/").replace(/\/$/, "");
  const last = posts.map((post) => post.date).filter(Boolean).sort().at(-1);
  const pages: { path: string; lastmod?: string }[] = [
    { path: "/", lastmod: last },
    { path: "/blog/", lastmod: last },
    ...posts.map((post) => ({ path: `/blog/${post.slug}/`, lastmod: post.date })),
    { path: "/boutique/" },
    { path: "/newsletter/" },
    { path: "/conditions-d-utilisation/" },
  ];
  const urls = pages
    .map((page) => `  <url><loc>${base}${page.path}</loc>${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}</url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
