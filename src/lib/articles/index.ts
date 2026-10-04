// Texte, schéma et légende de chaque article, par adresse (slug).
import type { Article } from "./common";
import * as a1 from "./une-seule-liste-pour-la-semaine";
import * as a2 from "./choisir-des-apps-iphone-epurees";
import * as a3 from "./des-widgets-calmes-sur-l-ecran-verrouille";
import * as a4 from "./une-to-do-sans-bruit-avec-rappels";
import * as a5 from "./desencombrer-l-ecran-d-accueil-en-20-minutes";
import * as a6 from "./les-notifications-a-heures-fixes";

export const articles: Record<string, Article> = {
  "une-seule-liste-pour-la-semaine": a1,
  "choisir-des-apps-iphone-epurees": a2,
  "des-widgets-calmes-sur-l-ecran-verrouille": a3,
  "une-to-do-sans-bruit-avec-rappels": a4,
  "desencombrer-l-ecran-d-accueil-en-20-minutes": a5,
  "les-notifications-a-heures-fixes": a6,
};
