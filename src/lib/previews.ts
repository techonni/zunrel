// Aperçus des articles : une fenêtre de page dessinée en SVG, avec un contenu qui illustre le sujet.
// Même dessin pour les cartes du blog (16:9), le haut des articles et l'image og (1200 × 630, exportée en PNG
// par scripts/export-previews.mjs dans public/og/). Fichier sans import, lisible aussi par Node.
// Dessin générique : ce n'est pas l'interface de Notion, seulement une page avec des blocs.

const INK = "#111";
const MUTED = "#8a8a85";
const ACC = "#3d3d3d";
const SOFT = "#ecece7";
const FONT = "Inter,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif";

// Fenêtre : x 170 → 1030 (860), y 70 → 570 (500). Zone de contenu : x 220 → 980, y 150 → 540.
const WX = 170, WY = 70, WW = 860, WH = 500;
const t = (x: number, y: number, s: string, size = 22, weight = 500, fill = INK, anchor = "start") =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${s}</text>`;
const bar = (x: number, y: number, w: number, c = "#d6d6d0", h = 12) => `<rect x="${x}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}"/>`;
const box = (x: number, y: number, w: number, h: number, r = 14, fill = "#fff", stroke = "#d6d6d0") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const check = (x: number, y: number, done = false, s = 26) =>
  `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="6" fill="${done ? ACC : "#fff"}" stroke="${ACC}" stroke-width="2.4"/>${done ? `<path d="M${x + 6} ${y + s / 2}l5 5 9-10" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>` : ""}`;
