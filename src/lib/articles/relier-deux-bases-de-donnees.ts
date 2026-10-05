// Article : « Relier deux bases de données ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Quand tu as une base de données de tâches et une autre de projets, tu veux savoir à quel projet appartient chaque tâche. Notion le fait avec une propriété de type Relation : elle relie une ligne d'une base à une ligne d'une autre, sans recopier de texte."],
  ["h2", "Un exemple : tâches et projets"],
  ["ol", [
    "Crée deux bases de données : « Projets » et « Tâches ».",
    "Dans « Tâches », ajoute une propriété et choisis le type Relation.",
    "Choisis la base à relier : « Projets ».",
    "Dans chaque tâche, clique sur la cellule de la relation et choisis le projet.",
  ]],
  ["figure"],
  ["h2", "Ce que ça change"],
  ["p", "Chaque tâche affiche maintenant son projet. Selon ce que tu choisis au moment de créer la relation, la base « Projets » peut aussi afficher la liste de ses tâches : tu vois d'un coup d'œil ce qu'il reste à faire pour chaque projet."],
  ["h2", "Quand c'est utile, et quand ça ne l'est pas"],
  ["ul", [
    "Utile : deux listes qui parlent des mêmes choses (tâches et projets, livres et auteurs, clients et commandes).",
    "Inutile : une seule liste. Une propriété Sélection suffit alors pour classer.",
  ]],
  ["p", "Commence avec une seule relation. Quand tu es à l'aise, tu pourras demander à Notion de compter ou de résumer les éléments reliés, avec une propriété de type Cumul."],
];

export const caption = "Chaque tâche pointe vers un projet : l'information n'est écrite qu'à un seul endroit.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une relation entre deux bases de données",
  "À gauche, une base de tâches de trois lignes. À droite, une base de projets de deux lignes. Des traits relient chaque tâche à son projet.",
  `<text x="40" y="34" class="h">Tâches</text>
<rect x="40" y="50" width="190" height="150" rx="10" class="o"/>
<path d="M40 100h190M40 150h190"/>
<rect x="58" y="68" width="110" height="8" rx="4" class="l"/><rect x="58" y="118" width="90" height="8" rx="4" class="l"/><rect x="58" y="168" width="100" height="8" rx="4" class="l"/>
<circle class="f" cx="214" cy="72" r="4"/><circle class="f" cx="214" cy="122" r="4"/><circle class="f" cx="214" cy="172" r="4"/>
<text x="330" y="34" class="h">Projets</text>
<rect x="330" y="50" width="190" height="150" rx="10" class="o"/>
<path d="M330 125h190"/>
<rect x="348" y="82" width="100" height="10" rx="5" class="f"/><rect x="348" y="157" width="80" height="10" rx="5" class="f"/>
<circle class="f" cx="336" cy="87" r="4"/><circle class="f" cx="336" cy="162" r="4"/>
<path d="M218 72L332 87M218 122L332 87M218 172L332 162"/>`,
);
