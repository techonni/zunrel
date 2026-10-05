// Article : « Créer une page d'accueil dans Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Quand ton espace de travail grandit, une page d'accueil évite de chercher. C'est ta page de départ : quelques liens vers les pages et les bases de données que tu ouvres le plus souvent."],
  ["h2", "La construire"],
  ["ol", [
    "Crée une page « Accueil » et mets-la en favori pour la retrouver tout en haut de la barre latérale.",
    "Ajoute un titre par thème : « Travail », « Maison », « Lectures ».",
    "Sous chaque titre, mentionne tes pages avec @ ou ajoute un lien vers ta base de données.",
    "Mets les liens les plus utilisés en premier.",
  ]],
  ["figure"],
  ["h2", "Aller un peu plus loin"],
  ["ul", [
    "Mets deux sections côte à côte : attrape la poignée d'un bloc et dépose-le à droite d'un autre pour créer des colonnes.",
    "Ajoute un encadré avec la seule chose à faire aujourd'hui.",
    "Ajoute la vue filtrée de ta liste de tâches pour voir ce qui est à faire sans quitter l'accueil.",
  ]],
  ["h2", "À éviter"],
  ["p", "Ne mets pas tout sur l'accueil. Dix liens bien choisis valent mieux que cinquante. Si une page ne t'a pas servi depuis un mois, retire-la de l'accueil : elle reste dans l'espace de travail."],
];

export const caption = "Une page de départ avec quelques liens vers les pages que tu utilises le plus.";

export const points = ["Un titre par thème", "Des mentions @ vers tes pages importantes", "Dix liens bien choisis, pas cinquante"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page d'accueil avec des liens",
  "Une page avec un titre et deux colonnes de liens vers d'autres pages.",
  "<rect x=\"60\" y=\"36\" width=\"440\" height=\"196\" rx=\"10\" class=\"o\"/><rect x=\"80\" y=\"56\" width=\"100\" height=\"12\" rx=\"6\" class=\"f\"/><text x=\"80\" y=\"98\" class=\"h2\">Travail</text><rect x=\"80\" y=\"108\" width=\"190\" height=\"24\" rx=\"10\" class=\"o\"/><rect x=\"92\" y=\"116\" width=\"100\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"80\" y=\"138\" width=\"190\" height=\"24\" rx=\"10\" class=\"o\"/><rect x=\"92\" y=\"146\" width=\"80\" height=\"7\" rx=\"3.5\" class=\"l\"/><text x=\"300\" y=\"98\" class=\"h2\">Maison</text><rect x=\"300\" y=\"108\" width=\"180\" height=\"24\" rx=\"10\" class=\"o\"/><rect x=\"312\" y=\"116\" width=\"90\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"300\" y=\"138\" width=\"180\" height=\"24\" rx=\"10\" class=\"o\"/><rect x=\"312\" y=\"146\" width=\"110\" height=\"7\" rx=\"3.5\" class=\"l\"/><rect x=\"80\" y=\"176\" width=\"400\" height=\"34\" rx=\"10\" class=\"o\"/><rect x=\"96\" y=\"190\" width=\"160\" height=\"7\" rx=\"3.5\" class=\"f\"/>",
);
