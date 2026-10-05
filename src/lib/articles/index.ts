// Texte, schéma et légende de chaque article, par adresse (slug).
import type { Article } from "./common";
import * as a1 from "./notion-c-est-quoi";
import * as a2 from "./notion-est-il-gratuit";
import * as a3 from "./creer-ta-premiere-page-notion";
import * as a4 from "./page-ou-base-de-donnees";
import * as a5 from "./les-proprietes-d-une-base-de-donnees";
import * as a6 from "./les-vues-d-une-base-de-donnees";
import * as a7 from "./filtrer-et-trier-sans-rien-perdre";
import * as a8 from "./dupliquer-un-modele-notion";
import * as a9 from "./notion-sur-ton-telephone";
import * as a10 from "./creer-une-liste-de-taches-notion";
import * as a11 from "./creer-ton-propre-modele-notion";
import * as a12 from "./relier-deux-bases-de-donnees";

export const articles: Record<string, Article> = {
  "notion-c-est-quoi": a1,
  "notion-est-il-gratuit": a2,
  "creer-ta-premiere-page-notion": a3,
  "page-ou-base-de-donnees": a4,
  "les-proprietes-d-une-base-de-donnees": a5,
  "les-vues-d-une-base-de-donnees": a6,
  "filtrer-et-trier-sans-rien-perdre": a7,
  "dupliquer-un-modele-notion": a8,
  "notion-sur-ton-telephone": a9,
  "creer-une-liste-de-taches-notion": a10,
  "creer-ton-propre-modele-notion": a11,
  "relier-deux-bases-de-donnees": a12,
};
