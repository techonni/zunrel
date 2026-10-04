// Contenu du site : thèmes, guides « comment faire » systeme.io, et outil présenté.
// Depuis le 4 octobre 2026, Zunrel ne parle plus que de systeme.io (demande de Dário).
// Les liens d'affiliation systeme.io sont définis une seule fois dans `affiliateLinks`.
// Prix et limites : relevés sur les pages officielles le 4 octobre 2026 (voir `verifiedOn`),
// jamais inventés. À revérifier avant chaque mise à jour.

export type Theme = {
  slug: string;
  name: string;
  blurb: string;
};

export type Step = {
  title: string;
  text: string;
};

// Source officielle. `en` : la même page dans le centre d'aide en anglais (utilisée par les
// versions PT et EN des guides) ; sans `en`, la source n'est pas affichée dans les traductions.
export type Source = {
  label: string;
  url: string;
  en?: { label: string; url: string; ptLabel?: string; ptUrl?: string };
};

export type Guide = {
  slug: string;
  question: string;
  summary: string;
  theme: string;
  publishedOn: string;
  updatedOn: string;
  intro: string;
  steps: Step[];
  pitfalls: string[];
  tools: { slug: string; why: string }[];
  sources: Source[];
  related: string[];
  popular?: boolean;
  // « express » (par défaut) : une question, l'essentiel en 30 secondes.
  // « complet » : un projet de A à Z, plus long et plus détaillé.
  format?: GuideFormat;
  // Facultatif, pour Google : titre et description propres à la recherche (Search Console).
  // Sans eux, le titre est la question et la description est construite par `seoDescription`.
  seoTitle?: string;
  seoDescription?: string;
};

export type GuideFormat = "express" | "complet";

export type Tool = {
  slug: string;
  name: string;
  summary: string;
  website: string;
  affiliateUrl?: string;
  freePlan: boolean;
  themes: string[];
  goodFor: string;
  watchOut: string;
  logo?: { src: string; fit?: "cover" | "contain"; zoom?: number; direct?: boolean };
};

export const siteName = "Zunrel";
export const tagline = "systeme.io : comment faire, étape par étape.";

// Date du dernier relevé des prix et limites sur les pages officielles de systeme.io.
export const verifiedOn = "2026-10-04";

// Liens d'affiliation systeme.io (paramètre ?sa= de Dário, sans « www », comme le demande l'aide
// officielle). Vérifié le 04/10/2026 : les trois adresses posent le cookie d'affiliation
// `systeme_affiliate_systemeio`. Français : /fr, portugais : /pt (site en portugais du Brésil),
// anglais : la page d'accueil internationale.
export const affiliateLinks = {
  fr: "https://systeme.io/fr?sa=sa0210069650f7a7d1911c7693beefdfbcd9f0e9f5",
  pt: "https://systeme.io/pt?sa=sa0210069650f7a7d1911c7693beefdfbcd9f0e9f5",
  en: "https://systeme.io/?sa=sa0210069650f7a7d1911c7693beefdfbcd9f0e9f5",
} as const;
export const affiliateLink = affiliateLinks.fr;

// Mention affichée à côté de chaque lien affilié (texte validé par Dário le 04/10/2026).
export const affiliateDisclosure = {
  fr: "Lien affilié : si vous créez un compte via ce lien, je touche une commission, sans surcoût pour vous.",
  pt: "Link de afiliado: se você criar uma conta por este link, eu recebo uma comissão, sem custo extra para você.",
  en: "Affiliate link: if you create an account through this link, I earn a commission, at no extra cost to you.",
} as const;

// Formulaire Mailchimp « embedded » (Audience → Signup forms → Embedded forms → attribut action du <form>).
// Vide = le bloc newsletter n'est pas affiché. Même liste qu'avant le passage à systeme.io.
export const newsletterFormUrl =
  "https://gmail.us9.list-manage.com/subscribe/post?u=13aa96838d6074fef23022e3e&id=893c08eb5d&f_id=0073d9e1f0";
// Champ anti-robots du même formulaire Mailchimp (nom donné dans le code « embedded »).
export const newsletterHoneypot = "b_13aa96838d6074fef23022e3e_893c08eb5d";
// Les anciens tags d'intérêt (shopify 11404677, leadpages 11404678, htmlpub 11404679) ne sont plus
// envoyés : tout le site parle de systeme.io. Seul le tag de langue part avec l'inscription
// (voir `langTags` dans i18n.ts). Aucun nouveau tag n'a été créé dans Mailchimp.

// Sources officielles. `aide` = centre d'aide en français, `help` = le même centre en anglais.
const aide = "https://aide.systeme.io/article/";
const help = "https://help.systeme.io/article/";
function src(label: string, frPath: string, enLabel: string, enPath: string): Source {
  return { label: `Aide systeme.io : ${label}`, url: `${aide}${frPath}`, en: { label: `systeme.io Help: ${enLabel}`, url: `${help}${enPath}` } };
}
const S = {
  pricing: {
    label: "systeme.io : tarifs et comparatif des plans",
    url: "https://systeme.io/fr/pricing",
    en: { label: "systeme.io pricing", url: "https://systeme.io/pricing", ptLabel: "systeme.io: preços", ptUrl: "https://systeme.io/pt/pricing" },
  },
  affiliatePage: {
    label: "systeme.io : programme d'affiliation",
    url: "https://systeme.io/fr/affiliate-program",
    en: { label: "systeme.io affiliate program", url: "https://systeme.io/affiliate-program" },
  },
  funnel: src("créer un tunnel de vente", "11-comment-creer-un-tunnel-de-vente", "how to create a funnel", "147-how-to-create-a-funnel"),
  optin: src("créer une page de capture", "14-comment-creer-une-page-de-capture", "how to create an opt-in page", "152-how-to-create-a-opt-in-page"),
  links: src("relier les pages d'un tunnel", "25-comment-faire-la-liaison-entre-les-pages-dun-tunnel", "how to link funnel pages", "330-how-to-link-between-the-pages-of-a-funnel"),
  orderForm: src("créer une page de paiement", "13-comment-creer-une-page-de-paiement", "how to create an order form", "252-how-to-create-an-order-form-payment-page"),
  activatePayments: src("activer les paiements Stripe ou PayPal", "24-comment-activer-les-paiements-par-stripe-ou-paypal", "how to activate Stripe or PayPal payments", "307-how-to-activate-payments-by-stripe-or-paypal"),
  stripe: src("connecter Stripe", "224-comment-connecter-votre-compte-stripe-a-systeme-io", "how to connect Stripe", "225-how-to-connect-your-stripe-account-to-systeme-io"),
  paypal: src("connecter PayPal", "48-comment-connecter-votre-compte-paypal-a-systeme-io", "how to integrate PayPal", "132-paypal-integration"),
  bump: src("ajouter un order bump", "30-comment-ajouter-un-order-bump-sur-la-page-de-paiement", "how to add an order bump", "154-how-to-add-an-order-bump-to-a-payment-page"),
  upsell: src("créer un upsell et un downsell", "27-comment-creer-un-upsell-et-un-downsell", "how to create an upsell and a downsell", "243-how-to-create-an-upsell-and-a-downsell"),
  coupon: src("créer un code promo", "32-comment-creer-un-bon-de-reduction-et-linserer-votre-page-de-paiement", "how to create a coupon code", "247-how-to-create-and-add-a-coupon-code-to-your-order-form"),
  ebook: src("vendre un ebook", "200-comment-vendre-son-ebook", "how to sell your eBook", "155-how-to-sell-your-ebook"),
  physical: src("créer et vendre un produit physique", "53-comment-creer-et-vendre-un-produit-physique-sur-systeme-io", "how to sell a physical product", "292-how-to-create-and-sell-a-physical-product-on-systeme-io"),
  sender: src("confirmer l'adresse d'expéditeur", "2069-comment-confirmer-adresse-email-dexpediteur-de-vos-emails", "how to confirm your sender address", "2070-how-to-confirm-your-email-sender-address"),
  campaign: src("configurer une campagne d'emails", "18-comment-configurer-une-campagne-demail", "how to set up an email campaign", "367-how-to-set-up-an-email-campaign"),
  newsletter: src("programmer une newsletter", "20-comment-programmer-lenvoi-dune-newsletter", "how to send or schedule a newsletter", "358-how-to-send-or-schedule-a-newsletter"),
  rules: src("règles d'automatisation", "51-comment-fonctionnent-les-regles-dautomatisation", "how automation rules work", "140-automation-rules"),
  authDomain: src("authentifier son nom de domaine", "124-comment-mettre-en-place-lauthentification-de-votre-nom-de-domaine-pour-ameliorer-la-deliverabilite-de-vos-emails", "how to authenticate your domain", "316-how-to-authenticate-your-personal-domain-name"),
  domain: src("connecter son nom de domaine", "52-comment-connecter-votre-nom-de-domaine-a-systeme-io", "how to connect your domain", "135-how-to-connect-your-domain-to-systemeio"),
  homepage: src("définir la page d'accueil du domaine", "63-comment-definir-la-page-daccueil-de-votre-domaine", "how to define your domain's homepage", "143-how-to-define-a-blog-or-a-page-created-with-systeme-io-as-your-domain-root"),
  cancel: src("annuler son abonnement", "190-comment-annuler-votre-abonnement-systeme-io", "how to cancel your subscription", "264-cancel-subscription-systeme"),
  blog: src("créer un blog", "115-comment-creer-un-blog-sur-systemeio", "how to create a blog", "175-how-to-create-a-blog-with-systemeio"),
  blogPost: src("créer un article de blog", "116-comment-creer-un-article-de-blog", "how to create a blog post", "359-how-to-create-a-blog-post"),
  course: src("créer une formation", "70-comment-creer-une-formation-sur-systemeio", "how to create a course", "164-how-to-create-a-course-using-systemeio"),
  sellCourse: src("vendre sa formation en ligne", "72-comment-vendre-votre-formation-en-ligne", "how to sell an online course", "237-how-to-sell-an-online-course"),
  webinar: src("créer des webinaires automatiques", "50-comment-creer-des-webinaires-automatiques", "how to create automated webinars", "265-how-to-create-automated-webinars"),
  sioAffiliate: src("le programme d'affiliation de systeme.io", "83-comment-fonctionne-le-programme-daffiliation-de-systeme-io", "how the affiliate program works", "162-how-the-systeme-io-affiliate-program-works"),
  ownAffiliate: src("créer son propre programme d'affiliation", "253-comment-mettre-en-place-votre-propre-programme-daffiliation", "how to set up your own affiliate program", "699-how-to-set-up-your-own-affiliate-program"),
  migration: src("migration gratuite", "2003-comment-beneficier-dune-migration-gratuite-vers-systeme-io", "how to get a free migration", "2010-how-to-benefit-from-a-free-migration-to-systeme-io"),
  clickfunnels: src("migrer depuis ClickFunnels", "2327-comment-migrer-votre-business-de-clickfunnels-vers-systemeio", "migrating from ClickFunnels", "2360-how-to-migrate-your-business-from-clickfunnels-to-systeme-io"),
  importContacts: src("importer ou exporter une liste", "125-comment-importer-ou-exporter-une-liste-email", "how to import or export contacts", "238-how-to-import-or-export-a-contact-list"),
  footerBadge: {
    label: "Aide systeme.io (en anglais) : retirer « Sent with systeme.io »",
    url: `${help}2008-how-to-remove-sent-with-systemeio-and-customize-your-email-footer`,
    en: { label: "systeme.io Help: remove “Sent with systeme.io”", url: `${help}2008-how-to-remove-sent-with-systemeio-and-customize-your-email-footer` },
  },
  leadpagesPricing: {
    label: "Leadpages : tarifs",
    url: "https://leadpages.com/pricing",
    en: { label: "Leadpages pricing", url: "https://leadpages.com/pricing" },
  },
  shopifyPricing: {
    label: "Shopify : tarifs",
    url: "https://www.shopify.com/fr/tarifs",
    en: { label: "Shopify pricing", url: "https://www.shopify.com/pricing" },
  },
} satisfies Record<string, Source>;

