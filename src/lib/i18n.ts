// Versions portugaise (/pt/) et anglaise (/en/) des guides systeme.io essentiels.
// Le français reste la langue principale : une traduction reprend les sources et
// les outils du guide français (même `slug`) et ne contient que le texte.
import { ptGuides } from "./translations/pt";
import { enGuides } from "./translations/en";
import type { Source } from "./guides";

export type Lang = "fr" | "pt" | "en";
export type OtherLang = Exclude<Lang, "fr">;

export type TranslatedGuide = {
  slug: string; // slug du guide français
  localSlug: string;
  question: string;
  summary: string;
  intro: string;
  // Même nombre d'étapes, dans le même ordre que le guide français.
  steps: { title: string; text: string }[];
  pitfalls: string[];
  // Pas encore publié (par exemple : prix à vérifier pour ce pays).
  hidden?: boolean;
};

// Anglais : public américain (dollars). Portugais : neutre (Brésil et Portugal).
export const translations: Record<OtherLang, TranslatedGuide[]> = {
  pt: ptGuides.filter((item) => !item.hidden),
  en: enGuides.filter((item) => !item.hidden),
};

export const locales: Record<Lang, string> = { fr: "fr_FR", pt: "pt_BR", en: "en_US" };

// Libellés du sélecteur de langue en haut de chaque page.
export const langLabels: Record<Lang, string> = { fr: "FR", pt: "PT", en: "US" };

// Tags Mailchimp de langue (Audience → Tags) : chaque inscription reçoit celui de la page.
export const langTags: Record<Lang, string> = { fr: "11404680", pt: "11404681", en: "11404682" };

// Sources officielles des guides traduits : la même page du centre d'aide systeme.io en anglais
// (champ `en` de la source française). Sans `en`, la source n'est pas affichée.
export function localizeSource(lang: OtherLang, source: Source) {
  if (!source.en) return null;
  if (lang === "en") return { label: source.en.label, url: source.en.url };
  return {
    label: source.en.ptLabel ?? source.en.label.replace("systeme.io Help:", "Ajuda systeme.io (em inglês):"),
    url: source.en.ptUrl ?? source.en.url,
  };
}

export const ui = {
  fr: {
    home: "Accueil",
    guides: "Guides",
    consent: "Nous utilisons Google Analytics pour savoir quels guides sont utiles. Aucune publicité, aucun cookie sans votre accord.",
    accept: "Accepter",
    refuse: "Refuser",
  },
  pt: {
    home: "Início",
    guides: "Guias",
    listTitle: "Guias systeme.io em português",
    listIntro:
      "Os guias essenciais do Zunrel sobre o systeme.io, traduzidos do francês: plano gratuito, preços, funis, e-mails, produtos digitais e cursos, passo a passo.",
    uiNote:
      "Os nomes dos menus e botões estão em inglês, como no centro de ajuda oficial. Na sua conta, podem aparecer em português.",
    stepByStep: "Passo a passo",
    inShort: "O essencial em 30 segundos",
    avoid: "A evitar:",
    seeDetail: "Ver o passo a passo ↓",
    downloadPdf: "Baixar em PDF",
    quickGuides: "Guias rápidos",
    completeGuides: "Guias completos (de A a Z)",
    pitfalls: "Erros frequentes",
    sources: "Fontes oficiais",
    readNext: "Ler a seguir",
    updated: "Atualizado em",
    reading: "Leitura",
    frenchVersion: "Versão original em francês",
    otherLang: "English version",
    tryYourself: "Experimente",
    affiliate: "Link de afiliado: se você criar uma conta por este link, eu recebo uma comissão, sem custo extra para você.",
    affiliateShort: "Link de afiliado.",
    ctaShort: "Para seguir este guia, você precisa de uma conta systeme.io: o plano gratuito não pede cartão de crédito.",
    cta: "O systeme.io tem um plano gratuito, sem cartão de crédito e sem prazo. Você pode montar tudo antes de pagar qualquer coisa.",
    ctaLabel: "Criar uma conta grátis no systeme.io ↗",
    footer:
      "Site independente, não editado pelo systeme.io. Confirme as informações no site oficial antes de decidir. Os links para o systeme.io são links de afiliado: se você criar uma conta por eles, eu recebo uma comissão, sem custo extra para você.",
    newsletterTitle: "Receber os próximos guias systeme.io",
    newsletterText: "Os novos guias systeme.io por e-mail. Sem spam, cancelamento com um clique.",
    newsletterNote: "Você vai receber um e-mail (em francês) para confirmar a inscrição.",
    newsletterButton: "Inscrever-me",
    consent: "Usamos o Google Analytics para saber quais guias são úteis. Sem publicidade e sem cookies sem o seu acordo.",
    accept: "Aceitar",
    refuse: "Recusar",
  },
  en: {
    home: "Home",
    guides: "Guides",
    listTitle: "systeme.io guides in English",
    listIntro:
      "Zunrel's core systeme.io guides, translated from French: free plan, pricing, funnels, emails, digital products and courses, step by step.",
    uiNote:
      "Menu and button names come from the official systeme.io Help Center in English.",
    stepByStep: "Step by step",
    inShort: "The essentials in 30 seconds",
    avoid: "Avoid:",
    seeDetail: "See the step-by-step ↓",
    downloadPdf: "Download as PDF",
    quickGuides: "Quick guides",
    completeGuides: "Complete guides (A to Z)",
    pitfalls: "Common mistakes",
    sources: "Official sources",
    readNext: "Read next",
    updated: "Updated on",
    reading: "Reading time",
    frenchVersion: "Original version in French",
    otherLang: "Versão em português",
    tryYourself: "Try it yourself",
    affiliate: "Affiliate link: if you create an account through this link, I earn a commission, at no extra cost to you.",
    affiliateShort: "Affiliate link.",
    ctaShort: "To follow this guide you need a systeme.io account: the free plan needs no credit card.",
    cta: "systeme.io has a free plan with no credit card and no time limit. You can build everything before paying anything.",
    ctaLabel: "Create a free systeme.io account ↗",
    footer:
      "Independent website, not published by systeme.io. Check the information on the official website before deciding. Links to systeme.io are affiliate links: if you create an account through them, I earn a commission, at no extra cost to you.",
    newsletterTitle: "Get the next systeme.io guides",
    newsletterText: "New systeme.io guides by email. No spam, unsubscribe in one click.",
    newsletterNote: "You will get an email (in French) to confirm your subscription.",
    newsletterButton: "Subscribe",
    consent: "We use Google Analytics to learn which guides are useful. No ads, no cookies without your consent.",
    accept: "Accept",
    refuse: "Decline",
  },
} as const;

export function listPath(lang: OtherLang) {
  return lang === "pt" ? "/pt/" : "/en/";
}

export function translatedPath(lang: OtherLang, localSlug: string) {
  return lang === "pt" ? `/pt/guias/${localSlug}/` : `/en/guides/${localSlug}/`;
}

export function getTranslation(lang: OtherLang, frSlug: string) {
  return translations[lang].find((item) => item.slug === frSlug);
}

// Liens hreflang d'un guide : la version française et ses traductions existantes.
export function guideAlternates(frSlug: string) {
  const list: { lang: Lang; path: string }[] = [{ lang: "fr", path: `/guides/${frSlug}/` }];
  for (const lang of ["pt", "en"] as const) {
    const item = getTranslation(lang, frSlug);
    if (item) list.push({ lang, path: translatedPath(lang, item.localSlug) });
  }
  return list.length > 1 ? list : undefined;
}
