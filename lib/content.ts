export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const site = {
  name: "Christoffert Moussounda",
  url: "https://chrismoussounda.vercel.app",
  short: "C. Moussounda",
  email: "christmoussounda@gmail.com",
  github: "https://github.com/chrismoussounda",
  linkedin: "https://www.linkedin.com/in/chrismoussounda/",
  city: "Brazzaville",
  timeZone: "Africa/Brazzaville",
};

type L = Record<Locale, string>;

/* ---------- In production: professional work ---------- */
export type Story = {
  id: string;
  name: string;
  client: L;
  kicker: L;
  headline: L;
  body: L;
  role: L;
  stack: string[];
  period: string;
  live: boolean;
};

export const production: Story[] = [
  {
    id: "minjus",
    name: "MINJUS",
    client: { fr: "Ministère de la Justice", en: "Ministry of Justice" },
    kicker: { fr: "Justice · Service public", en: "Justice · Public service" },
    headline: {
      fr: "Casier judiciaire et certificat de nationalité : la demande se fait en ligne",
      en: "Criminal record and nationality certificate requests move online",
    },
    body: {
      fr: "Les citoyens déposent, paient et suivent leur demande sans faire la queue au tribunal. Les greffiers traitent les dossiers avec leurs propres outils. La plateforme comprend le portail citoyen, l'espace d'administration, une borne en libre-service et un guichet en bureau de poste ; l'identité est vérifiée par un code à usage unique.",
      en: "Citizens apply, pay and track their request without queuing at the courthouse. Clerks handle the files in their own tools. The platform includes the citizen portal, an admin area, a self-service kiosk and a post-office counter, and identity is checked with a one-time code.",
    },
    role: { fr: "Développeur full-stack", en: "Full-stack developer" },
    stack: ["Django", "PostgreSQL", "TypeScript"],
    period: "2025 – 2026",
    live: true,
  },
  {
    id: "camu",
    name: "CAMU",
    client: {
      fr: "Caisse d'Assurance Maladie Universelle",
      en: "Universal Health Insurance Fund",
    },
    kicker: { fr: "Santé · Assurance maladie", en: "Health · Insurance" },
    headline: {
      fr: "L'assurance maladie universelle, du dossier de l'assuré à la prestation de santé",
      en: "Universal health insurance, from member records to health benefits",
    },
    body: {
      fr: "Adaptation de la plateforme aux règles de la CAMU : assurés, souscripteurs, contrats, prestations de santé et API, côté serveur comme côté interface.",
      en: "Adapting the platform to CAMU's rules: members, policyholders, contracts, health benefits and the API, on both the back end and the front end.",
    },
    role: { fr: "Développeur full-stack", en: "Full-stack developer" },
    stack: ["Python", "Django", "React"],
    period: "2025 – 2026",
    live: true,
  },
  {
    id: "fhn",
    name: "Horizons Nouveaux",
    client: { fr: "Fondation Horizons Nouveaux", en: "Fondation Horizons Nouveaux" },
    kicker: { fr: "Social · Handicap", en: "Social · Disability" },
    headline: {
      fr: "Une demande d'aide liée au handicap, suivie du dépôt à la décision",
      en: "Disability support applications, tracked from filing to decision",
    },
    body: {
      fr: "Dépôt, évaluation, visite médicale, décision, suivi : tout le parcours d'une demande d'aide, pour les personnes en situation de handicap intellectuel ou visuel.",
      en: "Filing, assessment, medical visit, decision, follow-up: the whole journey of a support application, for people with intellectual or visual disabilities.",
    },
    role: { fr: "Lead back-end", en: "Back-end lead" },
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    period: "2025 – 2026",
    live: false,
  },
  {
    id: "nsia",
    name: "NSIA Digital",
    client: { fr: "NSIA Assurances", en: "NSIA Insurance" },
    kicker: { fr: "Assurance · Back-office", en: "Insurance · Back office" },
    headline: { fr: "Le back-office d'un assureur", en: "An insurer's back office" },
    body: {
      fr: "Agents, clients, souscriptions, produits et paramétrage des véhicules, au sein d'une équipe de quatre développeurs.",
      en: "Agents, clients, policies, products and vehicle settings, as part of a team of four developers.",
    },
    role: { fr: "Développeur front-end", en: "Front-end developer" },
    stack: ["TypeScript", "React"],
    period: "2026",
    live: true,
  },
  {
    id: "smscongo",
    name: "SMS Congo",
    client: { fr: "Plateforme SMS", en: "SMS platform" },
    kicker: { fr: "Télécom · SaaS", en: "Telecom · SaaS" },
    headline: {
      fr: "Envoyer, cibler et suivre ses campagnes SMS",
      en: "Send, target and track SMS campaigns",
    },
    body: {
      fr: "Envoi de SMS, gestion des contacts, campagnes et accusés de réception.",
      en: "Sending SMS, managing contacts, running campaigns and tracking delivery.",
    },
    role: { fr: "Développeur full-stack", en: "Full-stack developer" },
    stack: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
    period: "2026",
    live: false,
  },
];

