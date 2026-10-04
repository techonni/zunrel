// Article : « L'iPhone en gris le soir ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "La couleur sur un écran n'est pas neutre. Une icône vive, une photo, un bouton orange : le regard s'y pose avant que tu aies choisi de regarder. Le soir, quand la journée est déjà pleine, ce petit appel suffit à rouvrir une app que tu avais fermée."],
  ["p", "Le filtre nuances de gris enlève cette couche. L'iPhone reste utilisable : les textes se lisent, les apps s'ouvrent, les messages partent. Il est seulement moins tentant. Beaucoup de gens le réservent à la fin de journée, à partir de 21 h."],
  ["h2", "Activer le gris"],
  ["ol", [
    "Ouvre Réglages, puis Accessibilité, puis Affichage et taille du texte.",
    "Ouvre Filtres de couleur et active les filtres.",
    "Choisis Nuances de gris. L'écran passe au gris tout de suite : tu peux juger l'effet avant de continuer.",
    "Reviens en arrière. Le filtre reste actif tant que tu ne le coupes pas.",
  ]],
  ["p", "Si le gris toute la journée te gêne pour les photos ou un plan, ne le laisse pas en permanence. Le raccourci sert à ça."],
  ["h2", "Un triple-clic pour l'allumer et l'éteindre"],
  ["p", "Dans Réglages, puis Accessibilité, tout en bas, ouvre Raccourci d'accessibilité. Coche Filtres de couleur. Ensuite, trois clics sur le bouton latéral activent ou coupent le gris, sans repasser par les menus."],
  ["p", "Le geste devient une frontière. Tu l'utilises en t'asseyant le soir, ou en posant le téléphone sur la table. Le rallumer en couleur demande le même geste : ce n'est pas un verrou, c'est un ralentissement."],
  ["figure"],
  ["h2", "À quelle heure"],
  ["p", "Choisis une heure fixe, pas une humeur. 21 h convient à beaucoup de soirées. Avant cette heure, l'écran reste en couleur si tu en as besoin. Après, le gris est le réglage normal, jusqu'au lendemain matin."],
  ["p", "L'app Raccourcis peut automatiser ce passage, avec une automatisation personnelle à heure fixe qui active les filtres de couleur. Si tu n'as pas envie de régler ça maintenant, le triple-clic suffit. L'habitude compte plus que l'automatisation."],
  ["h2", "Ce que le gris ne fait pas"],
  ["p", "Il ne coupe pas les notifications, ni le défilement. Une app en gris peut encore retenir. Le filtre enlève un appel, pas tous. Il se combine bien avec le résumé programmé et avec un téléphone qui charge hors de la chambre : chaque réglage retire une raison d'ouvrir."],
  ["p", "Les premiers soirs, tu vérifieras peut-être que le filtre est bien là. C'est normal. Au bout d'une semaine, le gris du soir devient le visage habituel du téléphone, et la couleur du matin marque le début de la journée."],
  ["h2", "En résumé"],
  ["ul", [
    "Nuances de gris, dans Accessibilité, puis Affichage et taille du texte, puis Filtres de couleur.",
    "Triple-clic sur le bouton latéral, via le raccourci d'accessibilité, pour alterner.",
    "Une heure fixe, par exemple 21 h, plutôt qu'une décision à chaque fois.",
    "Le gris ralentit. Il ne remplace pas les autres réglages.",
  ]],
  ["p", "À quelle heure passes-tu en gris ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Le même écran verrouillé, en couleur puis en gris. L'heure et la date restent. Les appels visuels disparaissent.";

export const diagram = svg(
  "0 0 560 280",
  "Schéma : écran en couleur le jour, en gris le soir",
  "Deux téléphones simplifiés. À gauche, jour, avec des pastilles de couleur. À droite, soir, le même cadre en traits gris seulement, marqué 21 h.",
  `<text x="40" y="36" class="h">Jour</text>
<rect x="70" y="60" width="120" height="150" rx="22" class="o"/>
<circle cx="102" cy="110" r="10" class="f"/>
<circle cx="130" cy="110" r="10" class="l"/>
<circle cx="158" cy="110" r="10" class="f"/>
<text x="130" y="240" text-anchor="middle" class="s">couleur</text>
<path d="M230 130h80"/>
<path d="M298 122l12 8-12 8"/>
<text x="360" y="36" class="h">Soir · 21 h</text>
<rect x="370" y="60" width="120" height="150" rx="22" class="o"/>
<circle cx="402" cy="110" r="10"/>
<circle cx="430" cy="110" r="10"/>
<circle cx="458" cy="110" r="10"/>
<text x="430" y="240" text-anchor="middle" class="s">nuances de gris</text>`,
);
