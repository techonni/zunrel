// Visuels de la maquette v3 (icônes d'app et écrans de téléphone en HTML/CSS), repris de
// /workspace/zunrel-sio/tools/mk3.mjs. Utilisés par l'accueil, les cartes de guides et les articles.
const esc = (t: unknown) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const S = 'fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
export const icons: Record<string, string> = {
  tunnel: `<path d="M9 11h22M13 18h14M17 25h6M20 25v5" ${S}/>`,
  capture: `<rect x="9" y="9" width="22" height="22" rx="3" ${S}/><path d="M13 16h14" ${S}/><rect x="13" y="22" width="14" height="4" rx="2" fill="#000"/>`,
  email: `<rect x="8" y="11" width="24" height="18" rx="3" ${S}/><path d="M9 13l11 8 11-8" ${S}/>`,
  auto: `<circle cx="12" cy="20" r="4" ${S}/><circle cx="28" cy="20" r="4" ${S}/><path d="M16 20h8M21 17l3 3-3 3" ${S}/>`,
  cours: `<rect x="8" y="10" width="24" height="20" rx="4" ${S}/><path d="M17.5 15.5v9l7-4.5z" fill="#000"/>`,
  blog: `<path d="M10 11h20M10 17h20M10 23h13M10 29h9" ${S}/>`,
  boutique: `<path d="M11 15h18l-1.5 15h-15z" ${S}/><path d="M16 15v-2a4 4 0 0 1 8 0v2" ${S}/>`,
  webinaire: `<circle cx="20" cy="20" r="11" ${S}/><circle cx="20" cy="20" r="3.5" fill="#000"/>`,
  affil: `<circle cx="20" cy="11" r="3.5" ${S}/><circle cx="11" cy="28" r="3.5" ${S}/><circle cx="29" cy="28" r="3.5" ${S}/><path d="M18 14l-5 11M22 14l5 11M14.5 28h11" ${S}/>`,
  compare: `<rect x="8" y="12" width="10" height="17" rx="2.5" ${S}/><rect x="22" y="8" width="10" height="21" rx="2.5" ${S}/><path d="M8 33h24" ${S}/>`,
  paiement: `<rect x="8" y="12" width="24" height="16" rx="3" ${S}/><path d="M8 18h24M13 24h5" ${S}/>`,
  compte: `<circle cx="20" cy="15" r="5.5" ${S}/><path d="M10 31c1.5-5 5.5-7.5 10-7.5s8.5 2.5 10 7.5" ${S}/>`,
  prix: `<path d="M9 9h10l12 12-10 10L9 19z" ${S}/><circle cx="15" cy="15" r="2" fill="#000"/>`,
  shield: `<path d="M20 8l11 4v8c0 6-5 10-11 12-6-2-11-6-11-12v-8z" ${S}/><path d="M15 20l3.5 3.5L25 17" ${S}/>`,
  globe: `<circle cx="20" cy="20" r="11" ${S}/><path d="M9 20h22M20 9c-4 4-4 18 0 22M20 9c4 4 4 18 0 22" ${S}/>`,
  migr: `<rect x="7" y="12" width="11" height="16" rx="2.5" ${S}/><rect x="22" y="12" width="11" height="16" rx="2.5" ${S}/><path d="M15 20h10M22 17l3 3-3 3" ${S}/>`,
};
const ico = (k: string, cls = "ico") => `<span class="${cls}"><svg viewBox="0 0 40 40">${icons[k]}</svg></span>`;

