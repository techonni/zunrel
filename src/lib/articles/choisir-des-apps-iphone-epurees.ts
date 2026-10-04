// Article : « Choisir des apps iPhone épurées ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Sur l'App Store, deux apps qui font la même chose peuvent donner deux expériences très différentes. L'une s'ouvre directement sur ce que tu viens faire. L'autre demande un compte, propose un abonnement, affiche des suggestions et réclame le droit d'envoyer des notifications avant même la première utilisation."],
  ["p", "Une app épurée n'est pas forcément minimaliste en apparence. C'est une app qui fait une chose, la fait correctement, et ne cherche pas à occuper plus de place que nécessaire. Voici trois critères pour la reconnaître, puis une méthode pour faire le tri dans celles que tu as déjà."],
  ["h2", "Critère 1 : une fonction principale"],
  ["p", "Avant d'installer une app, essaie de décrire en une phrase ce qu'elle fait. « Elle mesure le temps de cuisson. » « Elle garde ma liste de courses. » Si la phrase demande plusieurs virgules et des « et aussi », l'app fait probablement trop de choses."],
  ["p", "Une app qui cumule messagerie, actualités, boutique et jeux a plus de raisons de te retenir. Chaque fonction ajoutée est un écran de plus, une pastille de plus, une raison de plus de l'ouvrir sans but précis."],
  ["h2", "Critère 2 : pas de compte obligatoire"],
  ["p", "Pour beaucoup d'usages, un compte n'apporte rien. Un minuteur, une calculatrice, un lecteur de fichiers ou un carnet de notes peuvent fonctionner entièrement sur le téléphone. Quand une app exige un compte dès l'ouverture, c'est souvent pour envoyer des e-mails, suivre l'usage ou préparer une offre payante."],
  ["p", "Un compte reste utile quand il sert vraiment : synchroniser plusieurs appareils, partager avec quelqu'un. Dans ce cas, regarde si la synchronisation peut passer par iCloud, déjà configuré sur ton iPhone, plutôt que par un nouvel identifiant et un nouveau mot de passe."],
  ["h2", "Critère 3 : pas de notifications par défaut"],
  ["p", "Une app calme ne demande pas l'autorisation d'envoyer des notifications au premier lancement. Elle attend que tu actives une fonction qui en a besoin, comme une alarme ou un rappel. Si la demande arrive avant même que tu aies utilisé l'app, tu peux répondre « Ne pas autoriser » sans risque : tu pourras changer d'avis plus tard dans Réglages, puis Notifications."],
  ["figure"],
  ["h2", "Lire la fiche App Store avant d'installer"],
  ["p", "La fiche d'une app contient plus d'indices qu'on ne le pense. Trois zones méritent un coup d'œil :"],
  ["ul", [
    "Les achats intégrés : une longue liste d'abonnements et de packs signale souvent une app construite autour de la vente.",
    "La section sur la confidentialité de l'app : elle indique les données collectées, et celles qui servent à te suivre. Moins il y en a, mieux c'est.",
    "Les captures d'écran : si elles montrent surtout des fils, des pastilles et des bannières, l'app ressemblera à ça au quotidien.",
  ]],
  ["p", "Pense aussi aux apps déjà installées. Notes, Rappels, Calendrier, Météo ou Plans couvrent beaucoup de besoins sans rien ajouter. Elles ne font pas tout, mais elles ne demandent ni compte supplémentaire ni abonnement."],
  ["h2", "Faire le tri dans les apps installées"],
  ["p", "Le tri se fait en une fois, avec une question par app."],
  ["ol", [
    "Ouvre Réglages, puis Temps d'écran, et regarde quelles apps tu utilises vraiment. Si Temps d'écran n'est pas activé, active-le et reviens dans une semaine.",
    "Pour chaque app que tu n'as pas ouverte depuis un mois, demande-toi si elle te manquerait. Si la réponse est non, supprime-la. Avant de supprimer une app qui contient des fichiers ou des notes, exporte ce que tu veux garder.",
    "Pour chaque app que tu gardes, applique les trois critères. Si elle échoue sur un point, cherche une alternative plus simple, ou règle-la : notifications coupées, pastilles désactivées.",
    "Range les apps conservées mais rarement utilisées dans la Bibliothèque d'apps plutôt que sur l'écran d'accueil.",
  ]],
  ["p", "Ce tri n'a pas besoin d'être parfait. Le but est que chaque app restante ait une raison claire d'être là."],
  ["h2", "Quand une app compliquée reste nécessaire"],
  ["p", "Certaines apps sont difficiles à éviter : la banque, une messagerie utilisée par la famille, l'outil imposé par le travail. Tu ne peux pas toujours les remplacer, mais tu peux les rendre plus discrètes. Coupe les notifications qui ne demandent aucune action de ta part, désactive les pastilles, et retire l'app de l'écran d'accueil. Elle reste accessible par la recherche, sans s'imposer à chaque déverrouillage."],
  ["h2", "En résumé"],
  ["ul", [
    "Une app épurée fait une chose principale et se décrit en une phrase.",
    "Elle fonctionne sans compte quand un compte n'est pas nécessaire.",
    "Elle ne réclame pas de notifications avant d'en avoir besoin.",
    "La fiche App Store (achats intégrés, confidentialité, captures) aide à décider avant d'installer.",
  ]],
  ["p", "Tu utilises une app simple tous les jours ? Réponds à la lettre du dimanche pour la proposer : les suggestions des lecteurs alimentent les prochains articles."],
];

export const caption = "Trois questions avant d'installer une app. Trois oui : elle a sa place sur ton iPhone.";

const qs = ["Elle fait une seule chose ?", "Elle marche sans compte ?", "Elle attend avant de notifier ?"];
export const diagram = svg(
  "0 0 560 330",
  "Schéma : trois questions pour choisir une app épurée",
  "Trois questions l'une sous l'autre, chacune suivie d'une case cochée : une seule fonction, pas de compte obligatoire, pas de notifications par défaut. Une flèche mène à une app retenue.",
  `<text x="20" y="34" class="h">Avant d'installer</text>
${qs.map((q, i) => `<rect x="20" y="${58 + i * 78}" width="330" height="58" rx="8"/><text x="40" y="${93 + i * 78}">${q}</text><rect x="304" y="${76 + i * 78}" width="22" height="22" rx="5"/><path d="M309 ${87 + i * 78}l4 4 8-9"/>`).join("")}
<path d="M370 175h52M412 165l10 10-10 10"/>
<rect x="446" y="131" width="88" height="88" rx="20" class="o"/><rect x="474" y="159" width="32" height="32" rx="8" class="k"/>
<text x="490" y="250" text-anchor="middle" class="h2">Retenue</text>
<text x="20" y="314" class="s">Un seul non : cherche plus simple, ou règle l'app.</text>`,
);
