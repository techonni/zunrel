// Article : « Importer tes notes dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Tu peux faire entrer dans Notion des notes venant d'ailleurs : Google Docs, Evernote, fichiers Word ou Markdown. L'import ne sera jamais parfait à 100 %, mais il évite de tout retaper."],
  ["h2", "Par où passer"],
  ["ol", [
    "Ouvre Paramètres, puis Import (ou tape / suivi du nom de l'outil sur une page).",
    "Evernote : connecte ton compte, choisis les carnets ; ils arrivent souvent comme pages, les notes comme éléments d'une base.",
    "Google Docs : un document à la fois via l'import Google Docs, ou exporte en .docx pour plusieurs fichiers.",
    "Fichiers : Word (.docx), Markdown, CSV, HTML selon les options proposées.",
  ]],
  ["figure"],
  ["h2", "Après l'import"],
  ["p", "Vérifie titres, images et listes. Certaines mises en forme (commentaires, en-têtes complexes, cases Google Docs) ne passent pas telles quelles. Range ensuite les pages importées sous un parent « Import » avant de les redistribuer."],
  ["h2", "À savoir"],
  ["ul", [
    "Un gros compte Evernote peut prendre du temps : importe carnet par carnet si besoin.",
    "Pour beaucoup de Google Docs, l'export groupé puis l'import Word est souvent plus simple.",
    "Ne supprime pas la source avant d'avoir vérifié que tout est bien arrivé.",
  ]],
  ["p", "Une fois tes notes dedans, « Ranger tes pages dans la barre latérale » t'aide à les classer."],
];

export const caption = "Google Docs, Evernote, fichiers : tout peut entrer, puis tu ranges.";

export const points = ["Paramètres, puis Import", "Evernote et Docs ont leur propre entrée", "Vérifie et range avant de supprimer la source"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : importer des notes",
  "Trois sources à gauche (Docs, Evernote, Fichier) qui convergent vers une page Notion.",
  `<rect x="40" y="40" width="120" height="50" rx="8" class="o"/><text x="100" y="72" text-anchor="middle" class="s">Docs</text><rect x="40" y="105" width="120" height="50" rx="8" class="o"/><text x="100" y="137" text-anchor="middle" class="s">Evernote</text><rect x="40" y="170" width="120" height="50" rx="8" class="o"/><text x="100" y="202" text-anchor="middle" class="s">Fichier</text><path d="M170 65h60M170 130h60M170 195h60"/><path d="M230 65v130"/><path d="M230 130h40"/><path d="M262 122l8 8-8 8"/><rect x="320" y="60" width="200" height="140" rx="10" class="o"/><rect x="350" y="90" width="120" height="12" rx="6" class="f"/><rect x="350" y="120" width="140" height="8" rx="4" class="l"/><rect x="350" y="145" width="110" height="8" rx="4" class="l"/><text x="420" y="185" text-anchor="middle" class="s">Notion</text>`,
);