// ——— Écrans de téléphone (UI originale, en HTML/CSS) ———
const ok = '<i class="ok"></i>', no = '<i class="no"></i>';
const item = (it: any[]): string => {
  const [k, a, b, c] = it;
  if (k === "step") return `<div class="st"><span class="th">${[0, 1, 2, 3].map(i => `<b${i === c ? ' class="k"' : ""}></b>`).join("")}</span><span><small>${esc(a)}</small><strong>${esc(b)}</strong></span></div>`;
  if (k === "arrow") return `<div class="ar">↓</div>`;
  if (k === "row") return `<div class="rw"><span>${esc(a)}</span><em>${esc(b ?? "›")}</em></div>`;
  if (k === "field") return `<div class="fd"><small>${esc(a)}</small><span>${esc(b)}</span></div>`;
  if (k === "btn") return `<div class="bt">${esc(a)}</div>`;
  if (k === "check") return `<div class="ck${b ? " on" : ""}"><i></i><span>${esc(a)}</span></div>`;
  if (k === "toggle") return `<div class="tg"><span>${esc(a)}</span><i class="${b ? "on" : ""}"></i></div>`;
  if (k === "cmph") return `<div class="cm h"><span></span><b>${esc(a)}</b><b>${esc(b)}</b></div>`;
  if (k === "cmp") return `<div class="cm"><span>${esc(a)}</span>${b ? ok : no}${c ? ok : no}</div>`;
  if (k === "hero") return `<div class="hr"><strong>${esc(a)}</strong><b></b><b></b></div>`;
  if (k === "gap") return `<div class="gp"></div>`;
  throw new Error(k);
};
export const SCREENS: Record<string, [string, string, string, any[]]> = {
  "creer-un-tunnel-de-vente-systeme-io": ["tunnel", "Tunnel de vente", "Mon offre · 4 étapes", [["step", "Étape 1", "Page de capture", 0], ["arrow"], ["step", "Étape 2", "Page de vente", 1], ["arrow"], ["step", "Étape 3", "Page de paiement", 2], ["arrow"], ["step", "Étape 4", "Page de remerciement", 3], ["btn", "Ajouter une étape"]]],
  "lancer-son-business-en-ligne-avec-systeme-io-de-a-a-z": ["capture", "Mon lancement", "De A à Z", [["check", "Créez le compte gratuit", 1], ["check", "Connectez votre domaine", 1], ["check", "Construisez la page de capture", 1], ["check", "Écrivez la séquence de bienvenue", 0], ["check", "Créez le produit", 0], ["check", "Branchez le paiement", 0], ["check", "Testez tout le parcours", 0]]],
  "devenir-affilie-systeme-io": ["affil", "Affiliation", "Mes liens", [["field", "Votre lien d'affiliation", "systeme.io/fr?sa=…"], ["btn", "Copier le lien"], ["gap"], ["row", "Page d'accueil"], ["row", "Page des tarifs"], ["row", "Conditions du programme"]]],
  "creer-un-webinaire-automatique-systeme-io": ["webinaire", "Webinaire automatique", "Tunnel de 3 pages", [["step", "Étape 1", "Page d'inscription", 0], ["arrow"], ["step", "Étape 2", "Page du webinaire", 1], ["arrow"], ["step", "Étape 3", "Page de remerciement", 3], ["toggle", "Rappels par e-mail", 1]]],
  "ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io": ["shield", "Délivrabilité", "votre-domaine.fr", [["check", "Adresse sur votre domaine", 1], ["check", "Adresse d'expéditeur confirmée", 1], ["check", "Enregistrements DNS créés", 1], ["check", "Domaine authentifié", 1], ["gap"], ["field", "Expéditeur", "bonjour@votre-domaine.fr"]]],
  "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io": ["paiement", "Page de paiement", "Mon offre", [["field", "Adresse e-mail", "vous@exemple.com"], ["field", "Code promo", "BIENVENUE"], ["toggle", "Order bump : ajouter le bonus", 1], ["btn", "Payer"], ["gap"], ["row", "Upsell", "Après le paiement"], ["row", "Downsell", "Si refus"]]],
  "c-est-quoi-systeme-io": ["capture", "systeme.io", "Un seul compte", [["row", "Tunnels de vente"], ["row", "E-mails"], ["row", "Automatisations"], ["row", "Formations"], ["row", "Blog"], ["row", "Boutique"], ["row", "Affiliation"]]],
  "plan-gratuit-systeme-io": ["capture", "Plan Gratuit", "0 € · sans carte bancaire", [["row", "Contacts", "2 000"], ["row", "Tunnels", "3"], ["row", "Étapes au total", "15"], ["row", "Campagnes", "1"], ["row", "Règles", "1"], ["btn", "Créer un compte gratuit"]]],
  "combien-coute-systeme-io": ["prix", "Tarifs", "Paiement mensuel", [["toggle", "Facturation annuelle", 0], ["row", "Gratuit", "0 €"], ["row", "Startup", "17 €/mois"], ["row", "Webinaire", "47 €/mois"], ["row", "Illimité", "97 €/mois"]]],
  "creer-son-compte-systeme-io": ["compte", "Créer un compte", "Gratuit, sans carte bancaire", [["field", "Prénom", "Camille"], ["field", "Adresse e-mail", "vous@exemple.com"], ["field", "Mot de passe", "••••••••••"], ["btn", "Créer mon compte"]]],
  "systeme-io-ou-leadpages": ["compare", "Comparer", "Landing pages", [["cmph", "systeme.io", "Leadpages"], ["cmp", "Pages de capture", 1, 1], ["cmp", "E-mails inclus", 1, 0], ["cmp", "Formations", 1, 0], ["cmp", "Plan gratuit", 1, 0]]],
  "systeme-io-ou-shopify": ["compare", "Comparer", "Vendre en ligne", [["cmph", "systeme.io", "Shopify"], ["cmp", "Tunnels de vente", 1, 0], ["cmp", "Formations", 1, 0], ["cmp", "Plan gratuit", 1, 0], ["cmp", "Boutique avancée", 0, 1]]],
  "migrer-vers-systeme-io": ["migr", "Migration", "Vers systeme.io", [["check", "Vérifier la migration gratuite", 1], ["check", "Importer les contacts", 1], ["check", "Recréer les pages", 0], ["check", "Basculer le domaine", 0], ["gap"], ["field", "Fichier importé", "contacts.csv"]]],
  "creer-une-page-de-capture-systeme-io": ["capture", "Page de capture", "Aperçu", [["hero", "Recevez le guide gratuit"], ["field", "Adresse e-mail", "vous@exemple.com"], ["btn", "Je m'inscris"], ["gap"], ["row", "Action du bouton", "Enregistrer le contact"]]],
  "vendre-un-produit-numerique-avec-systeme-io": ["boutique", "Produit numérique", "Ebook PDF", [["field", "Nom du produit", "Mon ebook"], ["field", "Fichier", "ebook.pdf"], ["toggle", "Livraison automatique", 1], ["btn", "Sauvegarder"]]],
};
export const phone = (slug: string): string => {
  const [ic, h, s, items] = SCREENS[slug];
  return `<div class="ph" aria-hidden="true"><div class="sc"><div class="sb"><b>9:41</b><i></i><span><u></u><u></u></span></div>
<div class="ah">${ico(ic, "ai")}<div><strong>${esc(h)}</strong><small>${esc(s)}</small></div></div>
<div class="bd">${items.map(item).join("")}</div></div></div>`;
};
SCREENS["connecter-stripe-et-paypal-a-systeme-io"] = ["paiement", "Paiements", "Paramètres du tunnel", [["row", "Stripe", "Connecté"], ["row", "PayPal", "Connecté"], ["gap"], ["toggle", "Carte de crédit ou de débit (Stripe)", 1], ["toggle", "PayPal", 1], ["btn", "Sauvegarder"]]];

