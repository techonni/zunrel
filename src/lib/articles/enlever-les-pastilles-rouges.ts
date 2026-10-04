// Article : « Enlever les pastilles rouges ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "La pastille rouge sur une icône ne dit presque rien. Elle dit seulement qu'il y a un nombre. Pourtant le regard s'y arrête, le doigt ouvre l'app, et cinq minutes partent avant que tu aies décidé de le faire. Ce n'est pas une information. C'est une invitation."],
  ["p", "Sur un iPhone épuré, l'écran d'accueil ne compte pas à ta place. Tu ouvres une app quand tu en as besoin, pas parce qu'un chiffre a changé. Enlever les pastilles prend quelques minutes, et l'effet se voit dès que tu reposes le téléphone."],
  ["h2", "Pourquoi le chiffre attire"],
  ["p", "Un badge est conçu pour être inachevé. Le cerveau traite un nombre rouge comme une tâche ouverte. Même si tu sais que c'est une promotion ou un like, le chiffre reste là jusqu'à ce que tu l'effaces. Plus il grossit, plus l'app semble urgente, sans l'être."],
  ["p", "Le contenu, lui, n'a pas disparu. Il est dans l'app, au moment où tu choisis de l'ouvrir. La pastille ne fait que déplacer ce moment vers maintenant."],
  ["h2", "Couper les pastilles, app par app"],
  ["ol", [
    "Ouvre Réglages, puis Notifications.",
    "Choisis une app qui affiche un chiffre rouge : un réseau, une boutique, un jeu, une app d'actualité.",
    "Désactive Pastilles. Les notifications peuvent rester ou non : ce réglage ne touche que le chiffre sur l'icône.",
    "Reviens à la liste et passe à l'app suivante. Deux ou trois apps suffisent pour le premier passage.",
  ]],
  ["p", "Garde les pastilles seulement là où le nombre a un sens concret : les messages d'une personne, ou une app dont le chiffre est vraiment une tâche, comme un rappel non lu que tu as créé toi-même. Le reste peut vivre sans chiffre."],
  ["figure"],
  ["h2", "Ce que tu perds, et ce que tu gardes"],
  ["p", "Tu ne vois plus, d'un coup d'œil, que trois apps ont bougé. C'est le but. Tu le sauras en les ouvrant, au moment prévu : le résumé du midi, la revue du soir, ou jamais, si l'app n'avait rien à t'apporter."],
  ["p", "Les alertes importantes ne passent pas par la pastille. Un message d'un proche arrive par notification, si tu l'as laissée. Un rendez-vous arrive par le calendrier. La pastille n'était qu'un rappel de plus, posé sur l'icône."],
  ["h2", "L'écran d'accueil après"],
  ["p", "Pose le téléphone, verrouille-le, reprends-le. L'écran doit être plat : des icônes, pas de points rouges. Si une pastille reste, note l'app et retourne dans Notifications. Certaines apps recréent le badge après une mise à jour : un second passage, une semaine plus tard, suffit en général."],
  ["h2", "En résumé"],
  ["ul", [
    "La pastille rouge est une invitation, pas une information.",
    "Dans Réglages, puis Notifications, désactive Pastilles pour les apps qui n'ont pas de tâche réelle.",
    "Garde le chiffre seulement pour les messages ou les rappels que tu as choisis.",
    "Un second passage une semaine plus tard retire celles qui sont revenues.",
  ]],
  ["p", "Quelle app avait la pastille la plus difficile à enlever ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Avant : un chiffre rouge sur l'icône, qui appelle le doigt. Après : la même icône, sans pastille. Le contenu est toujours dans l'app.";

export const diagram = svg(
  "0 0 560 280",
  "Schéma : une icône avec pastille, puis sans",
  "À gauche, une icône d'app avec une pastille rouge marquée 12. À droite, la même icône sans pastille. Une flèche relie les deux.",
  `<text x="40" y="36" class="h">Avant</text>
<rect x="70" y="70" width="88" height="88" rx="20" class="o"/>
<circle cx="146" cy="82" r="16" class="f"/>
<text x="146" y="87" text-anchor="middle" style="fill:#fff;font-size:13px;font-weight:600">12</text>
<text x="114" y="186" text-anchor="middle" class="s">chiffre sur l'icône</text>
<path d="M210 114h120"/>
<path d="M318 106l12 8-12 8"/>
<text x="400" y="36" class="h">Après</text>
<rect x="392" y="70" width="88" height="88" rx="20" class="o"/>
<text x="436" y="186" text-anchor="middle" class="s">icône seule</text>
<text x="40" y="240" class="s">Le contenu n'a pas bougé. Seule l'invitation a disparu.</text>`,
);
