// Article : « Des widgets calmes sur l'écran verrouillé ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "L'écran verrouillé est ce que tu vois le plus souvent sur ton iPhone : chaque fois que tu le soulèves pour regarder l'heure ou une notification. Ce qu'il affiche décide souvent si tu vas déverrouiller le téléphone ou le reposer."],
  ["p", "Depuis iOS 16, on peut y ajouter des widgets : une petite ligne au-dessus de l'heure et une rangée en dessous. Bien choisis, ils répondent à une question sans ouvrir d'app. Mal choisis, ils deviennent une vitrine de plus."],
  ["h2", "Ce qu'un widget calme doit faire"],
  ["p", "Un bon widget d'écran verrouillé répond à une question précise, d'un coup d'œil. Quelle heure est-il ? Quel est mon prochain rendez-vous ? Faut-il prendre une veste ? Une fois la réponse lue, il n'y a plus rien à faire."],
  ["p", "À l'inverse, un widget qui affiche un compteur de messages non lus, des titres d'actualité ou un score à suivre pose une question au lieu d'y répondre. Il donne envie d'ouvrir l'app pour en savoir plus, et c'est précisément ce qu'on cherche à éviter."],
  ["h2", "Trois informations suffisent"],
  ["p", "Pour la plupart des journées, trois informations couvrent l'essentiel :"],
  ["ul", [
    "Le prochain événement du Calendrier, pour savoir où tu dois être.",
    "La météo, pour savoir comment t'habiller.",
    "Une seule information personnelle utile : la batterie de tes écouteurs, l'alarme du lendemain ou les rappels du jour.",
  ]],
  ["p", "La ligne au-dessus de l'heure, à côté de la date, accepte un petit widget sous forme de texte. La météo ou le prochain événement y tiennent bien, ce qui permet de garder la rangée sous l'heure presque vide."],
  ["figure"],
  ["h2", "Modifier l'écran verrouillé"],
  ["ol", [
    "Déverrouille l'iPhone avec Face ID ou Touch ID, mais reste sur l'écran verrouillé.",
    "Touche l'écran longuement jusqu'à voir apparaître tes écrans verrouillés, puis touche « Personnaliser » et choisis l'écran verrouillé.",
    "Touche la zone sous l'heure pour ouvrir la liste des widgets. Retire ceux que tu ne veux plus avec le petit signe moins, puis ajoute les deux ou trois que tu as choisis.",
    "Touche la ligne au-dessus de l'heure pour choisir ce qui s'affiche à côté de la date.",
    "Touche « OK » pour enregistrer.",
  ]],
  ["p", "Les intitulés peuvent varier légèrement d'une version d'iOS à l'autre, mais le principe reste le même : un appui long sur l'écran verrouillé, puis « Personnaliser »."],
  ["h2", "Le fond d'écran compte aussi"],
  ["p", "Un widget calme posé sur une photo chargée reste difficile à lire. Un fond uni ou très simple, dans une teinte sombre ou neutre, rend l'heure et les widgets lisibles sans effort. Dans l'écran de personnalisation, tu peux aussi changer la police et la couleur de l'heure : une teinte proche du fond est plus discrète qu'un blanc éclatant."],
  ["p", "Sur les modèles dont l'écran reste allumé en version atténuée, un fond simple aide encore plus : tout ce que l'écran verrouillé affiche reste visible sur la table, toute la journée."],
  ["h2", "Un écran pour chaque moment de la journée"],
  ["p", "L'iPhone garde plusieurs écrans verrouillés et permet de passer de l'un à l'autre par un appui long. Tu peux aussi relier un écran à un mode de Concentration : quand ce mode s'active, l'écran correspondant apparaît, avec ses propres widgets."],
  ["p", "Deux écrans suffisent souvent. Un pour la journée, avec le calendrier et la météo. Un pour le soir, presque vide, avec l'heure et l'alarme du lendemain. Relié à un mode de Concentration programmé pour la nuit, il prend le relais tout seul à l'heure prévue."],
  ["h2", "Ce qu'il vaut mieux éviter"],
  ["ul", [
    "Les widgets qui comptent des non-lus : e-mails, messages, réseaux.",
    "Les actualités et les cours qui changent toutes les minutes.",
    "Plusieurs widgets de la même app, qui répètent la même information.",
    "Une rangée remplie juste parce qu'il reste de la place.",
  ]],
  ["h2", "En résumé"],
  ["ul", [
    "Un widget calme répond à une question et s'arrête là.",
    "Deux ou trois widgets suffisent : prochain événement, météo, une information personnelle.",
    "Un fond simple rend l'ensemble plus lisible.",
    "Un second écran, plus vide, peut prendre le relais le soir avec un mode de Concentration.",
  ]],
  ["p", "Tu as trouvé une combinaison de widgets qui te convient ? Décris-la en réponse à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Un écran verrouillé calme : une ligne courte au-dessus de l'heure, deux ou trois widgets en dessous, et beaucoup d'espace vide.";

export const diagram = svg(
  "0 0 560 440",
  "Schéma : un écran verrouillé avec des widgets calmes",
  "Un téléphone vu de face. En haut, une ligne avec la date et la météo, puis l'heure en grand, puis une rangée de trois widgets : prochain rendez-vous, météo, batterie des écouteurs. Le reste de l'écran est vide.",
  `<rect x="40" y="16" width="210" height="408" rx="34" class="o"/>
<rect x="110" y="28" width="70" height="16" rx="8" class="k"/>
<text x="145" y="86" text-anchor="middle" class="s">lun. 5 · 14°</text>
<text x="145" y="140" text-anchor="middle" style="font-size:52px;font-weight:600;fill:#111">9:41</text>
<rect x="64" y="160" width="48" height="48" rx="24"/><rect x="121" y="160" width="48" height="48" rx="24"/><rect x="178" y="160" width="48" height="48" rx="24"/>
<path d="M76 184h24M133 184h24M190 184h24"/>
<path d="M260 80h40"/><text x="310" y="85">Ligne de la date</text><text x="310" y="106" class="s">une info courte, ou rien</text>
<path d="M260 132h40"/><text x="310" y="137">L'heure</text>
<path d="M240 184h60"/><text x="310" y="180">Deux ou trois widgets</text><text x="310" y="201" class="s">rendez-vous, météo, batterie</text>
<path d="M250 310h50"/><text x="310" y="306">De l'espace vide</text><text x="310" y="327" class="s">fond uni ou très simple</text>`,
);
