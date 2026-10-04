// Article : « Une seule liste pour la semaine ».
import type { Block } from "./common";

export const body: Block[] = [
  ["p", "Une liste pour le travail, une pour la maison, une pour les idées, une autre pour les courses. Chaque nouvelle liste semble utile au moment où on la crée. Au bout de quelques semaines, il faut en ouvrir quatre pour savoir quoi faire aujourd'hui, et certaines ne sont plus jamais relues."],
  ["p", "L'idée de cet article est inverse : une seule liste pour toute la semaine. Elle se lit en une minute le matin et se range en dix minutes le dimanche. Tout se fait avec l'app Rappels, déjà installée sur l'iPhone, sans compte supplémentaire."],
  ["h2", "Pourquoi une seule liste"],
  ["p", "Chaque liste est un endroit de plus à vérifier. Quand les tâches sont dispersées, on passe plus de temps à se demander où elles sont qu'à les faire. Avec une seule liste, il ne reste qu'une question : qu'est-ce que je fais aujourd'hui ?"],
  ["p", "Une liste de la semaine a aussi une limite naturelle. Elle ne contient que ce qui peut raisonnablement être fait en sept jours. Le reste attend ailleurs, dans une seule section prévue pour ça."],
  ["h2", "Créer la liste en cinq minutes"],
  ["p", "Ouvre Rappels, touche « Ajouter une liste » et appelle-la « Semaine ». Choisis une couleur sobre : elle ne sert qu'à la reconnaître."],
  ["p", "Dans cette liste, crée une section par jour, du lundi au dimanche, puis une dernière section nommée « Plus tard ». Si tu préfères voir toute la semaine d'un coup d'œil, l'affichage en colonnes place les sections côte à côte."],
  ["p", "Si tu avais déjà plusieurs listes, déplace leurs tâches dans « Plus tard ». Ne trie pas tout de suite : le tri viendra le dimanche."],
  ["figure"],
  ["h2", "Remplir sans surcharger"],
  ["p", "Une règle simple aide beaucoup : trois tâches par jour au maximum. Si une journée en demande plus, c'est souvent qu'une tâche est trop grosse ou qu'elle peut attendre."],
  ["p", "Écris chaque tâche comme une action concrète. « Appeler le garage » se fait ; « Voiture » ne se fait pas. Si tu ne sais pas par quoi commencer, la tâche n'est pas encore assez précise."],
  ["p", "Garde les dates et les alertes pour ce qui a vraiment une heure : un rendez-vous, un délai. Pour le reste, la section du jour suffit. Moins d'alertes, c'est moins de notifications qui interrompent la journée."],
  ["h2", "Le matin : une minute"],
  ["p", "Ouvre la liste, lis la section du jour, et referme l'app. Une tâche terminée se coche. Une tâche qui ne sera pas faite se fait glisser au lendemain, ou dans « Plus tard ». Le but n'est pas de tout finir, mais de savoir où en est la semaine."],
  ["h2", "Le dimanche : dix minutes de revue"],
  ["ol", ["Supprime les tâches cochées, ou laisse Rappels les masquer.", "Déplace ce qui reste de la semaine passée vers la nouvelle semaine ou vers « Plus tard ».", "Lis « Plus tard » et choisis deux ou trois éléments pour les jours qui viennent.", "Supprime ce qui n'a plus de sens. Une tâche abandonnée volontairement n'est pas un échec."]],
  ["p", "Dix minutes suffisent parce que la liste est courte. Si la revue dure plus longtemps, c'est le signe que « Plus tard » se remplit trop vite : c'est le bon moment pour y faire le ménage."],
  ["h2", "Ce que la méthode ne fait pas"],
  ["p", "Elle ne gère ni les projets à long terme, ni les priorités en couleur, ni les étiquettes. C'est volontaire. Si tu partages des courses avec quelqu'un, une deuxième liste partagée reste raisonnable. Au-delà, chaque nouvelle liste ramène le problème du départ."],
  ["h2", "En résumé"],
  ["ul", ["Une liste « Semaine » dans Rappels, avec une section par jour et une section « Plus tard ».", "Trois tâches par jour au maximum, écrites comme des actions.", "Des dates et des alertes seulement pour ce qui a une heure.", "Une minute le matin, dix minutes le dimanche."]],
  ["p", "Tu as ta propre façon de tenir la semaine ? Réponds à la lettre du dimanche pour la partager : les meilleures idées des lecteurs alimentent les prochains articles."],
];

export const caption = "Avant : plusieurs listes à vérifier. Après : une seule liste, une section par jour, et « Plus tard » pour le reste.";

// Schéma original : plusieurs listes dispersées → une seule liste « Semaine ».
const lst = (x: number, y: number, label: string) =>
  `<rect x="${x}" y="${y}" width="120" height="58" rx="8"/><text x="${x + 14}" y="${y + 24}" class="h2">${label}</text><path d="M${x + 14} ${y + 40}h70"/>`;
const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
export const diagram = `<svg viewBox="0 0 560 420" role="img" aria-labelledby="sch-t sch-d" class="sch">
<title id="sch-t">Schéma : de plusieurs listes à une seule liste de la semaine</title>
<desc id="sch-d">À gauche, quatre listes séparées : Travail, Maison, Idées, Courses. Une flèche mène à droite vers une seule liste Semaine, découpée en sections du lundi au dimanche, plus une section Plus tard.</desc>
<style>.sch rect{fill:none;stroke:#3d3d3d;stroke-width:1.5}.sch .o{stroke-width:2}.sch .k{fill:#3d3d3d;stroke:none;opacity:.08}.sch text{font:500 16px Inter,system-ui,sans-serif;fill:#3d3d3d}.sch .h{font-weight:600;font-size:18px;fill:#111}.sch .h2{font-weight:600;font-size:15px;fill:#111}.sch path{fill:none;stroke:#3d3d3d;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.sch circle{fill:none;stroke:#3d3d3d;stroke-width:1.5}</style>
${lst(20, 40, "Travail")}${lst(150, 78, "Maison")}${lst(30, 150, "Idées")}${lst(140, 196, "Courses")}
<path d="M276 170h52M318 160l10 10-10 10"/>
<rect x="350" y="20" width="190" height="330" rx="12" class="o"/>
<text x="366" y="50" class="h">Semaine</text>
${days.map((d, i) => `<text x="366" y="${84 + i * 32}">${d}</text><circle cx="426" cy="${79 + i * 32}" r="5"/><path d="M438 ${79 + i * 32}h${i % 3 === 2 ? 50 : 80}"/>`).join("")}
<rect x="358" y="306" width="174" height="34" rx="6" class="k"/><text x="366" y="329">Plus tard</text>
<text x="140" y="300" text-anchor="middle" class="h">Avant</text><text x="140" y="324" text-anchor="middle">4 listes à vérifier</text>
<text x="445" y="384" text-anchor="middle" class="h">Après</text><text x="445" y="408" text-anchor="middle">1 liste, 7 sections</text>
</svg>`;
