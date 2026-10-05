// Article : « Ajouter des images et des fichiers dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une page Notion peut contenir des images, des PDF et d'autres fichiers à côté de ton texte. Pratique pour garder un justificatif, une photo ou un document avec ses notes."],
  ["h2", "Ajouter une image"],
  ["ol", [
    "Sur une ligne vide, tape /image.",
    "Choisis Importer, puis sélectionne l'image sur ton ordinateur ou ton téléphone.",
    "Tu peux aussi glisser l'image directement dans la page.",
    "Tire sur un coin pour changer sa taille et ajoute une légende dessous si besoin.",
  ]],
  ["figure"],
  ["h2", "Ajouter un fichier"],
  ["p", "Même principe avec /fichier pour un document, ou /pdf pour afficher un PDF dans la page. Le fichier reste attaché à la page : tu peux l'ouvrir ou le télécharger plus tard."],
  ["h2", "Penser à la taille"],
  ["p", "Chaque plan Notion limite la taille des fichiers que tu peux importer. Si un fichier est refusé, vérifie la limite de ton plan sur la page des tarifs, ou réduis le fichier avant de le déposer."],
  ["ul", [
    "Réduis les grosses photos avant de les importer.",
    "N'ajoute pas de documents confidentiels dans une page que tu partages.",
    "Pour une longue vidéo, préfère un lien vers le service qui l'héberge.",
  ]],
];

export const caption = "Une image ou un fichier se glisse dans la page, avec une légende si besoin.";

export const points = ["/image pour ajouter une image", "/fichier pour un document, /pdf pour un PDF", "Vérifier la limite de taille de ton plan"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page avec une image et un fichier",
  "Une page contenant un titre, une image avec une légende, et un fichier PDF représenté par une petite vignette.",
  "<rect x=\"120\" y=\"36\" width=\"320\" height=\"196\" rx=\"10\" class=\"o\"/><rect x=\"140\" y=\"56\" width=\"110\" height=\"12\" rx=\"6\" class=\"f\"/><rect x=\"140\" y=\"80\" width=\"140\" height=\"80\" rx=\"10\" class=\"o\"/><path d=\"M140 148l36-30 28 22 20-14 56 22\"/><circle cx=\"170\" cy=\"102\" r=\"8\"/><rect x=\"140\" y=\"172\" width=\"100\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"140\" y=\"192\" width=\"120\" height=\"26\" rx=\"10\" class=\"o\"/><text x=\"152\" y=\"210\" class=\"s\">PDF</text><rect x=\"200\" y=\"200\" width=\"50\" height=\"7\" rx=\"3.5\" class=\"l\"/>",
);
