// Zunrel : Notion pour débutants, en français. Tout le contenu du site est ici.
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
export const tagline = "Notion pour débutants, en français : des guides courts et des modèles simples.";
export const promise = "Comprends Notion, simplement.";
export const promiseSub = "Des guides courts pour bien démarrer, puis des modèles prêts à dupliquer.";
export const homeTitle = "Zunrel · Notion pour débutants, en français";
export const homeDescription =
  "Zunrel, Notion pour débutants en français : des guides courts pour créer tes premières pages et bases de données, des modèles simples à dupliquer et une lettre chaque dimanche.";
export const ogImage = "/og.png";

// Formulaire Mailchimp « embedded » (même liste et même formulaire qu'avant).
export const newsletter = {
  action: "https://gmail.us9.list-manage.com/subscribe/post?u=13aa96838d6074fef23022e3e&id=893c08eb5d&f_id=0073d9e1f0",
  honeypot: "b_13aa96838d6074fef23022e3e_893c08eb5d",
  // Tag de langue « fr » déjà existant dans Mailchimp.
  tag: "11404680",
};
export const freeGuide = "Une astuce Notion chaque dimanche";

export type Post = { title: string; description: string; slug: string; date: string; dateLabel: string };

// Blog : ordre d'affichage. Le texte de chaque article est dans src/lib/articles/.
export const posts: Post[] = [
  { title: "Notion, c'est quoi ?", description: "Pages, blocs, bases de données : les trois idées à comprendre avant de cliquer.", slug: "notion-c-est-quoi", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Notion est-il gratuit ?", description: "Ce que le plan gratuit permet quand tu es seul, et ce qui change à plusieurs.", slug: "notion-est-il-gratuit", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer ta première page Notion", description: "Un titre, quelques blocs, une liste à cocher : une page utile en dix minutes.", slug: "creer-ta-premiere-page-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Page ou base de données ?", description: "La confusion la plus courante des débutants, et une règle simple pour choisir.", slug: "page-ou-base-de-donnees", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Les propriétés d'une base de données", description: "Texte, sélection, date, case à cocher : choisir la bonne propriété pour chaque colonne.", slug: "les-proprietes-d-une-base-de-donnees", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Voir la même base de données de plusieurs façons", description: "Table, tableau, calendrier, galerie : une seule base, plusieurs vues.", slug: "les-vues-d-une-base-de-donnees", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Filtrer et trier sans rien perdre", description: "Afficher seulement ce qui compte aujourd'hui, sans supprimer le reste.", slug: "filtrer-et-trier-sans-rien-perdre", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Dupliquer un modèle Notion", description: "Récupérer un modèle partagé, le vider de ses exemples et le faire à toi.", slug: "dupliquer-un-modele-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Utiliser Notion sur ton téléphone", description: "Installer l'application, retrouver tes pages et noter vite, où que tu sois.", slug: "notion-sur-ton-telephone", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer une liste de tâches dans Notion", description: "Une base de données simple avec un nom, un statut et une date.", slug: "creer-une-liste-de-taches-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer un modèle pour ne plus recommencer", description: "Garder une page toute prête pour les réunions, lectures ou tâches répétées.", slug: "creer-ton-propre-modele-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Relier deux bases de données", description: "Rattacher chaque tâche à son projet avec une propriété Relation.", slug: "relier-deux-bases-de-donnees", date: "2026-10-05", dateLabel: "5 oct. 2026" },
];

// Boutique : modèles Notion prévus, rien n'est en vente.
export const shop: [string, string][] = [
  ["Tâches de la semaine", "Une base de tâches avec une vue par jour et une vue « à faire »."],
  ["Planificateur de contenu", "Un calendrier pour planifier tes publications, de l'idée à la mise en ligne."],
  ["Suivi de projets", "Un tableau en trois colonnes : à faire, en cours, terminé."],
  ["Notes de cours", "Une page par cours, avec une liste de révisions."],
  ["Suivi de lectures", "Une galerie de livres avec statut, note et citations."],
  ["Budget du mois", "Revenus, dépenses et un total clair, sans formule compliquée."],
  ["Suivi d'habitudes", "Une case à cocher par jour pour les habitudes qui comptent."],
  ["Bibliothèque d'idées", "Un endroit pour noter, trier et retrouver ses idées."],
];

export const nav = [
  { href: "/blog/", label: "Blog", key: "blog" },
  { href: "/boutique/", label: "Boutique", key: "boutique" },
  { href: "/newsletter/", label: "Lettre", key: "lettre" },
];