// Icône d'app de chaque guide (pour les guides sans écran de téléphone, et en tête d'article).
const ICON_OF: Record<string, string> = {
  "c-est-quoi-systeme-io": "capture",
  "plan-gratuit-systeme-io": "prix",
  "combien-coute-systeme-io": "prix",
  "creer-son-compte-systeme-io": "compte",
  "creer-un-tunnel-de-vente-systeme-io": "tunnel",
  "creer-une-page-de-capture-systeme-io": "capture",
  "connecter-son-nom-de-domaine-a-systeme-io": "globe",
  "creer-un-blog-avec-systeme-io": "blog",
  "vendre-un-produit-numerique-avec-systeme-io": "boutique",
  "connecter-stripe-et-paypal-a-systeme-io": "paiement",
  "vendre-des-produits-physiques-avec-systeme-io": "boutique",
  "ajouter-un-upsell-un-order-bump-et-un-code-promo-systeme-io": "paiement",
  "envoyer-une-newsletter-avec-systeme-io": "email",
  "creer-une-sequence-d-e-mails-automatique-systeme-io": "email",
  "automatiser-avec-les-regles-systeme-io": "auto",
  "ameliorer-la-delivrabilite-de-ses-e-mails-systeme-io": "shield",
  "creer-et-vendre-une-formation-en-ligne-systeme-io": "cours",
  "creer-un-webinaire-automatique-systeme-io": "webinaire",
  "creer-son-programme-d-affiliation-systeme-io": "affil",
  "devenir-affilie-systeme-io": "affil",
  "systeme-io-ou-leadpages": "compare",
  "systeme-io-ou-shopify": "compare",
  "migrer-vers-systeme-io": "migr",
  "lancer-son-business-en-ligne-avec-systeme-io-de-a-a-z": "tunnel",
};
export const iconOf = (slug: string) => ICON_OF[slug] ?? "tunnel";
export const appIcon = (k: string, cls = "appi") => `<span class="${cls}"><svg viewBox="0 0 40 40" aria-hidden="true">${icons[k]}</svg></span>`;
export const hasPhone = (slug: string) => slug in SCREENS;
// Contenu d'une vignette : écran de téléphone si le guide en a un, sinon l'icône d'app.
// Le guide « tunnel de vente » garde l'icône (comme dans la maquette).
export const picInner = (slug: string, preferIcon = false) =>
  !preferIcon && hasPhone(slug) && slug !== "creer-un-tunnel-de-vente-systeme-io" ? phone(slug) : appIcon(iconOf(slug));