export const themes: Theme[] = [
  { slug: "decouvrir", name: "Découvrir systeme.io", blurb: "Ce que fait l'outil, le plan gratuit, les prix, l'ouverture du compte." },
  { slug: "tunnels", name: "Pages et tunnels", blurb: "Tunnel de vente, page de capture, nom de domaine, blog." },
  { slug: "vendre", name: "Vendre en ligne", blurb: "Produits numériques ou physiques, paiements, upsells et codes promo." },
  { slug: "emails", name: "E-mails et automatisations", blurb: "Newsletters, séquences, règles d'automatisation, délivrabilité." },
  { slug: "formations", name: "Formations et webinaires", blurb: "Créer et vendre une formation, lancer un webinaire automatique." },
  { slug: "affiliation", name: "Affiliation", blurb: "Votre propre programme d'affiliés, ou recommander systeme.io." },
  { slug: "comparer", name: "Comparer et migrer", blurb: "systeme.io face à Leadpages ou Shopify, et passer à systeme.io." },
];

const T = { slug: "systeme-io", why: "" };
const sio = (why: string) => [{ ...T, why }];
const d = "2026-10-04";

export const guides: Guide[] = [
  // ——— Découvrir systeme.io ———
  {
    slug: "c-est-quoi-systeme-io",
    question: "Qu'est-ce que systeme.io et à qui ça sert ?",
    seoTitle: "systeme.io, c'est quoi ? L'outil tout-en-un expliqué simplement",
    seoDescription: "Tunnels de vente, e-mails, formations, blog, boutique, affiliation : ce que fait systeme.io, pour qui, et ses limites, vérifié sur le site officiel.",
    summary: "Un seul outil pour vos pages, vos e-mails, vos formations et vos ventes : ce qu'il fait, pour qui, et ses limites.",
    theme: "decouvrir",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "systeme.io est un outil en ligne « tout-en-un » pour vendre sur Internet : pages et tunnels de vente, e-mails, automatisations, formations, blog, produits physiques et programme d'affiliation, dans le même compte. Il existe un plan gratuit, sans carte bancaire.",
    steps: [
      {
        title: "Comprenez l'idée : un seul compte au lieu de cinq outils",
        text: "Habituellement, on assemble un outil de landing pages, un outil d'e-mails, une plateforme de formations et une boutique, puis on les relie entre eux. systeme.io regroupe ces briques : un contact qui s'inscrit sur une page arrive directement dans vos contacts, reçoit vos e-mails et peut acheter sur la même plateforme.",
      },
      {
        title: "Faites le tour de ce qu'il sait faire",
        text: "D'après la page des tarifs officielle (relevée le 4 octobre 2026) : tunnels de vente et pages, envoi d'e-mails (newsletters et campagnes), règles d'automatisation et workflows, sites web et blogs, formations en ligne et communautés, produits physiques avec stock et variantes, codes promo, upsells et order bumps, calendrier de réservation, programme d'affiliation, et webinaires automatiques sur les plans Webinaire et Illimité.",
      },
      {
        title: "Regardez à qui il s'adresse",
        text: "Il convient bien aux indépendants, coachs, formateurs et créateurs qui vendent des produits numériques (formation, ebook, accompagnement) et veulent construire une liste d'e-mails. Il sert aussi aux petites boutiques qui vendent quelques produits physiques sans avoir besoin d'un catalogue géant.",
      },
      {
        title: "Connaissez ses limites",
        text: "Le plan gratuit limite le nombre de tunnels, de campagnes, de règles d'automatisation et de contacts. Les webinaires automatiques demandent un plan payant (Webinaire ou Illimité). Pour les produits physiques, l'aide officielle précise que systeme.io ne gère pas l'expédition : vous envoyez les colis vous-même. Il n'y a pas non plus de webinaire en direct.",
      },
      {
        title: "Testez avec le plan gratuit",
        text: "Le plan gratuit n'expire pas et ne demande pas de carte bancaire. Créez un compte, construisez une première page de capture et envoyez-vous un e-mail de test : en une heure, vous saurez si la logique de l'outil vous convient.",
      },
    ],
    pitfalls: [
      "Choisir un plan payant avant d'avoir testé le plan gratuit : il suffit souvent pour démarrer.",
      "Croire que systeme.io expédie vos colis : la livraison des produits physiques reste à votre charge.",
    ],
    tools: sio("L'outil tout-en-un présenté dans ce guide."),
    sources: [S.pricing, S.physical],
    related: ["plan-gratuit-systeme-io", "combien-coute-systeme-io", "creer-son-compte-systeme-io", "lancer-son-business-en-ligne-avec-systeme-io-de-a-a-z"],
  },
  {
    slug: "plan-gratuit-systeme-io",
    question: "Que contient le plan gratuit de systeme.io ?",
    seoTitle: "Plan gratuit systeme.io : ce qui est inclus et les limites (2026)",
    seoDescription: "2 000 contacts, 3 tunnels, 1 formation, e-mails illimités : les limites exactes du plan gratuit systeme.io, relevées sur la page officielle des tarifs.",
    summary: "Les limites exactes du plan gratuit, ce qu'il permet vraiment, et quand passer au plan payant.",
    theme: "decouvrir",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Le plan gratuit de systeme.io donne accès aux principales fonctions avec des quantités limitées. Il ne demande pas de carte bancaire. Voici ses limites, relevées sur la page officielle des tarifs le 4 octobre 2026.",
    steps: [
      {
        title: "Les contacts et les e-mails",
        text: "Jusqu'à 2 000 contacts. Envoi d'e-mails illimité et newsletters illimitées. En revanche : 1 campagne d'e-mails (séquence automatique), 1 tag, 1 règle d'automatisation et 1 workflow.",
      },
      {
        title: "Les pages et les sites",
        text: "3 tunnels de vente avec 15 étapes au total, 1 test A/B, 1 nom de domaine personnalisé, 1 site web (2 langues par site), 1 blog avec un nombre d'articles illimité, 1 page « lien en bio ». Le stockage de fichiers est illimité.",
      },
      {
        title: "La vente",
        text: "0 % de frais de transaction prélevés par systeme.io (votre prestataire de paiement, Stripe ou PayPal par exemple, garde ses propres frais). 1 upsell, 1 order bump, 1 code promo, produits physiques illimités avec jusqu'à 50 variantes.",
      },
      {
        title: "Les formations et le reste",
        text: "1 formation avec jusqu'à 500 élèves, 1 communauté avec membres illimités, 1 événement de calendrier, votre propre programme d'affiliation, et le support par e-mail 24 h/24. Pas de webinaire automatique, pas de séance de coaching de démarrage, pas de migration gratuite.",
      },
      {
        title: "Ce qui reste visible sur le plan gratuit",
        text: "Vos e-mails portent en bas un lien « Sent with systeme.io », qui est un lien d'affiliation de systeme.io. D'après le centre d'aide, on ne peut pas le retirer sur le plan gratuit : il faut un plan payant (Startup, Webinaire ou Illimité).",
      },
      {
        title: "Quand passer au plan payant",
        text: "Le plan Startup (17 € par mois au 4 octobre 2026) devient utile quand vous dépassez 2 000 contacts, que vous voulez plusieurs séquences d'e-mails ou plus d'une règle d'automatisation, ou une deuxième formation. Le guide sur les prix détaille les quatre plans.",
      },
    ],
    pitfalls: [
      "Oublier qu'1 seul tag est inclus : organisez vos contacts simplement tant que vous êtes sur le plan gratuit.",
      "Construire trois tunnels « pour essayer » et ne plus pouvoir en créer un vrai : supprimez les brouillons inutiles.",
    ],
    tools: sio("Plan gratuit sans carte bancaire et sans limite de durée."),
    sources: [S.pricing, S.footerBadge],
    related: ["combien-coute-systeme-io", "c-est-quoi-systeme-io", "creer-son-compte-systeme-io", "lancer-son-business-en-ligne-avec-systeme-io-de-a-a-z", "creer-un-blog-avec-systeme-io"],
  },
  {
    slug: "combien-coute-systeme-io",
    question: "Combien coûte systeme.io en 2026 ?",
    seoTitle: "Prix de systeme.io en 2026 : les 4 plans comparés",
    seoDescription: "Gratuit, Startup 17 €, Webinaire 47 €, Illimité 97 € par mois : les prix et limites de systeme.io relevés le 4 octobre 2026, mensuel ou annuel.",
    summary: "Les 4 plans, leurs prix mensuels et annuels, leurs limites, et comment changer ou annuler.",
    theme: "decouvrir",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "systeme.io a quatre plans : Gratuit, Startup, Webinaire et Illimité. Les prix ci-dessous ont été relevés sur la page officielle en français le 4 octobre 2026. Ils peuvent changer : vérifiez toujours la page des tarifs le jour même.",
    steps: [
      {
        title: "Les prix en paiement mensuel",
        text: "Gratuit : 0 €. Startup : 17 € par mois. Webinaire : 47 € par mois. Illimité : 97 € par mois.",
      },
      {
        title: "Les prix en paiement annuel",
        text: "Le bouton « Facturation annuelle » affiche 170 € par an pour Startup, 470 € pour Webinaire et 970 € pour Illimité, soit l'équivalent de 2 mois gratuits par rapport au mensuel.",
      },
      {
        title: "Ce que change chaque plan",
        text: "Startup : 5 000 contacts, 10 tunnels, 10 campagnes, 10 règles d'automatisation, 3 domaines, 5 formations, élèves illimités. Webinaire : 10 000 contacts, 50 tunnels, 100 campagnes et règles, 10 domaines, 20 formations, et jusqu'à 10 webinaires automatiques. Illimité : contacts, tunnels, règles, domaines et formations illimités, plus l'accès anticipé aux nouvelles fonctions.",
      },
      {
        title: "Ce qui est identique partout",
        text: "Envoi d'e-mails illimité, stockage illimité, 0 % de frais de transaction côté systeme.io, programme d'affiliation, comptes d'assistant et sous-comptes illimités, support par e-mail 24 h/24. La séance de coaching de démarrage est incluse à partir de Startup.",
      },
      {
        title: "Choisissez selon votre étape",
        text: "Vous démarrez : le plan Gratuit. Vous dépassez 2 000 contacts ou voulez plusieurs séquences : Startup. Vous voulez des webinaires automatiques : Webinaire (c'est le premier plan qui les inclut). Vous avez une grosse liste ou plusieurs projets : Illimité.",
      },
      {
        title: "Changez ou annulez quand vous voulez",
        text: "Pour annuler : photo de profil, « Paramètres », « Gérer mes abonnements », les trois points à côté de l'abonnement, puis « Annuler l'abonnement ». L'annulation prend effet à la prochaine date de paiement. La FAQ de la page des tarifs indique que le compte repasse alors au plan gratuit et que les contacts au-delà de la limite sont archivés, pas supprimés.",
      },
    ],
    pitfalls: [
      "Comparer un prix annuel avec un prix mensuel : regardez la position du bouton « Facturation mensuelle / annuelle ».",
      "Prendre le plan Webinaire uniquement « au cas où » : si vous ne faites pas de webinaire automatique, Startup suffit souvent.",
    ],
    tools: sio("Quatre plans, dont un gratuit."),
    sources: [S.pricing, S.cancel],
    related: ["plan-gratuit-systeme-io", "c-est-quoi-systeme-io", "creer-un-webinaire-automatique-systeme-io", "migrer-vers-systeme-io", "devenir-affilie-systeme-io"],
  },
  {
    slug: "creer-son-compte-systeme-io",
    question: "Comment créer son compte systeme.io et bien le configurer ?",
    seoTitle: "Créer son compte systeme.io gratuit : les 5 réglages à faire d'abord",
    seoDescription: "Ouvrir un compte systeme.io gratuit sans carte bancaire, puis les réglages à faire avant tout : expéditeur, domaine, paiements.",
    summary: "L'inscription gratuite, puis les réglages à faire avant de créer votre première page.",
    theme: "decouvrir",
    publishedOn: d,
    updatedOn: d,
    intro:
      "L'inscription au plan gratuit ne demande pas de carte bancaire. Avant de construire vos pages, quelques réglages évitent les mauvaises surprises : e-mails qui n'arrivent pas, paiements impossibles, adresse peu professionnelle.",
    steps: [
      {
        title: "Ouvrez votre compte gratuit",
        text: "Sur systeme.io, cliquez sur le bouton pour commencer gratuitement et créez votre compte avec votre adresse e-mail. La page des tarifs indique « Aucune carte de crédit requise » pour tous les plans au démarrage.",
      },
      {
        title: "Retrouvez les paramètres",
        text: "Presque tous les réglages du compte se trouvent au même endroit : cliquez sur votre photo de profil, puis sur « Paramètres ». Le menu de gauche donne accès aux e-mails, aux domaines personnalisés, aux passerelles de paiement, aux abonnements et au programme d'affiliation.",
      },
      {
        title: "Confirmez votre adresse d'expéditeur",
        text: "Dans « Paramètres », puis « Emails », cliquez sur le lien pour confirmer une adresse, saisissez votre adresse d'expédition et validez le lien reçu par e-mail. Son statut passe à « Vérifié ». L'idéal est une adresse sur votre propre nom de domaine (contact@votresite.fr).",
      },
      {
        title: "Authentifiez votre nom de domaine pour les e-mails",
        text: "Toujours dans « Paramètres » puis « Emails », section « Domaines », ajoutez votre domaine : systeme.io génère trois enregistrements CNAME et un enregistrement DMARC à copier chez votre hébergeur. L'aide officielle indique que cette authentification est obligatoire pour envoyer des e-mails depuis systeme.io, et qu'elle est impossible avec une adresse Gmail ou Yahoo.",
      },
      {
        title: "Connectez un moyen de paiement si vous vendez",
        text: "Dans « Paramètres », puis « Passerelles de paiement », cliquez sur « Connecter » à côté de Stripe ou de PayPal et suivez les étapes. Vous pourrez ensuite activer ces moyens de paiement dans chaque tunnel.",
      },
      {
        title: "Créez une première page pour vérifier que tout marche",
        text: "Créez un tunnel « Créer une audience », inscrivez-vous avec votre propre adresse et vérifiez que le contact apparaît bien et que l'e-mail de bienvenue arrive. Le guide sur la page de capture détaille chaque étape.",
      },
    ],
    pitfalls: [
      "Envoyer ses premiers e-mails avec une adresse Gmail : l'authentification de domaine est impossible et la délivrabilité en souffre.",
      "Construire un tunnel de vente complet avant d'avoir connecté Stripe ou PayPal : la page de paiement ne pourra pas encaisser.",
    ],
    tools: sio("Inscription gratuite, sans carte bancaire."),
    sources: [S.pricing, S.sender, S.authDomain, S.stripe],
    related: ["creer-une-page-de-capture-systeme-io", "connecter-stripe-et-paypal-a-systeme-io", "ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io", "connecter-son-nom-de-domaine-a-systeme-io"],
  },

  // ——— Pages et tunnels ———
  {
    slug: "creer-un-tunnel-de-vente-systeme-io",
    question: "Comment créer un tunnel de vente avec systeme.io ?",
    seoTitle: "Créer un tunnel de vente systeme.io pas à pas",
    seoDescription: "Les 4 types de tunnels systeme.io, l'ordre des pages, la liaison entre elles et l'activation des paiements, d'après l'aide officielle.",
    summary: "Les 4 types de tunnels, l'ordre des pages et la façon de les relier entre elles.",
    theme: "tunnels",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Un tunnel de vente est une suite de pages qui mène le visiteur vers une seule action : s'inscrire, puis acheter. Dans systeme.io, il remplace à la fois l'outil de landing pages et la page de paiement.",
    steps: [
      {
        title: "Créez le tunnel",
        text: "Allez dans l'onglet « Sites », puis « Tunnels de vente », et cliquez sur « Créer ». Donnez un nom au tunnel, choisissez le nom de domaine à utiliser et la devise.",
      },
      {
        title: "Choisissez le bon type",
        text: "« Créer une audience » crée une page de capture et une page de remerciement : idéal pour récolter des e-mails. « Vendre » crée une page de paiement et une page de remerciement. « Créer un tunnel personnalisé » part de zéro. « Créer un webinaire automatique » crée un tunnel de 3 pages, seulement sur les plans Webinaire et Illimité.",
      },
      {
        title: "Ajoutez les pages qui manquent",
        text: "Dans le menu de gauche du tunnel, cliquez sur « Ajouter une étape », donnez un nom, choisissez le type (page de capture, page de vente, page de paiement, upsell, downsell, page de remerciement…), puis un modèle. Cliquez sur « Modifier la page » pour la personnaliser.",
      },
      {
        title: "Respectez l'ordre des pages",
        text: "L'ordre type est : page de capture, page de vente, page de paiement, upsell, downsell, page de remerciement. L'aide officielle précise que les pages doivent respecter cet ordre pour que le tunnel fonctionne.",
      },
      {
        title: "Reliez les pages entre elles",
        text: "Sur la page de capture, réglez l'action du bouton sur « Enregistrer le contact » et la redirection « Vers l'étape suivante du tunnel ». Sur la page de vente, réglez le bouton sur « Rediriger vers une page » avec l'adresse de la page de paiement. Après le paiement, la suite (upsell, downsell, remerciement) s'enchaîne automatiquement.",
      },
      {
        title: "Activez les paiements et testez",
        text: "Dans les « Paramètres » du tunnel, cochez « Carte de crédit ou de débit (Stripe) » et/ou « PayPal », puis « Sauvegarder » (les comptes doivent être connectés avant). Parcourez ensuite tout le tunnel vous-même, comme un client.",
      },
    ],
    pitfalls: [
      "Placer l'upsell avant la page de paiement : il doit venir juste après.",
      "Oublier d'activer Stripe ou PayPal dans les paramètres du tunnel, même si les comptes sont connectés.",
      "Sur le plan gratuit, oublier la limite de 3 tunnels et 15 étapes au total.",
    ],
    tools: sio("Tunnels de vente avec modèles prêts à l'emploi."),
    sources: [S.funnel, S.links, S.activatePayments, S.pricing],
    related: ["creer-une-page-de-capture-systeme-io", "vendre-un-produit-numerique-avec-systeme-io", "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io", "connecter-stripe-et-paypal-a-systeme-io"],
  },
  {
    slug: "creer-une-page-de-capture-systeme-io",
    question: "Comment créer une page de capture (landing page) avec systeme.io ?",
    seoTitle: "Créer une landing page / page de capture avec systeme.io",
    seoDescription: "Créer une page de capture systeme.io qui récolte des e-mails : tunnel « Créer une audience », modèle, formulaire, e-mail de bienvenue automatique.",
    summary: "Une page qui récolte des e-mails, avec l'e-mail de bienvenue envoyé tout seul.",
    theme: "tunnels",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Une page de capture (ou landing page) a un seul but : obtenir l'adresse e-mail du visiteur en échange de quelque chose d'utile. Avec systeme.io, la page, la liste de contacts et l'e-mail de bienvenue sont dans le même outil.",
    steps: [
      {
        title: "Préparez votre offre gratuite",
        text: "Avant d'ouvrir l'outil, décidez ce que le visiteur reçoit : un guide PDF, une liste, une vidéo, une réduction. Écrivez un titre qui annonce le résultat (« Recevez 10 idées de repas prêtes en 20 minutes ») plutôt que votre produit.",
      },
      {
        title: "Créez un tunnel « Créer une audience »",
        text: "Dans « Sites », « Tunnels de vente », cliquez sur « Créer » et choisissez « Créer une audience ». systeme.io crée une page de capture et une page de remerciement. Dans un tunnel existant, utilisez « Ajouter une étape » et le type « Page de capture ».",
      },
      {
        title: "Choisissez un modèle et modifiez la page",
        text: "Sélectionnez un modèle, puis cliquez sur « Modifier la page ». Remplacez le titre, le texte et l'image. Gardez peu de texte : le titre, trois bénéfices, le formulaire.",
      },
      {
        title: "Réglez le formulaire",
        text: "Demandez le moins d'informations possible : souvent l'e-mail seul suffit. Réglez le bouton sur « Enregistrer le contact » puis « Vers l'étape suivante du tunnel », pour envoyer l'inscrit vers la page de remerciement.",
      },
      {
        title: "Envoyez l'e-mail de bienvenue automatiquement",
        text: "Dans « Automatisations », puis « Règles », cliquez sur « Créer ». Comme déclencheur, choisissez l'inscription sur la page (optin) et le titre de votre page. Comme action, « Envoyer un email », créez l'e-mail avec le lien de votre cadeau, puis « Sauvegarder la règle ».",
      },
      {
        title: "Testez avec votre propre adresse",
        text: "Ouvrez la page sur votre téléphone, inscrivez-vous, vérifiez que vous arrivez sur la page de remerciement, que le contact apparaît dans vos contacts et que l'e-mail de bienvenue arrive.",
      },
    ],
    pitfalls: [
      "Demander nom, prénom, téléphone et e-mail : chaque champ en plus fait fuir des inscrits.",
      "Promettre un cadeau et oublier de l'envoyer : testez l'e-mail de bienvenue avant de partager la page.",
    ],
    tools: sio("Page, contacts et e-mail de bienvenue dans le même outil."),
    sources: [S.funnel, S.optin, S.links, S.rules],
    related: ["creer-un-tunnel-de-vente-systeme-io", "creer-une-sequence-d-e-mails-automatique-systeme-io", "automatiser-avec-les-regles-systeme-io", "connecter-son-nom-de-domaine-a-systeme-io"],
  },
  {
    slug: "connecter-son-nom-de-domaine-a-systeme-io",
    question: "Comment connecter son nom de domaine à systeme.io ?",
    seoTitle: "Connecter son nom de domaine à systeme.io (CNAME, redirection)",
    seoDescription: "Ajouter votre domaine dans systeme.io, créer les deux CNAME chez votre hébergeur, rediriger le domaine racine et choisir la page d'accueil.",
    summary: "Les deux CNAME à créer chez votre hébergeur, la redirection, puis la page d'accueil.",
    theme: "tunnels",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Avec votre propre nom de domaine, vos pages inspirent plus confiance. Le plan gratuit inclut 1 domaine personnalisé (3 sur Startup, 10 sur Webinaire, illimité sur Illimité, au 4 octobre 2026).",
    steps: [
      {
        title: "Ajoutez le domaine dans systeme.io",
        text: "Cliquez sur votre photo de profil, puis « Paramètres », « Domaines personnalisés » et « Ajouter un nom de domaine ». Saisissez-le avec « www » devant (www.monsite.fr) et cliquez sur « Sauvegarder ».",
      },
      {
        title: "Copiez les deux CNAME affichés",
        text: "Une fenêtre affiche deux enregistrements CNAME : un pour « www » et un pour la validation du certificat. Les valeurs sont propres à votre compte : copiez-les exactement.",
      },
      {
        title: "Créez-les chez votre hébergeur de domaine",
        text: "Dans la zone DNS de votre domaine (OVH, GoDaddy, Cloudflare, IONOS, Infomaniak, Namecheap…), créez deux enregistrements CNAME avec ces noms et ces valeurs. Vous pouvez vérifier leur propagation sur dnschecker.org en saisissant le nom complet.",
      },
      {
        title: "Redirigez le domaine sans « www »",
        text: "Chez la plupart des hébergeurs, créez une redirection de monsite.fr vers www.monsite.fr. Chez Hostinger, l'aide indique de créer plutôt un enregistrement ALIAS à la racine vers la même cible que le CNAME « www ».",
      },
      {
        title: "Patientez, puis choisissez la page d'accueil",
        text: "La propagation peut prendre 24 à 48 heures. Ensuite, définissez ce qui s'affiche à l'adresse principale : dans les paramètres d'un blog, d'un site web ou d'une page de tunnel, laissez vide le champ du chemin de l'URL.",
      },
    ],
    pitfalls: [
      "Connecter un domaine qui sert déjà à un autre site : d'après l'aide, l'ancien site ne fonctionnera plus.",
      "Oublier le point final dans les valeurs CNAME chez certains hébergeurs, ou au contraire l'ajouter chez ceux qui le refusent : suivez le guide de votre hébergeur.",
    ],
    tools: sio("1 domaine personnalisé inclus dans le plan gratuit."),
    sources: [S.domain, S.homepage, S.pricing],
    related: ["ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io", "creer-un-blog-avec-systeme-io", "creer-son-compte-systeme-io"],
  },
  {
    slug: "creer-un-blog-avec-systeme-io",
    question: "Comment créer un blog avec systeme.io ?",
    seoTitle: "Créer un blog avec systeme.io : modèle, articles, domaine",
    seoDescription: "Créer un blog systeme.io, publier un article, l'attacher à votre domaine et y ajouter un formulaire d'inscription, d'après l'aide officielle.",
    summary: "Un blog relié à vos tunnels et à votre liste d'e-mails, avec articles illimités.",
    theme: "tunnels",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Le blog de systeme.io vit à côté de vos tunnels et de vos contacts : un article peut renvoyer vers une page de capture ou contenir un formulaire. Le plan gratuit inclut 1 blog avec un nombre d'articles illimité.",
    steps: [
      {
        title: "Créez le blog",
        text: "Dans l'onglet « Sites », cliquez sur « Blogs », puis « Créer ». Indiquez le nom, le domaine et le chemin de l'URL, choisissez un modèle, puis « Sauvegarder ».",
      },
      {
        title: "Adaptez la mise en page",
        text: "Cliquez sur le titre du blog. L'onglet « Pages » donne accès au modèle du blog, à l'aperçu (« Voir le blog ») et aux réglages (nom, domaine, chemin, langue). Un flux RSS est créé automatiquement.",
      },
      {
        title: "Écrivez votre premier article",
        text: "Dans la section « Articles », cliquez sur « Créer ». Remplissez le titre, la courte description, le chemin de l'URL, l'image et les catégories, puis « Sauvegarder ». Modifiez le contenu, puis cliquez sur « Activer » pour le publier.",
      },
      {
        title: "Transformez vos lecteurs en inscrits",
        text: "Ajoutez dans vos articles un formulaire ou un bouton vers votre page de capture (l'aide officielle explique comment ajouter un formulaire ou une popup sur le blog). Chaque inscrit arrive dans vos contacts systeme.io.",
      },
      {
        title: "Mettez le blog sur votre domaine",
        text: "Une fois votre domaine connecté, vous pouvez faire du blog la page d'accueil : dans les paramètres du blog, laissez vide le champ du chemin de l'URL.",
      },
    ],
    pitfalls: [
      "Supprimer la page d'accueil ou la liste des articles : l'aide précise qu'elles ne peuvent pas être supprimées car elles structurent le blog.",
      "Écrire des articles sans aucun lien vers une page de capture : le blog n'alimente pas votre liste.",
    ],
    tools: sio("1 blog et articles illimités dans le plan gratuit."),
    sources: [S.blog, S.blogPost, S.homepage],
    related: ["connecter-son-nom-de-domaine-a-systeme-io", "creer-une-page-de-capture-systeme-io", "c-est-quoi-systeme-io"],
  },

  // ——— Vendre en ligne ———
  {
    slug: "vendre-un-produit-numerique-avec-systeme-io",
    question: "Comment vendre un produit numérique (ebook, PDF, accès) avec systeme.io ?",
    seoTitle: "Vendre un ebook ou un produit numérique avec systeme.io",
    seoDescription: "Page de paiement, produit numérique, tarif (paiement unique, abonnement, plusieurs fois) et livraison automatique du fichier avec systeme.io.",
    summary: "La page de paiement, le tarif, puis la livraison automatique du fichier après l'achat.",
    theme: "vendre",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "systeme.io encaisse le paiement et livre le produit tout seul : accès à une formation, à une communauté, ou envoi d'un fichier par e-mail. Il remplace une boutique de produits numériques, sans frais de transaction prélevés par systeme.io.",
    steps: [
      {
        title: "Connectez un moyen de paiement",
        text: "Avant tout, connectez Stripe ou PayPal dans « Paramètres », « Passerelles de paiement ». Sans cela, la page de paiement ne peut rien encaisser.",
      },
      {
        title: "Créez un tunnel « Vendre »",
        text: "Dans « Sites », « Tunnels de vente », « Créer », choisissez « Vendre » et la devise. Vous obtenez une page de paiement et une page de remerciement. Ajoutez une page de vente avant la page de paiement si votre offre a besoin d'être expliquée.",
      },
      {
        title: "Déclarez un produit numérique",
        text: "Ouvrez la page de paiement, section « Choisir le type d'offre », et sélectionnez « Produit numérique ». Cliquez sur « + » pour créer le produit, donnez-lui un nom, puis ajoutez la ressource livrée : une formation, un pack de formations, une communauté, un événement du calendrier ou un tag.",
      },
      {
        title: "Fixez le prix",
        text: "Ajoutez un tarif à l'offre. D'après l'aide officielle, trois types existent : paiement unique, abonnement (avec période d'essai possible) et paiement en plusieurs fois. Le produit ne peut pas être sauvegardé sans tarif.",
      },
      {
        title: "Livrez un fichier (ebook, PDF)",
        text: "Pour un fichier, ajoutez un tag comme ressource, puis créez une règle d'automatisation : déclencheur « Nouvelle vente », action « Envoyer un email », avec le fichier en pièce jointe (5 Mo maximum) ou un lien de téléchargement. Vous pouvez aussi mettre le lien de téléchargement sur la page de remerciement.",
      },
      {
        title: "Faites un achat test",
        text: "Passez commande vous-même et vérifiez le paiement, la page de remerciement et la réception du fichier ou de l'accès. L'aide officielle propose une méthode d'achat test.",
      },
    ],
    pitfalls: [
      "Joindre un fichier de plus de 5 Mo : compressez-le ou envoyez un lien de téléchargement.",
      "Oublier les champs « Email » et « Prénom » sur la page de paiement : ils sont obligatoires pour que Stripe fonctionne.",
    ],
    tools: sio("Paiement et livraison automatique, 0 % de frais de transaction côté systeme.io."),
    sources: [S.orderForm, S.ebook, S.stripe],
    related: ["connecter-stripe-et-paypal-a-systeme-io", "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io", "creer-et-vendre-une-formation-en-ligne-systeme-io", "creer-un-tunnel-de-vente-systeme-io"],
  },
  {
    slug: "connecter-stripe-et-paypal-a-systeme-io",
    question: "Comment connecter Stripe et PayPal à systeme.io ?",
    seoTitle: "Connecter Stripe et PayPal à systeme.io pour encaisser",
    seoDescription: "Connecter Stripe et PayPal dans les passerelles de paiement systeme.io, régler les notifications PayPal et activer les paiements dans un tunnel.",
    summary: "Brancher Stripe et PayPal, puis les activer dans chaque tunnel de vente.",
    theme: "vendre",
    publishedOn: d,
    updatedOn: d,
    intro:
      "systeme.io ne garde pas votre argent : il passe par votre compte Stripe, PayPal ou un autre prestataire. La page des tarifs (4 octobre 2026) liste Stripe, PayPal, Apple Pay, Razorpay, Flutterwave, Mercado Pago, Xendit et le paiement à la livraison.",
    steps: [
      {
        title: "Ouvrez les passerelles de paiement",
        text: "Cliquez sur votre photo de profil, puis « Paramètres », puis « Passerelles de paiement ».",
      },
      {
        title: "Connectez Stripe",
        text: "Cliquez sur « Connecter » à côté de Stripe. Connectez-vous à votre compte Stripe ou créez-en un, indiquez le pays et le type d'entreprise, vérifiez vos informations, puis cliquez sur « Autoriser l'accès à ce compte ». Stripe permet la carte bancaire, Apple Pay et des moyens locaux comme Bancontact, iDEAL ou Multibanco.",
      },
      {
        title: "Connectez PayPal",
        text: "Il faut un compte PayPal Business. Cliquez sur « Connecter » à côté de PayPal, connectez-vous, cliquez sur « Autoriser », puis « Retourner à systeme.io ». L'aide recommande ensuite d'activer les notifications IPN dans PayPal avec l'adresse https://systeme.io/payment/webhook/listening-paypal.",
      },
      {
        title: "Activez-les dans le tunnel",
        text: "Dans « Sites », « Tunnels de vente », ouvrez le tunnel, puis « Paramètres ». Cochez « Carte de crédit ou de débit (Stripe) » et/ou « PayPal », puis « Sauvegarder ».",
      },
      {
        title: "Vérifiez les champs de la page de paiement",
        text: "Stripe a besoin des champs « Email » et « Prénom ». PayPal a besoin de l'e-mail, du prénom et du nom. Ajoutez-les s'ils manquent, puis faites un achat test.",
      },
    ],
    pitfalls: [
      "Connecter un compte PayPal personnel au lieu d'un compte Business.",
      "Penser que « 0 % de frais » signifie paiement sans frais : systeme.io ne prend rien, mais Stripe ou PayPal gardent leurs propres frais.",
    ],
    tools: sio("Stripe, PayPal et d'autres passerelles, sans frais ajoutés par systeme.io."),
    sources: [S.stripe, S.paypal, S.activatePayments, S.pricing],
    related: ["vendre-un-produit-numerique-avec-systeme-io", "vendre-des-produits-physiques-avec-systeme-io", "creer-un-tunnel-de-vente-systeme-io"],
  },
  {
    slug: "vendre-des-produits-physiques-avec-systeme-io",
    question: "Comment vendre des produits physiques avec systeme.io ?",
    seoTitle: "Vendre des produits physiques avec systeme.io (stock, variantes)",
    seoDescription: "Créer un produit physique systeme.io avec stock, variantes et frais de port, le mettre en vente dans un tunnel, et ce que l'outil ne gère pas.",
    summary: "Produit, stock, variantes et frais de port, puis la mise en vente dans un tunnel.",
    theme: "vendre",
    publishedOn: d,
    updatedOn: d,
    intro:
      "systeme.io sait vendre des produits physiques : fiche produit, stock, variantes (taille, couleur) et frais de port. Il ne remplace pas une grosse boutique en ligne, et l'expédition des colis reste à votre charge.",
    steps: [
      {
        title: "Créez la fiche produit",
        text: "Allez dans « Ressources », puis « Produits physiques », et cliquez sur « Créer ». Remplissez le nom, la description, le code UGS, la taxe, la devise, le prix, le poids et le stock disponible. Ajoutez des photos.",
      },
      {
        title: "Ajoutez les options et les variantes",
        text: "Créez une option (par exemple « Taille ») et ses valeurs (S, M, L). systeme.io génère toutes les variantes automatiquement ; changez le prix d'une variante seulement s'il diffère. Limites au 4 octobre 2026 : 50 variantes sur le plan gratuit, 100 sur Startup, 250 sur Webinaire, illimitées sur Illimité.",
      },
      {
        title: "Mettez le produit dans un tunnel « Vendre »",
        text: "Créez un tunnel « Vendre » dans la même devise que le produit. Sur la page de paiement, choisissez « Produit physique » comme type d'offre et sélectionnez votre produit.",
      },
      {
        title: "Placez le produit sur la page",
        text: "Cliquez sur « Modifier la page », glissez l'élément produit physique depuis la section paiement, puis l'élément de prix. Cliquez sur « Sauvegarder » : l'éditeur n'enregistre pas automatiquement.",
      },
      {
        title: "Préparez l'expédition",
        text: "Les commandes apparaissent dans « Ventes », puis « Commandes ». L'aide officielle est claire : systeme.io ne gère ni l'expédition ni la préparation des commandes. Prévoyez votre transporteur et vos emballages avant d'ouvrir les ventes.",
      },
    ],
    pitfalls: [
      "Choisir une devise de tunnel différente de celle du produit : le produit n'apparaît pas dans la liste.",
      "Quitter l'éditeur sans cliquer sur « Sauvegarder » : il n'y a pas d'enregistrement automatique.",
    ],
    tools: sio("Produits physiques illimités, avec stock et variantes."),
    sources: [S.physical, S.pricing],
    related: ["systeme-io-ou-shopify", "connecter-stripe-et-paypal-a-systeme-io", "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io"],
  },
  {
    slug: "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io",
    question: "Comment ajouter un upsell, un order bump et un code promo sur systeme.io ?",
    seoTitle: "Upsell, order bump et code promo sur systeme.io",
    seoDescription: "Augmenter le panier moyen avec systeme.io : order bump sur la page de paiement, upsell et downsell après l'achat, code promo à durée limitée.",
    summary: "Les trois façons d'augmenter le panier moyen, et où les placer dans le tunnel.",
    theme: "vendre",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Un order bump est une case à cocher sur la page de paiement. Un upsell est une offre proposée juste après l'achat, et le downsell une offre plus petite si le client refuse. Un code promo baisse le prix. Le plan gratuit en inclut un de chaque.",
    steps: [
      {
        title: "Ajoutez un order bump",
        text: "Sur la page de paiement, cliquez sur « Ajouter un order bump », choisissez « Produit numérique » ou « Produit physique », ajoutez la ressource et un tarif. Ouvrez ensuite l'éditeur et glissez l'élément « Order bump » sur la page pour qu'il s'affiche.",
      },
      {
        title: "Créez la page d'upsell",
        text: "Dans le tunnel, cliquez sur « Ajouter une étape », choisissez le type « Upsell », un modèle, puis définissez le produit et son tarif dans les paramètres de la page. Ajoutez des boutons pour accepter et pour refuser l'offre.",
      },
      {
        title: "Ajoutez un downsell si besoin",
        text: "Même méthode avec le type « Downsell ». L'upsell doit être placé juste après la page de paiement, et le downsell juste après l'upsell. Si le client refuse l'upsell, il voit le downsell, puis la page de remerciement.",
      },
      {
        title: "Créez un code promo",
        text: "Allez dans « Ressources », puis « Codes promo », et cliquez sur « Créer ». Indiquez le nom, le code à saisir, le type et le montant de la réduction, la date d'expiration et le nombre maximal d'utilisations, puis ajoutez-le à votre page de paiement.",
      },
      {
        title: "Suivez les acheteurs de chaque offre",
        text: "Ajoutez un tag comme ressource de l'order bump ou de l'upsell, puis une règle d'automatisation « Tag ajouté » pour envoyer un e-mail dédié à ces clients.",
      },
    ],
    pitfalls: [
      "Proposer un upsell sans bouton « Non merci » : le client doit toujours pouvoir refuser.",
      "Mettre un order bump sans rapport avec le produit principal : il doit compléter l'achat, pas le concurrencer.",
    ],
    tools: sio("Upsells, downsells, order bumps et codes promo intégrés."),
    sources: [S.bump, S.upsell, S.coupon, S.links],
    related: ["vendre-un-produit-numerique-avec-systeme-io", "creer-un-tunnel-de-vente-systeme-io", "automatiser-avec-les-regles-systeme-io"],
  },

  // ——— E-mails et automatisations ———
  {
    slug: "envoyer-une-newsletter-avec-systeme-io",
    question: "Comment envoyer une newsletter avec systeme.io ?",
    seoTitle: "Envoyer ou programmer une newsletter avec systeme.io",
    seoDescription: "Écrire, tester, envoyer ou programmer une newsletter systeme.io à vos contacts selon leurs tags, avec les vérifications à faire avant.",
    summary: "Écrire, tester puis envoyer ou programmer un e-mail à vos contacts, selon leurs tags.",
    theme: "emails",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Une newsletter est un e-mail envoyé une fois, à une date choisie. Les envois sont illimités sur tous les plans systeme.io, y compris le gratuit (page des tarifs, 4 octobre 2026). Le ciblage se fait par tags.",
    steps: [
      {
        title: "Préparez l'expéditeur",
        text: "Confirmez votre adresse d'expéditeur (« Paramètres », « Emails ») et authentifiez votre nom de domaine : l'aide officielle indique que c'est obligatoire pour envoyer des e-mails. Voir le guide sur la délivrabilité.",
      },
      {
        title: "Créez la newsletter",
        text: "Allez dans « Emails », puis « Newsletters », et cliquez sur « Créer ». Choisissez l'éditeur classique ou l'éditeur visuel (avec des modèles), donnez un titre interne, puis écrivez l'objet et le contenu.",
      },
      {
        title: "Choisissez les destinataires",
        text: "Dans « Paramétrages », sélectionnez les tags des contacts qui recevront l'e-mail (par exemple « clients »). Vous pouvez aussi limiter l'envoi aux contacts inscrits depuis un certain nombre de jours. Les tags doivent déjà être posés sur les contacts : ajoutez-les dès l'inscription avec une règle d'automatisation.",
      },
      {
        title: "Envoyez-vous un test",
        text: "Cliquez sur « Enregistrer et tester » pour recevoir l'e-mail. Vérifiez l'objet, les liens et l'affichage sur téléphone. Le test ne part que si l'adresse d'expéditeur est confirmée.",
      },
      {
        title: "Envoyez ou programmez",
        text: "Cliquez sur « Enregistrer et envoyer » pour un envoi immédiat, ou « Enregistrer et programmer » pour choisir une date. L'option « Créer un test A/B » permet de comparer deux versions.",
      },
    ],
    pitfalls: [
      "Envoyer à des contacts qui n'ont jamais accepté de recevoir vos e-mails : c'est interdit et cela abîme votre délivrabilité.",
      "Sur le plan gratuit, la mention « Sent with systeme.io » en bas des e-mails ne peut pas être retirée.",
    ],
    tools: sio("Newsletters illimitées, même sur le plan gratuit."),
    sources: [S.newsletter, S.sender, S.footerBadge, S.pricing],
    related: ["ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io", "creer-une-sequence-d-e-mails-automatique-systeme-io", "automatiser-avec-les-regles-systeme-io"],
  },
  {
    slug: "creer-une-sequence-d-e-mails-automatique-systeme-io",
    question: "Comment créer une séquence d'e-mails automatique avec systeme.io ?",
    seoTitle: "Créer une séquence d'e-mails automatique (campagne) systeme.io",
    seoDescription: "Créer une campagne systeme.io : e-mails envoyés automatiquement après l'inscription, délais, jours et heures d'envoi, puis l'ajout des contacts.",
    summary: "Une suite d'e-mails envoyés tout seuls après l'inscription, avec les délais que vous choisissez.",
    theme: "emails",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Dans systeme.io, une séquence automatique s'appelle une « campagne » : une suite d'e-mails envoyés dans l'ordre, avec un délai entre chacun. C'est l'outil idéal pour accueillir un nouvel inscrit, puis lui présenter votre offre. Le plan gratuit permet 1 campagne (10 sur Startup).",
    steps: [
      {
        title: "Créez la campagne",
        text: "Allez dans « Emails », puis « Campagnes », et cliquez sur « Créer ». Indiquez un nom clair (par exemple « Bienvenue – guide gratuit »), l'adresse d'expéditeur, déjà confirmée, et une description, puis « Sauvegarder ».",
      },
      {
        title: "Écrivez les e-mails",
        text: "Ouvrez la campagne et cliquez sur « Créer » pour chaque e-mail. Une structure simple : jour 0, le cadeau promis ; jour 2, un conseil utile ; jour 4, une histoire ou un cas client ; jour 6, votre offre.",
      },
      {
        title: "Réglez les délais",
        text: "Pour chaque e-mail, cliquez sur « Enregistrer et publier », réglez le délai, et si besoin l'heure et les jours d'envoi. L'aide conseille de ne pas combiner plusieurs délais à la fois : un e-mail ne part que si toutes les conditions sont remplies.",
      },
      {
        title: "Publiez chaque e-mail",
        text: "Cliquez sur « Activer » pour publier l'e-mail. Un nouvel e-mail reste grisé et hors de la séquence tant qu'il n'est pas publié. Les e-mails partent dans l'ordre d'affichage, du haut vers le bas.",
      },
      {
        title: "Inscrivez les contacts automatiquement",
        text: "Créez une règle d'automatisation avec le déclencheur « Inscription sur la page (optin) » sur votre page de capture et une action d'inscription à la campagne. Lors d'un import de contacts (CSV), vous pouvez aussi choisir une campagne.",
      },
    ],
    pitfalls: [
      "Ajouter un e-mail au début d'une séquence déjà lancée : d'après l'aide, les contacts qui ont dépassé cette étape ne le recevront pas.",
      "Ne jamais relire la séquence : inscrivez-vous vous-même pour recevoir chaque e-mail comme un vrai contact.",
    ],
    tools: sio("Campagnes automatiques et règles dans le même outil."),
    sources: [S.campaign, S.rules, S.pricing],
    related: ["automatiser-avec-les-regles-systeme-io", "creer-une-page-de-capture-systeme-io", "envoyer-une-newsletter-avec-systeme-io"],
  },
  {
    slug: "automatiser-avec-les-regles-systeme-io",
    question: "Comment fonctionnent les règles d'automatisation de systeme.io ?",
    seoTitle: "Règles d'automatisation systeme.io : déclencheurs et actions",
    seoDescription: "Créer une règle d'automatisation systeme.io : déclencheur (inscription, vente, tag), action (e-mail, tag, campagne, formation), exemples utiles.",
    summary: "Un déclencheur, une action : les automatisations à mettre en place en premier.",
    theme: "emails",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Une règle d'automatisation dit à systeme.io : « quand ceci arrive, fais cela ». Par exemple, quand quelqu'un s'inscrit, lui ajouter un tag et lui envoyer un e-mail. Le plan gratuit permet 1 règle, Startup 10, Webinaire 100 (4 octobre 2026).",
    steps: [
      {
        title: "Créez une règle",
        text: "Allez dans « Automatisations », puis « Règles », et cliquez sur « Créer ».",
      },
      {
        title: "Choisissez le déclencheur",
        text: "Cliquez sur « + » à côté du déclencheur. Les plus utiles : « Inscription sur la page (optin) » pour les prospects d'une page, d'un formulaire ou d'une popup ; « Nouvelle vente » pour les clients ; « Tag ajouté » pour les contacts qui reçoivent un tag. Précisez la page, le produit ou le tag.",
      },
      {
        title: "Ajoutez une ou plusieurs actions",
        text: "Cliquez sur « + » à côté de « Action ». La plus courante est « Envoyer un email » : le « + » à côté permet de créer l'e-mail directement. Une même règle peut lancer plusieurs actions, par exemple poser un tag et envoyer un e-mail.",
      },
      {
        title: "Sauvegardez",
        text: "Cliquez sur « Sauvegarder la règle ». Attention : pour « Tag ajouté », le tag doit être ajouté après la création de la règle. Vous pouvez aussi créer des règles directement dans un tunnel de vente.",
      },
      {
        title: "Commencez par trois règles utiles",
        text: "Inscription sur la page de capture → tag « prospect » et inscription à la campagne de bienvenue. Nouvelle vente → tag « client ». Tag « client » ajouté → retrait de la campagne de vente, pour ne plus proposer le produit à ceux qui l'ont acheté.",
      },
    ],
    pitfalls: [
      "Créer des règles qui se déclenchent en boucle : d'après l'aide, un même déclencheur ne peut agir que 20 fois par contact.",
      "Sur le plan gratuit, une seule règle et un seul tag : choisissez la plus importante (souvent l'e-mail de bienvenue).",
    ],
    tools: sio("Règles et workflows d'automatisation intégrés."),
    sources: [S.rules, S.pricing],
    related: ["creer-une-sequence-d-e-mails-automatique-systeme-io", "creer-une-page-de-capture-systeme-io", "plan-gratuit-systeme-io"],
  },
  {
    slug: "ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io",
    question: "Comment éviter que ses e-mails systeme.io arrivent en spam ?",
    seoTitle: "Délivrabilité systeme.io : adresse d'expéditeur et domaine",
    seoDescription: "Confirmer l'adresse d'expéditeur, authentifier votre domaine (CNAME et DMARC) et les bonnes pratiques pour que vos e-mails systeme.io arrivent.",
    summary: "Confirmer l'expéditeur, authentifier le domaine, puis les bonnes pratiques d'envoi.",
    theme: "emails",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Pour que vos e-mails arrivent dans la boîte de réception, Gmail ou Outlook doivent pouvoir vérifier qu'ils viennent bien de vous. Dans systeme.io, cela passe par deux réglages, et l'aide officielle indique que l'authentification du domaine est obligatoire pour envoyer des e-mails.",
    steps: [
      {
        title: "Utilisez une adresse sur votre propre domaine",
        text: "Envoyez depuis une adresse du type bonjour@monsite.fr. L'aide précise qu'on ne peut pas authentifier un domaine Gmail, Yahoo ou autre messagerie gratuite.",
      },
      {
        title: "Confirmez l'adresse d'expéditeur",
        text: "Cliquez sur votre photo de profil, puis « Paramètres », « Emails ». Indiquez le nom et l'adresse d'expéditeur, sauvegardez, puis cliquez sur le lien reçu dans cette boîte. Le statut passe à « Vérifié ».",
      },
      {
        title: "Lancez l'authentification du domaine",
        text: "Toujours dans « Paramètres », « Emails », section « Domaines », ajoutez votre domaine. systeme.io affiche trois enregistrements CNAME et un enregistrement DMARC à créer.",
      },
      {
        title: "Créez les enregistrements chez votre hébergeur",
        text: "Dans la zone DNS du domaine, ajoutez ces enregistrements avec exactement les valeurs données. Le domaine doit aussi pointer vers un site qui fonctionne. Revenez ensuite dans systeme.io pour vérifier le statut.",
      },
      {
        title: "Gardez de bonnes habitudes",
        text: "N'écrivez qu'à des personnes inscrites, envoyez régulièrement, retirez les contacts qui n'ouvrent plus jamais, et évitez les objets trompeurs ou tout en majuscules.",
      },
    ],
    pitfalls: [
      "Envoyer depuis une adresse @gmail.com : elle ne peut pas être authentifiée.",
      "Modifier un enregistrement DNS existant (par exemple un ancien DMARC) sans vérifier qu'il ne sert pas à autre chose.",
    ],
    tools: sio("Envoi d'e-mails illimité, avec authentification du domaine."),
    sources: [S.sender, S.authDomain],
    related: ["envoyer-une-newsletter-avec-systeme-io", "connecter-son-nom-de-domaine-a-systeme-io", "creer-une-sequence-d-e-mails-automatique-systeme-io"],
  },

  // ——— Formations et webinaires ———
  {
    slug: "creer-et-vendre-une-formation-en-ligne-systeme-io",
    question: "Comment créer et vendre une formation en ligne avec systeme.io ?",
    seoTitle: "Créer et vendre une formation en ligne avec systeme.io",
    seoDescription: "Modules, chapitres, accès total ou distillé, page de paiement et accès automatique des élèves : créer une formation systeme.io pas à pas.",
    summary: "Modules et chapitres, type d'accès, puis la vente avec accès automatique des élèves.",
    theme: "formations",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "systeme.io héberge votre formation (vidéos, textes, fichiers) dans un espace membre, et donne l'accès automatiquement après le paiement. Il remplace une plateforme de cours séparée. Le plan gratuit permet 1 formation et 500 élèves ; à partir de Startup, le nombre d'élèves est illimité (4 octobre 2026).",
    steps: [
      {
        title: "Créez la formation",
        text: "Allez dans « Ressources », puis « Formations », et cliquez sur « Créer ». Indiquez le nom, le domaine, le chemin de l'URL et choisissez un thème pour l'espace membre.",
      },
      {
        title: "Ajoutez les modules",
        text: "Cliquez sur « Nouveau module », donnez-lui un nom, puis « Sauvegarder ». Un module regroupe plusieurs leçons sur un même sujet.",
      },
      {
        title: "Ajoutez les chapitres",
        text: "Dans un module, cliquez sur « Ajouter un chapitre ». Indiquez le nom, un éventuel délai après le chapitre précédent (pour un accès progressif) et cochez « Activer les commentaires » si vous voulez des échanges, puis « Sauvegarder ». Ajoutez ensuite le contenu, puis activez les modules et chapitres.",
      },
      {
        title: "Mettez la formation en vente",
        text: "Dans un tunnel « Vendre », sur la page de paiement, choisissez « Produit numérique », créez le produit avec le « + », puis ajoutez la formation comme ressource. Ajoutez un tarif : sans tarif, le produit ne peut pas être sauvegardé.",
      },
      {
        title: "Choisissez le type d'accès",
        text: "Quatre types existent : accès total (tout, tout de suite), accès partiel (seulement certains modules), contenu distillé (les chapitres se débloquent selon les délais) et accès partiel avec contenu distillé. Vous pouvez aussi fixer une date de déblocage, et, en accès total, un délai d'expiration en jours.",
      },
      {
        title: "Vérifiez l'arrivée d'un élève",
        text: "Après l'achat, l'élève reçoit automatiquement un e-mail pour définir son mot de passe. Faites un achat test : l'aide précise que cet e-mail d'accès ne peut pas être modifié, relisez-le donc pour savoir ce que vos élèves verront.",
      },
    ],
    pitfalls: [
      "Oublier d'activer les modules et les chapitres : les élèves ne voient rien.",
      "Penser que le délai d'un chapitre compte depuis le début : il compte depuis le chapitre précédent.",
    ],
    tools: sio("Formations, espace membre et paiement dans le même outil."),
    sources: [S.course, S.sellCourse, S.pricing],
    related: ["vendre-un-produit-numerique-avec-systeme-io", "creer-un-webinaire-automatique-systeme-io", "creer-une-sequence-d-e-mails-automatique-systeme-io", "creer-son-programme-d-affiliation-systeme-io"],
  },
  {
    slug: "creer-un-webinaire-automatique-systeme-io",
    question: "Comment créer un webinaire automatique avec systeme.io ?",
    seoTitle: "Créer un webinaire automatique (evergreen) avec systeme.io",
    seoDescription: "Le tunnel webinaire automatique de systeme.io : plans concernés, les 3 pages, la date d'inscription obligatoire et les limites (pas de direct).",
    summary: "Le tunnel de 3 pages, le réglage obligatoire, et ce que l'outil ne fait pas.",
    theme: "formations",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Un webinaire automatique diffuse une vidéo enregistrée comme si elle était en direct, à des horaires proposés chaque jour. Dans systeme.io, il faut le plan Webinaire (47 €/mois) ou Illimité (97 €/mois) : 10 webinaires automatiques sur Webinaire, illimités sur Illimité, aucun sur Gratuit et Startup (4 octobre 2026).",
    steps: [
      {
        title: "Enregistrez votre présentation",
        text: "Préparez une vidéo de 30 à 60 minutes qui apprend quelque chose d'utile, puis présente votre offre à la fin. Mettez-la en ligne là où vous pourrez l'intégrer dans une page.",
      },
      {
        title: "Créez le tunnel webinaire",
        text: "Dans « Sites », « Tunnels de vente », cliquez sur « Créer », donnez un nom, choisissez « Créer un webinaire automatique », puis « Sauvegarder ». Le tunnel contient 3 pages par défaut : inscription, remerciement et diffusion. Choisissez un modèle pour chacune.",
      },
      {
        title: "Réglez la page d'inscription",
        text: "Cliquez sur « Modifier la page », puis « Modifier les paramètres de la popup » pour régler la fenêtre d'inscription. Configurez obligatoirement l'élément « Date d'inscription au webinaire » : c'est lui qui propose les horaires.",
      },
      {
        title: "Choisissez les horaires",
        text: "D'après l'aide officielle, on ne peut pas fixer une date précise : vous choisissez plusieurs créneaux dans la journée, et ces créneaux sont proposés chaque jour aux inscrits.",
      },
      {
        title: "Ajoutez rappels et offre",
        text: "Utilisez des règles d'automatisation pour envoyer des rappels aux inscrits, et ajoutez sur la page de diffusion un bouton vers votre page de paiement.",
      },
    ],
    pitfalls: [
      "Vouloir faire un webinaire en direct : systeme.io ne propose que des webinaires automatiques.",
      "Ouvrir directement l'adresse de la page de diffusion pour la tester : elle n'est accessible qu'après inscription ; prévisualisez-la depuis l'éditeur.",
    ],
    tools: sio("Webinaires automatiques sur les plans Webinaire et Illimité."),
    sources: [S.webinar, S.pricing],
    related: ["combien-coute-systeme-io", "creer-et-vendre-une-formation-en-ligne-systeme-io", "automatiser-avec-les-regles-systeme-io"],
  },

  // ——— Affiliation ———
  {
    slug: "creer-son-programme-d-affiliation-systeme-io",
    question: "Comment créer son propre programme d'affiliation avec systeme.io ?",
    seoTitle: "Créer son programme d'affiliation avec systeme.io",
    seoDescription: "Laisser d'autres personnes vendre vos produits contre commission : réglages du programme d'affiliation systeme.io, commission par offre, paiements.",
    summary: "Laisser d'autres vendre vos produits contre commission, avec le suivi intégré.",
    theme: "affiliation",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Un programme d'affiliation permet à d'autres personnes de recommander vos produits avec un lien personnel, et de toucher une commission sur les ventes. Il est inclus sur tous les plans de systeme.io, y compris le gratuit (page des tarifs, 4 octobre 2026).",
    steps: [
      {
        title: "Ouvrez les réglages du programme",
        text: "Cliquez sur votre photo de profil, puis « Paramètres », puis « Programme d'affiliation ».",
      },
      {
        title: "Fixez les règles générales",
        text: "Réglez la commission par défaut, le seuil minimum de paiement, une éventuelle commission de second niveau (sur les ventes des affiliés recrutés par vos affiliés), le délai avant paiement et le jour de paiement. Les valeurs par défaut (aide officielle, 4 octobre 2026) : 40 % de commission, 30 de minimum de paiement dans votre devise, 0 % au second niveau et 30 jours de délai. Modifiez-les selon vos marges.",
      },
      {
        title: "Réglez la commission de chaque offre",
        text: "La commission se règle aussi sur chaque page de paiement. D'après l'aide, elle est à 0 % par défaut sur une offre : sans ce réglage, vos affiliés ne touchent rien sur ce produit.",
      },
      {
        title: "Donnez aux affiliés un endroit où s'inscrire",
        text: "Partagez le lien d'inscription de votre programme. Chaque affilié obtient ses liens et suit ses ventes depuis son tableau de bord.",
      },
      {
        title: "Payez vos affiliés",
        text: "Les commissions dues apparaissent dans systeme.io une fois le délai écoulé. Vérifiez les ventes remboursées avant de payer.",
      },
    ],
    pitfalls: [
      "Laisser la commission d'une offre à 0 % alors que le programme affiche une commission générale.",
      "Promettre une commission trop haute sur un produit à faible marge.",
    ],
    tools: sio("Programme d'affiliation intégré sur tous les plans."),
    sources: [S.ownAffiliate, S.pricing],
    related: ["devenir-affilie-systeme-io", "vendre-un-produit-numerique-avec-systeme-io", "creer-et-vendre-une-formation-en-ligne-systeme-io"],
  },
  {
    slug: "devenir-affilie-systeme-io",
    question: "Comment devenir affilié systeme.io et toucher des commissions ?",
    seoTitle: "Devenir affilié systeme.io : commission, cookie, paiements",
    seoDescription: "Le programme d'affiliation de systeme.io : 60 % de commission récurrente, lien avec ?sa=, cookie d'un an, paiement le 10 du mois, d'après les pages officielles.",
    summary: "Le lien, la commission, l'attribution et les paiements, d'après les pages officielles.",
    theme: "affiliation",
    publishedOn: d,
    updatedOn: d,
    intro:
      "systeme.io a son propre programme d'affiliation : vous recommandez l'outil avec votre lien et touchez une part de ce que paient les personnes inscrites. C'est aussi ce que fait ce site : les liens vers systeme.io ici sont des liens affiliés.",
    steps: [
      {
        title: "Lisez les conditions",
        text: "D'après la page officielle du programme (4 octobre 2026) : 60 % de commission sur les abonnements, à vie, calculée sur le montant hors taxes. Pas besoin d'être client pour rejoindre le programme.",
      },
      {
        title: "Trouvez votre identifiant",
        text: "Dès l'inscription, vous recevez un identifiant d'affilié unique, qui commence par « sa ». Pour le retrouver : « Tableau de bord », puis « Tableau de bord affilié ».",
      },
      {
        title: "Construisez vos liens",
        text: "Ajoutez « ?sa=VOTRE_IDENTIFIANT » à la fin de n'importe quelle page créée avec systeme.io (page de capture, de vente, de paiement), par exemple https://systeme.io/fr?sa=…, sans « www ».",
      },
      {
        title: "Comprenez l'attribution",
        text: "D'après l'aide officielle, le cookie dure un an et votre identifiant est ajouté aux e-mails envoyés à la personne. Le parrainage est verrouillé dès son inscription au plan gratuit : vous restez son parrain à vie. Vous ne pouvez pas être votre propre affilié.",
      },
      {
        title: "Recevez vos paiements",
        text: "Les commissions sont payées le 10 de chaque mois, au moins 30 jours après le paiement du client (donc entre 30 et 60 jours), dès que le total dépasse 30 € (30 $ dans l'aide en anglais), par PayPal ou virement bancaire.",
      },
      {
        title: "Recommandez honnêtement",
        text: "Indiquez toujours que votre lien est un lien affilié, près du lien. Expliquez aussi les limites de l'outil : un lecteur bien informé reste client plus longtemps.",
      },
    ],
    pitfalls: [
      "Cacher qu'un lien est affilié : c'est trompeur, et la loi impose de le signaler.",
      "Ajouter « www » dans le lien affilié : l'aide indique de ne pas l'utiliser.",
    ],
    tools: sio("Programme d'affiliation à 60 % de commission récurrente."),
    sources: [S.affiliatePage, S.sioAffiliate],
    related: ["creer-son-programme-d-affiliation-systeme-io", "c-est-quoi-systeme-io", "combien-coute-systeme-io"],
  },

  // ——— Comparer et migrer ———
  {
    slug: "systeme-io-ou-leadpages",
    question: "systeme.io ou Leadpages : lequel choisir pour ses landing pages ?",
    seoTitle: "systeme.io ou Leadpages : comparatif prix et fonctions (2026)",
    seoDescription: "systeme.io face à Leadpages : prix officiels relevés le 4 octobre 2026, essai gratuit, e-mails, paiements, et dans quels cas choisir l'un ou l'autre.",
    summary: "Prix officiels, ce qui est inclus, et dans quels cas chacun est le meilleur choix.",
    theme: "comparer",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Leadpages est un outil spécialisé dans les landing pages. systeme.io fait aussi des pages, mais ajoute les e-mails, les paiements, les formations et l'affiliation. La bonne question est donc : avez-vous besoin seulement de pages, ou de tout le reste aussi ?",
    steps: [
      {
        title: "Comparez les prix",
        text: "Relevé le 4 octobre 2026 sur les pages officielles (Leadpages affiché en dollars depuis notre accès) : Leadpages Grow 99 $/mois (79 $ en annuel), Optimize 199 $ (159 $), Scale 399 $ (319 $), avec un essai de 7 jours qui demande une carte bancaire. systeme.io : plan gratuit sans carte, puis Startup 17 €/mois, Webinaire 47 €, Illimité 97 €.",
      },
      {
        title: "Regardez ce qui est inclus",
        text: "systeme.io inclut dans tous ses plans l'envoi d'e-mails illimité, la page de paiement sans frais de transaction côté systeme.io, et un programme d'affiliation. Avec Leadpages, vous reliez en général un outil d'e-mails et un outil de paiement à part, avec leurs propres abonnements.",
      },
      {
        title: "Ce que Leadpages fait bien",
        text: "Un outil centré sur une seule tâche : bibliothèque de modèles de pages, tests A/B (à partir du plan Grow d'après sa page des tarifs) et nombreuses intégrations. Si vous avez déjà un outil d'e-mails et une boutique qui vous conviennent, il peut s'intégrer à votre installation existante.",
      },
      {
        title: "Ce que systeme.io fait mieux",
        text: "Tout est relié sans intégration : la page de capture alimente la liste, la liste reçoit la séquence d'e-mails, la page de paiement donne accès à la formation. Pour démarrer, le plan gratuit permet 3 tunnels, 2 000 contacts et 1 domaine personnalisé.",
      },
      {
        title: "Décidez",
        text: "Choisissez systeme.io si vous démarrez, si vous vendez des produits numériques ou si vous voulez réduire le nombre d'abonnements. Choisissez Leadpages si vous voulez seulement des landing pages et que le reste de vos outils est déjà en place.",
      },
    ],
    pitfalls: [
      "Comparer seulement le prix des pages : additionnez aussi l'outil d'e-mails et l'outil de paiement nécessaires à côté de Leadpages.",
      "Oublier que les prix Leadpages sont en dollars et peuvent varier selon le pays et les taxes.",
    ],
    tools: sio("Pages, e-mails et paiements dans un seul abonnement, avec un plan gratuit."),
    sources: [S.pricing, S.leadpagesPricing],
    related: ["creer-une-page-de-capture-systeme-io", "migrer-vers-systeme-io", "combien-coute-systeme-io", "systeme-io-ou-shopify"],
  },
  {
    slug: "systeme-io-ou-shopify",
    question: "systeme.io ou Shopify : lequel choisir pour vendre en ligne ?",
    seoTitle: "systeme.io ou Shopify : comparatif pour vendre en ligne (2026)",
    seoDescription: "systeme.io face à Shopify : prix officiels relevés le 4 octobre 2026, produits numériques ou physiques, expédition, et quel outil choisir selon votre projet.",
    summary: "Produits numériques ou catalogue physique : les prix, les forces de chacun, et comment choisir.",
    theme: "comparer",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Shopify est une plateforme de boutique en ligne, pensée pour vendre beaucoup de produits physiques. systeme.io est pensé pour vendre des produits numériques, des formations et des accompagnements avec des tunnels et des e-mails, et sait aussi vendre quelques produits physiques.",
    steps: [
      {
        title: "Comparez les prix",
        text: "Relevé le 4 octobre 2026 sur shopify.com (affiché en dollars depuis notre accès) : Basic 39 $/mois (29 $ en annuel), Grow 105 $ (79 $), Advanced 399 $ (299 $), Plus à partir de 2 300 $. Essai de 3 jours puis 1 $/mois pendant 3 mois. systeme.io : gratuit, puis 17 €, 47 € ou 97 €/mois. Les prix Shopify varient selon le pays.",
      },
      {
        title: "Regardez les frais sur les ventes",
        text: "systeme.io ne prend aucun frais de transaction (0 % sur tous les plans) : seuls les frais de Stripe ou PayPal s'appliquent. Shopify indique des frais de transaction pour les prestataires de paiement tiers (2 % sur Basic) si vous n'utilisez pas Shopify Payments.",
      },
      {
        title: "Ce que Shopify fait mieux",
        text: "Le catalogue de produits physiques : thèmes de boutique, gestion avancée de l'expédition, applications, ventes sur plusieurs canaux. L'aide de systeme.io précise que systeme.io ne gère ni l'expédition ni la préparation des commandes.",
      },
      {
        title: "Ce que systeme.io fait mieux",
        text: "Vendre un produit numérique ou une formation avec un tunnel complet : page de capture, séquence d'e-mails, page de paiement, upsell, accès automatique à la formation, programme d'affiliation. Chez Shopify, cela demande en général des applications supplémentaires.",
      },
      {
        title: "Décidez",
        text: "Choisissez Shopify si votre activité est une boutique de nombreux produits physiques à expédier. Choisissez systeme.io si vous vendez surtout du numérique (formation, ebook, coaching) ou quelques produits physiques, et que vous voulez construire une liste d'e-mails.",
      },
    ],
    pitfalls: [
      "Choisir Shopify pour vendre une seule formation : vous payez une boutique complète et des applications pour une fonction incluse dans systeme.io.",
      "Choisir systeme.io pour un catalogue de centaines de produits avec expédition complexe : ce n'est pas son point fort.",
    ],
    tools: sio("Vente de produits numériques et physiques, 0 % de frais de transaction côté systeme.io."),
    sources: [S.pricing, S.shopifyPricing, S.physical],
    related: ["vendre-un-produit-numerique-avec-systeme-io", "vendre-des-produits-physiques-avec-systeme-io", "migrer-vers-systeme-io", "systeme-io-ou-leadpages"],
  },
  {
    slug: "migrer-vers-systeme-io",
    question: "Comment migrer vers systeme.io depuis un autre outil ?",
    seoTitle: "Migrer vers systeme.io : migration gratuite et import des contacts",
    seoDescription: "Passer de Leadpages, Shopify, ClickFunnels, Mailchimp ou autre à systeme.io : migration gratuite (conditions), import CSV des contacts, ordre des étapes.",
    summary: "La migration gratuite (et ses conditions), l'import des contacts, puis l'ordre pour basculer.",
    theme: "comparer",
    publishedOn: d,
    updatedOn: d,
    intro:
      "Changer d'outil fait peur, mais systeme.io propose une migration faite par son équipe, gratuitement, sous conditions. Vous pouvez aussi migrer vous-même, en commençant par les contacts.",
    steps: [
      {
        title: "Vérifiez si la migration gratuite s'applique",
        text: "D'après l'aide officielle (4 octobre 2026), la migration complète est gratuite si vous prenez le plan Illimité mensuel ou l'un des plans annuels. Elle comprend les contacts, les pages des tunnels, les blogs, les formations, les e-mails et campagnes, et les automatisations, dans les limites de votre plan.",
      },
      {
        title: "Demandez-la au support",
        text: "Une fois abonné, contactez le support de systeme.io pour transmettre la demande à l'équipe de migration. Elle travaille dans l'ordre d'arrivée, vous demande l'accès à vos anciens comptes, et reproduit le contenu à la main. Durée moyenne indiquée : 17 jours.",
      },
      {
        title: "Gardez l'ancien outil pendant la migration",
        text: "Votre ancien compte n'est pas modifié : le contenu est seulement dupliqué. Ne changez pas les pages en cours de copie, et ne résiliez l'ancien abonnement qu'après avoir tout vérifié.",
      },
      {
        title: "Ou importez vos contacts vous-même",
        text: "Exportez votre liste en CSV depuis votre ancien outil (Mailchimp, Leadpages, Shopify…). Dans systeme.io, allez dans « CRM », puis « Contacts », et importez le fichier en ajoutant un tag, et éventuellement une campagne. N'importez que des contacts qui ont accepté de recevoir vos e-mails : systeme.io vérifie la liste avant tout envoi lors d'une migration.",
      },
      {
        title: "Basculez dans le bon ordre",
        text: "Contacts et domaine d'envoi d'abord, puis pages de capture, puis pages de vente et paiements, puis formations. Changez ensuite les liens partout (réseaux sociaux, signature) et pointez votre nom de domaine vers systeme.io en dernier.",
      },
    ],
    pitfalls: [
      "Résilier l'ancien outil avant d'avoir testé chaque page et chaque paiement sur systeme.io.",
      "Importer une liste achetée ou sans consentement : c'est interdit et cela bloque vos envois.",
    ],
    tools: sio("Migration gratuite avec le plan Illimité mensuel ou un plan annuel."),
    sources: [S.migration, S.clickfunnels, S.importContacts],
    related: ["systeme-io-ou-leadpages", "systeme-io-ou-shopify", "connecter-son-nom-de-domaine-a-systeme-io", "ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io"],
  },

  // ——— Projet complet ———
  {
    slug: "lancer-son-business-en-ligne-avec-systeme-io-de-a-a-z",
    question: "Comment lancer son business en ligne avec systeme.io, de A à Z ?",
    seoTitle: "Lancer son business en ligne avec systeme.io de A à Z",
    seoDescription: "Le plan complet avec systeme.io : compte gratuit, domaine, page de capture, séquence d'e-mails, produit, paiement, upsell et affiliation, dans l'ordre.",
    summary: "Le parcours complet, du compte gratuit à la première vente, dans l'ordre.",
    theme: "decouvrir",
    format: "complet",
    publishedOn: d,
    updatedOn: d,
    popular: true,
    intro:
      "Ce guide assemble les autres dans l'ordre : construire une liste d'e-mails, puis vendre un premier produit numérique avec un tunnel complet. Tout peut commencer sur le plan gratuit ; chaque étape renvoie au guide détaillé.",
    steps: [
      {
        title: "Choisissez une offre simple",
        text: "Un seul produit pour commencer : une formation courte, un ebook, une séance d'accompagnement. Décrivez en une phrase le résultat pour le client, et fixez un prix.",
      },
      {
        title: "Créez le compte gratuit",
        text: "Inscrivez-vous sur systeme.io avec le plan gratuit, sans carte bancaire. Le guide « Créer son compte systeme.io » détaille les premiers réglages.",
      },
      {
        title: "Connectez votre domaine et préparez les e-mails",
        text: "Connectez votre nom de domaine (2 CNAME chez votre hébergeur), puis confirmez votre adresse d'expéditeur et authentifiez le domaine d'envoi : c'est obligatoire pour envoyer des e-mails.",
      },
      {
        title: "Construisez la page de capture",
        text: "Créez un tunnel « Créer une audience » avec un cadeau gratuit lié à votre offre (une liste, un mini-guide). Gardez la page courte : titre, trois bénéfices, champ e-mail.",
      },
      {
        title: "Écrivez la séquence de bienvenue",
        text: "Créez une campagne de 4 à 5 e-mails : le cadeau, deux conseils utiles, une histoire, puis l'offre. Une règle « Inscription sur la page (optin) » y inscrit chaque nouveau contact.",
      },
      {
        title: "Créez le produit",
        text: "Pour une formation : « Ressources », « Formations », puis modules et chapitres. Pour un fichier : un tag et une règle « Nouvelle vente » qui envoie le lien.",
      },
      {
        title: "Branchez le paiement",
        text: "Connectez Stripe et/ou PayPal dans « Paramètres », « Passerelles de paiement ». Créez un tunnel « Vendre » avec page de vente et page de paiement, ajoutez le produit numérique et son tarif, puis cochez les moyens de paiement dans les paramètres du tunnel.",
      },
      {
        title: "Augmentez le panier",
        text: "Ajoutez un order bump sur la page de paiement, ou un upsell juste après. Le plan gratuit en permet un de chaque.",
      },
      {
        title: "Testez tout le parcours",
        text: "Inscrivez-vous avec une autre adresse, lisez les e-mails, achetez, vérifiez l'accès au produit. Corrigez avant d'envoyer du trafic.",
      },
      {
        title: "Faites venir des visiteurs",
        text: "Partagez la page de capture partout où vous publiez (réseaux sociaux, blog systeme.io, signature d'e-mail). Plus tard, ouvrez votre propre programme d'affiliation pour que d'autres vendent pour vous.",
      },
      {
        title: "Passez à un plan payant quand c'est utile",
        text: "Quand vous atteignez une limite du plan gratuit (1 campagne, 1 règle, 3 tunnels, 2 000 contacts), comparez les plans. Startup coûte 17 €/mois ou 170 €/an (4 octobre 2026).",
      },
    ],
    pitfalls: [
      "Construire le produit pendant des mois avant d'avoir une liste : commencez par la page de capture.",
      "Envoyer du trafic avant d'avoir testé un achat de bout en bout.",
      "Multiplier les offres au début : une seule, bien testée, suffit.",
    ],
    tools: sio("Toutes les étapes dans un seul outil, à partir du plan gratuit."),
    sources: [S.pricing, S.funnel, S.campaign, S.orderForm, S.course, S.domain],
    related: ["creer-son-compte-systeme-io", "creer-une-page-de-capture-systeme-io", "creer-une-sequence-d-e-mails-automatique-systeme-io", "vendre-un-produit-numerique-avec-systeme-io", "creer-et-vendre-une-formation-en-ligne-systeme-io"],
  },
];

