// Article : « Les blocs de base de Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Dans Notion, tout est un bloc. Pour en ajouter un, tape / sur une ligne vide : une liste apparaît, et tu continues à taper pour la filtrer. Voici ceux qui servent le plus."],
  ["h2", "Écrire et structurer"],
  ["ul", [
    "Titre : pour découper la page en parties. Tape /titre.",
    "Liste à puces ou numérotée : pour énumérer. Tape /puces ou /numérotée.",
    "Case à cocher : pour une tâche. Tape /case.",
    "Citation et séparateur : pour aérer. Tape /citation ou /séparateur.",
  ]],
  ["figure"],
  ["h2", "Mettre en avant"],
  ["p", "Le bloc Encadré met une information importante dans une boîte, avec une icône : utile pour un rappel ou une règle. Tape /encadré."],
  ["h2", "Transformer un bloc"],
  ["p", "Tu n'as pas besoin de choisir le bon bloc du premier coup. Clique sur la poignée à gauche d'une ligne (les six petits points), puis sur Transformer en : un paragraphe devient un titre, une liste devient une liste à cocher."],
  ["h2", "Déplacer"],
  ["p", "Attrape la même poignée et glisse le bloc plus haut ou plus bas. C'est ce qui rend les pages faciles à réorganiser."],
  ["p", "Les noms des blocs peuvent légèrement changer selon les mises à jour : si tu ne trouves pas un bloc, tape un mot proche après le /."],
];

export const caption = "Tape / sur une ligne vide pour choisir un bloc, puis continue à taper pour filtrer la liste.";

export const points = ["Taper / pour ajouter un bloc", "Transformer un bloc avec la poignée", "Glisser un bloc pour le déplacer"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : le menu des blocs",
  "Une ligne vide avec une barre oblique, et un menu qui propose les blocs Titre, Liste et Case à cocher.",
  "<rect x=\"40\" y=\"40\" width=\"200\" height=\"170\" rx=\"10\" class=\"o\"/><rect x=\"58\" y=\"62\" width=\"90\" height=\"12\" rx=\"6\" class=\"f\"/><text x=\"58\" y=\"112\" class=\"h\">/</text><rect x=\"58\" y=\"128\" width=\"140\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"58\" y=\"148\" width=\"110\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"280\" y=\"60\" width=\"230\" height=\"150\" rx=\"10\" class=\"o\"/><text x=\"298\" y=\"92\" class=\"s\">Titre</text><text x=\"298\" y=\"120\" class=\"s\">Liste à puces</text><rect x=\"298\" y=\"138\" width=\"12\" height=\"12\" rx=\"3\" class=\"o\"/><text x=\"320\" y=\"148\" class=\"s\">Case à cocher</text><text x=\"298\" y=\"176\" class=\"s\">Encadré</text><path d=\"M240 100h28\"/><path d=\"M260 92l8 8-8 8\"/>",
);
