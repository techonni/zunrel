// Article : « Créer un suivi des habitudes dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un suivi d'habitudes tient en une base de données : une ligne par jour, une case à cocher par habitude. Tu vois d'un coup d'œil ce que tu as tenu cette semaine."],
  ["h2", "Construire la base"],
  ["ol", [
    "Crée une page « Habitudes » et ajoute une base de données en pleine page (Table).",
    "Renomme la première colonne « Jour » et mets une date dans chaque ligne.",
    "Ajoute une propriété de type Case à cocher pour chaque habitude : « Eau », « Marche », « Lecture ».",
    "Ajoute une ligne chaque matin, ou prépare la semaine d'avance.",
  ]],
  ["figure"],
  ["h2", "Voir la semaine"],
  ["p", "Crée une vue qui n'affiche que les sept derniers jours en filtrant sur la date, et trie du plus récent au plus ancien : voir « Filtrer et trier sans rien perdre ». Les jours plus anciens restent dans la base."],
  ["h2", "Rester simple"],
  ["ul", [
    "Trois habitudes au départ, pas dix.",
    "Une habitude = une phrase claire que tu peux cocher oui ou non.",
    "Si une habitude ne te sert plus, cache la colonne plutôt que de la supprimer.",
  ]],
  ["p", "Tu peux dupliquer la page chaque mois pour repartir d'une base vide."],
];

export const caption = "Une ligne par jour, une case à cocher par habitude : la semaine se lit d'un coup d'œil.";

export const points = ["Une ligne par jour", "Une case à cocher par habitude", "Une vue des sept derniers jours"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : un tableau de suivi des habitudes",
  "Un tableau avec une colonne Jour et trois colonnes de cases à cocher, sur quatre lignes.",
  "<rect x=\"60\" y=\"40\" width=\"440\" height=\"180\" rx=\"10\" class=\"o\"/><path d=\"M60 80h440M60 120h440M60 160h440M180 40v180M280 40v180M380 40v180\"/><text x=\"80\" y=\"66\" class=\"h2\">Jour</text><text x=\"200\" y=\"66\" class=\"h2\">Eau</text><text x=\"300\" y=\"66\" class=\"h2\">Marche</text><text x=\"400\" y=\"66\" class=\"h2\">Lecture</text><rect x=\"80\" y=\"102\" width=\"60\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"224\" y=\"98\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><rect x=\"324\" y=\"98\" width=\"12\" height=\"12\" rx=\"3\" class=\"f\"/><rect x=\"424\" y=\"98\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><rect x=\"80\" y=\"142\" width=\"60\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"224\" y=\"138\" width=\"12\" height=\"12\" rx=\"3\" class=\"f\"/><rect x=\"324\" y=\"138\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><rect x=\"424\" y=\"138\" width=\"12\" height=\"12\" rx=\"3\" class=\"f\"/><rect x=\"80\" y=\"182\" width=\"60\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"224\" y=\"178\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><rect x=\"324\" y=\"178\" width=\"12\" height=\"12\" rx=\"3\" class=\"f\"/><rect x=\"424\" y=\"178\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/>",
);
