// English versions of the core systeme.io guides. Sources and tools come from the French guide
// (same `slug`); only the text lives here. Each step matches, in order, a step of the French guide.
// Prices: US dollars as shown on systeme.io/pricing on October 4, 2026.
import type { TranslatedGuide } from "../i18n";

export const enGuides: TranslatedGuide[] = [
  {
    slug: "c-est-quoi-systeme-io",
    localSlug: "what-is-systeme-io",
    question: "What is systeme.io and who is it for?",
    summary: "One tool for your pages, emails, courses and sales: what it does, who it suits, and its limits.",
    intro:
      "systeme.io is an all-in-one online tool for selling on the internet: sales funnels and pages, emails, automations, online courses, a blog, physical products and an affiliate program, all in the same account. There is a free plan with no credit card.",
    steps: [
      {
        title: "Get the idea: one account instead of five tools",
        text: "Usually you combine a landing page builder, an email tool, a course platform and a store, then connect them. systeme.io bundles these pieces: a contact who signs up on a page goes straight into your contacts, receives your emails and can buy on the same platform.",
      },
      {
        title: "Look at what it can do",
        text: "According to the official pricing page (checked on October 4, 2026): sales funnels and pages, email sending (newsletters and campaigns), automation rules and workflows, websites and blogs, online courses and communities, physical products with stock and variants, coupons, upsells and order bumps, a booking calendar, an affiliate program, and automated webinars on the Webinar and Unlimited plans.",
      },
      {
        title: "See who it is for",
        text: "It suits freelancers, coaches, trainers and creators who sell digital products (a course, an ebook, coaching) and want to build an email list. It also works for small shops selling a few physical products without needing a huge catalog.",
      },
      {
        title: "Know its limits",
        text: "The free plan limits the number of funnels, campaigns, automation rules and contacts. Automated webinars require a paid plan (Webinar or Unlimited). For physical products, the official help center says systeme.io does not handle shipping: you send the parcels yourself. There are no live webinars either.",
      },
      {
        title: "Test it with the free plan",
        text: "The free plan never expires and needs no credit card. Create an account, build a first opt-in page and send yourself a test email: within an hour you will know whether the tool's logic suits you.",
      },
    ],
    pitfalls: [
      "Picking a paid plan before trying the free one: it is often enough to get started.",
      "Thinking systeme.io ships your parcels: delivering physical products is up to you.",
    ],
  },
  {
    slug: "plan-gratuit-systeme-io",
    localSlug: "systeme-io-free-plan",
    question: "What does the systeme.io free plan include?",
    summary: "The exact limits of the free plan, what it really allows, and when to upgrade.",
    intro:
      "The systeme.io free plan gives access to the main features in limited quantities. It needs no credit card. Here are its limits, taken from the official pricing page on October 4, 2026.",
    steps: [
      {
        title: "Contacts and emails",
        text: "Up to 2,000 contacts. Unlimited email sending and unlimited newsletters. On the other hand: 1 email campaign (automated sequence), 1 tag, 1 automation rule and 1 workflow.",
      },
      {
        title: "Pages and websites",
        text: "3 sales funnels with 15 steps in total, 1 A/B test, 1 custom domain, 1 website (2 languages per site), 1 blog with unlimited posts, 1 link-in-bio page. File storage is unlimited.",
      },
      {
        title: "Selling",
        text: "0% transaction fees taken by systeme.io (your payment provider, such as Stripe or PayPal, keeps its own fees). 1 upsell, 1 order bump, 1 coupon, unlimited physical products with up to 50 variants.",
      },
      {
        title: "Courses and the rest",
        text: "1 course with up to 500 students, 1 community with unlimited members, 1 calendar event, your own affiliate program, and 24/7 email support. No automated webinars, no kickstart coaching session, no free migration.",
      },
      {
        title: "What stays visible on the free plan",
        text: "Your emails carry a “Sent with systeme.io” link at the bottom, which is a systeme.io affiliate link. According to the help center, it cannot be removed on the free plan: you need a paid plan (Startup, Webinar or Unlimited).",
      },
      {
        title: "When to upgrade",
        text: "The Startup plan ($17 per month on October 4, 2026) becomes useful when you go over 2,000 contacts, want several email sequences or more than one automation rule, or a second course. The pricing guide covers all four plans.",
      },
    ],
    pitfalls: [
      "Forgetting that only 1 tag is included: keep your contacts simple while on the free plan.",
      "Building three funnels “just to try” and then being unable to create a real one: delete drafts you don't need.",
    ],
  },
  {
    slug: "combien-coute-systeme-io",
    localSlug: "systeme-io-pricing",
    question: "How much does systeme.io cost in 2026?",
    summary: "The 4 plans, their monthly and annual prices, their limits, and how to change or cancel.",
    intro:
      "systeme.io has four plans: Free, Startup, Webinar and Unlimited, plus a custom “For teams” offer. The prices below were taken from the official pricing page in US dollars on October 4, 2026. They can change: always check the pricing page on the day.",
    steps: [
      {
        title: "Monthly prices",
        text: "Free: $0. Startup: $17 per month. Webinar: $47 per month. Unlimited: $97 per month.",
      },
      {
        title: "Annual prices",
        text: "With annual billing, the page shows $170 per year for Startup, $470 for Webinar and $970 for Unlimited, the equivalent of 2 months free compared with monthly billing.",
      },
      {
        title: "What each plan changes",
        text: "Startup: 5,000 contacts, 10 funnels, 10 campaigns, 10 automation rules, 3 domains, 5 courses, unlimited students. Webinar: 10,000 contacts, 50 funnels, 100 campaigns and rules, 10 domains, 20 courses, and up to 10 automated webinars. Unlimited: unlimited contacts, funnels, rules, domains and courses, plus early access to new features.",
      },
      {
        title: "What is the same everywhere",
        text: "Unlimited email sending, unlimited storage, 0% transaction fees on the systeme.io side, an affiliate program, unlimited assistant accounts and sub-accounts, 24/7 email support. The kickstart coaching session is included from Startup up.",
      },
      {
        title: "Choose based on your stage",
        text: "Just starting: the Free plan. Over 2,000 contacts or several sequences: Startup. Automated webinars: Webinar (the first plan that includes them). A large list or several projects: Unlimited.",
      },
      {
        title: "Change or cancel whenever you want",
        text: "To cancel, the help center says: profile picture, Settings, manage your subscriptions, the three dots next to the subscription, then cancel. Cancellation takes effect on the next payment date. The pricing page FAQ says the account then goes back to the free plan and contacts over the limit are archived, not deleted.",
      },
    ],
    pitfalls: [
      "Comparing an annual price with a monthly price: check whether the monthly/annual billing switch is on.",
      "Taking the Webinar plan “just in case”: if you don't run automated webinars, Startup is often enough.",
    ],
  },
  {
    slug: "creer-son-compte-systeme-io",
    localSlug: "create-a-systeme-io-account",
    question: "How to create a systeme.io account and set it up properly?",
    summary: "The free sign-up, then the settings to do before building your first page.",
    intro:
      "Signing up for the free plan needs no credit card. Before building your pages, a few settings prevent bad surprises: emails that don't arrive, payments that can't go through, an unprofessional address.",
    steps: [
      {
        title: "Open your free account",
        text: "On systeme.io, click the button to start for free and create your account with your email address. The pricing page says no credit card is required to get started.",
      },
      {
        title: "Find the settings",
        text: "Almost every account setting is in the same place: click your profile picture, then Settings. The left-hand menu gives access to emails, custom domains, payment gateways, subscriptions and the affiliate program.",
      },
      {
        title: "Confirm your sender address",
        text: "In Settings, then Emails, add your sender address and click the confirmation link you receive by email. Its status changes to verified. Ideally use an address on your own domain (hello@yoursite.com).",
      },
      {
        title: "Authenticate your domain for emails",
        text: "Still in Settings, then Emails, Domains section, add your domain (without “www”): systeme.io generates three CNAME records and a DMARC record to copy at your domain host. The official help center says this authentication is required to send emails from systeme.io, and that it can't be done with a Gmail or Yahoo address.",
      },
      {
        title: "Connect a payment method if you sell",
        text: "In Settings, then Payment gateways, click Connect next to Stripe or PayPal and follow the steps. You can then enable these payment methods in each funnel.",
      },
      {
        title: "Build a first page to check everything works",
        text: "Create a funnel to build an audience, sign up with your own address and check that the contact appears and the welcome email arrives. The opt-in page guide covers every step.",
      },
    ],
    pitfalls: [
      "Sending your first emails from a Gmail address: domain authentication is impossible and deliverability suffers.",
      "Building a full sales funnel before connecting Stripe or PayPal: the order form won't be able to take payments.",
    ],
  },
  {
    slug: "creer-un-tunnel-de-vente-systeme-io",
    localSlug: "create-a-sales-funnel-systeme-io",
    question: "How to create a sales funnel with systeme.io?",
    summary: "The 4 funnel types, the page order and how to link the pages together.",
    intro:
      "A sales funnel is a series of pages that leads the visitor to a single action: sign up, then buy. In systeme.io it replaces both a landing page tool and a checkout page.",
    steps: [
      {
        title: "Create the funnel",
        text: "Go to the Sites tab, click Sales funnels, then Create. Enter a name, select the domain and choose the currency.",
      },
      {
        title: "Pick the right type",
        text: "Build an Audience creates an opt-in page and a thank-you page: ideal for collecting emails. Sell creates an order form and a thank-you page. Custom starts from a blank canvas. Run an evergreen webinar creates a 3-page funnel, only on the Webinar and Unlimited plans.",
      },
      {
        title: "Add the missing pages",
        text: "In the funnel's left-hand menu, click Add step, enter a name, choose the type (opt-in page, sales page, order form, upsell, downsell, thank-you page…), then a template. Click Edit page to customize it.",
      },
      {
        title: "Keep the pages in order",
        text: "The typical order is: opt-in page, sales page, order form, upsell, downsell, thank-you page. The official help center says the steps must follow this order for the funnel to work.",
      },
      {
        title: "Link the pages together",
        text: "On the opt-in page, set the button action to Submit form and the redirection to the next step. On the sales page, set the button action to Open URL with the order form's address. After payment, the upsell, downsell and thank-you pages follow automatically.",
      },
      {
        title: "Turn on payments and test",
        text: "In the funnel settings, tick Stripe and/or PayPal, then Save (the accounts must be connected first). Then go through the whole funnel yourself, as a customer would.",
      },
    ],
    pitfalls: [
      "Placing the upsell before the order form: it must come right after it.",
      "Forgetting to turn on Stripe or PayPal in the funnel settings, even when the accounts are connected.",
      "On the free plan, forgetting the limit of 3 funnels and 15 steps in total.",
    ],
  },
  {
    slug: "creer-une-page-de-capture-systeme-io",
    localSlug: "create-an-opt-in-page-systeme-io",
    question: "How to create an opt-in page (landing page) with systeme.io?",
    summary: "A page that collects emails, with the welcome email sent automatically.",
    intro:
      "An opt-in page (or landing page) has one goal: get the visitor's email address in exchange for something useful. With systeme.io, the page, the contact list and the welcome email live in the same tool.",
    steps: [
      {
        title: "Prepare your free offer",
        text: "Before opening the tool, decide what the visitor gets: a PDF guide, a checklist, a video, a discount. Write a headline that promises the result (“Get 10 dinner ideas ready in 20 minutes”) rather than describing your product.",
      },
      {
        title: "Create a Build an Audience funnel",
        text: "In Sites, Sales funnels, click Create and choose Build an Audience. systeme.io creates an opt-in page and a thank-you page. In an existing funnel, use Add step with the opt-in page type.",
      },
      {
        title: "Choose a template and edit the page",
        text: "Select a template, then click Edit page. Replace the headline, text and image. Keep the text short: headline, three benefits, the form.",
      },
      {
        title: "Set up the form",
        text: "Ask for as little as possible: often the email alone is enough. Set the button action to Submit form and the redirection to the next step, so the subscriber lands on the thank-you page.",
      },
      {
        title: "Send the welcome email automatically",
        text: "In Automations, then Rules, click Create. As the trigger, choose the opt-in on your page. As the action, choose Send email, write the email with the link to your freebie, then Save rule.",
      },
      {
        title: "Test with your own address",
        text: "Open the page on your phone, sign up, check that you land on the thank-you page, that the contact appears in your contacts and that the welcome email arrives.",
      },
    ],
    pitfalls: [
      "Asking for first name, last name, phone and email: every extra field loses subscribers.",
      "Promising a freebie and forgetting to send it: test the welcome email before sharing the page.",
    ],
  },
  {
    slug: "connecter-son-nom-de-domaine-a-systeme-io",
    localSlug: "connect-your-domain-to-systeme-io",
    question: "How to connect your domain name to systeme.io?",
    summary: "The two CNAME records to create at your domain host, the redirect, then the homepage.",
    intro:
      "With your own domain name, your pages look more trustworthy. The free plan includes 1 custom domain (3 on Startup, 10 on Webinar, unlimited on Unlimited, as of October 4, 2026).",
    steps: [
      {
        title: "Add the domain in systeme.io",
        text: "Click your profile picture, then Settings, Custom Domain and Add domain. Enter it starting with www (www.yoursite.com) and click Save.",
      },
      {
        title: "Copy the two CNAME records shown",
        text: "A popup shows two CNAME records: one for www and one to validate the certificate. The values are specific to your account: copy them exactly.",
      },
      {
        title: "Create them at your domain host",
        text: "In your domain's DNS zone (GoDaddy, Namecheap, Cloudflare, IONOS…), create two CNAME records with these names and values. You can check propagation on dnschecker.org by entering the full name.",
      },
      {
        title: "Redirect the domain without www",
        text: "With most hosts, create a redirect from yoursite.com to www.yoursite.com. For Hostinger, the help center says to create an ALIAS record at the root pointing to the same target as the www CNAME instead.",
      },
      {
        title: "Wait, then choose the homepage",
        text: "Propagation can take 24 to 48 hours. Then set what appears at the main address: in the settings of a blog, a website or a funnel page, leave the URL path field empty.",
      },
    ],
    pitfalls: [
      "Connecting a domain that already runs another website: according to the help center, the old site will stop working.",
      "Getting the trailing dot wrong in CNAME values (some hosts need it, others refuse it): follow your host's guide.",
    ],
  },
  {
    slug: "vendre-un-produit-numerique-avec-systeme-io",
    localSlug: "sell-a-digital-product-systeme-io",
    question: "How to sell a digital product (ebook, PDF, access) with systeme.io?",
    summary: "The order form, the price, then automatic delivery of the file after purchase.",
    intro:
      "systeme.io takes the payment and delivers the product on its own: access to a course, to a community, or a file sent by email. It replaces a digital product store, with no transaction fees taken by systeme.io.",
    steps: [
      {
        title: "Connect a payment method",
        text: "First, connect Stripe or PayPal in Settings, Payment Gateways. Without it, the order form can't take any payment.",
      },
      {
        title: "Create a Sell funnel",
        text: "In Sites, Sales funnels, Create, choose Sell and the currency. You get an order form and a thank-you page. Add a sales page before the order form if your offer needs explaining.",
      },
      {
        title: "Set up a digital product",
        text: "Open the order form, go to Choose offer type and select Digital Product. Click + to create the product, give it a name, then add the resource delivered: a course, a course bundle, a community, a calendar event or a tag.",
      },
      {
        title: "Set the price",
        text: "Add a price plan to the offer. According to the official help center, there are three types: one-time payment, subscription (with an optional trial) and payment plan. The product can't be saved without a price plan.",
      },
      {
        title: "Deliver a file (ebook, PDF)",
        text: "For a file, add a tag as the resource, then create an automation rule: trigger on a new sale, action Send email, with the file attached (5 MB max) or a download link. You can also put the download link on the thank-you page.",
      },
      {
        title: "Make a test purchase",
        text: "Place an order yourself and check the payment, the thank-you page and the delivery of the file or access. The help center describes a way to make a test purchase.",
      },
    ],
    pitfalls: [
      "Attaching a file over 5 MB: compress it or send a download link.",
      "Leaving out the Email and First name fields on the order form: Stripe requires them.",
    ],
  },
  {
    slug: "creer-une-sequence-d-e-mails-automatique-systeme-io",
    localSlug: "create-an-email-sequence-systeme-io",
    question: "How to create an automated email sequence with systeme.io?",
    summary: "A series of emails sent automatically after sign-up, with the delays you choose.",
    intro:
      "In systeme.io, an automated sequence is called a “campaign”: a series of emails sent in order, with a delay between each one. It is the ideal tool to welcome a new subscriber, then introduce your offer. The free plan allows 1 campaign (10 on Startup).",
    steps: [
      {
        title: "Create the campaign",
        text: "Go to Emails, then Campaigns, and click Create. Enter a clear name (for example “Welcome – free guide”), a sender address that is already confirmed, and a description, then Save.",
      },
      {
        title: "Write the emails",
        text: "Open the campaign and click Create for each email. A simple structure: day 0, the promised freebie; day 2, a useful tip; day 4, a story or a customer case; day 6, your offer.",
      },
      {
        title: "Set the delays",
        text: "For each email, choose the email it follows and the delay after it, and if needed the time and days of sending. An email is only sent once all its conditions are met, so keep it simple.",
      },
      {
        title: "Activate each email",
        text: "In the campaign list, click the three dots next to the email, then Activate. An email that isn't activated stays out of the sequence.",
      },
      {
        title: "Add contacts automatically",
        text: "Create an automation rule with your opt-in page sign-up as the trigger and a subscribe-to-campaign action. When importing contacts (CSV), you can also choose a campaign.",
      },
    ],
    pitfalls: [
      "Adding an email at the start of a sequence that is already running: contacts past that step won't receive it.",
      "Never re-reading the sequence: sign up yourself to receive each email like a real contact.",
    ],
  },
  {
    slug: "creer-et-vendre-une-formation-en-ligne-systeme-io",
    localSlug: "create-and-sell-an-online-course-systeme-io",
    question: "How to create and sell an online course with systeme.io?",
    summary: "Modules and lectures, access type, then the sale with automatic student access.",
    intro:
      "systeme.io hosts your course (videos, text, files) in a members' area and gives access automatically after payment. It replaces a separate course platform. The free plan allows 1 course and 500 students; from Startup up, students are unlimited (October 4, 2026).",
    steps: [
      {
        title: "Create the course",
        text: "Go to Assets, then Courses, and click Add a new course. Enter the name, domain and URL path, and choose a theme for the members' area, then Save.",
      },
      {
        title: "Add the modules",
        text: "Click Add module, enter a name, then Save. A module groups several lectures on the same topic.",
      },
      {
        title: "Add the lectures",
        text: "Inside a module, click Add lecture. Enter the name, an optional delay after the previous lecture (for drip access), and enable comments if you want discussion, then Save. Add the content, then activate the modules and lectures.",
      },
      {
        title: "Put the course on sale",
        text: "In a Sell funnel, on the order form, choose Digital Product, create the product with +, then add the course as the resource. Add a price plan: without one, the product can't be saved.",
      },
      {
        title: "Choose the access type",
        text: "There are four types: full access (everything, right away), partial access (only some modules), drip (lectures unlock according to the delays) and partial access with drip. You can also set an unlock date and, with full access, an expiry delay in days.",
      },
      {
        title: "Check how a student arrives",
        text: "After purchase, the student automatically receives an email to set a password. Make a test purchase: the help center says this access email can't be customized, so read it to know what your students will see.",
      },
    ],
    pitfalls: [
      "Forgetting to activate the modules and lectures: students see nothing.",
      "Thinking a lecture's delay counts from the start: it counts from the previous lecture.",
    ],
  },
  {
    slug: "systeme-io-ou-leadpages",
    localSlug: "systeme-io-vs-leadpages",
    question: "systeme.io or Leadpages: which one for your landing pages?",
    summary: "Official prices, what is included, and when each one is the better choice.",
    intro:
      "Leadpages is a tool specialized in landing pages. systeme.io also builds pages, but adds emails, payments, courses and affiliates. So the real question is: do you only need pages, or everything else too?",
    steps: [
      {
        title: "Compare the prices",
        text: "Taken from the official pages on October 4, 2026: Leadpages Grow $99/month ($79 billed annually), Optimize $199 ($159), Scale $399 ($319), with a 7-day trial that requires a credit card. systeme.io: free plan with no card, then Startup $17/month, Webinar $47, Unlimited $97.",
      },
      {
        title: "Look at what is included",
        text: "Every systeme.io plan includes unlimited email sending, an order form with no transaction fees on the systeme.io side, and an affiliate program. With Leadpages, you usually connect a separate email tool and payment tool, each with its own subscription.",
      },
      {
        title: "What Leadpages does well",
        text: "A tool focused on one job: a library of page templates, A/B testing (from the Grow plan according to its pricing page) and many integrations. If you already have an email tool and a store you like, it can slot into your existing setup.",
      },
      {
        title: "What systeme.io does better",
        text: "Everything is connected without integrations: the opt-in page feeds the list, the list gets the email sequence, the order form gives access to the course. To start, the free plan allows 3 funnels, 2,000 contacts and 1 custom domain.",
      },
      {
        title: "Decide",
        text: "Choose systeme.io if you are starting out, sell digital products or want fewer subscriptions. Choose Leadpages if you only want landing pages and the rest of your tools are already in place.",
      },
    ],
    pitfalls: [
      "Comparing only the price of the pages: also add the email tool and payment tool you'd need alongside Leadpages.",
      "Forgetting that prices can vary with country and taxes.",
    ],
  },
  {
    slug: "systeme-io-ou-shopify",
    localSlug: "systeme-io-vs-shopify",
    question: "systeme.io or Shopify: which one to sell online?",
    summary: "Digital products or a physical catalog: the prices, each one's strengths, and how to choose.",
    intro:
      "Shopify is an online store platform, built to sell many physical products. systeme.io is built to sell digital products, courses and coaching with funnels and emails, and can also sell a few physical products.",
    steps: [
      {
        title: "Compare the prices",
        text: "Taken from shopify.com on October 4, 2026: Basic $39/month ($29 billed annually), Grow $105 ($79), Advanced $399 ($299), Plus from $2,300. A 3-day trial, then $1/month for 3 months. systeme.io: free, then $17, $47 or $97/month. Shopify prices vary by country.",
      },
      {
        title: "Look at the fees on sales",
        text: "systeme.io takes no transaction fees (0% on every plan): only Stripe or PayPal fees apply. Shopify lists transaction fees for third-party payment providers (2% on Basic) if you don't use Shopify Payments.",
      },
      {
        title: "What Shopify does better",
        text: "Physical product catalogs: store themes, advanced shipping management, apps, selling on several channels. The systeme.io help center states that systeme.io does not handle shipping or fulfillment.",
      },
      {
        title: "What systeme.io does better",
        text: "Selling a digital product or a course with a complete funnel: opt-in page, email sequence, order form, upsell, automatic course access, affiliate program. On Shopify, this usually takes extra apps.",
      },
      {
        title: "Decide",
        text: "Choose Shopify if your business is a store with many physical products to ship. Choose systeme.io if you mostly sell digital products (a course, an ebook, coaching) or a few physical products, and want to build an email list.",
      },
    ],
    pitfalls: [
      "Choosing Shopify to sell a single course: you pay for a full store and apps for something systeme.io includes.",
      "Choosing systeme.io for a catalog of hundreds of products with complex shipping: it's not its strength.",
    ],
  },
];
