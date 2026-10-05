// Article : « Les raccourcis Notion à connaître ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Tu n'as pas besoin d'apprendre des dizaines de raccourcis. Quelques gestes suffisent. Sur Mac, utilise la touche Cmd ; sur Windows, la touche Ctrl."],
  ["h2", "Le geste le plus utile : /"],
  ["p", "Sur une ligne vide, tape / . Un menu s'ouvre avec tous les blocs : titre, liste, case à cocher, image, tableau… Tape ensuite le début du nom (par exemple todo ou image) pour filtrer. C'est le moyen le plus simple d'ajouter quelque chose sans cliquer."],
  ["ol", [
    "/ : ouvre le menu des blocs.",
    "@ : mentionne une page, une personne ou une date.",
    "Cmd ou Ctrl + P : ouvre la recherche pour aller à une page.",
    "Cmd ou Ctrl + B : met le texte sélectionné en gras.",
    "Cmd ou Ctrl + Z : annule la dernière action.",
  ]],
  ["figure"],
  ["h2", "Écrire sans le menu"],
  ["p", "Au début d'une ligne, Notion comprend certains signes. Écris # puis un espace pour un titre, - puis un espace pour une liste à puces, > puis un espace pour un bloc repliable. La ligne se transforme toute seule."],
  ["h2", "Comment les retenir"],
  ["ul", [
    "Commence par / et Cmd ou Ctrl + P cette semaine.",
    "Ajoute @ quand tu veux relier une page ou poser une date.",
    "La liste complète reste dans l'aide de Notion, et peut évoluer.",
  ]],
  ["p", "Pour une autre sélection de raccourcis, lis aussi « Les raccourcis clavier de Notion »."],
];

export const caption = "Cinq gestes pour aller plus vite : /, @, recherche, gras, annuler.";

export const points = ["Tape / pour ajouter un bloc", "Cmd ou Ctrl + P pour chercher", "@ pour une page ou une date"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : raccourcis Notion",
  "Cinq touches : barre oblique, arobase, P, B et Z, avec une courte légende sous chacune.",
  `<rect x="40" y="70" width="80" height="70" rx="10" class="o"/><text x="80" y="115" text-anchor="middle" class="h">/</text><text x="80" y="170" text-anchor="middle" class="s">bloc</text><rect x="140" y="70" width="80" height="70" rx="10" class="o"/><text x="180" y="115" text-anchor="middle" class="h">@</text><text x="180" y="170" text-anchor="middle" class="s">mention</text><rect x="240" y="70" width="80" height="70" rx="10" class="o"/><text x="280" y="115" text-anchor="middle" class="h">P</text><text x="280" y="170" text-anchor="middle" class="s">chercher</text><rect x="340" y="70" width="80" height="70" rx="10" class="o"/><text x="380" y="115" text-anchor="middle" class="h">B</text><text x="380" y="170" text-anchor="middle" class="s">gras</text><rect x="440" y="70" width="80" height="70" rx="10" class="o"/><text x="480" y="115" text-anchor="middle" class="h">Z</text><text x="480" y="170" text-anchor="middle" class="s">annuler</text>`,
);
