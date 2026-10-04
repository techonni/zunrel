// Article : « Vider Safari en deux minutes ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un onglet ouvert n'est pas une lecture en cours. C'est souvent une page que tu as quittée, et que Safari garde au cas où. Au bout de quelques jours, l'aperçu des onglets ressemble à un tiroir : des titres à moitié lus, des boutiques, un article commencé mardi. Rien de tout cela n'attend vraiment."],
  ["p", "Vider Safari n'est pas une perte. Si une page compte, elle a une place : un signet, une liste de lecture, ou une note. Le reste peut se fermer. Deux minutes suffisent, le soir, avant de poser le téléphone."],
  ["h2", "Fermer, sans trier longtemps"],
  ["ol", [
    "Ouvre Safari, touche le bouton des onglets, en bas à droite.",
    "Maintiens le doigt sur Terminé, ou touche les trois points, puis Fermer tous les onglets. Confirme.",
    "S'il reste un onglet que tu veux vraiment finir, rouvre-le tout de suite et envoie-le dans la liste de lecture, via le bouton de partage.",
    "Repars avec un seul onglet, la page de démarrage.",
  ]],
  ["p", "Le tri complet, onglet par onglet, est le piège. Tu relis des titres, tu rouvres une page, et les deux minutes deviennent vingt. Ferme d'abord. Garde ensuite, seulement si une page te revient dans la minute."],
  ["figure"],
  ["h2", "Une fermeture automatique"],
  ["p", "Dans Réglages, puis Safari, puis Fermer les onglets, choisis Après un jour. Les onglets que tu n'as pas rouverts disparaissent le lendemain. Après une semaine existe aussi : c'est déjà mieux que Manuellement, qui ne ferme jamais rien."],
  ["p", "Ce réglage ne touche pas aux signets ni à la liste de lecture. Il ne vide que les onglets oubliés. Tu peux donc fermer sans crainte : ce qui est rangé reste rangé."],
  ["h2", "Trois adresses, pas trente"],
  ["p", "Si tu reviens souvent aux mêmes sites, trois signets dans la barre des favoris suffisent : un pour le travail, un pour une lecture choisie, un pour un outil. Le reste de la page de démarrage peut rester vide. Les suggestions et les sites fréquents relancent des visites que tu n'avais pas prévues. Dans Réglages, puis Safari, tu peux désactiver les suggestions de la page de démarrage si elles te ramènent vers des sites que tu ne cherchais pas."],
  ["h2", "Le soir, deux minutes"],
  ["p", "Associe le geste à un moment déjà là : après le résumé des notifications, ou en branchant le téléphone. Ouvrir les onglets, tout fermer, reposer. Si une page mérite demain, elle va dans la liste de lecture, pas dans un onglet qui restera ouvert toute la nuit."],
  ["p", "Au bout d'une semaine avec la fermeture après un jour, l'aperçu des onglets reste court sans que tu y penses. C'est le signe que le réglage fait le travail."],
  ["h2", "En résumé"],
  ["ul", [
    "Fermer tous les onglets le soir, sans trier longtemps.",
    "Une page qui compte va dans la liste de lecture ou les signets, pas dans un onglet.",
    "Réglages, Safari, Fermer les onglets : Après un jour.",
    "Trois favoris, pas une page de démarrage pleine.",
  ]],
  ["p", "Combien d'onglets restaient ouverts avant ce passage ? Réponds à la lettre du dimanche : les réglages des lecteurs nourrissent les prochains articles."],
];

export const caption = "Avant : une grille d'onglets oubliés. Après : un seul onglet, et trois adresses gardées à part.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : beaucoup d'onglets, puis un seul",
  "À gauche, une grille de huit rectangles qui représentent des onglets. À droite, un seul rectangle, avec trois petits traits en dessous pour les adresses gardées.",
  `<text x="40" y="36" class="h">Avant</text>
<rect x="70" y="58" width="30" height="40" rx="4" class="o"/><rect x="106" y="58" width="30" height="40" rx="4" class="o"/><rect x="142" y="58" width="30" height="40" rx="4" class="o"/><rect x="178" y="58" width="30" height="40" rx="4" class="o"/><rect x="70" y="106" width="30" height="40" rx="4" class="o"/><rect x="106" y="106" width="30" height="40" rx="4" class="o"/><rect x="142" y="106" width="30" height="40" rx="4" class="o"/><rect x="178" y="106" width="30" height="40" rx="4" class="o"/>
<text x="130" y="180" text-anchor="middle" class="s">onglets ouverts</text>
<path d="M250 110h70"/>
<path d="M308 102l12 8-12 8"/>
<text x="360" y="36" class="h">Après</text>
<rect x="400" y="70" width="70" height="88" rx="8" class="o"/>
<path d="M390 180h28M428 180h28M466 180h28"/>
<text x="430" y="214" text-anchor="middle" class="s">un onglet, trois adresses</text>`,
);
