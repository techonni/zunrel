// Aperçus des articles : un iPhone dessiné en SVG, avec un écran qui illustre le sujet.
// Même dessin pour les cartes du blog (16:9), le haut des articles et l'image og (1200 × 630, exportée en PNG
// par scripts/export-previews.mjs dans public/og/). Fichier sans import, lisible aussi par Node.

const INK = "#111";
const MUTED = "#8a8a85";
const RULE = "#e4e4df";
const ACC = "#3d3d3d";
const FONT = "Inter,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif";

// Écran : x 485 → 715 (230), y 55 → 575 (520).
const X = 485, Y = 55, W = 230, H = 520;
const t = (x: number, y: number, s: string, size = 13, weight = 500, fill = INK, anchor = "start") =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${s}</text>`;
const line = (x: number, y: number, w: number, c = "#d6d6d0", h = 7) => `<rect x="${x}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}"/>`;
const ring = (cx: number, cy: number, r = 7, filled = false) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${filled ? ACC : "none"}" stroke="${ACC}" stroke-width="1.6"/>${filled ? `<path d="M${cx - 3.2} ${cy}l2.2 2.2 4.2-4.6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>` : ""}`;
const status = (fill = INK) =>
  `${t(X + 26, Y + 30, "9:41", 13, 600, fill)}<rect x="${X + W - 50}" y="${Y + 21}" width="22" height="11" rx="3" fill="none" stroke="${fill}" stroke-width="1.3"/><rect x="${X + W - 48}" y="${Y + 23}" width="15" height="7" rx="1.5" fill="${fill}"/>`;
const icon = (x: number, y: number, s: number, glyph: string, fill = "#fff") =>
  `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * 0.23}" fill="${fill}" stroke="${INK}" stroke-width="1.5"/><g transform="translate(${x} ${y}) scale(${s / 56})" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${glyph}</g>`;

const G = {
  notes: `<path d="M18 19h20M18 28h20M18 37h12"/>`,
  timer: `<circle cx="28" cy="30" r="13"/><path d="M28 30v-7M24 13h8"/>`,
  calendar: `<rect x="15" y="16" width="26" height="25" rx="4"/><path d="M15 24h26M22 12v7M34 12v7"/>`,
  map: `<path d="M28 42s-11-10-11-18a11 11 0 0 1 22 0c0 8-11 18-11 18z"/><circle cx="28" cy="24" r="4"/>`,
  weather: `<circle cx="28" cy="28" r="7"/><path d="M28 13v4M28 39v4M13 28h4M39 28h4M17.5 17.5l2.8 2.8M35.7 35.7l2.8 2.8M17.5 38.5l2.8-2.8M35.7 20.3l2.8-2.8"/>`,
  list: `<circle cx="18" cy="20" r="2.5"/><circle cx="18" cy="29" r="2.5"/><circle cx="18" cy="38" r="2.5"/><path d="M25 20h14M25 29h14M25 38h10"/>`,
  phone: `<path d="M20 15h5l3 7-4 3a17 17 0 0 0 8 8l3-4 7 3v5a3 3 0 0 1-3 3A24 24 0 0 1 17 18a3 3 0 0 1 3-3z"/>`,
  message: `<path d="M15 25c0-6 6-10 13-10s13 4 13 10-6 10-13 10c-2 0-4 0-6-1l-6 3 1-5c-2-2-2-4-2-7z"/>`,
  camera: `<rect x="13" y="19" width="30" height="21" rx="4"/><circle cx="28" cy="29.5" r="6"/><path d="M22 19l2-4h8l2 4"/>`,
  music: `<path d="M24 37V18l14-3v18"/><circle cx="20" cy="37" r="4"/><circle cx="34" cy="34" r="4"/>`,
};

