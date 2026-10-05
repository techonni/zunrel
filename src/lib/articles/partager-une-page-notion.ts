// Article : « Partager une page Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Par défaut, tes pages sont privées. Pour les montrer à quelqu'un, tu les partages. Notion te laisse choisir ce que cette personne a le droit de faire."],
  ["h2", "Inviter une personne"],
  ["ol", [
    "Ouvre la page à partager.",
    "Clique sur le bouton Partager, en haut à droite.",
    "Écris l'adresse e-mail de la personne et choisis son niveau d'accès : lecture seule, commentaires ou modification.",
    "Envoie l'invitation.",
  ]],
  ["figure"],
  ["h2", "Publier sur le web"],
  ["p", "Dans le même menu, tu peux publier la page sur le web : toute personne qui a le lien peut la lire, même sans compte Notion. Pratique pour un modèle ou une page d'information. Ne publie jamais une page qui contient des données personnelles."],
  ["h2", "Reprendre la main"],
  ["ul", [
    "Retire l'accès d'une personne depuis le même menu Partager.",
    "Désactive la publication sur le web quand tu n'en as plus besoin.",
    "Vérifie les sous-pages : elles peuvent suivre les réglages de la page parent.",
  ]],
  ["p", "Les options de partage dépendent de ton plan Notion. Pour savoir ce qui change à plusieurs, lis « Notion est-il gratuit ? »."],
];

export const caption = "Le bouton Partager choisit qui voit la page, et ce qu'il peut y faire.";

export const points = ["Le bouton Partager invite par e-mail", "Trois niveaux d'accès au choix", "Publier sur le web : toute personne qui a le lien"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : le partage d'une page",
  "Une page à gauche, avec un bouton Partager. Une flèche mène vers deux personnes, l'une en lecture, l'autre en modification.",
  "<rect x=\"40\" y=\"40\" width=\"200\" height=\"170\" rx=\"10\" class=\"o\"/><rect x=\"58\" y=\"62\" width=\"90\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"58\" y=\"96\" width=\"140\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"58\" y=\"116\" width=\"110\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"150\" y=\"172\" width=\"80\" height=\"22\" rx=\"11\" class=\"f\"/><text x=\"190.0\" y=\"188\" text-anchor=\"middle\" class=\"s\" style=\"fill:#fff\">Partager</text><path d=\"M262 125h50\"/><path d=\"M304 117l8 8-8 8\"/><circle cx=\"372\" cy=\"86\" r=\"14\"/><path d=\"M346 128a26 26 0 0 1 52 0\"/><rect x=\"440\" y=\"76\" width=\"70\" height=\"22\" rx=\"11\" class=\"o\"/><text x=\"475.0\" y=\"92\" text-anchor=\"middle\" class=\"s\">lecture</text><circle cx=\"372\" cy=\"170\" r=\"14\"/><path d=\"M346 212a26 26 0 0 1 52 0\"/><rect x=\"440\" y=\"160\" width=\"70\" height=\"22\" rx=\"11\" class=\"o\"/><text x=\"475.0\" y=\"176\" text-anchor=\"middle\" class=\"s\">modifier</text>",
);