/* ---------- Archives: earlier work ---------- */
export const archives: { name: string; text: L; role: L; link?: string }[] = [
  {
    name: "Maouene Pay",
    text: {
      fr: "Fintech congolaise : API, back-office et site vitrine.",
      en: "Congolese fintech: API, back office and marketing site.",
    },
    role: { fr: "Freelance", en: "Freelance" },
    link: "https://maouenepay-website.vercel.app",
  },
  {
    name: "Qwisti",
    text: { fr: "Outil de test d'applications.", en: "A tool for testing applications." },
    role: { fr: "Lead full-stack · Ginov", en: "Full-stack lead · Ginov" },
  },
  {
    name: "Daxium Connect",
    text: {
      fr: "Connecteurs reliant Daxium Air aux systèmes des clients.",
      en: "Middleware connecting Daxium Air to clients' systems.",
    },
    role: { fr: "Ginov", en: "Ginov" },
  },
  {
    name: "Copileo",
    text: {
      fr: "Gestion de projet pour les comités de pilotage.",
      en: "Project management for steering committees.",
    },
    role: { fr: "Lead back-end · Ginov", en: "Back-end lead · Ginov" },
  },
];

/* ---------- Career ---------- */
export const career: { when: string; org: string; role: L }[] = [
  { when: "2025 —", org: "Akieni", role: { fr: "Développeur full-stack", en: "Full-stack developer" } },
  { when: "2025", org: "Ginov", role: { fr: "Tech lead", en: "Tech lead" } },
  { when: "2024 – 2025", org: "Maouene Pay", role: { fr: "Freelance", en: "Freelance" } },
  { when: "2022 – 2024", org: "Ginov", role: { fr: "Développeur full-stack", en: "Full-stack developer" } },
];

/* ---------- Lab: open source ---------- */
export type DiagramKind = "sync" | "uptime" | "ledger" | "callback";

export const lab: {
  id: string;
  name: string;
  kind: DiagramKind;
  text: L;
  stack: string;
  live?: string;
  code: string;
  status: L;
}[] = [
  {
    id: "fieldsync",
    name: "FieldSync",
    kind: "sync",
    text: {
      fr: "Des bons d'intervention utilisables hors ligne, grâce à un moteur de synchronisation fait maison.",
      en: "Work orders that keep working offline, on a sync engine written from scratch.",
    },
    stack: "React · Fastify · PostgreSQL",
    live: "https://fieldsync-iota.vercel.app",
    code: "https://github.com/chrismoussounda/fieldsync",
    status: { fr: "En ligne", en: "Live" },
  },
  {
    id: "status-pulse",
    name: "StatusPulse",
    kind: "uptime",
    text: {
      fr: "Surveillance de la disponibilité et pages de statut publiques.",
      en: "Uptime monitoring and public status pages.",
    },
    stack: "Next.js · Prisma · PostgreSQL",
    live: "https://status-pulse-eta.vercel.app/en/status/demo",
    code: "https://github.com/chrismoussounda/status-pulse",
    status: { fr: "En ligne", en: "Live" },
  },
  {
    id: "tallypay",
    name: "TallyPay",
    kind: "ledger",
    text: {
      fr: "Registre de paiements en partie double et passerelle de webhooks signés.",
      en: "Double-entry payment ledger and signed-webhook gateway.",
    },
    stack: "Django · HTMX · PostgreSQL",
    code: "https://github.com/chrismoussounda/tallypay",
    status: { fr: "En cours", en: "In progress" },
  },
  {
    id: "mbongo",
    name: "Mbongo",
    kind: "callback",
    text: {
      fr: "Un faux opérateur MTN MoMo / Airtel Money qui tombe en panne exprès, pour mettre vos intégrations à l'épreuve.",
      en: "A fake MTN MoMo / Airtel Money operator that fails on purpose, to test your integrations.",
    },
    stack: "Go · SQLite · Docker",
    code: "https://github.com/chrismoussounda/mbongo",
    status: { fr: "En cours", en: "In progress" },
  },
];

