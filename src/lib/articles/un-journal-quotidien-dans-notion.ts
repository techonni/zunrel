// Article : « Un journal quotidien dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un journal dans Notion, c'est une page par jour et trois lignes : ce que tu as fait, ce qui compte demain, une note libre. Rien de plus. L'habitude compte plus que le modèle."],
  ["h2", "Créer le journal"],
  ["ol", [
    "Crée une page « Journal ».",
    "À l'intérieur, crée une sous-page pour aujourd'hui, titrée avec la date.",
    "Ajoute trois titres : Fait, Demain, Note.",
    "Écris trois lignes maximum sous chaque titre.",
  ]],
  ["figure"],
  ["h2", "Aller plus vite le lendemain"],
  ["p", "Duplique la page du jour (ou utilise un modèle de page) pour garder la même structure. Change seulement la date dans le titre. Si tu préfères une base de données, une ligne par jour avec une propriété Date fonctionne aussi."],
  ["h2", "Garder le geste simple"],
  ["ul", [
    "Écris le soir, deux minutes, pas une rédaction.",
    "Ne relis pas tout chaque jour : le journal sert d'abord à poser l'esprit.",
    "Range les anciennes pages sous le mois, pour ne pas encombrer la barre latérale.",
  ]],
  ["p", "Pour un modèle réutilisable, vois « Créer un modèle pour ne plus recommencer »."],
];

export const caption = "Une page par jour : Fait, Demain, Note.";

export const points = ["Une sous-page par jour", "Trois titres : Fait, Demain, Note", "Duplique la page pour le lendemain"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : journal quotidien",
  "Une page journal avec trois sections : Fait, Demain, Note.",
  `<rect x="120" y="30" width="320" height="200" rx="10" class="o"/><rect x="150" y="55" width="160" height="14" rx="7" class="f"/><text x="150" y="100" class="h2">Fait</text><rect x="150" y="110" width="220" height="8" rx="4" class="l"/><text x="150" y="145" class="h2">Demain</text><rect x="150" y="155" width="180" height="8" rx="4" class="l"/><text x="150" y="190" class="h2">Note</text><rect x="150" y="200" width="200" height="8" rx="4" class="l"/>`,
);
