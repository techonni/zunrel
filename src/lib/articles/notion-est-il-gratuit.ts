// Article : « Notion est-il gratuit ? ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Oui. Notion a un plan gratuit, sans durée limitée. Pour une personne seule qui veut organiser ses notes, ses tâches ou ses projets, il suffit largement pour démarrer."],
  ["h2", "Ce que tu as quand tu es seul"],
  ["p", "Si ton espace de travail n'a qu'un seul membre, toi, tu peux créer autant de pages et de blocs que tu veux. C'est ce que la page des tarifs de Notion indique, vérifiée le 5 octobre 2026."],
  ["ul", [
    "Pages et blocs sans limite dans un espace de travail à un seul membre.",
    "Une limite de taille pour les fichiers que tu téléverses : 5 Mo par fichier sur le plan gratuit.",
    "Un historique des pages plus court que sur les plans payants.",
  ]],
  ["figure"],
  ["h2", "Ce qui change à plusieurs"],
  ["p", "Si ton espace de travail compte plusieurs membres, le plan gratuit limite le nombre de blocs. Quand la limite est atteinte, tu peux toujours lire, modifier et ranger ce qui existe, mais tu ne peux plus ajouter de nouveaux blocs. Inviter des personnes sur des pages précises, comme invités, est possible dans une certaine limite."],
  ["h2", "Les plans payants"],
  ["p", "Ils ajoutent surtout des fichiers plus gros, plus d'historique, plus d'invités et, selon le plan, les fonctions d'intelligence artificielle de Notion. Les prix et les limites changent de temps en temps : regarde la page officielle des tarifs avant de décider."],
  ["h2", "Faut-il payer pour débuter ?"],
  ["p", "Non. Commence gratuitement. Passe à un plan payant seulement si tu butes sur une limite précise, par exemple des fichiers trop lourds ou un travail à plusieurs."],
  ["ul", [
    "Le plan gratuit n'a pas de date de fin.",
    "Seul, tu n'as pas de limite de pages ni de blocs.",
    "À plusieurs, ou avec de gros fichiers, les limites apparaissent.",
    "Vérifie toujours les tarifs sur le site officiel de Notion.",
  ]],
];

export const caption = "Seul, le plan gratuit ne limite ni les pages ni les blocs. À plusieurs, le nombre de blocs devient limité.";

export const diagram = svg(
  "0 0 560 260",
  "Schéma : Notion gratuit, seul ou à plusieurs",
  "Deux cartes côte à côte. À gauche, une personne seule : pages et blocs illimités. À droite, plusieurs personnes : nombre de blocs limité.",
  `<text x="40" y="36" class="h">Seul</text>
<rect x="40" y="54" width="220" height="160" rx="12" class="o"/>
<circle cx="150" cy="96" r="14"/><path d="M122 146c2-16 12-24 28-24s26 8 28 24"/>
<path d="M92 178l8 8 18-18"/><text x="128" y="184" class="s">pages et blocs</text>
<text x="300" y="36" class="h">À plusieurs</text>
<rect x="300" y="54" width="220" height="160" rx="12" class="o"/>
<circle cx="372" cy="96" r="11"/><path d="M350 140c2-13 10-20 22-20s20 7 22 20"/>
<circle cx="448" cy="96" r="11"/><path d="M426 140c2-13 10-20 22-20s20 7 22 20"/>
<rect x="340" y="166" width="140" height="10" rx="5" class="k"/><rect x="340" y="166" width="96" height="10" rx="5" class="f"/>
<text x="410" y="198" text-anchor="middle" class="s">blocs en nombre limité</text>`,
);
