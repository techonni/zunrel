// Article : « Les raccourcis clavier de Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Tu n'as pas besoin de retenir des dizaines de raccourcis. Quelques gestes suffisent pour aller nettement plus vite. Sur Mac, utilise la touche Cmd ; sur Windows, la touche Ctrl."],
  ["h2", "Les cinq à connaître"],
  ["ol", [
    "/ : ajoute un bloc (titre, liste, case à cocher, image…).",
    "@ : mentionne une page, une personne ou une date, et crée un lien.",
    "Cmd ou Ctrl + B, I : met en gras ou en italique le texte sélectionné.",
    "Cmd ou Ctrl + P : ouvre la recherche pour aller à une page sans toucher la souris.",
    "Cmd ou Ctrl + Z : annule la dernière action.",
  ]],
  ["figure"],
  ["h2", "Un petit plus : la mise en forme en écrivant"],
  ["p", "Notion comprend certains signes tapés au début d'une ligne. Écris # puis un espace pour un titre, - puis un espace pour une liste à puces, 1. puis un espace pour une liste numérotée. La ligne se transforme toute seule."],
  ["h2", "Comment les retenir"],
  ["p", "Choisis-en deux cette semaine, par exemple / et Cmd ou Ctrl + P. Quand ils deviennent automatiques, ajoute-en un autre. Les raccourcis peuvent évoluer : le menu d'aide de Notion garde la liste à jour."],
];

export const caption = "Cinq gestes courants : /, @, gras ou italique, recherche, annuler.";

export const points = ["/ pour ajouter un bloc", "@ pour mentionner une page", "Cmd ou Ctrl + P pour chercher"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : cinq raccourcis clavier",
  "Cinq touches représentées par des carrés : barre oblique, arobase, B, P et Z, avec une légende sous chacune.",
  "<rect x=\"40\" y=\"70\" width=\"80\" height=\"70\" rx=\"10\" class=\"o\"/><text x=\"80\" y=\"115\" text-anchor=\"middle\" class=\"h\">/</text><text x=\"80\" y=\"170\" text-anchor=\"middle\" class=\"s\">bloc</text><rect x=\"140\" y=\"70\" width=\"80\" height=\"70\" rx=\"10\" class=\"o\"/><text x=\"180\" y=\"115\" text-anchor=\"middle\" class=\"h\">@</text><text x=\"180\" y=\"170\" text-anchor=\"middle\" class=\"s\">lien</text><rect x=\"240\" y=\"70\" width=\"80\" height=\"70\" rx=\"10\" class=\"o\"/><text x=\"280\" y=\"115\" text-anchor=\"middle\" class=\"h\">B</text><text x=\"280\" y=\"170\" text-anchor=\"middle\" class=\"s\">gras</text><rect x=\"340\" y=\"70\" width=\"80\" height=\"70\" rx=\"10\" class=\"o\"/><text x=\"380\" y=\"115\" text-anchor=\"middle\" class=\"h\">P</text><text x=\"380\" y=\"170\" text-anchor=\"middle\" class=\"s\">recherche</text><rect x=\"440\" y=\"70\" width=\"80\" height=\"70\" rx=\"10\" class=\"o\"/><text x=\"480\" y=\"115\" text-anchor=\"middle\" class=\"h\">Z</text><text x=\"480\" y=\"170\" text-anchor=\"middle\" class=\"s\">annuler</text>",
);
