// Article : « Les icônes et les couvertures de page ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une icône et une couverture rendent une page reconnaissable d'un coup d'œil, dans la barre latérale comme en haut de la page. Ce n'est pas obligatoire, mais ça aide à s'y retrouver quand tu as beaucoup de pages."],
  ["h2", "Ajouter une icône"],
  ["ol", [
    "Ouvre la page.",
    "Passe la souris juste au-dessus du titre et clique sur Ajouter une icône (ou Add icon).",
    "Choisis un emoji, une icône proposée, ou téléverse une petite image.",
    "L'icône apparaît aussi à côté du titre dans la barre latérale.",
  ]],
  ["figure"],
  ["h2", "Ajouter une couverture"],
  ["p", "Toujours en haut de la page, clique sur Ajouter une couverture. Tu peux prendre une image de la galerie Notion, en chercher une sur Unsplash, coller un lien, ou téléverser la tienne. Passe ensuite sur la couverture et choisis Repositionner si le cadrage ne te convient pas."],
  ["h2", "Garder ça simple"],
  ["ul", [
    "Une icône par grand sujet suffit : Travail, Maison, Journal…",
    "Évite les couvertures trop chargées si tu lis surtout sur téléphone.",
    "Tu peux retirer l'icône ou la couverture à tout moment depuis le même menu.",
  ]],
  ["p", "Pour ranger ensuite tes pages dans la barre latérale, vois « Ranger tes pages dans la barre latérale »."],
];

export const caption = "En haut : une couverture. À gauche du titre : une icône, aussi visible dans la barre latérale.";

export const points = ["Ajoute une icône au-dessus du titre", "Ajoute une couverture pour le bandeau", "L'icône apparaît aussi dans la barre latérale"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : icône et couverture de page",
  "Une page avec une bande de couverture en haut, une icône carrée et un titre, puis quelques lignes de texte.",
  `<rect x="80" y="30" width="400" height="200" rx="10" class="o"/><rect x="80" y="30" width="400" height="70" rx="10" class="k"/><rect x="80" y="70" width="400" height="30" class="k"/><rect x="110" y="90" width="44" height="44" rx="10" class="o"/><rect x="122" y="102" width="20" height="20" rx="4" class="f"/><rect x="168" y="108" width="160" height="14" rx="7" class="f"/><rect x="110" y="160" width="280" height="8" rx="4" class="l"/><rect x="110" y="182" width="220" height="8" rx="4" class="l"/><rect x="110" y="204" width="250" height="8" rx="4" class="l"/>`,
);
