// Article : « Les blocs repliables ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un bloc repliable (toggle) cache le détail derrière un titre. Tu cliques pour ouvrir, tu recliques pour fermer. Idéal pour une FAQ, des notes longues ou une checklist que tu ne veux pas voir tout le temps."],
  ["h2", "Créer un bloc repliable"],
  ["ol", [
    "Sur une ligne vide, tape /toggle, ou écris > puis un espace.",
    "Donne un titre clair : ce que l'on voit quand le bloc est fermé.",
    "Indente le contenu en dessous (Tab) pour le ranger à l'intérieur du toggle.",
    "Clique sur la flèche à gauche du titre pour ouvrir ou fermer.",
  ]],
  ["figure"],
  ["h2", "Titres repliables"],
  ["p", "Tu peux aussi transformer un titre en titre repliable : passe par le menu du bloc (⋮⋮), choisis « Transformer en », puis un titre repliable. Tout ce qui se trouve sous ce titre peut alors se plier avec lui."],
  ["h2", "Quand s'en servir"],
  ["ul", [
    "Garder une page courte : le détail reste à un clic.",
    "Regrouper des réponses, des exemples ou des archives.",
    "Éviter les pages interminables sans supprimer l'information.",
  ]],
  ["p", "Pour ouvrir ou fermer tous les toggles d'une page d'un coup, Notion propose aussi un raccourci dédié (Cmd ou Ctrl + Option ou Alt + T). Voir « Les raccourcis Notion à connaître »."],
];

export const caption = "Un titre visible, le détail caché derrière une flèche.";

export const points = ["> puis espace pour un toggle", "Un titre clair, le détail en dessous", "Clique la flèche pour ouvrir ou fermer"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : bloc repliable",
  "À gauche un toggle fermé avec une flèche. À droite le même ouvert avec trois lignes de contenu.",
  `<text x="40" y="36" class="h">Fermé</text><rect x="40" y="54" width="200" height="160" rx="10" class="o"/><path d="M62 90l10 6-10 6"/><rect x="88" y="86" width="120" height="12" rx="6" class="f"/><text x="310" y="36" class="h">Ouvert</text><rect x="310" y="54" width="210" height="160" rx="10" class="o"/><path d="M332 90l6-10 6 10"/><rect x="356" y="86" width="120" height="12" rx="6" class="f"/><rect x="356" y="122" width="140" height="8" rx="4" class="l"/><rect x="356" y="146" width="120" height="8" rx="4" class="l"/><rect x="356" y="170" width="130" height="8" rx="4" class="l"/>`,
);
