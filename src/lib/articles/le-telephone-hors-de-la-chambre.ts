// Article : « Le téléphone hors de la chambre ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Le dernier écran de la journée est souvent le plus long. Le téléphone est sur la table de nuit, l'écran s'allume pour une heure, une notification, une habitude. Le sommeil commence plus tard, et le matin recommence par le même objet."],
  ["p", "Le réglage le plus simple n'est pas dans un menu. C'est un endroit : le téléphone charge dans une autre pièce. La chambre garde un réveil, et rien qui défile."],
  ["h2", "Où il charge"],
  ["p", "Choisis une prise déjà utilisée le soir : la cuisine, l'entrée, le bureau. Le câble y reste. En te couchant, le geste est le même que poser les clés. Tu n'as pas à décider chaque nuit si le téléphone entre ou non."],
  ["p", "S'il te sert de réveil, deux solutions. Un réveil séparé, même simple, règle la question. Sinon, le téléphone reste dans la chambre, mais de l'autre côté de la pièce, écran contre la table, en mode silencieux. Te lever pour l'éteindre le matin est déjà un autre geste que de le prendre sur l'oreiller."],
  ["h2", "Le mode Sommeil"],
  ["ol", [
    "Ouvre Réglages, puis Concentration, puis Sommeil.",
    "Indique les heures : par exemple de 22 h 30 à 7 h.",
    "Autorise seulement les appels de tes proches, dans Personnes autorisées.",
    "Laisse l'écran verrouillé discret : pas de liste de notifications au réveil.",
  ]],
  ["p", "Le mode Sommeil peut assombrir l'écran verrouillé et regrouper ce qui est arrivé dans la nuit. Il ne remplace pas le fait de laisser le téléphone ailleurs. Il sert pour les soirs où le téléphone doit rester à portée, et pour le matin, afin que le premier écran ne soit pas un fil."],
  ["figure"],
  ["h2", "Le matin, un écran calme"],
  ["p", "Si le téléphone a dormi dans une autre pièce, le premier geste n'est pas de le consulter au lit. Tu le retrouves en sortant, après t'être levé. Ce décalage, même de quelques minutes, évite que la journée commence par les notifications de la nuit."],
  ["p", "Sur l'écran verrouillé, garde l'heure et, si tu veux, le prochain rendez-vous. Le reste peut attendre le résumé du matin. Tu as déjà ce réglage si les notifications non urgentes sont regroupées."],
  ["h2", "Une semaine d'essai"],
  ["p", "Essaie sept nuits, pas une. La première, tu penseras au téléphone resté dehors. C'est le sevrage du geste, pas un manque d'information : rien d'urgent n'arrive entre minuit et sept heures qui ne puisse attendre, ou passer par un appel autorisé."],
  ["p", "Si une nuit se passe mal, ne reviens pas en arrière pour toutes les autres. Note ce qui manquait, le réveil ou un appel, et corrige ce point. Le téléphone sur la table de nuit n'est pas la seule solution à un réveil raté."],
  ["h2", "En résumé"],
  ["ul", [
    "Le téléphone charge hors de la chambre, sur une prise déjà choisie.",
    "Un réveil séparé, ou le téléphone de l'autre côté de la pièce, écran retourné.",
    "Concentration, puis Sommeil, avec seulement les proches autorisés.",
    "Sept nuits d'essai avant de juger.",
  ]],
  ["p", "Où charge ton téléphone ce soir ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "La chambre garde le réveil. Le téléphone charge dans une autre pièce, écran éteint.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : chambre sans téléphone, charge dans une autre pièce",
  "Deux cadres. À gauche, la chambre, avec un petit réveil et pas de téléphone. À droite, une autre pièce, avec un téléphone sur un câble.",
  `<text x="40" y="36" class="h">Chambre</text>
<rect x="40" y="56" width="200" height="140" rx="12" class="o"/>
<rect x="70" y="100" width="46" height="36" rx="6" class="o"/>
<text x="93" y="123" text-anchor="middle" class="s">7:00</text>
<text x="140" y="220" text-anchor="middle" class="s">réveil seul</text>
<text x="300" y="36" class="h">Autre pièce</text>
<rect x="300" y="56" width="200" height="140" rx="12" class="o"/>
<rect x="372" y="90" width="56" height="78" rx="10" class="o"/>
<path d="M400 168v18"/>
<text x="400" y="220" text-anchor="middle" class="s">téléphone en charge</text>`,
);
