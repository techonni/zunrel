// Article : « Ranger tes pages dans la barre latérale ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "La barre latérale montre tes pages. Si tout y apparaît au même niveau, elle devient illisible. L'idée est simple : peu de pages en haut, le détail en sous-pages."],
  ["h2", "Créer une structure claire"],
  ["ol", [
    "Choisis trois à cinq grands sujets : Travail, Maison, Projets, Notes…",
    "Crée une page pour chaque sujet : ce seront tes pages parent.",
    "À l'intérieur, crée des sous-pages pour le détail (une page par projet, par carnet, par liste).",
    "Dans la barre latérale, glisse une page sous une autre pour en faire une sous-page.",
  ]],
  ["figure"],
  ["h2", "Garder la barre courte"],
  ["p", "Ferme les flèches des pages parent quand tu n'en as pas besoin : seules les pages du haut restent visibles. Tu peux aussi garder en favoris les pages que tu ouvres tous les jours, si ton espace le propose."],
  ["h2", "Règles simples"],
  ["ul", [
    "Une page parent = un grand sujet, pas une note du jour.",
    "Si une page n'a plus sa place, glisse-la ailleurs plutôt que de la laisser orpheline.",
    "Pour un point d'entrée unique, vois « Créer une page d'accueil dans Notion ».",
  ]],
  ["p", "Pour aller plus loin sur les sous-pages, lis « Organiser ses pages avec des sous-pages »."],
];

export const caption = "À gauche, des pages empilées. À droite, les mêmes pages rangées sous trois sujets.";

export const points = ["Une page parent par grand sujet", "Des sous-pages pour le détail", "Glisser pour ranger sans supprimer"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : barre latérale rangée",
  "À gauche une liste plate de pages. À droite, des pages parent avec des sous-pages indentées.",
  `<text x="40" y="36" class="h">Avant</text><rect x="40" y="50" width="200" height="180" rx="10" class="o"/><rect x="58" y="74" width="120" height="8" rx="4" class="l"/><rect x="58" y="100" width="140" height="8" rx="4" class="l"/><rect x="58" y="126" width="100" height="8" rx="4" class="l"/><rect x="58" y="152" width="130" height="8" rx="4" class="l"/><rect x="58" y="178" width="110" height="8" rx="4" class="l"/><text x="310" y="36" class="h">Après</text><rect x="310" y="50" width="210" height="180" rx="10" class="o"/><rect x="328" y="74" width="100" height="10" rx="5" class="f"/><rect x="348" y="100" width="120" height="8" rx="4" class="l"/><rect x="348" y="122" width="100" height="8" rx="4" class="l"/><rect x="328" y="154" width="90" height="10" rx="5" class="f"/><rect x="348" y="180" width="110" height="8" rx="4" class="l"/>`,
);
