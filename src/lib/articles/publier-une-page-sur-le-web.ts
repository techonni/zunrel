// Article : « Publier une page sur le web ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Publier une page Notion la transforme en petit site public : toute personne peut l'ouvrir dans un navigateur, même sans compte Notion. Utile pour un CV, une FAQ ou un modèle à montrer."],
  ["h2", "Publier la page"],
  ["ol", [
    "Ouvre la page à publier.",
    "Clique sur Partager, puis ouvre l'onglet Publier (ou l'équivalent dans ton menu).",
    "Valide la publication et copie l'adresse du site.",
    "Teste le lien dans une fenêtre de navigation privée.",
  ]],
  ["figure"],
  ["h2", "Ce qui se passe ensuite"],
  ["p", "Les modifications que tu fais dans Notion apparaissent sur le site publié. Les sous-pages sont souvent publiées avec la page parent : restreins-les si tu ne veux pas les montrer. Tu peux aussi désactiver la publication quand tu n'en as plus besoin."],
  ["h2", "Attention"],
  ["ul", [
    "Ne publie jamais une page avec des données personnelles ou confidentielles.",
    "Publier sur le web n'est pas la même chose qu'envoyer un lien privé à une personne.",
    "Certaines options (indexation, duplication, etc.) dépendent des réglages et du plan.",
  ]],
  ["p", "Pour partager seulement avec une personne, vois « Partager une page Notion »."],
];

export const caption = "Ta page Notion devient une adresse web simple à envoyer.";

export const points = ["Partager, puis Publier", "Le site suit tes mises à jour", "Désactive la publication quand tu as fini"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : publier sur le web",
  "Une page Notion à gauche, une flèche, une fenêtre navigateur à droite avec la même page.",
  `<rect x="40" y="40" width="200" height="180" rx="10" class="o"/><rect x="58" y="62" width="100" height="12" rx="6" class="f"/><rect x="58" y="100" width="150" height="8" rx="4" class="l"/><rect x="58" y="124" width="120" height="8" rx="4" class="l"/><rect x="58" y="160" width="80" height="24" rx="12" class="f"/><text x="98" y="177" text-anchor="middle" class="s" style="fill:#fff">Publier</text><path d="M260 130h50"/><path d="M302 122l8 8-8 8"/><rect x="330" y="40" width="200" height="180" rx="10" class="o"/><circle cx="352" cy="62" r="5"/><circle cx="370" cy="62" r="5"/><circle cx="388" cy="62" r="5"/><rect x="350" y="90" width="120" height="12" rx="6" class="f"/><rect x="350" y="122" width="150" height="8" rx="4" class="l"/><rect x="350" y="146" width="130" height="8" rx="4" class="l"/><text x="430" y="200" text-anchor="middle" class="s">site public</text>`,
);
