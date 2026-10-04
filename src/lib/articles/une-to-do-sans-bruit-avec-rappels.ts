// Article : « Une to-do sans bruit avec Rappels ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une liste de tâches peut devenir bruyante. Chaque tâche reçoit une date, chaque date déclenche une notification, et la journée se remplit d'alertes pour des choses qui pouvaient attendre. Au bout d'un moment, on apprend à les ignorer, y compris celles qui comptaient."],
  ["p", "L'app Rappels, déjà installée sur l'iPhone, peut fonctionner autrement. Il suffit de décider ce qui mérite une date, ce qui mérite une heure, et de laisser le reste tranquille."],
  ["h2", "Trois niveaux pour chaque tâche"],
  ["p", "Avant d'ajouter une tâche, pose-toi une seule question : que se passe-t-il si je la fais demain plutôt qu'aujourd'hui ?"],
  ["ul", [
    "Rien du tout : la tâche n'a pas besoin de date. Elle va dans une liste, sans plus.",
    "C'est gênant, mais pas grave : une date suffit, sans heure.",
    "Il y a un vrai problème, comme un rendez-vous manqué ou un délai dépassé : une date et une heure.",
  ]],
  ["p", "La plupart des tâches tombent dans le premier groupe. Les alertes restent alors réservées au troisième, et elles retrouvent leur sens : quand le téléphone sonne pour un rappel, c'est qu'il faut agir."],
  ["figure"],
  ["h2", "Une date sans heure"],
  ["p", "Dans Rappels, une date peut être ajoutée sans heure. Le jour venu, la tâche apparaît dans la liste « Aujourd'hui », sans alerte à un moment précis. C'est l'endroit qui convient à ce qui doit être fait dans la journée, quand tu as un moment."],
  ["p", "Selon tes réglages, Rappels peut envoyer une notification groupée pour les tâches du jour qui n'ont pas d'heure. Si tu préfères ne rien recevoir pour elles, regarde les options de notification dans les réglages de l'app Rappels."],
  ["h2", "Une heure seulement pour ce qui a une heure"],
  ["p", "Une heure précise crée une notification à ce moment-là. Garde-la pour ce qui dépend vraiment de l'horloge : un appel prévu, un médicament, un départ, une démarche avec une date limite."],
  ["p", "Pour une tâche liée à un endroit, une alerte par lieu est parfois plus juste qu'une heure : acheter des piles en arrivant au magasin, par exemple. Elle demande l'accès à ta position ; à toi de voir si l'échange en vaut la peine."],
  ["h2", "Régler Rappels en cinq minutes"],
  ["ol", [
    "Ouvre Rappels et touche la liste « Programmés » : elle montre toutes les tâches qui ont une date.",
    "Pour chaque tâche dont la date n'a pas de vraie raison, touche-la, puis le bouton d'informations, et retire la date.",
    "Pour les tâches qui gardent une date, retire l'heure quand elle n'est pas nécessaire.",
    "Dans Réglages, puis Notifications, puis Rappels, choisis la façon dont les alertes s'affichent. Tu peux par exemple garder les bannières et couper les sons.",
    "Si la pastille rouge sur l'icône te pèse, désactive les pastilles de Rappels au même endroit.",
  ]],
  ["h2", "Des listes, pas des étiquettes"],
  ["p", "Rappels propose des étiquettes, des drapeaux, des priorités et des listes intelligentes. Tout cela peut servir, mais chaque option ajoute une décision au moment d'écrire une tâche. Pour une to-do sans bruit, peu de listes suffisent : une liste principale, éventuellement une liste partagée pour les courses, et c'est tout."],
  ["p", "Si tu as besoin d'organiser davantage, les sections à l'intérieur d'une liste font souvent mieux que de nouvelles listes. C'est le principe de l'article « Une seule liste pour la semaine », qui découpe une seule liste en jours."],
  ["h2", "Les tâches qui reviennent"],
  ["p", "Une tâche régulière, comme sortir les poubelles ou arroser les plantes, peut se répéter automatiquement. La question reste la même : a-t-elle besoin d'une heure ? Souvent, une répétition avec une date suffit. La tâche réapparaît dans « Aujourd'hui » le bon jour, sans sonner."],
  ["h2", "Ce que tu y gagnes"],
  ["p", "Moins d'alertes ne veut pas dire moins de choses faites. La liste reste complète ; elle se consulte quand tu le décides, au lieu de t'interrompre. Et les quelques notifications qui restent sont celles que tu ne veux surtout pas manquer."],
  ["h2", "En résumé"],
  ["ul", [
    "Pas de date pour ce qui peut attendre.",
    "Une date sans heure pour ce qui doit être fait dans la journée.",
    "Une date et une heure seulement quand l'horloge compte vraiment.",
    "Peu de listes, et des sections plutôt que des étiquettes.",
  ]],
  ["p", "Tu as trouvé un réglage de Rappels qui calme ta journée ? Raconte-le en réponse à la lettre du dimanche."],
];

export const caption = "Une seule question décide du niveau d'une tâche : que se passe-t-il si elle est faite demain ?";

const col = (x: number, title: string, a: string, b: string, icon: string) =>
  `<rect x="${x}" y="110" width="160" height="200" rx="10"/>${icon}<text x="${x + 80}" y="240" text-anchor="middle" class="h2">${title}</text><text x="${x + 80}" y="268" text-anchor="middle" class="s">${a}</text><text x="${x + 80}" y="288" text-anchor="middle" class="s">${b}</text>`;
export const diagram = svg(
  "0 0 560 360",
  "Schéma : trois niveaux pour une tâche dans Rappels",
  "Une question en haut : si c'est fait demain ? Trois colonnes en dessous. Rien : pas de date. Gênant : une date sans heure. Problème : une date et une heure, avec une alerte.",
  `<text x="280" y="36" text-anchor="middle" class="h">Si c'est fait demain ?</text>
<path d="M280 50v18M100 68h360M100 68v34M280 68v34M460 68v34"/>
${col(20, "Rien", "pas de date", "dans une liste", `<path d="M76 150h48M76 170h48M76 190h32"/>`)}
${col(200, "Gênant", "une date", "sans heure", `<rect x="256" y="140" width="48" height="52" rx="6"/><path d="M256 156h48"/>`)}
${col(380, "Problème", "date et heure", "avec alerte", `<path d="M444 190h32M448 190v-22a12 12 0 0 1 24 0v22M456 198h8"/>`)}
<text x="280" y="344" text-anchor="middle" class="s">La plupart des tâches vont dans la première colonne.</text>`,
);
