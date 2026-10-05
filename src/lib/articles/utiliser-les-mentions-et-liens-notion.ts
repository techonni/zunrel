// Article : « Utiliser les mentions et les liens dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Ce qui rend un espace Notion pratique, c'est de pouvoir passer d'une page à l'autre en un clic. Deux outils suffisent : la mention avec @ et le lien copié."],
  ["h2", "Mentionner une page avec @"],
  ["ol", [
    "Dans une page, tape @ puis les premières lettres du titre d'une autre page.",
    "Choisis la page dans la liste : un lien apparaît dans ton texte, avec le titre à jour.",
    "Clique dessus pour y aller.",
  ]],
  ["figure"],
  ["h2", "Mentionner une date ou une personne"],
  ["p", "Avec le même @, tu peux insérer une date (par exemple « demain ») ou une personne de ton espace de travail. Utile pour une tâche : « Appeler le comptable avant vendredi »."],
  ["h2", "Copier un lien"],
  ["p", "Pour lier une page à un texte, sélectionne le texte et colle une adresse (Cmd ou Ctrl + V), ou utilise Cmd ou Ctrl + K. Pour obtenir l'adresse d'une page, ouvre le menu de la page et choisis Copier le lien."],
  ["h2", "Pour un espace bien relié"],
  ["ul", [
    "Crée une page d'accueil qui renvoie vers tes pages importantes.",
    "Ajoute un lien de retour vers cette page d'accueil sur chaque page.",
    "Si tu renommes une page, les mentions suivent automatiquement.",
  ]],
];

export const caption = "Une mention @ crée un lien vers une autre page, dont le titre reste à jour.";

export const points = ["@ pour mentionner une page, une date ou une personne", "Cmd ou Ctrl + K pour ajouter un lien", "Un lien de retour vers la page d'accueil"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une mention entre deux pages",
  "Une page avec une ligne de texte contenant une mention, et une flèche qui mène à une seconde page.",
  "<rect x=\"40\" y=\"50\" width=\"210\" height=\"150\" rx=\"10\" class=\"o\"/><rect x=\"58\" y=\"70\" width=\"90\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"58\" y=\"100\" width=\"130\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"110\" y=\"118\" width=\"84\" height=\"22\" rx=\"11\" class=\"f\"/><text x=\"152.0\" y=\"134\" text-anchor=\"middle\" class=\"s\" style=\"fill:#fff\">@Projet</text><rect x=\"58\" y=\"160\" width=\"120\" height=\"7\" rx=\"3.5\" class=\"l\"/><path d=\"M276 125h60\"/><path d=\"M328 117l8 8-8 8\"/><rect x=\"360\" y=\"50\" width=\"160\" height=\"150\" rx=\"10\" class=\"o\"/><rect x=\"378\" y=\"70\" width=\"70\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"378\" y=\"100\" width=\"110\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"378\" y=\"120\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"378\" y=\"140\" width=\"100\" height=\"7\" rx=\"3.5\" class=\"l\"/>",
);
