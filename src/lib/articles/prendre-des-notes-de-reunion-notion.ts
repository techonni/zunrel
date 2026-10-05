// Article : « Prendre des notes de réunion dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Des notes de réunion servent à deux choses : se souvenir de ce qui a été décidé, et savoir qui fait quoi ensuite. Une page Notion avec quatre titres suffit."],
  ["h2", "La structure"],
  ["ol", [
    "Crée une page et nomme-la avec la date et le sujet, par exemple « 12 mars, point équipe ».",
    "Tape /titre pour ajouter un titre « Ordre du jour », puis une liste à puces dessous.",
    "Ajoute un titre « Décisions » : une phrase courte par décision.",
    "Ajoute un titre « Actions » avec des cases à cocher : tape /case, puis écris la tâche et le prénom de la personne.",
  ]],
  ["figure"],
  ["h2", "Pendant la réunion"],
  ["p", "Écris des mots-clés, pas des phrases entières. Tu pourras compléter juste après, tant que tout est frais."],
  ["h2", "Après la réunion"],
  ["ul", [
    "Relis les décisions et corrige ce qui manque.",
    "Partage la page avec les participants.",
    "Coche les actions au fur et à mesure.",
  ]],
  ["p", "Si tu fais cette réunion toutes les semaines, enregistre cette page comme modèle : voir « Créer un modèle pour ne plus recommencer »."],
];

export const caption = "Quatre blocs suffisent : l'ordre du jour, les décisions, les actions, et la date en titre.";

export const points = ["Un titre par partie : ordre du jour, décisions, actions", "Des cases à cocher pour les actions", "Un modèle pour la prochaine fois"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page de notes de réunion",
  "Une page avec trois sections : ordre du jour, décisions, actions avec des cases à cocher.",
  "<rect x=\"120\" y=\"36\" width=\"320\" height=\"200\" rx=\"10\" class=\"o\"/><rect x=\"140\" y=\"56\" width=\"120\" height=\"12\" rx=\"6\" class=\"f\"/><text x=\"140\" y=\"96\" class=\"h2\">Ordre du jour</text><rect x=\"140\" y=\"106\" width=\"180\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"140\" y=\"122\" width=\"140\" height=\"7\" rx=\"3.5\" class=\"l\"/><text x=\"140\" y=\"156\" class=\"h2\">Décisions</text><rect x=\"140\" y=\"166\" width=\"200\" height=\"7\" rx=\"3.5\" class=\"l\"/><text x=\"140\" y=\"198\" class=\"h2\">Actions</text><rect x=\"140\" y=\"206\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><rect x=\"162\" y=\"208\" width=\"150\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"140\" y=\"222\" width=\"12\" height=\"12\" rx=\"3\" class=\"f\"/><rect x=\"162\" y=\"224\" width=\"120\" height=\"7\" rx=\"3.5\" class=\"l\"/>",
);
