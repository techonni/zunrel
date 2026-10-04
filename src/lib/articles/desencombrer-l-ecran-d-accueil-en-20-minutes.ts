// Article : « Désencombrer l'écran d'accueil en 20 minutes ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "L'écran d'accueil s'encombre sans qu'on y pense. Chaque nouvelle app y prend une place, les pages s'ajoutent, les dossiers se remplissent, et il faut parfois glisser plusieurs fois pour trouver ce qu'on cherche. Ou bien on ouvre autre chose en chemin."],
  ["p", "Voici une méthode en vingt minutes, avec un minuteur si tu veux. Le résultat visé : une seule page, quatre apps dans le dock, et tout le reste rangé dans la Bibliothèque d'apps, accessible par la recherche."],
  ["h2", "Avant de commencer"],
  ["p", "Rien de ce qui suit ne supprime d'app. Retirer une app de l'écran d'accueil la laisse installée : elle reste dans la Bibliothèque d'apps, après la dernière page, et dans la recherche. Tu peux donc essayer sans crainte et revenir en arrière quand tu veux."],
  ["h2", "Minutes 0 à 5 : choisir le dock"],
  ["p", "Le dock, en bas de l'écran, garde jusqu'à quatre apps visibles sur toutes les pages. Choisis celles que tu ouvres plusieurs fois par jour pour une raison précise : téléphone, messages, appareil photo, par exemple."],
  ["p", "Évite d'y placer une app que tu ouvres par réflexe plutôt que par besoin. L'endroit le plus accessible doit aller à ce qui sert, pas à ce qui retient."],
  ["h2", "Minutes 5 à 12 : une seule page"],
  ["p", "Fais un appui long sur une zone vide de l'écran d'accueil jusqu'à ce que les icônes bougent. Pour chaque app hors du dock, pose la même question : est-ce que je l'ouvre presque tous les jours ? Si oui, elle reste sur la première page. Sinon, touche le signe moins sur son icône, puis « Retirer de l'écran d'accueil »."],
  ["p", "Vise une page à moitié vide plutôt qu'une page pleine. Un écran avec de l'espace se lit d'un coup d'œil, et chaque icône y devient plus facile à trouver."],
  ["figure"],
  ["h2", "Minutes 12 à 16 : masquer les autres pages"],
  ["p", "Toujours en mode modification, touche les petits points au-dessus du dock. Une vue d'ensemble des pages apparaît : décoche toutes celles qui ne sont pas la première, puis touche « OK ». Les pages masquées ne sont pas supprimées et peuvent être réaffichées de la même façon."],
  ["h2", "Minutes 16 à 20 : régler pour la suite"],
  ["ol", [
    "Dans Réglages, ouvre la section consacrée à l'écran d'accueil et choisis d'ajouter les nouvelles apps à la Bibliothèque d'apps uniquement. Sinon, chaque installation remettra une icône sur ta page.",
    "Dans la même section, laisse désactivé l'affichage des pastilles dans la Bibliothèque d'apps, pour que les compteurs restent discrets.",
    "Si tu le souhaites, remplace quelques icônes par un widget utile, comme le calendrier du jour. Un widget peut remplacer plusieurs icônes, à condition qu'il réponde à une question plutôt qu'il n'en pose.",
  ]],
  ["h2", "Ouvrir les apps autrement"],
  ["p", "Avec une seule page, les autres apps s'ouvrent par la recherche : glisse vers le bas au milieu de l'écran d'accueil, tape les premières lettres, et l'app apparaît. C'est souvent aussi rapide que de chercher une icône, et cela évite de passer devant toutes les autres."],
  ["p", "La Bibliothèque d'apps, après la dernière page visible, range aussi les apps dans des catégories créées automatiquement. Tu n'as rien à organiser toi-même."],
  ["h2", "Une semaine d'essai"],
  ["p", "Garde cette configuration une semaine avant de juger. Les premiers jours, le doigt cherche les anciennes positions ; c'est normal. Si une app te manque vraiment, remets-la sur la page depuis la Bibliothèque d'apps. Si une app de la page n'a pas servi de la semaine, retire-la à son tour."],
  ["h2", "En résumé"],
  ["ul", [
    "Quatre apps dans le dock, choisies pour leur utilité.",
    "Une seule page, à moitié vide.",
    "Les autres pages masquées, et les nouvelles apps envoyées dans la Bibliothèque d'apps.",
    "La recherche pour tout le reste.",
  ]],
  ["p", "Ton écran d'accueil tient sur une page ? Réponds à la lettre du dimanche pour raconter ce que tu as gardé."],
];

export const caption = "Avant : plusieurs pages pleines. Après : une page à moitié vide, quatre apps dans le dock, le reste dans la Bibliothèque d'apps.";

const phone = (x: number, icons: number, dots: number) => {
  let s = `<rect x="${x}" y="20" width="160" height="320" rx="26" class="o"/>`;
  for (let i = 0; i < icons; i++) {
    const cx = x + 22 + (i % 4) * 32, cy = 50 + Math.floor(i / 4) * 34;
    s += `<rect x="${cx}" y="${cy}" width="22" height="22" rx="6"/>`;
  }
  for (let i = 0; i < dots; i++) s += `<circle cx="${x + 80 - (dots - 1) * 6 + i * 12}" cy="268" r="3" class="${i === 0 ? "f" : ""}"/>`;
  s += `<rect x="${x + 14}" y="282" width="132" height="42" rx="12" class="k"/>`;
  for (let i = 0; i < 4; i++) s += `<rect x="${x + 25 + i * 30}" y="292" width="22" height="22" rx="6"/>`;
  return s;
};
export const diagram = svg(
  "0 0 560 420",
  "Schéma : un écran d'accueil avant et après le rangement",
  "À gauche, un écran d'accueil rempli d'icônes avec quatre pages. À droite, un écran avec quelques icônes, une seule page et quatre apps dans le dock. Une flèche mène vers la Bibliothèque d'apps, où va le reste.",
  `${phone(10, 24, 4)}${phone(230, 6, 1)}
<path d="M178 180h44M212 170l10 10-10 10"/>
<path d="M398 180h30M418 170l10 10-10 10"/>
<rect x="438" y="120" width="112" height="120" rx="14" class="o"/>
${[0, 1].flatMap((r) => [0, 1].map((c) => `<rect x="${452 + c * 46}" y="${134 + r * 48}" width="38" height="38" rx="9"/><rect x="${459 + c * 46}" y="${141 + r * 48}" width="10" height="10" rx="3" class="k"/><rect x="${473 + c * 46}" y="${141 + r * 48}" width="10" height="10" rx="3" class="k"/><rect x="${459 + c * 46}" y="${155 + r * 48}" width="10" height="10" rx="3" class="k"/>`)).join("")}
<text x="494" y="264" text-anchor="middle" class="h2">Bibliothèque</text><text x="494" y="284" text-anchor="middle" class="h2">d'apps</text><text x="494" y="306" text-anchor="middle" class="s">tout le reste</text>
<text x="90" y="376" text-anchor="middle" class="h">Avant</text><text x="90" y="400" text-anchor="middle">4 pages pleines</text>
<text x="310" y="376" text-anchor="middle" class="h">Après</text><text x="310" y="400" text-anchor="middle">1 page, 4 apps au dock</text>`,
);
