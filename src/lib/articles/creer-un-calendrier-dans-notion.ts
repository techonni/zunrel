// Article : « Créer un calendrier dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un calendrier Notion n'est pas un outil à part : c'est une façon d'afficher une base de données qui contient une date. Tu écris tes éléments une seule fois, et ils apparaissent à la bonne case du mois."],
  ["h2", "Ce qu'il te faut"],
  ["p", "Une base de données avec au moins une propriété de type Date, par exemple ta base « Tâches » avec une colonne « Échéance »."],
  ["h2", "Ajouter la vue Calendrier"],
  ["ol", [
    "Ouvre ta base de données.",
    "À côté du nom des vues, clique sur le bouton + pour ajouter une vue.",
    "Choisis le type Calendrier et donne-lui un nom.",
    "Si Notion te demande quelle date utiliser, choisis ta propriété de date.",
  ]],
  ["figure"],
  ["h2", "L'utiliser au quotidien"],
  ["ul", [
    "Chaque élément apparaît à sa date, avec son nom.",
    "Clique sur un jour vide pour créer un élément à cette date.",
    "Glisse un élément vers un autre jour pour changer sa date.",
    "Clique sur un élément pour ouvrir sa page.",
  ]],
  ["h2", "Un calendrier, pas un deuxième tableau"],
  ["p", "Le calendrier n'est qu'une vue : les éléments restent dans la même base de données que ta table ou ton tableau. Modifier une date dans l'un la change dans les autres. Pour comprendre les vues, lis « Voir la même base de données de plusieurs façons »."],
];

export const caption = "La vue Calendrier place chaque élément à sa date. C'est la même base de données, vue autrement.";

export const points = ["Une base de données avec une date", "Ajouter une vue Calendrier", "Glisser un élément pour changer sa date"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une base de données affichée en calendrier",
  "Une grille de calendrier dont quelques cases contiennent des éléments représentés par de petites barres.",
  "<rect x=\"40\" y=\"40\" width=\"480\" height=\"190\" rx=\"10\" class=\"o\"/><path d=\"M40 78h480M120 40v190M200 40v190M280 40v190M360 40v190M440 40v190M40 116h480M40 154h480M40 192h480\"/><text x=\"60\" y=\"62\" class=\"h2\">Lun</text><text x=\"140\" y=\"62\" class=\"h2\">Mar</text><text x=\"220\" y=\"62\" class=\"h2\">Mer</text><text x=\"300\" y=\"62\" class=\"h2\">Jeu</text><text x=\"380\" y=\"62\" class=\"h2\">Ven</text><text x=\"460\" y=\"62\" class=\"h2\">Sam</text><rect x=\"48\" y=\"100\" width=\"64\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"208\" y=\"138\" width=\"64\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"208\" y=\"148\" width=\"48\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"368\" y=\"176\" width=\"64\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"128\" y=\"176\" width=\"64\" height=\"7\" rx=\"3.5\" class=\"f\"/>",
);
