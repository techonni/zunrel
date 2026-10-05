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
import * as a13 from "./creer-un-calendrier-dans-notion";
import * as a14 from "./prendre-des-notes-de-reunion-notion";
import * as a15 from "./les-blocs-de-base-de-notion";
import * as a16 from "./organiser-ses-pages-avec-des-sous-pages";
import * as a17 from "./les-raccourcis-clavier-notion";
import * as a18 from "./creer-un-suivi-des-habitudes-notion";
import * as a19 from "./partager-une-page-notion";
import * as a20 from "./ajouter-des-images-et-fichiers-notion";
import * as a21 from "./creer-un-tableau-kanban-notion";
import * as a22 from "./utiliser-les-mentions-et-liens-notion";
import * as a23 from "./creer-une-page-d-accueil-notion";
import * as a24 from "./ranger-ses-lectures-et-idees-notion";

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
  "creer-un-calendrier-dans-notion": a13,
  "prendre-des-notes-de-reunion-notion": a14,
  "les-blocs-de-base-de-notion": a15,
  "organiser-ses-pages-avec-des-sous-pages": a16,
  "les-raccourcis-clavier-notion": a17,
  "creer-un-suivi-des-habitudes-notion": a18,
  "partager-une-page-notion": a19,
  "ajouter-des-images-et-fichiers-notion": a20,
  "creer-un-tableau-kanban-notion": a21,
  "utiliser-les-mentions-et-liens-notion": a22,
  "creer-une-page-d-accueil-notion": a23,
  "ranger-ses-lectures-et-idees-notion": a24,
};
