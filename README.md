# Zunrel

Notion pour débutants, en français : des guides courts et des modèles simples. https://zunrel.com

Site statique Astro, publié sur Cloudflare Pages (projet `zunrel`) à chaque push sur `main`. Le Worker `zunrel` ne fait que renvoyer vers `zunrel.pages.dev` : ne pas lancer `wrangler deploy`.

- Contenu (accroche, blog, boutique, lettre) : `src/lib/site.ts`
- Articles du blog (un fichier par article) : `src/lib/articles/`
- Aperçus des articles (SVG, image og) : `src/lib/previews.ts`
- Styles : `src/styles/site.css`
- Redirections des anciennes adresses : `public/_redirects`
- Plan du site : `src/pages/sitemap.xml.ts` → https://zunrel.com/sitemap.xml

## Lancer en local

```
npm install
npm run dev
```

Puis ouvrir http://localhost:4321/.
