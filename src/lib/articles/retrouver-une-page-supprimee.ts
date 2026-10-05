// Article : « Retrouver une page supprimée ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une page effacée n'est pas perdue tout de suite. Notion la range dans la Corbeille. Tu as en général un délai pour la restaurer avant qu'elle disparaisse définitivement."],
  ["h2", "Restaurer depuis la Corbeille"],
  ["ol", [
    "Dans la barre latérale, ouvre Corbeille (souvent en bas).",
    "Cherche la page par son titre.",
    "Ouvre-la pour vérifier le contenu si besoin.",
    "Clique sur Restaurer : la page revient à son emplacement d'origine.",
  ]],
  ["figure"],
  ["h2", "Combien de temps"],
  ["p", "Par défaut, les pages restent dans la Corbeille environ 30 jours, puis elles en sont retirées. Sur certains plans Entreprise, l'espace peut allonger ou raccourcir ce délai. Après la suppression définitive de la Corbeille, la récupération devient beaucoup plus difficile."],
  ["h2", "Bons réflexes"],
  ["ul", [
    "Ne vide pas la Corbeille page par page sans vérifier.",
    "Si tu as supprimé une sous-page, cherche aussi le nom du parent.",
    "Pour éviter les accidents, déplace plutôt une page dans une archive qu'une vraie suppression.",
  ]],
  ["p", "Pour ranger sans supprimer, vois « Ranger tes pages dans la barre latérale »."],
];

export const caption = "La Corbeille garde la page un moment : restaure-la d'un clic.";

export const points = ["Ouvre Corbeille dans la barre latérale", "Restaure pour retrouver la page", "Agis avant la suppression définitive"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : corbeille Notion",
  "Une corbeille avec une page à l'intérieur et une flèche de restauration vers la barre latérale.",
  `<rect x="40" y="50" width="200" height="160" rx="10" class="o"/><text x="140" y="90" text-anchor="middle" class="h2">Corbeille</text><rect x="70" y="110" width="140" height="70" rx="8" class="o"/><rect x="88" y="130" width="100" height="10" rx="5" class="f"/><rect x="88" y="150" width="80" height="8" rx="4" class="l"/><path d="M260 130h50"/><path d="M302 122l8 8-8 8"/><rect x="330" y="50" width="200" height="160" rx="10" class="o"/><text x="430" y="90" text-anchor="middle" class="h2">Restaurée</text><rect x="360" y="120" width="140" height="12" rx="6" class="f"/><rect x="360" y="150" width="110" height="8" rx="4" class="l"/>`,
);