export const checklistItems = ["Créer le compte gratuit", "Connecter votre nom de domaine", "Authentifier le domaine d'envoi", "Créer la page de capture", "Envoyer l'e-mail de bienvenue", "Écrire la séquence de bienvenue", "Connecter Stripe ou PayPal", "Créer le produit et son tarif", "Ajouter un order bump", "Tester tout le tunnel"];
export const checkPhone = (title = "Lancer son premier tunnel", sub = "Zunrel · 10 étapes", items = checklistItems) => `<div class="ph cl" aria-hidden="true"><div class="sc"><div class="sb"><b>9:41</b><i></i><span><u></u><u></u></span></div>
<div class="ah">${ico("tunnel", "ai")}<div><strong>Checklist PDF</strong><small>${esc(sub)}</small></div></div>
<h3 class="clh">${esc(title)} <span>systeme.io</span></h3>
<div class="bd">${items.map((c) => item(["check", c, 0])).join("")}</div></div></div>`;
export const logoSvg = (n = 30) => `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#000"/><path d="M20 21h24L20 43h24" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
export const shortDate = (iso: string, lang: "fr" | "pt" | "en" = "fr") =>
  new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : lang === "pt" ? "pt-BR" : "en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso + "T00:00:00Z"));
// Typographie française : espace fine insécable avant ? ! ; et insécable avant : et dans « ».
export const frTypo = (t: string) =>
  t.replace(/« /g, "«\u00a0").replace(/ »/g, "\u00a0»").replace(/ ([?!;])/g, "\u202f$1").replace(/ :/g, "\u00a0:");
