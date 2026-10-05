// Article : « Créer une liste de tâches dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Il y a deux façons de faire une liste de tâches dans Notion. Une liste à cocher dans une page convient pour quelques lignes : courses, préparatifs d'un week-end. Dès que tu veux des dates, des statuts ou un tri, une base de données est plus utile. Voici la seconde, pas à pas."],
  ["h2", "Créer la base de données"],
  ["ol", [
    "Crée une nouvelle page et nomme-la « Tâches ».",
    "Sur une ligne vide, tape /table, puis choisis la base de données en pleine page (Table).",
    "Renomme la première colonne « Nom » : une ligne, une tâche.",
    "Ajoute une propriété Statut, avec trois options : À faire, En cours, Terminé.",
    "Ajoute une propriété Date pour l'échéance.",
  ]],
  ["figure"],
  ["h2", "Remplir et utiliser la liste"],
  ["p", "Ajoute quelques tâches réelles, pas des exemples. Change le statut quand tu avances : c'est le seul geste à prendre en habitude."],
  ["h2", "Garder une liste lisible"],
  ["p", "Une liste trop longue décourage. Crée une vue qui n'affiche que les tâches dont le statut n'est pas Terminé, triées par date : voir l'article « Filtrer et trier sans rien perdre ». Les tâches terminées disparaissent de l'écran, mais restent dans la base."],
  ["ul", [
    "Une tâche = une action concrète, qui commence par un verbe.",
    "Pas plus de trois statuts au départ.",
    "Une date seulement quand elle existe vraiment.",
  ]],
  ["p", "Quand cette liste te convient, tu peux la dupliquer pour d'autres usages : lectures, idées, projets."],
];

export const caption = "Une base de données de tâches : un nom, un statut, une date. Chaque ligne est une tâche.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une base de données de tâches",
  "Un tableau avec les colonnes Nom, Statut et Date, et trois lignes de tâches. La première est cochée comme terminée.",
  `<text x="40" y="34" class="h">Tâches</text>
<rect x="40" y="50" width="480" height="170" rx="10" class="o"/>
<path d="M40 92h480M40 134h480M40 176h480M250 50v170M400 50v170"/>
<text x="58" y="77" class="h2">Nom</text><text x="268" y="77" class="h2">Statut</text><text x="418" y="77" class="h2">Date</text>
<rect x="58" y="108" width="120" height="8" rx="4" class="l"/><rect x="268" y="102" width="80" height="20" rx="10" class="f"/><rect x="418" y="108" width="60" height="8" rx="4" class="l"/>
<rect x="58" y="150" width="100" height="8" rx="4" class="l"/><rect x="268" y="144" width="80" height="20" rx="10" class="o"/><rect x="418" y="150" width="60" height="8" rx="4" class="l"/>
<rect x="58" y="192" width="140" height="8" rx="4" class="l"/><rect x="268" y="186" width="80" height="20" rx="10" class="o"/><rect x="418" y="192" width="60" height="8" rx="4" class="l"/>`,
);
