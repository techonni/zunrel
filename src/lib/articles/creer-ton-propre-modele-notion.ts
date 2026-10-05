// Article : « Créer un modèle pour ne plus recommencer ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Si tu refais souvent la même page, par exemple un compte rendu de réunion, une fiche de lecture ou une nouvelle tâche avec les mêmes champs, tu peux en faire un modèle. Une base de données de Notion sait garder des modèles : un clic, et la page arrive déjà remplie."],
  ["h2", "Créer un modèle dans une base de données"],
  ["ol", [
    "Ouvre ta base de données (par exemple « Tâches »).",
    "Clique sur la petite flèche à côté du bouton Nouveau, puis sur Nouveau modèle.",
    "Donne un nom au modèle, par exemple « Réunion ».",
    "Remplis la page comme tu veux la retrouver : titres, listes à cocher, valeurs par défaut des propriétés.",
    "Ferme la page : le modèle est enregistré.",
  ]],
  ["figure"],
  ["h2", "L'utiliser"],
  ["p", "La prochaine fois, clique sur la flèche à côté de Nouveau et choisis ton modèle : une nouvelle ligne apparaît avec tout ce que tu avais préparé. Tu n'as plus qu'à écrire."],
  ["h2", "Quelques idées de modèles"],
  ["ul", [
    "Réunion : date, participants, ordre du jour, décisions.",
    "Lecture : titre, auteur, trois idées à retenir.",
    "Tâche à répéter : les mêmes cases à cocher à chaque fois.",
  ]],
  ["h2", "À savoir"],
  ["p", "Modifier un modèle ne change pas les pages déjà créées avec lui : seules les nouvelles pages profitent des changements. Pour un modèle partagé par quelqu'un d'autre, voir l'article « Dupliquer un modèle Notion »."],
];

export const caption = "Un modèle est une page préparée à l'avance : chaque nouvelle ligne en reprend le contenu.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : un modèle de page qui donne de nouvelles pages",
  "À gauche, une page modèle avec un titre et des lignes. Une flèche mène à droite vers deux pages identiques qui en sont issues.",
  `<text x="40" y="34" class="h">Modèle</text>
<rect x="40" y="50" width="170" height="168" rx="10" class="o"/>
<rect x="58" y="70" width="90" height="12" rx="6" class="f"/>
<circle cx="66" cy="106" r="6"/><rect x="80" y="102" width="100" height="8" rx="4" class="l"/>
<circle cx="66" cy="130" r="6"/><rect x="80" y="126" width="80" height="8" rx="4" class="l"/>
<rect x="58" y="156" width="130" height="8" rx="4" class="l"/>
<path d="M234 134h56"/><path d="M282 126l8 8-8 8"/>
<text x="330" y="34" class="h">Nouvelles pages</text>
<rect x="330" y="50" width="90" height="100" rx="10" class="o"/>
<rect x="342" y="64" width="50" height="8" rx="4" class="f"/><rect x="342" y="86" width="64" height="6" rx="3" class="l"/><rect x="342" y="102" width="50" height="6" rx="3" class="l"/>
<rect x="436" y="50" width="90" height="100" rx="10" class="o"/>
<rect x="448" y="64" width="50" height="8" rx="4" class="f"/><rect x="448" y="86" width="64" height="6" rx="3" class="l"/><rect x="448" y="102" width="50" height="6" rx="3" class="l"/>
<text x="428" y="190" text-anchor="middle" class="s">même point de départ à chaque fois</text>`,
);
