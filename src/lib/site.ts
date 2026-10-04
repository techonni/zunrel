// Zunrel : site pour minimalistes digitaux. Tout le contenu du site est ici.
// Voix : tutoiement (« Deviens minimaliste digital »).

// Typographie française : espaces insécables avant « : ; ? ! » et dans les guillemets.
export const f = (t: string) =>
  t
    .replace(/« /g, "«\u00a0")
    .replace(/ »/g, "\u00a0»")
    .replace(/ ([?!;])/g, "\u202f$1")
    .replace(/ :/g, "\u00a0:")
    .replace(/(\d) (?=[a-zà-ÿ])/g, "$1\u00a0");

export const siteName = "Zunrel";
export const tagline = "Site pour minimalistes digitaux : moins de bruit, tech plus intentionnelle.";
export const promise = "Deviens minimaliste digital.";
export const promiseSub = "Des alternatives simples aux interfaces encombrées.";
export const homeTitle = "Zunrel · Deviens minimaliste digital";
export const homeDescription =
  "Zunrel, le site pour minimalistes digitaux : des articles courts pour un iPhone épuré, des alternatives simples aux interfaces encombrées et une lettre chaque dimanche.";
export const ogImage = "/og.png";

// Formulaire Mailchimp « embedded » (même liste et même formulaire qu'avant).
export const newsletter = {
  action: "https://gmail.us9.list-manage.com/subscribe/post?u=13aa96838d6074fef23022e3e&id=893c08eb5d&f_id=0073d9e1f0",
  honeypot: "b_13aa96838d6074fef23022e3e_893c08eb5d",
  // Tag de langue « fr » déjà existant dans Mailchimp.
  tag: "11404680",
};
export const freeGuide = "Guide gratuit : un iPhone épuré en 20 minutes";

export type Post = { title: string; description: string; slug?: string; date?: string; dateLabel?: string };

// Blog : seul le premier article est publié. Les autres sont annoncés (« Bientôt »), sans lien.
export const posts: Post[] = [
  {
    title: "Une seule liste pour la semaine",
    description: "Avec l'app Rappels : une liste, sept sections, et dix minutes de revue le dimanche.",
    slug: "une-seule-liste-pour-la-semaine",
    date: "2026-10-04",
    dateLabel: "4 oct. 2026",
  },
  { title: "Choisir des apps iPhone épurées", description: "Une fonction, pas de compte obligatoire, pas de notifications par défaut : trois critères simples." },
  { title: "Des widgets calmes sur l'écran verrouillé", description: "L'heure, le prochain rendez-vous, la météo. Ce qui informe d'un coup d'œil, sans attirer le regard." },
  { title: "Une to-do sans bruit avec Rappels", description: "Des dates seulement quand il le faut, des alertes seulement pour ce qui a une heure." },
  { title: "Désencombrer l'écran d'accueil en 20 minutes", description: "Une page, quatre apps dans le dock, le reste rangé dans la Bibliothèque d'apps." },
  { title: "Les notifications, à heures fixes", description: "Regrouper les alertes non urgentes en deux ou trois rendez-vous par jour." },
];

// Boutique : exemples, rien n'est en vente.
export const shop: [string, string][] = [
  ["Fonds d'écran unis", "Des couleurs calmes pour l'écran d'accueil et l'écran verrouillé."],
  ["Icônes monochromes", "Un jeu d'icônes sobres pour les apps du quotidien."],
  ["Planificateur de la semaine", "Une page imprimable pour sept jours et une section « Plus tard »."],
  ["Calendrier mensuel", "Un mois sur une page, sans cases inutiles."],
  ["Mises en page de widgets", "Des modèles simples pour l'heure, la date et la météo."],
  ["Carnet de semaine", "Un petit carnet papier pour la liste de la semaine."],
  ["Pochette pour le soir", "Un endroit où ranger le téléphone, loin de la table de nuit."],
  ["Support de bureau", "Pour poser le téléphone écran retourné pendant le travail."],
];

export const nav = [
  { href: "/blog/", label: "Blog", key: "blog" },
  { href: "/boutique/", label: "Boutique", key: "boutique" },
  { href: "/newsletter/", label: "Lettre", key: "lettre" },
];