export const tools: Tool[] = [
  {
    slug: "systeme-io",
    name: "systeme.io",
    summary:
      "Outil tout-en-un pour vendre en ligne : tunnels de vente, e-mails, automatisations, formations, blog, produits physiques et affiliation, avec un plan gratuit sans carte bancaire.",
    website: affiliateLinks.fr,
    affiliateUrl: affiliateLinks.fr,
    freePlan: true,
    themes: ["decouvrir", "tunnels", "vendre", "emails", "formations", "affiliation", "comparer"],
    goodFor:
      "Indépendants, coachs, formateurs et créateurs qui vendent des produits numériques et veulent construire une liste d'e-mails sans assembler plusieurs outils.",
    watchOut:
      "Plan gratuit limité (1 campagne, 1 règle, 3 tunnels, 2 000 contacts), pas de webinaire en direct, et pas de gestion de l'expédition pour les produits physiques.",
  },
];

const themeBySlug = new Map(themes.map((theme) => [theme.slug, theme]));
const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getTheme(slug: string) {
  return themeBySlug.get(slug);
}

export function getGuide(slug: string) {
  return guideBySlug.get(slug);
}

export function getTool(slug: string) {
  return toolBySlug.get(slug);
}

export function guidesInTheme(slug: string) {
  return guides.filter((guide) => guide.theme === slug);
}

