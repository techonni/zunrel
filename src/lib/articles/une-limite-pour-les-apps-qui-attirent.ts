// Article : « Une limite pour les apps qui attirent ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Certaines apps n'ont pas de fin. Tu les ouvres pour une minute, le fil continue, et le téléphone est encore dans la main un quart d'heure plus tard. Couper l'app entièrement est parfois trop : tu t'en sers vraiment, de temps en temps. La limite sert à ce cas-là."],
  ["p", "Temps d'écran peut bloquer une app au bout d'une durée que tu choisis. Le reste du téléphone ne change pas. Messages, cartes, téléphone : rien n'est touché. Seule l'app qui attire s'arrête, et te demande si tu veux vraiment continuer."],
  ["h2", "Choisir une seule app"],
  ["p", "Commence par une app, pas par une catégorie entière. La catégorie Réseaux sociaux bloque aussi des apps que tu utilises peu. Une limite sur l'app précise est plus juste, et plus facile à tenir."],
  ["ol", [
    "Ouvre Réglages, puis Temps d'écran. Active Temps d'écran si ce n'est pas déjà fait.",
    "Ouvre Limites d'app, puis Ajouter une limite.",
    "Déplie la catégorie, coche seulement l'app, puis Suivant.",
    "Mets 20 minutes. Choisis tous les jours, ou seulement les jours où elle te retient.",
  ]],
  ["p", "Vingt minutes est un point de départ, pas une règle morale. Si tu te sers de l'app pour le travail, une heure peut être honnête. L'important est que la limite arrive avant l'habitude, pas après."],
  ["figure"],
  ["h2", "Le code, ou pas"],
  ["p", "Temps d'écran propose un code. Avec un code, ignorer la limite demande un effort : le taper, ou demander à quelqu'un d'autre. Sans code, le bouton Ignorer la limite reste à un toucher. Les deux sont valables."],
  ["p", "Si tu veux seulement un rappel, laisse sans code. La limite s'affiche, tu peux passer, et le fait de voir l'écran suffit souvent. Si tu passes toujours, ajoute le code la semaine suivante. Ne commence pas par le verrou le plus dur."],
  ["h2", "Ce que tu fais quand l'app s'arrête"],
  ["p", "Décide avant, pas au moment où l'écran bloque. Quand la limite arrive, le téléphone se pose, ou tu passes à une app qui a une fin : un message à envoyer, une note, rien. Sans cette suite, le bouton Ignorer devient le chemin normal, et la limite ne sert plus."],
  ["p", "Regarde le rapport de Temps d'écran le dimanche, en même temps que la liste de la semaine. Si l'app dépasse tous les jours, la limite est trop haute, ou l'app n'a pas sa place sur l'écran d'accueil. Les deux se règlent."],
  ["h2", "En résumé"],
  ["ul", [
    "Une limite sur une app, pas sur tout le téléphone.",
    "Réglages, Temps d'écran, Limites d'app : vingt minutes pour commencer.",
    "Le code est un cran de plus, pas le premier geste.",
    "Une suite prévue pour le moment où l'app s'arrête.",
  ]],
  ["p", "Quelle app mérite la première limite ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Une seule barre, pour une seule app. À vingt minutes, l'app s'arrête. Le reste du téléphone continue.";

export const diagram = svg(
  "0 0 560 240",
  "Schéma : une limite de vingt minutes sur une app",
  "Une barre de temps presque pleine, marquée 20 min, à côté du nom d'une app. En dessous, une mention : le reste du téléphone, sans limite.",
  `<text x="40" y="40" class="h">Limite d'app</text>
<rect x="40" y="70" width="360" height="28" rx="8" class="o"/>
<rect x="40" y="70" width="300" height="28" rx="8" class="l"/>
<text x="420" y="90" class="h2">20 min</text>
<text x="40" y="132" class="s">une app qui n'a pas de fin</text>
<rect x="40" y="160" width="360" height="28" rx="8" class="o"/>
<text x="56" y="180" class="s">messages, cartes, téléphone : sans limite</text>`,
);
