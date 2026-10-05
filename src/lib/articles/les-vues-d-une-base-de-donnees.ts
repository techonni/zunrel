// Article : « Voir la même base de données de plusieurs façons ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une base de données Notion ne se limite pas à un tableau. Tu peux afficher les mêmes éléments sous forme de table, de tableau par colonnes, de calendrier ou de galerie. Ces affichages s'appellent des vues. Changer de vue ne modifie pas tes données : tu regardes la même liste sous un autre angle."],
  ["h2", "Les vues pour débuter"],
  ["ul", [
    "Table : une ligne par élément, une colonne par propriété. La vue de départ.",
    "Tableau : des colonnes, une par statut, avec des cartes que tu fais glisser d'une colonne à l'autre.",
    "Calendrier : les éléments placés sur leur date. Il faut une propriété de date.",
    "Galerie : des cartes avec une image, utile pour des livres, des recettes ou des idées visuelles.",
    "Liste : une version très simple, avec peu de colonnes.",
  ]],
  ["p", "Notion propose aussi une chronologie, un formulaire, un graphique, une carte et un tableau de bord. Tu n'en as pas besoin pour commencer. Selon la langue de ton interface, les noms peuvent varier un peu."],
  ["figure"],
  ["h2", "Ajouter une vue"],
  ["ol", [
    "Ouvre ta base de données. Au-dessus, les vues apparaissent sous forme d'onglets.",
    "Clique sur le signe + à côté des onglets pour ajouter une vue.",
    "Choisis le type : tableau, calendrier, galerie…",
    "Donne-lui un nom qui dit à quoi elle sert, par exemple À faire ou Calendrier.",
  ]],
  ["h2", "Une vue, une question"],
  ["p", "Le plus utile est de créer une vue par question que tu te poses. Qu'est-ce qui est en cours ? Qu'est-ce qui arrive cette semaine ? Chaque vue répond à une seule question, et tu passes de l'une à l'autre d'un clic. Pour qu'une vue n'affiche qu'une partie des éléments, il faut un filtre : c'est l'objet de l'article suivant."],
];

export const caption = "Une même liste de tâches, vue en table, en tableau par statut et en calendrier.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une base de données, trois vues",
  "Un petit tableau à gauche, relié par des flèches à trois vues : table, tableau par colonnes et calendrier.",
  `<rect x="24" y="86" width="90" height="88" rx="8" class="o"/>
<path d="M24 116h90M24 145h90"/>
<rect x="34" y="97" width="46" height="7" rx="3.5" class="l"/><rect x="34" y="126" width="38" height="7" rx="3.5" class="l"/><rect x="34" y="155" width="50" height="7" rx="3.5" class="l"/>
<text x="69" y="196" text-anchor="middle" class="s">une base</text>
<path d="M126 130h30"/><path d="M148 122l8 8-8 8"/>
<text x="260" y="26" text-anchor="middle" class="h2">Table</text>
<rect x="190" y="36" width="140" height="60" rx="8" class="o"/><path d="M190 56h140M190 76h140M250 36v60"/>
<text x="260" y="116" text-anchor="middle" class="h2">Tableau</text>
<rect x="190" y="126" width="140" height="62" rx="8" class="o"/><path d="M237 126v62M283 126v62"/>
<rect x="198" y="136" width="31" height="14" rx="3" class="k"/><rect x="245" y="136" width="31" height="14" rx="3" class="k"/><rect x="198" y="156" width="31" height="14" rx="3" class="k"/><rect x="291" y="136" width="31" height="14" rx="3" class="k"/>
<text x="440" y="26" text-anchor="middle" class="h2">Calendrier</text>
<rect x="370" y="36" width="150" height="152" rx="8" class="o"/>
<path d="M370 62h150M407 62v126M444 62v126M481 62v126M370 100h150M370 144h150"/>
<rect x="378" y="108" width="24" height="10" rx="3" class="f"/><rect x="451" y="152" width="24" height="10" rx="3" class="f"/><rect x="488" y="70" width="24" height="10" rx="3" class="f"/>`,
);
