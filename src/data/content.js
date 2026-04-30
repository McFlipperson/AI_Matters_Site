// ============================================================
// AI MATTERS — CONTENT DATA
// Single source of truth. Nova edits this file only.
// Never hardcode strings in components.
// ============================================================

export const nav = {
  logo: {
    ai: "AI",
    matters: "MATTERS",
  },
  links: [
    { label: "WORK",     path: "/work" },
    { label: "SERVICES", path: "/services" },
    { label: "ABOUT",    path: "/about" },
    { label: "CONTACT",  path: "/contact" },
  ],
};

export const footer = {
  brand: {
    ai: "AI",
    matters: "MATTERS",
    tagline: "We put you in the answer.",
    location: "Bohol \u00b7 Cebu \u00b7 Philippines",
  },
  navTitle: "NAVIGATION",
  navLinks: [
    { label: "Home",     path: "/" },
    { label: "Services", path: "/services" },
    { label: "Work",     path: "/work" },
    { label: "About",    path: "/about" },
    { label: "Contact",  path: "/contact" },
  ],
  contactTitle: "CONTACT",
  whatsapp: {
    display: "wa.me/63XXXXXXXXXX",
    href: "https://wa.me/63XXXXXXXXXX",
  },
  email: {
    display: "hello@aimatters.ph",
    href: "mailto:hello@aimatters.ph",
  },
  legal: "\u00a9 2026 AI MATTERS \u00b7 ALL RIGHTS RESERVED",
  legalRight: "BOHOL \u00b7 CEBU \u00b7 PHILIPPINES",
};

export const home = {
  hero: {
    location: "BOHOL \u00b7 CEBU \u00b7 PHILIPPINES",
    lines: [
      { text: "RIGHT NOW SOMEONE",       yellow: false },
      { text: "IS ASKING AI",            yellow: false },
      { text: "WHERE TO FIND",           yellow: false },
      { text: "A BUSINESS LIKE YOURS.",  yellow: true },
    ],
    sub: "Are you in the answer? If you don't know,\nyou probably aren't.",
    ctaPrimary: {
      label: "FIND OUT \u2192",
      path: "/contact",
    },
    ctaSecondary: {
      label: "SEE HOW IT WORKS \u2192",
      anchor: "#how-it-works",
    },
  },

  proof: {
    sectionNumber: "01",
    title: "WHAT WE DO",
    intro: "AI search is already where decisions are made. ChatGPT. Perplexity. Google AI Overviews. Meta AI.\n\nWhen someone asks for a recommendation, AI doesn\u2019t show a list \u2014 it gives an answer.",
    blocks: [
      {
        number: "TOP 3",
        colour: "yellow",
        label: "That\u2019s usually all it names",
        sub: "If you\u2019re not there, you don\u2019t exist to that customer.",
      },
    ],
    outro: "Right now, most businesses in Bohol and Cebu are either not being cited at all \u2014 or AI is sending customers to Booking.com or Agoda instead of their own site.\n\nWe fix that.",
  },

  howItWorks: {
    sectionNumber: "02",
    title: "THE SYSTEM",
    steps: [
      {
        num: "01",
        title: "WE BUILD YOUR OWNED VISIBILITY",
        desc: "AI needs structured, readable signals to recognise your business. Without them, you are invisible or misrepresented.",
      },
      {
        num: "02",
        title: "WE GET YOU CITED BY AI",
        desc: "ChatGPT, Perplexity, Google AI \u2014 these systems decide which businesses to recommend. We position you to be one of them.",
      },
      {
        num: "03",
        title: "CUSTOMERS FIND YOU \u2014 NOT JUST PLATFORMS",
        desc: "Customers are directed toward your business \u2014 not just platforms. When AI cites your website, bookings can happen direct, without a commission layer.",
      },
      {
        num: "04",
        title: "YOU KEEP THE RELATIONSHIP",
        desc: "No middleman controlling the interaction. No platform owning the customer.",
      },
    ],
  },

  servicesTeaser: {
    sectionNumber: "03",
    title: "WHAT\u2019S INCLUDED",
    cards: [
      {
        title: "AI SEARCH VISIBILITY",
        desc: "Structured signals, AI-readable content, and cross-platform authority that allows your business to be cited in AI answers.",
      },
      {
        title: "WEBSITE LAYER (ONLY WHEN NEEDED)",
        desc: "If your current site blocks AI visibility or lacks structure, we fix or rebuild it. Otherwise, we build on what you already have.",
      },
      {
        title: "DIRECT ENQUIRY PATH",
        desc: "Customers can reach you directly once they find you \u2014 without being forced through a booking platform.",
      },
      {
        title: "GOOGLE BUSINESS PROFILE",
        desc: "Fully optimised \u2014 critical for Google AI visibility.",
      },
      {
        title: "MULTI-MARKET EXPANSION",
        desc: "Korean, Japanese, European, and local Filipino markets \u2014 each requires separate visibility systems.",
      },
    ],
    cta: {
      label: "SEE ALL SERVICES \u2192",
      path: "/services",
    },
  },

  // Set comingSoon: true to show placeholder instead of case study teaser
  caseTeaser: {
    sectionNumber: "04",
    comingSoon: true,
    label: "CASE STUDIES",
    message: "This section will be replaced with verified client results once sufficient data is collected.",
  },

  manifesto: {
    lines: [
      { text: "WE PUT YOU",     yellow: false },
      { text: "IN THE ANSWER.", yellow: true },
    ],
    body: "AI search is not replacing Google \u2014 it\u2019s replacing the decision step before Google.\n\nThe businesses that get cited will take the customer.\nThe ones that don\u2019t will never be considered.\n\nThis is not marketing. It\u2019s positioning.",
  },

  footerCta: {
    headline: "ARE YOU IN THE ANSWER?",
    ctaPrimary: {
      label: "WHATSAPP US \u2192",
      href: "https://wa.me/63XXXXXXXXXX",
    },
    ctaSecondary: {
      label: "SEE OUR WORK \u2192",
      path: "/work",
    },
  },
};