export function popularGuides() {
  return guides.filter((guide) => guide.popular);
}

// Les guides les plus récents (date de publication), pour la page d'accueil.
export function latestGuides(count = 4) {
  return guides
    .map((guide, index) => ({ guide, index }))
    .sort((a, b) => (b.guide.publishedOn ?? "").localeCompare(a.guide.publishedOn ?? "") || b.index - a.index)
    .slice(0, count)
    .map(({ guide }) => guide);
}

export function guidesUsingTool(slug: string) {
  return guides.filter((guide) => guide.tools.some((item) => item.slug === slug));
}

export function toolLink(tool: Tool) {
  return tool.affiliateUrl ?? tool.website;
}

// Guides à lire ensuite : d'abord la liste `related`, puis d'autres guides du même thème
// (populaires d'abord, puis les plus récents).
export function getRelatedGuides(guide: Guide, limit = 5): Guide[] {
  const result: Guide[] = [];
  const seen = new Set<string>([guide.slug]);
  for (const slug of guide.related) {
    const item = getGuide(slug);
    if (item && !seen.has(item.slug)) {
      result.push(item);
      seen.add(item.slug);
    }
  }
  const sameTheme = guides
    .filter((item) => item.theme === guide.theme && !seen.has(item.slug))
    .sort((a, b) => Number(Boolean(b.popular)) - Number(Boolean(a.popular)) || b.updatedOn.localeCompare(a.updatedOn));
  return [...result, ...sameTheme].slice(0, limit);
}

