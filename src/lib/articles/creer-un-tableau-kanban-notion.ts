// Article : « Créer un tableau kanban dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un tableau kanban range tes éléments en colonnes, par exemple À faire, En cours et Terminé. Tu fais glisser une carte d'une colonne à l'autre quand elle avance. Dans Notion, c'est une vue Tableau d'une base de données."],
  ["h2", "Ce qu'il te faut"],
  ["p", "Une base de données avec une propriété Statut de type Statut ou Sélection. Si tu n'en as pas, suis « Créer une liste de tâches dans Notion »."],
  ["h2", "Ajouter la vue Tableau"],
  ["ol", [
    "Ouvre ta base de données et clique sur + à côté des vues.",
    "Choisis le type Tableau.",
    "Si besoin, regroupe par la propriété Statut : une colonne apparaît par option.",
    "Glisse une carte vers une autre colonne : son statut change.",
  ]],
  ["figure"],
  ["h2", "Garder un tableau lisible"],
  ["ul", [
    "Pas plus de quatre colonnes.",
    "Limite les cartes « En cours » à deux ou trois : si tout est en cours, rien n'avance.",
    "Cache la colonne Terminé quand elle devient trop longue.",
  ]],
  ["p", "Le tableau et la table montrent les mêmes données : une modification dans l'un apparaît dans l'autre. Pour comparer toutes les vues, lis « Voir la même base de données de plusieurs façons »."],
];

export const caption = "Chaque colonne correspond à un statut. Glisser une carte change son statut.";

export const points = ["Une colonne par statut", "Glisser une carte pour changer son statut", "Quatre colonnes au maximum"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : un tableau kanban à trois colonnes",
  "Trois colonnes nommées À faire, En cours et Terminé, avec des cartes. Une flèche montre une carte qui passe de la première à la deuxième.",
  "<text x=\"50\" y=\"50\" class=\"h2\">À faire</text><text x=\"210\" y=\"50\" class=\"h2\">En cours</text><text x=\"370\" y=\"50\" class=\"h2\">Terminé</text><rect x=\"40\" y=\"64\" width=\"140\" height=\"150\" rx=\"10\" class=\"o\"/><rect x=\"200\" y=\"64\" width=\"140\" height=\"150\" rx=\"10\" class=\"o\"/><rect x=\"360\" y=\"64\" width=\"140\" height=\"150\" rx=\"10\" class=\"o\"/><rect x=\"50\" y=\"76\" width=\"120\" height=\"34\" rx=\"6\" class=\"k\"/><rect x=\"58\" y=\"86\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"58\" y=\"98\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"50\" y=\"120\" width=\"120\" height=\"34\" rx=\"6\" class=\"k\"/><rect x=\"58\" y=\"130\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"58\" y=\"142\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"210\" y=\"76\" width=\"120\" height=\"34\" rx=\"6\" class=\"k\"/><rect x=\"218\" y=\"86\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"218\" y=\"98\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"370\" y=\"76\" width=\"120\" height=\"34\" rx=\"6\" class=\"k\"/><rect x=\"378\" y=\"86\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"378\" y=\"98\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"370\" y=\"120\" width=\"120\" height=\"34\" rx=\"6\" class=\"k\"/><rect x=\"378\" y=\"130\" width=\"70\" height=\"7\" rx=\"3.5\" class=\"f\"/><rect x=\"378\" y=\"142\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/><path d=\"M178 94h24\"/><path d=\"M194 86l8 8-8 8\"/>",
);