export const services = {
  banner: {
    line1: "SERVICES",
    line2: "& HOW IT WORKS.",
  },
  intro: "Everything is structured. Nothing is bundled blindly.",

  // Section 01 — Setup
  website: {
    sectionNum: "01",
    title: "SETUP (MONTH 1)",
    intro: "This is where your AI visibility is built. One-time. Done properly.\n\nWe build the AI-readable layer your business is missing.",
    included: [
      "Structured signals AI systems recognise as verified information",
      "Content written in the exact format AI cites in answers",
      "Cross-platform consistency so your business is treated as a reliable entity",
      "Technical access so AI crawlers can actually index your site",
    ],
    outcome: "This is not a website redesign.\nIt is the infrastructure AI uses to decide whether to include you at all.",
    addon: null,
  },

  // Section 02 — Monthly Visibility
  aiVisibility: {
    sectionNum: "02",
    title: "MONTHLY VISIBILITY",
    explanation: "AI visibility is not static. Platforms update constantly.\n\nWe actively monitor and adjust your position across:",
    included: [
      "ChatGPT, Perplexity, Google AI, and Meta AI",
      "How your business is described and cited",
      "Where competitors are gaining ground",
    ],
    outcome: "Each month we strengthen your position using live data from real searches.\n\nThis is ongoing positioning \u2014 not passive maintenance.",
  },

  // Section 03 — Language Markets
  languagePacks: {
    sectionNum: "03",
    title: "LANGUAGE MARKETS",
    explanation: "Each market runs on different platforms. English does not cover them.",
    tableHeaders: ["MARKET", "PLATFORMS", "SETUP", "/MONTH"],
    packs: [
      { flag: "\ud83c\uddf0\ud83c\uddf7", market: "Korean",                   platforms: "Naver Map, Kakao, Clova AI",       setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\uddef\ud83c\uddf5", market: "Japanese",                  platforms: "Google JP, Yahoo JP, Jalan",       setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\uddf9\ud83c\uddfc", market: "Chinese Traditional",       platforms: "Google TW, Ctrip",                 setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\udde9\ud83c\uddea", market: "German",                    platforms: "Google DE, TripAdvisor",           setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\uddeb\ud83c\uddf7", market: "French",                    platforms: "Google FR, TripAdvisor",           setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\uddf7\ud83c\uddfa", market: "Russian",                   platforms: "Yandex, Google RU",                setup: "\u20b115,000", monthly: "\u20b112,000" },
      { flag: "\ud83c\uddf5\ud83c\udded", market: "Filipino (Bisaya / Tagalog)", platforms: "Meta AI (Facebook), Google AI", setup: "\u20b110,000", monthly: "\u20b15,000" },
    ],
    note: "China (Simplified) not offered \u2014 requires separate infrastructure and licensing.",
  },

  // Section 04 — CTA
  cta: {
    sectionNum: "04",
    title: "LET\u2019S TALK",
    statement: "Every business has a different starting point.\n\nInvestment starts with a one-time setup and a monthly retainer.\n\nWe\u2019ll assess your current setup and confirm exact scope before pricing.",
    button: {
      label: "START THE CONVERSATION \u2192",
      path: "/contact",
    },
    note: "",
  },
};

export const work = {
  banner: "OUR WORK",
  intro: "Most businesses start the same way:\nA Facebook page, and dependence on platforms taking commission.",
  // Leave empty until verified results are ready
  caseStudies: [],
  comingSoon: {
    num: "CASE STUDIES \u2014 COMING SOON",
    title: "THIS SECTION WILL BE POPULATED WITH VERIFIED RESULTS.",
    sub: "Once sufficient data is collected.",
  },
};

export const about = {
  banner: {
    line1: "AI",
    line2: "MATTERS.",
  },
  founder: {
    name: "NOVA",
    role: "FOUNDER",
    bio: "I work with businesses that are losing customers before the customer ever reaches their website.\n\nNot because the business is bad \u2014\nbut because AI doesn\u2019t know they exist.\n\nMost resort owners rely on Facebook and booking platforms at the same time.\n\nThey attract attention on social media \u2014\nbut when customers are ready to book, they end up on Booking.com or Agoda.\n\nThat means paying 15\u201325% commission on customers they already attracted.\n\nThat\u2019s not a marketing problem.\nIt\u2019s a visibility problem.\n\nAI Matters fixes that.",
    locations: [
      "BASED IN: BOHOL / CEBU, PHILIPPINES",
      "OPERATING: BOHOL \u00b7 CEBU \u00b7 REMOTE",
    ],
  },
  philosophy: {
    label: "THE PROBLEM WE SOLVE",
    text: "AI doesn\u2019t read your website like a person.\n\nIt reads:\nStructured data\nConsistency signals\nAuthority citations\nCrawlable content\n\nIf those are missing, AI ignores you \u2014 or sends your customer somewhere else.\n\nWe build the layer AI actually uses.",
  },
  positioning: {
    label: "POSITIONING",
    text: "We don\u2019t replace your website.\nWe don\u2019t replace your marketing.\n\nWe control whether you are included in the answer.",
  },
  stats: [
    { number: "15\u201325%",       colour: "red",    label: "What OTAs charge" },
    { number: "\u20b10",           colour: "yellow", label: "What direct bookings cost" },
    { number: "12\u201318 months", colour: "white",  label: "Until AI is the primary search channel" },
  ],
};

export const contact = {
  banner: "LET\u2019S TALK",
  whatsapp: {
    label: "FASTEST WAY:",
    display: "WHATSAPP \u2192",
    href: "https://wa.me/63XXXXXXXXXX",
    note: "We respond during business hours.",
  },
  email: {
    label: "OR EMAIL:",
    display: "hello@aimatters.ph",
    href: "mailto:hello@aimatters.ph",
  },
  location: {
    label: "WHERE WE ARE",
    name: "Bohol & Cebu, Philippines",
    detail: "Available for in-person meetings in Panglao, Tagbilaran, Cebu City, Moalboal.",
  },
  form: {
    fields: [
      { id: "name",     label: "YOUR NAME",          type: "text",     required: true,  placeholder: "" },
      { id: "business", label: "YOUR BUSINESS NAME", type: "text",     required: true,  placeholder: "" },
      { id: "type",     label: "BUSINESS TYPE",      type: "select",   required: true,
        options: [
          "Resort", "Hotel", "Dive Shop", "Restaurant", "Dental Clinic",
          "Retail", "Law Firm", "Real Estate", "Other",
        ],
      },
      { id: "search",   label: "WHAT DO YOUR CUSTOMERS SEARCH FOR TO FIND YOU?", type: "text", required: false, placeholder: "" },
      { id: "message",  label: "MESSAGE",             type: "textarea", required: false, placeholder: "" },
    ],
    submit: "SEND ENQUIRY \u2192",
    emailTo: "hello@aimatters.ph",
    waFallback: {
      text: "Prefer WhatsApp? We do too.",
      linkLabel: " \u2192",
      href: "https://wa.me/63XXXXXXXXXX",
    },
  },
};
