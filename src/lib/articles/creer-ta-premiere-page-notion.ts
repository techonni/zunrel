// Article : « Créer ta première page Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Pour une première page, oublie les modèles et les décors. Une page utile se construit avec trois gestes : écrire un titre, ajouter des blocs, déplacer ce qui est mal placé. Dix minutes suffisent."],
  ["h2", "Une page « Ma semaine »"],
  ["ol", [
    "Dans la barre latérale de Notion, crée une nouvelle page vide.",
    "Écris un titre en haut, par exemple Ma semaine.",
    "Sur la première ligne en dessous, tape ## suivi d'un espace, puis À faire. La ligne devient un titre de section.",
    "À la ligne, tape [] suivi d'un espace : une case à cocher apparaît. Écris une tâche, puis Entrée pour la suivante.",
    "Ajoute trois tâches. Coche-en une pour voir ce que ça donne.",
    "Survole le début d'une ligne : une poignée de six points apparaît à gauche. Fais-la glisser pour changer l'ordre.",
  ]],
  ["figure"],
  ["h2", "Les raccourcis qui servent tout de suite"],
  ["ul", [
    "/ ouvre la liste des blocs : titres, listes, images, citations, sous-pages.",
    "## puis un espace crée un titre de section.",
    "[] puis un espace crée une case à cocher.",
    "- puis un espace crée une liste à puces.",
  ]],
  ["p", "Si un bloc n'est pas celui que tu voulais, ne l'efface pas : tape / à nouveau, ou utilise la poignée à gauche pour le transformer en un autre type de bloc."],
  ["h2", "Ce qu'il vaut mieux repousser"],
  ["p", "Les icônes, les images de couverture, les couleurs : tout cela peut attendre. Une page que tu utilises tous les jours vaut mieux qu'une belle page que tu n'ouvres jamais. Quand tu auras une liste qui grandit, le prochain article t'aidera à choisir entre une page et une base de données."],
];

export const caption = "Une page de départ : un titre, une section et trois cases à cocher. La poignée à gauche sert à déplacer un bloc.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une première page avec trois cases à cocher",
  "Une page avec un titre, un titre de section et trois lignes avec case à cocher. Une poignée de six points est dessinée à gauche de la deuxième case.",
  `<rect x="90" y="24" width="380" height="212" rx="12" class="o"/>
<rect x="120" y="48" width="140" height="16" rx="8" class="f"/>
<rect x="120" y="84" width="80" height="11" rx="5" class="f" opacity=".6"/>
<rect x="138" y="116" width="14" height="14" rx="3"/><rect x="164" y="119" width="170" height="8" rx="4" class="l"/>
<rect x="138" y="146" width="14" height="14" rx="3"/><rect x="164" y="149" width="130" height="8" rx="4" class="l"/>
<path d="M141 154l4 4 7-8"/>
<rect x="138" y="176" width="14" height="14" rx="3"/><rect x="164" y="179" width="150" height="8" rx="4" class="l"/>
<circle cx="112" cy="147" r="1.6" class="f"/><circle cx="118" cy="147" r="1.6" class="f"/><circle cx="112" cy="153" r="1.6" class="f"/><circle cx="118" cy="153" r="1.6" class="f"/><circle cx="112" cy="159" r="1.6" class="f"/><circle cx="118" cy="159" r="1.6" class="f"/>`,
);
