// Article : « Les propriétés d'une base de données ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Dans une base de données Notion, chaque colonne est une propriété. Le nom de l'élément en est une, la date en est une autre, le statut aussi. Choisir le bon type de propriété est ce qui rend ensuite le tri et le filtre faciles."],
  ["h2", "Les types les plus utiles"],
  ["ul", [
    "Texte : une note courte, une remarque.",
    "Sélection : un seul choix dans une courte liste, par exemple une catégorie.",
    "Sélection multiple : plusieurs étiquettes possibles sur un même élément.",
    "Statut : les étapes d'un travail, par exemple à faire, en cours, terminé.",
    "Date : une échéance ou un jour de publication.",
    "Case à cocher : une réponse oui ou non.",
    "Nombre : un prix, une note, une quantité.",
  ]],
  ["figure"],
  ["h2", "Ajouter une propriété"],
  ["ol", [
    "Dans la base, clique sur le signe + à droite des titres de colonnes.",
    "Donne un nom court à la propriété.",
    "Choisis son type dans la liste.",
    "Pour une sélection ou un statut, ajoute les options : trois ou quatre suffisent.",
  ]],
  ["h2", "Trois conseils pour bien démarrer"],
  ["p", "Utilise une sélection plutôt qu'un texte quand les réponses se répètent. Écrire à la main « Travail » à un endroit et « travail » ailleurs empêche de filtrer proprement. Une liste d'options règle le problème."],
  ["p", "Garde peu de propriétés : quatre ou cinq au début. Une colonne que tu ne remplis jamais encombre l'écran sans rien apporter. Tu pourras en ajouter quand un besoin réel apparaît."],
  ["p", "Laisse de côté, pour l'instant, les propriétés avancées comme les formules, les relations et les cumuls. Elles servent plus tard, quand plusieurs bases doivent se parler."],
];

export const caption = "Chaque colonne a un type : texte pour le nom, statut, date et case à cocher pour le reste.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : les colonnes d'une base de données et leur type",
  "Un tableau de trois lignes avec quatre colonnes : nom en texte, statut, date et case à cocher. Une étiquette sous chaque colonne indique son type.",
  `<rect x="40" y="30" width="480" height="150" rx="10" class="o"/>
<path d="M40 70h480M40 110h480M40 150h480M190 30v150M310 30v150M430 30v150"/>
<text x="56" y="56" class="h2">Nom</text><text x="206" y="56" class="h2">Statut</text><text x="326" y="56" class="h2">Date</text><text x="446" y="56" class="h2">Fait</text>
<rect x="56" y="90" width="90" height="8" rx="4" class="l"/><rect x="206" y="86" width="64" height="16" rx="8"/><rect x="326" y="90" width="60" height="8" rx="4" class="l"/><rect x="446" y="89" width="14" height="14" rx="3"/>
<rect x="56" y="130" width="70" height="8" rx="4" class="l"/><rect x="206" y="126" width="64" height="16" rx="8"/><rect x="326" y="130" width="60" height="8" rx="4" class="l"/><rect x="446" y="129" width="14" height="14" rx="3"/><path d="M449 136l3 3 6-7"/>
<rect x="56" y="162" width="100" height="8" rx="4" class="l"/><rect x="206" y="158" width="64" height="16" rx="8"/><rect x="326" y="162" width="60" height="8" rx="4" class="l"/><rect x="446" y="161" width="14" height="14" rx="3"/>
<text x="56" y="214" class="s">texte</text><text x="206" y="214" class="s">statut</text><text x="326" y="214" class="s">date</text><text x="446" y="214" class="s">case à cocher</text>
<path d="M98 190v-12M238 190v-12M358 190v-12M474 190v-12"/>`,
);
