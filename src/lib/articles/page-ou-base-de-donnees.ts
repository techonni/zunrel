// Article : « Page ou base de données ? ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "C'est la confusion la plus courante au début : faut-il une page ou une base de données ? Les deux se ressemblent, car chaque élément d'une base est lui-même une page. Une règle simple permet de choisir."],
  ["h2", "La règle"],
  ["ul", [
    "Une page, quand tu écris une chose unique : une note, un plan, un compte rendu.",
    "Une base de données, quand tu suis plusieurs éléments du même genre : des tâches, des livres, des contacts, des idées de contenu.",
  ]],
  ["p", "Pose-toi une question : est-ce que j'aurai bientôt dix éléments qui se ressemblent ? Si oui, une base de données t'évitera de recopier la même structure à chaque fois."],
  ["figure"],
  ["h2", "Ce que la base apporte en plus"],
  ["p", "Dans une base, chaque élément a des informations en colonnes : un statut, une date, une catégorie. Tu peux ensuite trier, filtrer et afficher la même liste de plusieurs façons. Une page seule ne le permet pas."],
  ["h2", "Créer ta première base"],
  ["ol", [
    "Ouvre une page vide, puis tape / sur une ligne vide.",
    "Cherche base de données et choisis l'option qui l'ajoute directement dans la page. Une base intégrée dans une page est le plus simple pour débuter.",
    "Donne-lui un nom clair, par exemple Tâches.",
    "Ajoute trois éléments, chacun avec un nom. Ouvre l'un d'eux : c'est une page où tu peux écrire des notes.",
  ]],
  ["p", "Notion propose aussi des bases en pleine page, qui forment une page à elles seules. Les deux fonctionnent de la même façon ; la différence est surtout la place qu'elles prennent."],
  ["h2", "Un doute ? Commence par une page"],
  ["p", "Tu peux toujours transformer des notes en base plus tard. Mieux vaut commencer par ce qui est simple, et ajouter de la structure quand la liste grandit."],
];

export const caption = "Une page porte une note unique. Une base de données range plusieurs éléments du même genre, chacun avec ses colonnes.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : choisir entre une page et une base de données",
  "À gauche, une page de texte nommée une note. À droite, un tableau de quatre lignes nommé des tâches.",
  `<text x="40" y="36" class="h">Une note</text><text x="40" y="58" class="s">une page</text>
<rect x="40" y="74" width="200" height="150" rx="10" class="o"/>
<rect x="58" y="94" width="100" height="12" rx="6" class="f"/>
<rect x="58" y="120" width="160" height="8" rx="4" class="l"/><rect x="58" y="138" width="140" height="8" rx="4" class="l"/><rect x="58" y="156" width="165" height="8" rx="4" class="l"/><rect x="58" y="174" width="110" height="8" rx="4" class="l"/>
<text x="300" y="36" class="h">Des tâches</text><text x="300" y="58" class="s">une base de données</text>
<rect x="300" y="74" width="220" height="150" rx="10" class="o"/>
<path d="M300 104h220M300 134h220M300 164h220M300 194h220"/>
<rect x="314" y="85" width="50" height="8" rx="4" class="f"/><rect x="460" y="85" width="44" height="8" rx="4" class="f"/>
<rect x="314" y="115" width="80" height="8" rx="4" class="l"/><rect x="460" y="113" width="44" height="12" rx="6"/>
<rect x="314" y="145" width="64" height="8" rx="4" class="l"/><rect x="460" y="143" width="44" height="12" rx="6"/>
<rect x="314" y="175" width="90" height="8" rx="4" class="l"/><rect x="460" y="173" width="44" height="12" rx="6"/>
<rect x="314" y="205" width="70" height="8" rx="4" class="l"/><rect x="460" y="203" width="44" height="12" rx="6"/>`,
);
