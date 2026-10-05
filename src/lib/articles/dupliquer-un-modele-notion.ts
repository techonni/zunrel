// Article : « Dupliquer un modèle Notion ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un modèle Notion est une page déjà construite que quelqu'un a partagée avec toi. Au lieu de partir d'une page vide, tu en fais une copie dans ton propre espace de travail, puis tu l'adaptes. C'est le moyen le plus rapide d'apprendre en voyant une structure qui fonctionne."],
  ["h2", "Faire ta copie"],
  ["ol", [
    "Ouvre le lien du modèle dans ton navigateur. Connecte-toi à ton compte Notion si on te le demande.",
    "Clique sur le bouton Dupliquer, en haut à droite de la page, puis choisis ton espace de travail.",
    "La copie apparaît dans ta barre latérale. Elle t'appartient : tu peux la modifier sans toucher à l'original.",
    "Ouvre-la et regarde sa structure avant de changer quoi que ce soit.",
  ]],
  ["figure"],
  ["h2", "La rendre à toi"],
  ["p", "Un modèle contient presque toujours des exemples pour montrer comment il fonctionne. Garde une ligne d'exemple le temps de comprendre, puis supprime le reste."],
  ["ol", [
    "Supprime les éléments d'exemple, sauf un.",
    "Renomme les propriétés et les options avec tes mots.",
    "Ajoute ton premier vrai élément.",
    "Supprime la dernière ligne d'exemple.",
  ]],
  ["h2", "Ce qu'il faut éviter"],
  ["p", "Ne supprime pas une propriété avant d'avoir regardé les vues. Si une vue ou un filtre s'appuie sur cette colonne, la supprimer peut casser l'affichage. Renomme-la plutôt, ou cache-la."],
  ["p", "Ne modifie pas le lien d'origine : c'est la page de la personne qui l'a partagé. Travaille toujours dans ta copie."],
  ["p", "Les modèles de la boutique Zunrel, quand ils seront disponibles, se dupliqueront de la même façon."],
];

export const caption = "Le bouton Dupliquer crée une copie dans ton espace de travail. L'original ne change pas.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : dupliquer un modèle dans son espace de travail",
  "À gauche, une page modèle partagée avec un bouton Dupliquer. Une flèche mène à droite vers une copie de la page, rangée dans ton espace de travail.",
  `<text x="40" y="34" class="h">Modèle partagé</text>
<rect x="40" y="50" width="190" height="168" rx="10" class="o"/>
<rect x="138" y="62" width="82" height="22" rx="11" class="o"/><text x="179" y="78" text-anchor="middle" class="s">Dupliquer</text>
<rect x="58" y="100" width="100" height="12" rx="6" class="f"/>
<path d="M58 130h154M58 156h154M58 182h154"/>
<rect x="66" y="137" width="50" height="7" rx="3.5" class="l"/><rect x="66" y="163" width="64" height="7" rx="3.5" class="l"/><rect x="66" y="189" width="40" height="7" rx="3.5" class="l"/>
<path d="M254 134h56"/><path d="M302 126l8 8-8 8"/>
<text x="350" y="34" class="h">Ton espace</text>
<rect x="350" y="50" width="170" height="168" rx="10" class="o"/>
<rect x="364" y="66" width="48" height="140" rx="6" class="k"/>
<rect x="372" y="82" width="32" height="7" rx="3.5" class="f"/><rect x="372" y="100" width="28" height="7" rx="3.5" class="l"/><rect x="372" y="118" width="32" height="7" rx="3.5" class="l"/>
<rect x="424" y="72" width="82" height="12" rx="6" class="f"/>
<path d="M424 100h82M424 124h82M424 148h82"/>
<text x="465" y="190" text-anchor="middle" class="s">ta copie</text>`,
);
