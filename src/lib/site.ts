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
  { title: "Créer un calendrier dans Notion", description: "Afficher tes tâches et tes dates sur un calendrier, sans rien recopier.", slug: "creer-un-calendrier-dans-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Prendre des notes de réunion dans Notion", description: "Une page simple pour l'ordre du jour, les décisions et les actions à suivre.", slug: "prendre-des-notes-de-reunion-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Les blocs de base de Notion", description: "Titres, listes, cases à cocher, citations : les blocs que tu utiliseras tous les jours.", slug: "les-blocs-de-base-de-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Organiser ses pages avec des sous-pages", description: "Ranger tes pages comme des dossiers, sans te perdre dans la barre latérale.", slug: "organiser-ses-pages-avec-des-sous-pages", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Les raccourcis clavier de Notion", description: "Cinq gestes pour écrire plus vite : barre oblique, @, mise en forme, recherche et annuler.", slug: "les-raccourcis-clavier-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer un suivi des habitudes dans Notion", description: "Une base de données simple pour cocher chaque jour tes habitudes.", slug: "creer-un-suivi-des-habitudes-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Partager une page Notion", description: "Inviter une personne ou publier une page : choisir ce que les autres peuvent faire.", slug: "partager-une-page-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Ajouter des images et des fichiers dans Notion", description: "Glisser une photo, un PDF ou un document dans une page, et le garder avec ses notes.", slug: "ajouter-des-images-et-fichiers-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer un tableau kanban dans Notion", description: "Faire glisser tes tâches de À faire à Terminé, comme des cartes sur un mur.", slug: "creer-un-tableau-kanban-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Utiliser les mentions et les liens dans Notion", description: "Relier tes pages entre elles avec @ et des liens, pour tout retrouver en un clic.", slug: "utiliser-les-mentions-et-liens-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Créer une page d'accueil dans Notion", description: "Une seule page de départ, avec des liens vers tout ce que tu utilises.", slug: "creer-une-page-d-accueil-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
  { title: "Ranger ses lectures et ses idées dans Notion", description: "Une base de données pour ne plus perdre un livre à lire ou une idée à creuser.", slug: "ranger-ses-lectures-et-idees-notion", date: "2026-10-05", dateLabel: "5 oct. 2026" },
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
