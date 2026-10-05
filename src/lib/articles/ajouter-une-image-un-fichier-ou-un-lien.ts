// Article : « Ajouter une image, un fichier ou un lien ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Dans Notion, une image, un PDF ou un lien se range comme n'importe quel bloc. Tu glisses, tu déposes, et le fichier reste avec tes notes."],
  ["h2", "Glisser un fichier"],
  ["ol", [
    "Ouvre la page où tu veux le ranger.",
    "Glisse une image ou un PDF depuis ton ordinateur vers la page.",
    "Sinon, sur une ligne vide, tape /image ou /fichier et choisis le fichier.",
    "Pour un lien web, tape /signet (bookmark) et colle l'adresse.",
  ]],
  ["figure"],
  ["h2", "Lien simple dans le texte"],
  ["p", "Sélectionne un mot, puis utilise Cmd ou Ctrl + K pour coller une adresse : le mot devient un lien cliquable. Tu peux aussi coller une URL toute seule ; Notion propose parfois de l'importer ou de l'afficher en aperçu."],
  ["h2", "Garder les pages légères"],
  ["ul", [
    "Une image par idée suffit ; évite d'empiler des captures inutiles.",
    "Les gros fichiers comptent dans le stockage de ton plan : vois « Notion est-il gratuit ? ».",
    "Pour seulement montrer un document sans le téléverser, un lien vers Drive ou Dropbox peut suffire.",
  ]],
  ["p", "Pour d'autres façons d'ajouter des médias, lis aussi « Ajouter des images et des fichiers dans Notion »."],
];

export const caption = "Une page avec une image, un fichier PDF et un lien web, côte à côte.";

export const points = ["Glisse une image ou un PDF", "/image ou /fichier si tu préfères le menu", "/signet pour garder un lien web"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : image, fichier et lien",
  "Trois blocs : une zone image, un encadré PDF, un encadré lien.",
  `<rect x="40" y="50" width="150" height="160" rx="10" class="o"/><rect x="58" y="70" width="114" height="80" rx="8" class="k"/><circle cx="90" cy="100" r="10" class="l"/><path d="M58 140l30-24 24 18 20-12 40 18"/><rect x="58" y="168" width="80" height="8" rx="4" class="l"/><rect x="210" y="50" width="150" height="160" rx="10" class="o"/><rect x="228" y="90" width="114" height="40" rx="8" class="o"/><text x="285" y="116" text-anchor="middle" class="h2">PDF</text><rect x="228" y="150" width="90" height="8" rx="4" class="l"/><rect x="380" y="50" width="150" height="160" rx="10" class="o"/><rect x="398" y="90" width="114" height="40" rx="8" class="o"/><text x="455" y="116" text-anchor="middle" class="h2">Lien</text><rect x="398" y="150" width="100" height="8" rx="4" class="l"/>`,
);
