// Article : « Partager une page Notion » (lien et droits).
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Tu peux partager une page avec un lien, sans forcément inviter quelqu'un par e-mail. L'essentiel : choisir ce que la personne a le droit de faire."],
  ["h2", "Copier le lien et choisir les droits"],
  ["ol", [
    "Ouvre la page, puis clique sur Partager en haut à droite.",
    "Choisis le niveau d'accès : lecture, commentaires ou modification.",
    "Pour un accès par lien, regarde les options d'accès général (par exemple « Toute personne disposant du lien »).",
    "Copie le lien et envoie-le à la personne concernée.",
  ]],
  ["figure"],
  ["h2", "Lecture, commentaires ou modification"],
  ["p", "Lecture : on voit, on ne change rien. Commentaires : on peut discuter sans réécrire le contenu. Modification : on peut éditer la page. Donne la modification seulement aux personnes de confiance."],
  ["h2", "Reprendre la main"],
  ["ul", [
    "Retire le lien public ou change le niveau d'accès dès que tu n'en as plus besoin.",
    "Vérifie les sous-pages : elles peuvent hériter des réglages de la page parent.",
    "Pour une page ouverte à tout le web comme un petit site, vois « Publier une page sur le web ».",
  ]],
  ["p", "Pour l'invitation par e-mail et un aperçu du partage, lis aussi l'article « Partager une page Notion » déjà publié."],
];

export const caption = "Un lien, et tu choisis : lire, commenter ou modifier.";

export const points = ["Partager copie le lien de la page", "Choisis lecture, commentaires ou modification", "Retire l'accès quand tu n'en as plus besoin"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : partager avec un lien",
  "Une page avec un bouton Partager, un lien, et trois pastilles de droits.",
  `<rect x="40" y="40" width="220" height="180" rx="10" class="o"/><rect x="58" y="62" width="100" height="12" rx="6" class="f"/><rect x="58" y="100" width="160" height="8" rx="4" class="l"/><rect x="58" y="124" width="130" height="8" rx="4" class="l"/><rect x="58" y="170" width="90" height="24" rx="12" class="f"/><text x="103" y="187" text-anchor="middle" class="s" style="fill:#fff">Partager</text><path d="M280 130h40"/><path d="M312 122l8 8-8 8"/><rect x="340" y="50" width="180" height="36" rx="8" class="o"/><text x="430" y="74" text-anchor="middle" class="s">lien de la page</text><rect x="340" y="106" width="180" height="28" rx="14" class="o"/><text x="430" y="125" text-anchor="middle" class="s">lecture</text><rect x="340" y="148" width="180" height="28" rx="14" class="o"/><text x="430" y="167" text-anchor="middle" class="s">commentaires</text><rect x="340" y="190" width="180" height="28" rx="14" class="f"/><text x="430" y="209" text-anchor="middle" class="s" style="fill:#fff">modification</text>`,
);
