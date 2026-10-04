// Article : « Les notifications, à heures fixes ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Une notification interrompt ce que tu fais, même si tu ne la lis pas. L'écran s'allume, une bannière glisse, l'attention part. Répété pour des dizaines d'apps, cela donne une journée découpée en petits morceaux."],
  ["p", "La plupart de ces alertes ne sont pas urgentes. Elles peuvent attendre une heure ou deux sans que rien ne change. L'idée de cet article : les regrouper à deux ou trois moments fixes de la journée, et ne laisser passer tout de suite que ce qui compte vraiment."],
  ["h2", "Trier les notifications en trois groupes"],
  ["ul", [
    "Les personnes : messages et appels de tes proches, et du travail quand c'est nécessaire. Ils arrivent tout de suite.",
    "Ce qui a une heure : rappels programmés, calendrier, transports, livraison attendue. Ces alertes arrivent aussi tout de suite, parce qu'en retard elles ne servent plus.",
    "Tout le reste : réseaux, actualités, promotions, jeux, nouveautés des apps. Ce groupe peut attendre.",
  ]],
  ["p", "Pour le troisième groupe, deux solutions : couper les notifications de l'app, ou les recevoir en résumé à heures fixes."],
  ["h2", "Couper ce qui ne sert pas"],
  ["p", "Dans Réglages, puis Notifications, la liste de tes apps s'affiche. Pour chaque app du troisième groupe, demande-toi si tu veux encore être prévenu. Si ce n'est pas le cas, désactive « Autoriser les notifications ». Tu retrouveras le contenu en ouvrant l'app, au moment que tu choisis."],
  ["h2", "Le résumé programmé"],
  ["p", "Pour les apps que tu veux garder sans être interrompu, iOS propose le résumé programmé. Les notifications des apps choisies ne s'affichent plus à leur arrivée : elles sont rassemblées et présentées ensemble, aux heures que tu fixes."],
  ["ol", [
    "Ouvre Réglages, puis Notifications, puis Résumé programmé, et active-le.",
    "Choisis les apps à inclure : ajoute celles du troisième groupe.",
    "Fixe deux ou trois horaires, par exemple en fin de matinée et en fin d'après-midi.",
    "Laisse les apps du premier et du deuxième groupe en dehors du résumé.",
  ]],
  ["p", "Certaines apps peuvent signaler une notification comme urgente. Selon le réglage de chaque app, ces notifications urgentes peuvent passer avant le résumé. Vérifie ce point pour les apps qui en abusent, dans leur page de notifications."],
  ["figure"],
  ["h2", "La Concentration pour les moments calmes"],
  ["p", "Le résumé règle le flux de la journée. Pour les moments où tu ne veux presque rien recevoir, comme une heure de travail, le repas ou la nuit, les modes de Concentration vont plus loin. Dans Réglages, puis Concentration, tu choisis les personnes et les apps autorisées à te joindre, et tu peux programmer un mode pour qu'il s'active tout seul à une heure donnée."],
  ["p", "Commence par un seul mode, par exemple pour la nuit, avec les appels de tes proches autorisés. Ajoute-en un autre seulement si un vrai besoin apparaît."],
  ["h2", "L'affichage sur l'écran verrouillé"],
  ["p", "Sur l'écran verrouillé, les notifications peuvent s'afficher en liste, en pile ou sous la forme d'un simple nombre. L'affichage en nombre est le plus discret : tu sais qu'il y a quelque chose, sans voir les titres qui donnent envie d'ouvrir. Le choix se fait en haut de la page Notifications, dans Réglages."],
  ["h2", "Une semaine pour ajuster"],
  ["p", "Les premiers jours, tu vérifieras peut-être le téléphone par habitude entre deux résumés. Cela passe. Au bout d'une semaine, regarde ce que contiennent tes résumés : si une app y apparaît toujours sans que tu lises ses notifications, coupe-les. Si une alerte importante arrive trop tard, sors son app du résumé."],
  ["h2", "En résumé"],
  ["ul", [
    "Trois groupes : les personnes, ce qui a une heure, tout le reste.",
    "Le reste est coupé, ou regroupé dans le résumé programmé deux ou trois fois par jour.",
    "Un mode de Concentration pour les moments où presque rien ne doit passer.",
    "Un affichage en nombre sur l'écran verrouillé, pour plus de discrétion.",
  ]],
  ["p", "Quels horaires as-tu choisis pour ton résumé ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Avant : des alertes à toute heure. Après : les personnes et ce qui a une heure passent tout de suite, le reste arrive en deux résumés.";

const x0 = 40, x1 = 520, h0 = 8, h1 = 20;
const hx = (h: number) => x0 + ((h - h0) / (h1 - h0)) * (x1 - x0);
const before = [8.3, 8.9, 9.4, 9.8, 10.5, 11.1, 11.6, 12.4, 13.2, 13.7, 14.3, 15.1, 15.6, 16.2, 16.9, 17.5, 18.3, 18.8, 19.4];
const urgent = [10.2, 14.8];
export const diagram = svg(
  "0 0 560 360",
  "Schéma : des notifications dispersées regroupées à heures fixes",
  "Deux lignes de temps de 8 h à 20 h. En haut, avant : une alerte presque toutes les demi-heures. En bas, après : deux alertes isolées pour ce qui est urgent, et deux résumés, à 12 h et à 18 h.",
  `<text x="${x0}" y="36" class="h">Avant</text>
<path d="M${x0} 90h${x1 - x0}"/>${before.map((h) => `<circle cx="${hx(h).toFixed(1)}" cy="70" r="6" class="f"/><path d="M${hx(h).toFixed(1)} 78v12"/>`).join("")}
<text x="${x0}" y="186" class="h">Après</text>
<path d="M${x0} 260h${x1 - x0}"/>${urgent.map((h) => `<circle cx="${hx(h).toFixed(1)}" cy="240" r="6" class="f"/><path d="M${hx(h).toFixed(1)} 248v12"/>`).join("")}
${[12, 18].map((h) => `<rect x="${(hx(h) - 34).toFixed(1)}" y="206" width="68" height="44" rx="8" class="o"/><path d="M${(hx(h) - 20).toFixed(1)} 220h40M${(hx(h) - 20).toFixed(1)} 230h40M${(hx(h) - 20).toFixed(1)} 240h24"/><path d="M${hx(h).toFixed(1)} 250v10"/>`).join("")}
${[8, 12, 16, 20].map((h) => `<text x="${hx(h)}" y="${116}" text-anchor="middle" class="s">${h} h</text><text x="${hx(h)}" y="${286}" text-anchor="middle" class="s">${h} h</text>`).join("")}
<circle cx="${x0 + 6}" cy="322" r="6" class="f"/><text x="${x0 + 20}" y="327" class="s">tout de suite : personnes, ce qui a une heure</text>
<rect x="${x0 + 330}" y="312" width="22" height="18" rx="4" class="o"/><text x="${x0 + 360}" y="327" class="s">résumé programmé</text>`,
);