// Les deux formats de guides. Une rubrique n'apparaît sur le site que si elle contient au moins un guide.
export const formats: { slug: string; format: GuideFormat; name: string; label: string; blurb: string }[] = [
  {
    slug: "express",
    format: "express",
    name: "Guides express",
    label: "Aller à l'essentiel",
    blurb: "Une question, une réponse : l'essentiel se lit en 30 secondes, le détail en 1 à 2 minutes.",
  },
  {
    slug: "complets",
    format: "complet",
    name: "Guides complets",
    label: "Tout comprendre",
    blurb: "Un projet de A à Z, étape par étape : plus de 10 minutes de lecture.",
  },
];

export function guideFormat(guide: Guide): GuideFormat {
  return guide.format ?? "express";
}

export function guidesInFormat(format: GuideFormat) {
  return guides.filter((guide) => guideFormat(guide) === format);
}

export function activeFormats() {
  return formats.filter((item) => guidesInFormat(item.format).length > 0);
}

// Temps de lecture estimé (200 mots par minute, 1 minute minimum).
export function readingMinutes(guide: Guide) {
  const text = [
    guide.question,
    guide.intro,
    ...guide.steps.flatMap((step) => [step.title, step.text]),
    ...guide.pitfalls,
    ...guide.tools.map((item) => item.why),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

// Chemin public du logo (les logos actuels sont tous en `direct`).
export function logoPath(tool: Tool) {
  if (!tool.logo) return undefined;
  if (tool.logo.direct) return tool.logo.src;
  const ext = tool.logo.src.split("?")[0].split(".").pop() ?? "png";
  return `/logos/${tool.slug}.${ext}`;
}

// Description pour Google (idéalement 120 à 160 caractères) : le résumé, complété par les
// premières phrases de l'intro tant que l'ensemble reste sous 160 caractères.
export function seoDescription(guide: Guide) {
  if (guide.seoDescription) return guide.seoDescription;
  let text = guide.summary;
  const sentences = guide.intro.match(/[^.!?]+[.!?]+/g) ?? [];
  for (const sentence of sentences) {
    const next = `${text} ${sentence.trim()}`;
    if (next.length > 160) break;
    text = next;
  }
  return text;
}
