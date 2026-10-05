// Article : « Utiliser Notion sur ton téléphone ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Notion existe en application pour téléphone et tablette. Tes pages sont les mêmes que sur l'ordinateur : tu les retrouves partout, à condition d'utiliser le même compte. Le téléphone sert surtout à noter vite et à consulter, plus qu'à construire de grosses bases de données."],
  ["h2", "Installer et se connecter"],
  ["ol", [
    "Cherche Notion dans l'App Store (iPhone) ou dans Google Play (Android), et installe l'application.",
    "Connecte-toi avec le compte que tu utilises déjà sur l'ordinateur : même adresse e-mail, même méthode de connexion.",
    "Attends quelques secondes : ton espace de travail s'affiche, avec ta barre latérale et tes pages.",
  ]],
  ["figure"],
  ["h2", "Ce que le téléphone fait bien"],
  ["ul", [
    "Noter une idée ou une tâche en quelques secondes, dans une page ou une base de données.",
    "Cocher une liste, par exemple des courses ou des choses à faire aujourd'hui.",
    "Relire une page ou un modèle pendant que tu es ailleurs.",
    "Ajouter une photo ou un fichier à une page.",
  ]],
  ["h2", "Ce qui est plus simple sur l'ordinateur"],
  ["p", "Construire une base de données, régler les propriétés, les filtres et les vues demande de la place à l'écran. Fais ces réglages une fois sur l'ordinateur, puis utilise le téléphone pour remplir et consulter."],
  ["h2", "Un réflexe utile"],
  ["p", "Crée une page « Boîte de réception » où tu jettes tout ce qui te passe par la tête. Le soir ou le week-end, sur l'ordinateur, tu ranges chaque ligne au bon endroit. Tu n'oublies rien, et tu ne perds pas de temps à classer en marchant."],
  ["p", "La disposition des boutons change selon les mises à jour de l'application : si un bouton n'est pas à la place décrite ici, cherche le même mot dans les menus."],
];

export const caption = "La même page, sur l'ordinateur et sur le téléphone : tu retrouves ton espace de travail partout.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : une page sur l'ordinateur et sur le téléphone",
  "À gauche, un écran d'ordinateur affichant une page. À droite, un téléphone affichant la même page. Une double flèche relie les deux.",
  `<text x="40" y="34" class="h">Ordinateur</text>
<rect x="40" y="50" width="250" height="150" rx="10" class="o"/>
<rect x="58" y="70" width="110" height="12" rx="6" class="f"/>
<circle cx="66" cy="104" r="6"/><rect x="80" y="100" width="130" height="8" rx="4" class="l"/>
<circle cx="66" cy="128" r="6"/><rect x="80" y="124" width="100" height="8" rx="4" class="l"/>
<rect x="58" y="154" width="190" height="8" rx="4" class="l"/>
<path d="M130 200v18M100 218h60"/>
<path d="M308 125h56"/><path d="M316 117l-8 8 8 8"/><path d="M356 117l8 8-8 8"/>
<text x="440" y="34" text-anchor="middle" class="h">Téléphone</text>
<rect x="396" y="50" width="88" height="170" rx="14" class="o"/>
<rect x="410" y="72" width="48" height="10" rx="5" class="f"/>
<circle cx="418" cy="104" r="5"/><rect x="430" y="100" width="40" height="7" rx="3.5" class="l"/>
<circle cx="418" cy="126" r="5"/><rect x="430" y="122" width="32" height="7" rx="3.5" class="l"/>
<rect x="410" y="148" width="62" height="7" rx="3.5" class="l"/>`,
);
