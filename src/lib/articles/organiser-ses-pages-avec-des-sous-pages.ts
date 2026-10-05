// Article : « Organiser ses pages avec des sous-pages ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une page peut en contenir d'autres : ce sont des sous-pages. Elles jouent le rôle des dossiers, en plus souple. Bien rangées, elles t'évitent une barre latérale interminable."],
  ["h2", "Créer une sous-page"],
  ["ol", [
    "Ouvre la page qui doit servir de dossier, par exemple « Travail ».",
    "Sur une ligne vide, tape /page, puis choisis Page.",
    "Donne un titre à la sous-page : elle apparaît comme un lien dans la page « Travail » et sous elle dans la barre latérale.",
  ]],
  ["figure"],
  ["h2", "Ranger une page existante"],
  ["p", "Dans la barre latérale, attrape une page et dépose-la sur une autre : elle devient sa sous-page. Tu peux aussi la déposer entre deux pages pour changer son ordre."],
  ["h2", "Garder une structure simple"],
  ["ul", [
    "Deux ou trois niveaux suffisent. Plus bas, tu ne retrouveras plus rien.",
    "Un nom clair vaut mieux qu'un rangement parfait.",
    "Mets en favori les pages que tu ouvres tous les jours.",
  ]],
  ["p", "Quand tu as une liste d'éléments du même genre, ne multiplie pas les sous-pages : utilise plutôt une base de données (voir « Page ou base de données ? »)."],
];

export const caption = "Une page « dossier » contient des sous-pages, qui apparaissent aussi dans la barre latérale.";

export const points = ["Un titre de page = un dossier", "Glisser une page sur une autre pour la ranger", "Deux ou trois niveaux maximum"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page et ses sous-pages",
  "À gauche, une barre latérale avec une page et trois sous-pages décalées. À droite, la page qui contient trois liens vers ces sous-pages.",
  "<rect x=\"40\" y=\"40\" width=\"170\" height=\"180\" rx=\"10\" class=\"o\"/><rect x=\"56\" y=\"62\" width=\"70\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"78\" y=\"92\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"78\" y=\"114\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"78\" y=\"136\" width=\"80\" height=\"7\" rx=\"3.5\" class=\"l\"/><path d=\"M64 88v54M64 96h10M64 118h10M64 140h10\"/><rect x=\"250\" y=\"40\" width=\"270\" height=\"180\" rx=\"10\" class=\"o\"/><rect x=\"270\" y=\"62\" width=\"110\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"270\" y=\"90\" width=\"230\" height=\"26\" rx=\"10\" class=\"o\"/><rect x=\"284\" y=\"100\" width=\"100\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"270\" y=\"124\" width=\"230\" height=\"26\" rx=\"10\" class=\"o\"/><rect x=\"284\" y=\"134\" width=\"80\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"270\" y=\"158\" width=\"230\" height=\"26\" rx=\"10\" class=\"o\"/><rect x=\"284\" y=\"168\" width=\"120\" height=\"7\" rx=\"3.5\" class=\"l\"/>",
);
