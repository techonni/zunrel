// Article : « Un tableau de bord personnel ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Un tableau de bord personnel, c'est une seule page qui pointe vers le reste : tâches du jour, notes récentes, liens utiles. Tu l'ouvres le matin, tu sais où aller."],
  ["h2", "Construire la page"],
  ["ol", [
    "Crée une page « Accueil » ou « Tableau de bord ».",
    "Ajoute un titre du jour et trois sections : Aujourd'hui, Notes, Liens.",
    "Sous Aujourd'hui, colle une vue filtrée de ta liste de tâches (ou une liste à cocher simple).",
    "Sous Liens, mentionne avec @ tes pages importantes : journal, projets, habitudes.",
  ]],
  ["figure"],
  ["h2", "Garder une seule porte d'entrée"],
  ["p", "Évite de dupliquer le contenu : le tableau de bord montre des liens et des vues, pas des copies. Quand une section grossit, déplace-la vers une sous-page et laisse seulement le lien."],
  ["h2", "Routine du matin"],
  ["ul", [
    "Ouvre le tableau de bord en premier.",
    "Coche ou avance une seule tâche importante.",
    "Ferme le reste : le but est de réduire le choix, pas d'afficher tout ton espace.",
  ]],
  ["p", "Proche de cet usage : « Créer une page d'accueil dans Notion » et « Créer une liste de tâches dans Notion »."],
];

export const caption = "Tâches, notes et liens : une seule page pour démarrer la journée.";

export const points = ["Une page Accueil comme porte d'entrée", "Des liens @ vers tes pages clés", "Des vues, pas des copies"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : tableau de bord personnel",
  "Une page avec trois zones : Aujourd'hui, Notes et Liens.",
  `<rect x="40" y="30" width="480" height="200" rx="10" class="o"/><rect x="60" y="50" width="140" height="12" rx="6" class="f"/><text x="60" y="95" class="h2">Aujourd'hui</text><rect x="60" y="110" width="18" height="18" rx="4" class="o"/><rect x="88" y="114" width="120" height="8" rx="4" class="l"/><rect x="60" y="140" width="18" height="18" rx="4" class="o"/><rect x="88" y="144" width="100" height="8" rx="4" class="l"/><text x="280" y="95" class="h2">Notes</text><rect x="280" y="114" width="100" height="8" rx="4" class="l"/><rect x="280" y="138" width="80" height="8" rx="4" class="l"/><text x="420" y="95" class="h2">Liens</text><rect x="420" y="110" width="80" height="24" rx="12" class="o"/><rect x="420" y="144" width="80" height="24" rx="12" class="o"/>`,
);