const pill = (x: number, y: number, w: number, label: string, dark = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="34" rx="17" fill="${dark ? ACC : SOFT}"/>${t(x + w / 2, y + 23, label, 17, 600, dark ? "#fff" : ACC, "middle")}`;
const handle = (x: number, y: number) =>
  [0, 1, 2].map((i) => `<circle cx="${x}" cy="${y + i * 9}" r="2.4" fill="${MUTED}"/><circle cx="${x + 9}" cy="${y + i * 9}" r="2.4" fill="${MUTED}"/>`).join("");

const screens: Record<string, string> = {
  "notion-c-est-quoi": (() => {
    let s = t(230, 160, "Page", 24, 600, MUTED) + t(620, 160, "Base de données", 24, 600, MUTED);
    s += box(230, 184, 340, 340, 18);
    s += bar(262, 232, 150, INK, 20) + check(262, 276) + bar(304, 289, 190) + check(262, 322) + bar(304, 335, 150) + bar(262, 388, 270) + bar(262, 420, 230) + bar(262, 452, 250);
    s += box(620, 184, 360, 340, 18);
    s += `<path d="M620 250h360M620 340h360M620 430h360M760 184v340M880 184v340" stroke="#d6d6d0" stroke-width="2"/>`;
    s += bar(644, 217, 70, ACC, 12) + bar(784, 217, 60, ACC, 12) + bar(904, 217, 48, ACC, 12);
    [295, 385, 475].forEach((y, i) => {
      s += bar(644, y, 80 - i * 8) + bar(784, y, 56) + bar(904, y, 44);
    });
    return s;
  })(),
  "notion-est-il-gratuit": (() => {
    let s = t(600, 270, "Gratuit", 96, 700, INK, "middle");
    s += pill(380, 318, 440, "Sans durée limitée", true);
    s += `<path d="M400 410l12 12 26-28" fill="none" stroke="${ACC}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` + t(452, 416, "Pages et blocs illimités quand tu es seul", 24, 500);
    s += `<path d="M400 470l12 12 26-28" fill="none" stroke="${ACC}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` + t(452, 476, "Des limites à plusieurs ou avec de gros fichiers", 24, 500);
    return s;
  })(),
  "creer-ta-premiere-page-notion": (() => {
    let s = bar(260, 190, 300, INK, 30);
    s += bar(260, 262, 150, ACC, 18);
    [[0, 340, true, 380], [1, 400, false, 300], [2, 460, false, 340]].forEach(([, y, done, w]) => {
      s += check(300, (y as number) - 13, done as boolean, 30) + bar(352, y as number, w as number);
    });
    s += handle(262, 388);
    return s;
  })(),
  "page-ou-base-de-donnees": (() => {
    let s = t(230, 160, "Une note", 26, 600, INK) + t(620, 160, "Des tâches", 26, 600, INK);
    s += box(230, 184, 340, 340, 18);
    s += bar(262, 232, 140, INK, 20) + bar(262, 290, 270) + bar(262, 326, 240) + bar(262, 362, 280) + bar(262, 398, 200) + bar(262, 434, 250);
    s += box(620, 184, 360, 340, 18);
    s += `<path d="M620 250h360M620 316h360M620 382h360M620 448h360" stroke="#d6d6d0" stroke-width="2"/>`;
    [217, 283, 349, 415, 481].forEach((y, i) => {
      s += (i === 0 ? bar(644, y, 60, ACC) : bar(644, y, 110 - i * 10)) + (i === 0 ? "" : `<rect x="860" y="${y - 14}" width="96" height="28" rx="14" fill="${SOFT}"/>`);
    });
    return s;
  })(),
  "les-proprietes-d-une-base-de-donnees": (() => {
    let s = box(230, 170, 750, 300, 18);
    s += `<path d="M230 240h750M230 320h750M230 400h750M440 170v300M640 170v300M840 170v300" stroke="#d6d6d0" stroke-width="2"/>`;
    s += t(254, 214, "Nom", 24, 600) + t(464, 214, "Statut", 24, 600) + t(664, 214, "Date", 24, 600) + t(864, 214, "Fait", 24, 600);
    [[280, "En cours", false], [360, "Terminé", true], [440, "À faire", false]].forEach(([y, label, done]) => {
      s += bar(254, y as number, 110) + pill(464, (y as number) - 17, 110, label as string, done as boolean) + bar(664, y as number, 90) + check(864, (y as number) - 13, done as boolean, 30);
    });
    s += t(335, 516, "texte", 20, 500, MUTED, "middle") + t(535, 516, "statut", 20, 500, MUTED, "middle") + t(735, 516, "date", 20, 500, MUTED, "middle") + t(935, 516, "case à cocher", 20, 500, MUTED, "middle");
    return s;
  })(),
  "les-vues-d-une-base-de-donnees": (() => {
    let s = "";
    [["Table", 230, false], ["Tableau", 380, true], ["Calendrier", 550, false]].forEach(([label, x, on]) => {
      s += pill(x as number, 160, (label as string).length * 12 + 44, label as string, on as boolean);
    });
    s += box(230, 216, 750, 310, 18);
    [[250, "À faire", 2], [490, "En cours", 1], [730, "Terminé", 2]].forEach(([x, label, n]) => {
      s += t((x as number) + 8, 254, label as string, 22, 600, MUTED);
      for (let i = 0; i < (n as number); i++) {
        s += `<rect x="${x}" y="${278 + i * 98}" width="210" height="80" rx="12" fill="${SOFT}"/>` + bar((x as number) + 20, 306 + i * 98, 140, ACC, 12) + bar((x as number) + 20, 340 + i * 98, 100, "#c8c8c2", 10);
      }
    });
    return s;
  })(),
  "filtrer-et-trier-sans-rien-perdre": (() => {
    let s = pill(230, 160, 250, "Statut n'est pas Terminé", true) + pill(500, 160, 150, "Date ↑");
    s += box(230, 216, 750, 310, 18);
    [[262, "À faire", true], [340, "En cours", true]].forEach(([y, label, on]) => {
      s += check(262, (y as number) - 14, false, 30) + bar(314, y as number, on ? 300 : 240) + pill(820, (y as number) - 17, 120, label as string);
    });
    s += `<path d="M262 400h700" stroke="#d6d6d0" stroke-width="2" stroke-dasharray="8 8"/>`;
    s += t(612, 452, "3 éléments terminés sont cachés, pas supprimés", 22, 500, MUTED, "middle");
    return s;
  })(),
  "dupliquer-un-modele-notion": (() => {
    let s = box(230, 170, 750, 360, 18);
    s += bar(262, 226, 220, INK, 22);
    s += `<rect x="780" y="196" width="170" height="50" rx="25" fill="${ACC}"/>` + t(865, 229, "Dupliquer", 22, 600, "#fff", "middle");
    s += `<path d="M262 290h688M262 360h688M262 430h688" stroke="#d6d6d0" stroke-width="2"/>`;
    [325, 395, 465].forEach((y, i) => {
      s += bar(286, y, 200 - i * 20) + bar(560, y, 100) + bar(780, y, 90);
    });
    return s;
  })(),
  "notion-sur-ton-telephone": (() => {
    let s = box(230, 170, 440, 340, 18) + bar(262, 214, 160, INK, 20) + bar(262, 262, 300) + bar(262, 298, 250) + bar(262, 334, 280);
    s += box(740, 160, 190, 380, 30) + bar(780, 214, 90, INK, 16) + check(780, 254, true, 22) + bar(816, 265, 80) + check(780, 296, false, 22) + bar(816, 307, 70) + bar(780, 358, 120) + bar(780, 388, 100);
    s += `<path d="M690 340h30M710 332l10 8-10 8" fill="none" stroke="${ACC}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    return s;
  })(),
  "creer-une-liste-de-taches-notion": (() => {
    let s = box(230, 170, 750, 340, 18);
    s += `<path d="M230 240h750M230 320h750M230 400h750M580 170v340M800 170v340" stroke="#d6d6d0" stroke-width="2"/>`;
    s += t(254, 214, "Nom", 24, 600) + t(604, 214, "Statut", 24, 600) + t(824, 214, "Date", 24, 600);
    [[280, "Terminé", true, 220], [360, "En cours", false, 180], [440, "À faire", false, 250]].forEach(([y, label, done, w]) => {
      s += check(254, (y as number) - 13, done as boolean, 30) + bar(300, y as number, w as number) + pill(604, (y as number) - 17, 110, label as string, done as boolean) + bar(824, y as number, 90);
    });
    return s;
  })(),
  "creer-ton-propre-modele-notion": (() => {
    let s = t(230, 160, "Modèle", 24, 600, MUTED) + t(690, 160, "Nouvelles pages", 24, 600, MUTED);
    s += box(230, 184, 340, 340, 18) + bar(262, 232, 140, INK, 20) + check(262, 276) + bar(304, 289, 190) + check(262, 322) + bar(304, 335, 150) + bar(262, 388, 270) + bar(262, 420, 230);
    s += `<path d="M590 354h60M640 344l10 10-10 10" fill="none" stroke="${ACC}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    [0, 1].forEach((i) => {
      const x = 690 + i * 150;
      s += box(x, 184, 130, 340, 16) + bar(x + 20, 226, 70, INK, 14) + bar(x + 20, 280, 90) + bar(x + 20, 312, 70) + bar(x + 20, 344, 80);
    });
    return s;
  })(),
  "relier-deux-bases-de-donnees": (() => {
    let s = t(230, 160, "Tâches", 24, 600, MUTED) + t(690, 160, "Projets", 24, 600, MUTED);
    s += box(230, 184, 360, 340, 18) + `<path d="M230 270h360M230 356h360M230 442h360" stroke="#d6d6d0" stroke-width="2"/>`;
    [227, 313, 399, 485].forEach((y, i) => { s += bar(254, y, 160 - i * 16) + pill(444, y - 17, 120, i % 2 ? "Projet B" : "Projet A", i % 2 === 1); });
    s += box(690, 184, 290, 340, 18) + `<path d="M690 354h290" stroke="#d6d6d0" stroke-width="2"/>`;
    s += bar(714, 248, 120, INK, 18) + t(714, 302, "2 tâches reliées", 20, 500, MUTED) + bar(714, 418, 100, INK, 18) + t(714, 472, "2 tâches reliées", 20, 500, MUTED);
    return s;
  })(),
};

export const hasPreview = (slug: string) => slug in screens;

export function previewSvg(slug: string, format: "card" | "og" = "card", title = "") {
  const body = screens[slug];
  if (!body) return "";
  const vb = format === "og" ? "0 0 1200 630" : "100 33.75 1000 562.5";
  const size = format === "og" ? 'width="1200" height="630"' : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" ${size} font-family="${FONT}" ${title ? `role="img" aria-label="${title.replace(/"/g, String.fromCharCode(38) + "quot;")}"` : 'aria-hidden="true"'}>
<rect x="-10" y="-40" width="1220" height="720" fill="#efefea"/>
<rect x="${WX + 6}" y="${WY + 10}" width="${WW}" height="${WH}" rx="22" fill="#000" opacity=".06"/>
<rect x="${WX}" y="${WY}" width="${WW}" height="${WH}" rx="22" fill="#fff" stroke="#d6d6d0" stroke-width="2"/>
<circle cx="${WX + 34}" cy="${WY + 34}" r="7" fill="#d6d6d0"/><circle cx="${WX + 58}" cy="${WY + 34}" r="7" fill="#d6d6d0"/><circle cx="${WX + 82}" cy="${WY + 34}" r="7" fill="#d6d6d0"/>
${body}
</svg>`;
}
