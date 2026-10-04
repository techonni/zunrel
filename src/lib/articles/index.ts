// Texte, schéma et légende de chaque article, par adresse (slug).
import type { Article } from "./common";
import * as a1 from "./une-seule-liste-pour-la-semaine";
import * as a2 from "./choisir-des-apps-iphone-epurees";
import * as a3 from "./des-widgets-calmes-sur-l-ecran-verrouille";
import * as a4 from "./une-to-do-sans-bruit-avec-rappels";
import * as a5 from "./desencombrer-l-ecran-d-accueil-en-20-minutes";
import * as a6 from "./les-notifications-a-heures-fixes";
import * as a7 from "./enlever-les-pastilles-rouges";
import * as a8 from "./l-iphone-en-gris-le-soir";
import * as a9 from "./vider-safari-en-deux-minutes";
import * as a10 from "./une-limite-pour-les-apps-qui-attirent";
import * as a11 from "./le-telephone-hors-de-la-chambre";

export const articles: Record<string, Article> = {
  "une-seule-liste-pour-la-semaine": a1,
  "choisir-des-apps-iphone-epurees": a2,
  "des-widgets-calmes-sur-l-ecran-verrouille": a3,
  "une-to-do-sans-bruit-avec-rappels": a4,
  "desencombrer-l-ecran-d-accueil-en-20-minutes": a5,
  "les-notifications-a-heures-fixes": a6,
  "enlever-les-pastilles-rouges": a7,
  "l-iphone-en-gris-le-soir": a8,
  "vider-safari-en-deux-minutes": a9,
  "une-limite-pour-les-apps-qui-attirent": a10,
  "le-telephone-hors-de-la-chambre": a11,
};
