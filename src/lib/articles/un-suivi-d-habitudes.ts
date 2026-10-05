// Article : « Un suivi d'habitudes ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un suivi d'habitudes dans Notion peut rester minimal : une case par jour, pour chaque habitude. Pas de graphiques. Pas de formules. Juste cocher."],
  ["h2", "La version la plus simple"],
  ["ol", [
    "Crée une base de données en table, nommée « Habitudes ».",
    "La première colonne = le jour (ou la date).",
    "Ajoute une propriété Case à cocher par habitude : Eau, Marche, Lecture…",
    "Chaque soir, ouvre la ligne du jour et coche ce qui est fait.",
  ]],
  ["figure"],
  ["h2", "Ne pas en faire trop"],
  ["p", "Trois habitudes au départ suffisent. Au-delà, on abandonne. Quand une case est cochée presque tous les jours pendant deux semaines, tu peux en ajouter une autre."],
  ["h2", "Variante page"],
  ["ul", [
    "Sans base de données : une page du mois avec une liste à cocher par jour.",
    "Avec une vue tableau : une colonne par statut si tu préfères glisser des cartes.",
    "Pour filtrer la semaine en cours, vois « Filtrer et trier sans rien perdre ».",
  ]],
  ["p", "Une autre approche, un peu plus complète, est décrite dans « Créer un suivi des habitudes dans Notion »."],
];

export const caption = "Une ligne par jour, une case par habitude. Rien de plus.";

export const points = ["Une ligne = un jour", "Une case à cocher par habitude", "Trois habitudes au départ suffisent"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : suivi d'habitudes simple",
  "Un tableau avec les colonnes Jour, Eau, Marche, Lecture et des cases cochées.",
  `<rect x="40" y="40" width="480" height="180" rx="10" class="o"/><path d="M40 80h480M40 120h480M40 160h480M40 200h480M160 40v180M280 40v180M400 40v180"/><text x="70" y="68" class="h2">Jour</text><text x="190" y="68" class="h2">Eau</text><text x="310" y="68" class="h2">Marche</text><text x="430" y="68" class="h2">Lecture</text><rect x="60" y="98" width="70" height="8" rx="4" class="l"/><circle cx="210" cy="102" r="8" class="f"/><circle cx="330" cy="102" r="8" class="o"/><circle cx="450" cy="102" r="8" class="f"/><rect x="60" y="138" width="70" height="8" rx="4" class="l"/><circle cx="210" cy="142" r="8" class="f"/><circle cx="330" cy="142" r="8" class="f"/><circle cx="450" cy="142" r="8" class="o"/>`,
);