const screens: Record<string, { fill: string; body: string; light?: boolean; top?: number }> = {
  "une-seule-liste-pour-la-semaine": {
    fill: "#fff",
    body: (() => {
      let s = t(X + 22, Y + 82, "Semaine", 24, 600);
      const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
      days.forEach((d, i) => {
        const y = Y + 110 + i * 67;
        s += t(X + 22, y, d, 11, 600, MUTED);
        s += ring(X + 30, y + 20) + line(X + 46, y + 20, i % 2 ? 110 : 140);
        if (i % 2 === 0) s += ring(X + 30, y + 42, 7, i === 0) + line(X + 46, y + 42, 90);
      });
      s += `<rect x="${X + 16}" y="${Y + 448}" width="${W - 32}" height="40" rx="10" fill="#f1f1ed"/>` + t(X + 30, Y + 473, "Plus tard", 13, 600, ACC);
      return s;
    })(),
  },
  "choisir-des-apps-iphone-epurees": {
    fill: "#f4f4f0",
    body: (() => {
      let s = t(X + 22, Y + 82, "Essentiel", 22, 600);
      const g = [G.notes, G.timer, G.calendar, G.map, G.weather, G.list];
      g.forEach((gl, i) => {
        const x = X + 26 + (i % 3) * 66, y = Y + 112 + Math.floor(i / 3) * 86;
        s += icon(x, y, 52, gl) + `<circle cx="${x + 50}" cy="${y + 2}" r="9" fill="${ACC}"/><path d="M${x + 46} ${y + 2}l2.6 2.6 4.6-5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
        s += line(x + 8, y + 66, 36, "#d6d6d0", 6);
      });
      s += `<rect x="${X + 22}" y="${Y + 300}" width="${W - 44}" height="1" fill="${RULE}"/>`;
      s += t(X + 22, Y + 330, "Une fonction", 13, 500, ACC) + t(X + 22, Y + 354, "Sans compte", 13, 500, ACC) + t(X + 22, Y + 378, "Sans notifications", 13, 500, ACC);
      [330, 354, 378].forEach((y) => (s += ring(X + W - 34, Y + y - 4, 7, true)));
      return s;
    })(),
  },
  "des-widgets-calmes-sur-l-ecran-verrouille": {
    fill: "#e8e8e3",
    body: (() => {
      const cx = X + W / 2;
      let s = t(cx, Y + 104, "lundi 5 octobre · 14°", 13, 500, ACC, "middle");
      s += t(cx, Y + 176, "9:41", 76, 600, INK, "middle");
      [-62, 0, 62].forEach((dx, i) => {
        const x = cx + dx, y = Y + 228;
        s += `<circle cx="${x}" cy="${y}" r="24" fill="#fff" fill-opacity=".7" stroke="${ACC}" stroke-width="1.4"/>`;
        if (i === 0) s += `<path d="M${x - 11} ${y + 7}a12 12 0 1 1 22 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>` + t(x, y + 6, "9h", 10, 600, INK, "middle");
        if (i === 1) s += `<g transform="translate(${x - 14} ${y - 14}) scale(.5)" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round">${G.weather}</g>`;
        if (i === 2) s += `<rect x="${x - 10}" y="${y - 6}" width="18" height="11" rx="3" fill="none" stroke="${INK}" stroke-width="1.8"/><rect x="${x - 8}" y="${y - 4}" width="11" height="7" rx="1.5" fill="${INK}"/><rect x="${x + 9}" y="${y - 2}" width="2" height="4" rx="1" fill="${INK}"/>`;
      });
      [X + 44, X + W - 44].forEach((x) => (s += `<circle cx="${x}" cy="${Y + 470}" r="20" fill="#fff" fill-opacity=".6"/>`));
      s += `<rect x="${cx - 50}" y="${Y + 503}" width="100" height="5" rx="2.5" fill="${INK}"/>`;
      return s;
    })(),
    light: true,
  },
  "une-to-do-sans-bruit-avec-rappels": {
    fill: "#fff",
    body: (() => {
      let s = t(X + 22, Y + 82, "Aujourd'hui", 24, 600);
      const rows = [
        { w: 120, done: true },
        { w: 140 },
        { w: 100, time: true },
        { w: 130 },
        { w: 90 },
      ];
      rows.forEach((r, i) => {
        const y = Y + 128 + i * 62;
        s += ring(X + 32, y, 9, !!r.done) + line(X + 52, y - 6, r.w, r.done ? "#e6e6e1" : "#cfcfc9");
        if (r.time) s += `<g fill="none" stroke="${ACC}" stroke-width="1.6" stroke-linecap="round"><path d="M${X + 52} ${y + 14}h9M${X + 53} ${y + 14}v-5a3.5 3.5 0 0 1 7 0v5"/></g>` + t(X + 66, y + 15, "18:00", 12, 600, ACC);
        else s += line(X + 52, y + 10, 60, "#e6e6e1", 6);
        s += `<rect x="${X + 52}" y="${y + 30}" width="${W - 74}" height="1" fill="${RULE}"/>`;
      });
      s += `<circle cx="${X + 32}" cy="${Y + 470}" r="10" fill="${ACC}"/><path d="M${X + 27} ${Y + 470}h10M${X + 32} ${Y + 465}v10" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>` + t(X + 52, Y + 475, "Nouveau rappel", 13, 500, ACC);
      return s;
    })(),
  },
  "desencombrer-l-ecran-d-accueil-en-20-minutes": {
    fill: "#ecece7",
    body: (() => {
      let s = "";
      [G.calendar, G.notes].forEach((g, i) => (s += icon(X + 30 + i * 66, Y + 66, 52, g)));
      s += `<rect x="${X + W / 2 - 52}" y="${Y + 404}" width="104" height="26" rx="13" fill="#fff" fill-opacity=".75"/>`;
      s += `<circle cx="${X + W / 2 - 34}" cy="${Y + 416}" r="5" fill="none" stroke="${ACC}" stroke-width="1.5"/><path d="M${X + W / 2 - 30} ${Y + 420}l3.5 3.5" stroke="${ACC}" stroke-width="1.5" stroke-linecap="round"/>`;
      s += t(X + W / 2 - 22, Y + 421, "Rechercher", 11, 500, ACC);
      s += `<rect x="${X + 12}" y="${Y + 444}" width="${W - 24}" height="66" rx="22" fill="#fff" fill-opacity=".6"/>`;
      [G.phone, G.message, G.camera, G.music].forEach((g, i) => (s += icon(X + 25 + i * 50, Y + 455, 44, g)));
      return s;
    })(),
    top: 205,
  },
  "les-notifications-a-heures-fixes": {
    fill: "#e8e8e3",
    body: (() => {
      const cx = X + W / 2;
      let s = t(cx, Y + 96, "lundi 5 octobre", 13, 500, ACC, "middle") + t(cx, Y + 160, "12:00", 64, 600, INK, "middle");
      s += `<rect x="${X + 26}" y="${Y + 300}" width="${W - 52}" height="120" rx="18" fill="#fff" fill-opacity=".5"/>`;
      s += `<rect x="${X + 20}" y="${Y + 292}" width="${W - 40}" height="120" rx="18" fill="#fff" fill-opacity=".7"/>`;
      s += `<rect x="${X + 14}" y="${Y + 196}" width="${W - 28}" height="206" rx="20" fill="#fff"/>`;
      s += t(X + 30, Y + 224, "Résumé programmé", 13, 600) + t(X + W - 30, Y + 224, "12:00", 12, 500, MUTED, "end");
      [0, 1, 2].forEach((i) => {
        const y = Y + 246 + i * 48;
        s += `<rect x="${X + 30}" y="${y}" width="30" height="30" rx="8" fill="#f1f1ed" stroke="${RULE}"/>` + line(X + 70, y + 9, 100, "#cfcfc9", 6) + line(X + 70, y + 22, 70, "#e2e2dd", 6);
      });
      s += t(cx, Y + 456, "Prochain résumé : 18:00", 12, 500, ACC, "middle");
      s += `<rect x="${cx - 50}" y="${Y + 503}" width="100" height="5" rx="2.5" fill="${INK}"/>`;
      return s;
    })(),
    light: true,
    top: 110,
  },
  "enlever-les-pastilles-rouges": {
    fill: "#ecece7",
    body: (() => {
      let s = "";
      const glyphs = [G.notes, G.timer, G.calendar, G.map, G.weather, G.list];
      glyphs.forEach((gl, i) => {
        const x = X + 26 + (i % 3) * 66, y = Y + 78 + Math.floor(i / 3) * 86;
        s += icon(x, y, 52, gl);
        s += line(x + 8, y + 64, 36, "#d6d6d0", 6);
      });
      s += `<g opacity=".45"><circle cx="${X + W - 36}" cy="${Y + 70}" r="11" fill="#c45c4a"/><text x="${X + W - 36}" y="${Y + 74}" font-size="11" font-weight="600" fill="#fff" text-anchor="middle">12</text><path d="M${X + W - 48} ${Y + 58}l24 24" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></g>`;
      s += `<rect x="${X + 12}" y="${Y + 444}" width="${W - 24}" height="66" rx="22" fill="#fff" fill-opacity=".6"/>`;
      [G.phone, G.message, G.camera, G.music].forEach((g, i) => (s += icon(X + 25 + i * 50, Y + 455, 44, g)));
      return s;
    })(),
    top: 40,
  },
  "l-iphone-en-gris-le-soir": {
    fill: "#d5d5d0",
    body: (() => {
      const cx = X + W / 2;
      let s = t(cx, Y + 100, "lundi 5 octobre", 13, 500, ACC, "middle");
      s += t(cx, Y + 176, "21:00", 58, 600, INK, "middle");
      s += `<rect x="${X + 28}" y="${Y + 214}" width="${W - 56}" height="36" rx="18" fill="#fff" fill-opacity=".55"/>`;
      s += t(cx, Y + 237, "Nuances de gris", 13, 600, ACC, "middle");
      s += `<circle cx="${cx}" cy="${Y + 310}" r="28" fill="none" stroke="${ACC}" stroke-width="1.6"/>`;
      s += `<path d="M${cx - 8} ${Y + 300}a14 14 0 1 0 14 16 11 11 0 1 1-14-16z" fill="${ACC}"/>`;
      s += t(cx, Y + 368, "à partir de 21 h", 12, 500, MUTED, "middle");
      s += `<rect x="${cx - 50}" y="${Y + 503}" width="100" height="5" rx="2.5" fill="${INK}"/>`;
      return s;
    })(),
    light: true,
    top: 80,
  },
  "vider-safari-en-deux-minutes": {
    fill: "#f3f3ee",
    body: (() => {
      let s = t(X + 22, Y + 78, "Onglets", 22, 600);
      s += t(X + W - 22, Y + 78, "3", 16, 600, MUTED, "end");
      const titles = ["Une page", "Signet", "Vide"];
      titles.forEach((title, i) => {
        const y = Y + 104 + i * 92;
        s += `<rect x="${X + 18}" y="${y}" width="${W - 36}" height="78" rx="14" fill="#fff" stroke="${RULE}"/>`;
        s += `<circle cx="${X + W - 40}" cy="${y + 18}" r="8" fill="#f1f1ed" stroke="${ACC}" stroke-width="1.2"/>`;
        s += `<path d="M${X + W - 43} ${y + 15}l6 6M${X + W - 37} ${y + 15}l-6 6" stroke="${ACC}" stroke-width="1.4" stroke-linecap="round"/>`;
        s += t(X + 32, y + 36, title, 14, 600);
        s += line(X + 32, y + 54, i === 2 ? 40 : 110, "#e2e2dd", 6);
      });
      s += t(X + W / 2, Y + 400, "Fermer le reste", 13, 600, ACC, "middle");
      return s;
    })(),
    top: 30,
  },
  "une-limite-pour-les-apps-qui-attirent": {
    fill: "#fff",
    body: (() => {
      let s = t(X + 22, Y + 82, "Limites", 22, 600);
      s += t(X + 22, Y + 112, "Une app", 12, 500, MUTED);
      s += `<rect x="${X + 22}" y="${Y + 128}" width="${W - 44}" height="64" rx="14" fill="#f4f4f0"/>`;
      s += icon(X + 34, Y + 140, 40, G.music);
      s += t(X + 84, Y + 158, "20 min", 16, 600);
      s += `<rect x="${X + 84}" y="${Y + 168}" width="100" height="6" rx="3" fill="#e4e4df"/>`;
      s += `<rect x="${X + 84}" y="${Y + 168}" width="78" height="6" rx="3" fill="${ACC}"/>`;
      s += t(X + 22, Y + 230, "Le reste", 12, 500, MUTED);
      [[G.phone, "Appels"], [G.message, "Messages"], [G.map, "Plans"]].forEach(([g, label], i) => {
        const y = Y + 248 + i * 58;
        s += icon(X + 22, y, 40, g as string);
        s += t(X + 74, y + 24, label as string, 14, 500);
        s += t(X + W - 24, y + 24, "sans limite", 11, 500, MUTED, "end");
      });
      return s;
    })(),
  },
  "le-telephone-hors-de-la-chambre": {
    fill: "#e4e4df",
    body: (() => {
      const cx = X + W / 2;
      let s = t(cx, Y + 108, "mardi 6 octobre", 13, 500, ACC, "middle");
      s += t(cx, Y + 186, "22:30", 52, 600, INK, "middle");
      s += `<rect x="${X + 36}" y="${Y + 230}" width="${W - 72}" height="72" rx="16" fill="#fff"/>`;
      s += `<circle cx="${X + 62}" cy="${Y + 266}" r="14" fill="none" stroke="${ACC}" stroke-width="1.6"/>`;
      s += `<path d="M${X + 62} ${Y + 258}v9l5 3" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/>`;
      s += t(X + 88, Y + 262, "Réveil", 14, 600);
      s += t(X + 88, Y + 282, "7:00", 13, 500, MUTED);
      s += t(cx, Y + 360, "Aucune notification", 12, 500, MUTED, "middle");
      s += `<rect x="${cx - 50}" y="${Y + 503}" width="100" height="5" rx="2.5" fill="${INK}"/>`;
      return s;
    })(),
    light: true,
    top: 90,
  },
};

export const hasPreview = (slug: string) => slug in screens;

export function previewSvg(slug: string, format: "card" | "og" = "card", title = "") {
  const sc = screens[slug];
  if (!sc) return "";
  const vb = format === "og" ? "0 0 1200 630" : `250 ${sc.top ?? 25} 700 393.75`;
  const size = format === "og" ? 'width="1200" height="630"' : "";
  const clip = `pv-${slug.slice(0, 18)}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" ${size} font-family="${FONT}" ${title ? `role="img" aria-label="${title.replace(/"/g, """)}"` : 'aria-hidden="true"'}>
<rect x="-10" y="-40" width="1220" height="720" fill="#efefea"/>
<rect x="469" y="51" width="262" height="552" rx="52" fill="#000" opacity=".06"/>
<rect x="475" y="45" width="250" height="540" rx="48" fill="${INK}"/>
<clipPath id="${clip}"><rect x="${X}" y="${Y}" width="${W}" height="${H}" rx="40"/></clipPath>
<g clip-path="url(#${clip})"><rect x="${X}" y="${Y}" width="${W}" height="${H}" fill="${sc.fill}"/>${status()}${sc.body}</g>
<rect x="566" y="66" width="68" height="20" rx="10" fill="${INK}"/>
</svg>`;
}
