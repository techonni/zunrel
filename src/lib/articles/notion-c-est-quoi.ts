// Article : « Notion, c'est quoi ? ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Notion est un outil pour écrire, organiser et suivre ce que tu fais, au même endroit : notes, listes, projets, calendrier. Beaucoup de débutants s'arrêtent vite, parce qu'on leur montre d'abord des tableaux de bord compliqués. Pour commencer, trois idées suffisent."],
  ["h2", "1. Une page"],
  ["p", "Une page est une feuille blanche. Tu lui donnes un titre, tu écris dedans. Une page peut en contenir d'autres, que l'on appelle des sous-pages : elles jouent le rôle des dossiers."],
  ["h2", "2. Des blocs"],
  ["p", "Tout ce qui se trouve sur une page est un bloc : un paragraphe, un titre, une case à cocher, une image, un tableau. Tu peux déplacer chaque bloc, le copier ou le transformer en autre chose. Sur une ligne vide, tape / pour voir la liste des blocs disponibles."],
  ["figure"],
  ["h2", "3. Des bases de données"],
  ["p", "Une base de données est une liste d'éléments qui ont tous les mêmes informations : un nom, une date, un statut. Une liste de tâches, de livres ou de contacts en est une. Chaque élément est lui-même une page, où tu peux écrire autant que tu veux. C'est cette idée qui rend Notion puissant."],
  ["h2", "Par où commencer"],
  ["p", "Tu n'as pas besoin de tout comprendre le premier jour. Commence par une page et quelques blocs. Quand tu as une liste à suivre, tâches, lectures ou idées, crée alors une base de données."],
  ["ul", [
    "Une page pour écrire, noter, préparer.",
    "Des blocs pour donner une forme à la page : titres, listes, cases à cocher.",
    "Une base de données pour une liste d'éléments du même genre.",
  ]],
  ["p", "Les articles suivants reprennent ces trois idées l'une après l'autre, avec des exemples simples."],
];

export const caption = "À gauche, une page faite de blocs. À droite, une base de données : une ligne par élément, une colonne par information.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page et une base de données",
  "À gauche, une page avec un titre et plusieurs lignes qui représentent des blocs. À droite, un tableau de trois lignes qui représente une base de données.",
  `<text x="40" y="36" class="h">Page</text>
<rect x="40" y="54" width="190" height="170" rx="10" class="o"/>
<rect x="58" y="74" width="90" height="12" rx="6" class="f"/>
<circle cx="66" cy="108" r="6"/><rect x="80" y="104" width="100" height="8" rx="4" class="l"/>
<circle cx="66" cy="132" r="6"/><rect x="80" y="128" width="80" height="8" rx="4" class="l"/>
<rect x="58" y="158" width="150" height="8" rx="4" class="l"/>
<rect x="58" y="178" width="120" height="8" rx="4" class="l"/>
<text x="310" y="36" class="h">Base de données</text>
<rect x="310" y="54" width="210" height="170" rx="10" class="o"/>
<path d="M310 92h210M310 130h210M310 168h210M400 54v170M470 54v170"/>
<rect x="322" y="68" width="60" height="8" rx="4" class="f"/><rect x="412" y="68" width="40" height="8" rx="4" class="f"/><rect x="482" y="68" width="28" height="8" rx="4" class="f"/>
<rect x="322" y="107" width="60" height="8" rx="4" class="l"/><rect x="412" y="107" width="40" height="8" rx="4" class="l"/><rect x="482" y="107" width="28" height="8" rx="4" class="l"/>
<rect x="322" y="145" width="50" height="8" rx="4" class="l"/><rect x="412" y="145" width="44" height="8" rx="4" class="l"/><rect x="482" y="145" width="28" height="8" rx="4" class="l"/>
<rect x="322" y="183" width="64" height="8" rx="4" class="l"/><rect x="412" y="183" width="36" height="8" rx="4" class="l"/><rect x="482" y="183" width="28" height="8" rx="4" class="l"/>`,
);
