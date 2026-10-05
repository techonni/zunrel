// Article : « Les mentions et les rappels ».
import { svg, type Block } from "./common";

export const body: Block[] = [
  ["p", "Tape @ pour parler à Notion : tu peux citer une page, une personne ou une date. Ajoute remind juste après pour te faire prévenir au bon moment."],
  ["h2", "Mentionner une page ou une date"],
  ["ol", [
    "Dans une page, tape @ puis le début du nom d'une autre page : un lien se crée.",
    "Tape @ aujourd'hui, @ demain ou une date : Notion affiche une pastille de date.",
    "Tape @remind demain (ou une date et une heure) : tu recevras une notification.",
    "Clique sur le rappel pour régler l'heure exacte et l'avance (par exemple 30 minutes avant).",
  ]],
  ["figure"],
  ["h2", "Rappels dans une base de données"],
  ["p", "Si une base a une propriété Date, ouvre la date d'une ligne et active le rappel dans le calendrier qui s'affiche. Tu seras notifié dans Notion (et par e-mail si l'appli n'est pas ouverte)."],
  ["h2", "À retenir"],
  ["ul", [
    "@ page = lien qui suit le titre de la page.",
    "@remind = notification à une date et une heure.",
    "Les rappels récurrents automatiques ne sont pas proposés pour l'instant : recrée-les ou utilise une habitude quotidienne.",
  ]],
  ["p", "Pour relier des pages entre elles sans rappel, vois « Utiliser les mentions et les liens dans Notion »."],
];

export const caption = "Une pastille @ date et un rappel : Notion te prévient au moment choisi.";

export const points = ["@ pour une page ou une date", "@remind pour une notification", "Clique le rappel pour régler l'heure"];

export const diagram = svg(
  "0 0 560 260",
  "Schéma : mentions et rappels",
  "Une page avec une mention de page, une date et un rappel mis en évidence.",
  `<rect x="80" y="40" width="400" height="180" rx="10" class="o"/><rect x="110" y="70" width="140" height="14" rx="7" class="f"/><rect x="110" y="110" width="200" height="10" rx="5" class="l"/><rect x="110" y="140" width="120" height="28" rx="14" class="o"/><text x="170" y="159" text-anchor="middle" class="s">@ Projet</text><rect x="250" y="140" width="160" height="28" rx="14" class="f"/><text x="330" y="159" text-anchor="middle" class="s" style="fill:#fff">@remind demain</text>`,
);
