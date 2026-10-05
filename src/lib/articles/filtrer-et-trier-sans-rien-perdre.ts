// Article : « Filtrer et trier sans rien perdre ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Quand une base de données grandit, la liste devient longue. Les filtres et les tris servent à n'afficher que ce qui compte aujourd'hui. Ils ne suppriment rien : les éléments cachés sont toujours dans la base, ils ne sont simplement pas visibles dans cette vue."],
  ["h2", "Filtrer : choisir ce qu'on voit"],
  ["p", "Un filtre est une règle. Par exemple : le statut n'est pas Terminé. Seuls les éléments qui respectent la règle restent affichés. Tu peux cumuler plusieurs règles, comme un statut et une date."],
  ["ol", [
    "Ouvre ta base de données et choisis la vue à régler.",
    "Clique sur Filtrer, dans la barre au-dessus de la liste.",
    "Choisis la propriété à utiliser, par exemple Statut.",
    "Choisis la condition, puis la valeur : n'est pas, Terminé.",
  ]],
  ["figure"],
  ["h2", "Trier : choisir l'ordre"],
  ["p", "Un tri range les éléments qui restent : par date, du plus proche au plus lointain, ou par nom, de A à Z. Pour une liste de tâches, trier par date est souvent le plus utile. Clique sur Trier, choisis la propriété, puis le sens."],
  ["h2", "Un filtre par vue"],
  ["p", "Les filtres et les tris appartiennent à la vue, pas à la base. Tu peux donc avoir une vue À faire, qui cache le terminé, et une vue Tout, qui n'a aucun filtre. Pour une vue du jour, utilise un filtre sur une date relative comme aujourd'hui : la vue se met à jour toute seule."],
  ["h2", "Si un élément a disparu"],
  ["p", "Avant de croire qu'il est perdu, regarde la barre de la vue : un filtre actif le cache peut-être. Retire le filtre, ou ouvre la vue sans filtre : l'élément y sera. Tant que tu ne l'as pas supprimé, il existe encore."],
  ["ul", [
    "Un filtre cache des éléments, il ne les supprime pas.",
    "Un tri change seulement l'ordre.",
    "Chaque vue a ses propres filtres et ses propres tris.",
  ]],
];

export const caption = "Cinq tâches dans la base. Avec le filtre « pas terminé », la vue n'en montre que deux. Les autres sont toujours là.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : un filtre cache des éléments sans les supprimer",
  "À gauche, une liste de cinq éléments dont trois sont terminés. Une flèche passe par un filtre et mène à une liste de deux éléments, ceux qui ne sont pas terminés.",
  `<text x="40" y="30" class="h">Tous les éléments</text>
<rect x="40" y="44" width="170" height="172" rx="10" class="o"/>
<rect x="56" y="62" width="100" height="8" rx="4" class="l"/><rect x="170" y="58" width="28" height="14" rx="7"/>
<rect x="56" y="92" width="80" height="8" rx="4" class="l"/><rect x="170" y="88" width="28" height="14" rx="7" class="k"/>
<rect x="56" y="122" width="110" height="8" rx="4" class="l"/><rect x="170" y="118" width="28" height="14" rx="7"/>
<rect x="56" y="152" width="90" height="8" rx="4" class="l"/><rect x="170" y="148" width="28" height="14" rx="7" class="k"/>
<rect x="56" y="182" width="70" height="8" rx="4" class="l"/><rect x="170" y="178" width="28" height="14" rx="7" class="k"/>
<path d="M226 130h48"/><path d="M266 122l8 8-8 8"/>
<rect x="232" y="82" width="84" height="26" rx="13" class="o"/><text x="274" y="100" text-anchor="middle" class="s">filtre</text>
<text x="350" y="30" class="h">Après le filtre</text>
<rect x="350" y="44" width="170" height="172" rx="10" class="o"/>
<rect x="366" y="62" width="100" height="8" rx="4" class="l"/><rect x="480" y="58" width="28" height="14" rx="7"/>
<rect x="366" y="122" width="110" height="8" rx="4" class="l"/><rect x="480" y="118" width="28" height="14" rx="7"/>
<text x="435" y="196" text-anchor="middle" class="s">2 éléments visibles</text>`,
);