/* ---------- Page copy ---------- */
export const dict = {
  fr: {
    meta: {
      title: "Christoffert Moussounda · Développeur Full-Stack",
      description:
        "Développeur full-stack à Brazzaville. Plateformes web, mobiles et IA pour l'État et les entreprises. Je travaille en français comme en anglais.",
      keywords: ["développeur full-stack", "Brazzaville", "Congo", "freelance", "React", "Next.js", "Node.js", "Django", "NestJS", "applications web", "applications mobiles", "IA"],
      ogAlt: "Christoffert Moussounda, développeur full-stack à Brazzaville",
    },
    nav: { work: "Travaux", career: "Parcours", lab: "Labo", contact: "Contact" },
    theme: { light: "Jour", dark: "Nuit", label: "Changer de thème (jour/nuit)" },
    lang: { other: "EN", label: "Read in English" },
    sign: {
      tag: "Brazzaville · Web, mobile & IA",
      title: ["Développeur", "Full-Stack"],
      bubble: "« Le réseau peut tomber. L'application, non. »",
      menu: ["Web", "Mobile", "IA", "Paiements", "Hors ligne"],
    },
    intro: "Je développe des applications qui tiennent la route en production : justice, santé, assurance. Je travaille de la base de données à l'interface, à distance, en français comme en anglais.",
    cta: { mail: "M'écrire", work: "Voir les travaux" },
    card: {
      status: ["Statut", "Disponible"],
      base: ["Atelier", "Brazzaville, Congo"],
      langs: ["Langues", "FR · EN"],
      price: ["Tarif", "Sur devis"],
    },
    figures: [
      ["5", "plateformes pour l'État et les entreprises"],
      ["4 ans", "d'expérience, dont un poste de tech lead"],
      ["FR · EN", "missions à distance"],
    ],
    story: {
      title: "L'histoire",
      body: [
        "J'ai appris à développer des logiciels là où la connexion coupe en pleine requête et où l'on paie surtout par mobile money.",
        "Entré chez Ginov en 2022 comme développeur full-stack, j'y suis devenu tech lead. Depuis 2025, chez Akieni, je travaille sur des plateformes nationales : les démarches en ligne du ministère de la Justice, l'assurance maladie universelle.",
        "J'aime mener une fonctionnalité de la base de données jusqu'au dernier pixel. Pour moi, rien n'est fini tant que ça ne marche pas pour ceux qui s'en servent.",
      ],
    },
    services: {
      title: "Au menu",
      items: [
        ["Web & SaaS", "React, Next.js, Node.js, NestJS, Django"],
        ["Mobile", "React Native, pour les téléphones de tous les jours"],
        ["IA", "recherche, assistants, voix"],
        ["Paiements", "mobile money, webhooks"],
        ["Reprise de projet", "audit et remise d'aplomb"],
      ],
    },
    production: { title: "Les travaux", note: "Plateformes pour l'État et les entreprises", role: "Rôle :", client: "Client", live: "En production", building: "En développement" },
    career: { title: "Parcours", note: "" },
    archives: { title: "Avant ça", note: "" },
    lab: { title: "Le labo", note: "Projets open source : le code est en accès libre", live: "Démo", code: "Code" },
    contact: { title: "Un projet ? On en parle.", text: "Décrivez-le en quelques lignes, je vous réponds sous 24 heures." },
    footer: "Peint à la main à Brazzaville par Christoffert Moussounda.",
  },
  en: {
    meta: {
      title: "Christoffert Moussounda · Full-Stack Developer",
      description:
        "Full-stack developer in Brazzaville. Web, mobile and AI platforms for government and business. I work in French and English.",
      keywords: ["full-stack developer", "Brazzaville", "Congo", "freelance", "remote", "React", "Next.js", "Node.js", "Django", "NestJS", "web apps", "mobile apps", "AI"],
      ogAlt: "Christoffert Moussounda, full-stack developer in Brazzaville",
    },
    nav: { work: "Work", career: "Career", lab: "Lab", contact: "Contact" },
    theme: { light: "Day", dark: "Night", label: "Switch theme (day/night)" },
    lang: { other: "FR", label: "Lire en français" },
    sign: {
      tag: "Brazzaville · Web, mobile & AI",
      title: ["Full-Stack", "Developer"],
      bubble: "“The network can drop. The app can't.”",
      menu: ["Web", "Mobile", "AI", "Payments", "Offline"],
    },
    intro: "I build apps that hold up in production: justice, health, insurance. I work from the database to the interface, remotely, in French or English.",
    cta: { mail: "Send a message", work: "See the work" },
    card: {
      status: ["Status", "Available"],
      base: ["Workshop", "Brazzaville, Congo"],
      langs: ["Languages", "FR · EN"],
      price: ["Rate", "Quote on request"],
    },
    figures: [
      ["5", "platforms for government and business"],
      ["4 yrs", "of experience, including as tech lead"],
      ["FR · EN", "remote projects"],
    ],
    story: {
      title: "The story",
      body: [
        "I learned to build software where the connection drops mid-request and most people pay with mobile money.",
        "I joined Ginov as a full-stack developer in 2022 and went on to become its tech lead. Since 2025, at Akieni, I have been working on national platforms: online services for the Ministry of Justice, universal health insurance.",
        "I like owning a feature from the database to the last pixel, and nothing is done until it works for the people using it.",
      ],
    },
    services: {
      title: "On the menu",
      items: [
        ["Web & SaaS", "React, Next.js, Node.js, NestJS, Django"],
        ["Mobile", "React Native, for everyday phones"],
        ["AI", "search, assistants, voice"],
        ["Payments", "mobile money, webhooks"],
        ["Project rescue", "audit and get it back on track"],
      ],
    },
    production: { title: "The work", note: "Platforms for government and business", role: "Role:", client: "Client", live: "In production", building: "In development" },
    career: { title: "Career", note: "" },
    archives: { title: "Before that", note: "" },
    lab: { title: "The lab", note: "Open-source projects: code you can read", live: "Demo", code: "Code" },
    contact: { title: "Got a project? Let's talk.", text: "Tell me about it in a few lines and I'll reply within 24 hours." },
    footer: "Hand-painted in Brazzaville by Christoffert Moussounda.",
  },
} satisfies Record<Locale, unknown>;
