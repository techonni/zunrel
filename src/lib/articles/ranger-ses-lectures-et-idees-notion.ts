// Article : « Ranger ses lectures et ses idées dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Livres à lire, articles à garder, idées de projets : tout cela se range dans une base de données. Tu vois ce qui t'attend, ce que tu as commencé, et ce qui t'a plu."],
  ["h2", "Construire la base « Lectures »"],
  ["ol", [
    "Crée une page « Lectures » avec une base de données en pleine page.",
    "Renomme la première colonne « Titre ».",
    "Ajoute une propriété Texte « Auteur ».",
    "Ajoute une propriété Statut avec trois options : À lire, En cours, Lu.",
    "Ajoute une propriété Sélection « Note » avec quelques valeurs simples, ou une propriété Date « Terminé le ».",
  ]],
  ["figure"],
  ["h2", "Voir sa bibliothèque"],
  ["p", "Ajoute une vue Galerie : chaque livre devient une carte, avec une image de couverture si tu en as mis une dans la page. Garde la vue Table pour trier et filtrer, et une vue qui n'affiche que les livres « À lire »."],
  ["h2", "Le même principe pour les idées"],
  ["p", "Duplique la base et renomme-la « Idées » : remplace Auteur par Source, et le statut par Brouillon, À creuser, Utilisée. Écris l'idée dans la page de chaque ligne."],
  ["p", "C'est aussi un bon exercice avant d'acheter un modèle tout fait : en le construisant toi-même, tu comprends comment il fonctionne."],
];

export const caption = "Une ligne par livre : titre, auteur, statut, note. La galerie en fait une bibliothèque.";

export const points = ["Titre, auteur, statut", "Une vue Galerie pour la bibliothèque", "Le même principe pour tes idées"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une base de données de lectures",
  "Un tableau de livres avec les colonnes Titre, Auteur et Statut, sur trois lignes.",
  "<rect x=\"40\" y=\"50\" width=\"480\" height=\"150\" rx=\"10\" class=\"o\"/><path d=\"M40 88h480M40 124h480M40 160h480M240 50v150M390 50v150\"/><text x=\"58\" y=\"76\" class=\"h2\">Titre</text><text x=\"258\" y=\"76\" class=\"h2\">Auteur</text><text x=\"408\" y=\"76\" class=\"h2\">Statut</text><rect x=\"58\" y=\"110\" width=\"130\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"258\" y=\"110\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"408\" y=\"102\" width=\"86\" height=\"22\" rx=\"11\" class=\"o\"/><text x=\"451.0\" y=\"118\" text-anchor=\"middle\" class=\"s\">À lire</text><rect x=\"58\" y=\"146\" width=\"130\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"258\" y=\"146\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"408\" y=\"138\" width=\"86\" height=\"22\" rx=\"11\" class=\"o\"/><text x=\"451.0\" y=\"154\" text-anchor=\"middle\" class=\"s\">En cours</text><rect x=\"58\" y=\"182\" width=\"130\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"258\" y=\"182\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"408\" y=\"174\" width=\"86\" height=\"22\" rx=\"11\" class=\"f\"/><text x=\"451.0\" y=\"190\" text-anchor=\"middle\" class=\"s\" style=\"fill:#fff\">Lu</text>",
);
