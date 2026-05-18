export const NAV_ITEMS = [
  { name: "School", href: "#school" },
  { name: "Coaching", href: "#coaching" },
  { name: "Book", href: "#book" },
  { name: "Podcast", href: "#podcast" },
  { name: "About", href: "#about" },
] as const;

export const TOPICS = [
  {
    name: "Introducing yourself",
    desc: "What makes a good introduction, different types of intros you need, and how to structure them for meetings, workshops and interviews.",
    tint: "sunrise" as const,
  },
  {
    name: "Small talk",
    desc: "A framework for developing small talk topics that feel natural — no awkward silences.",
    tint: "ember" as const,
  },
  {
    name: "Meetings",
    desc: "How to speak up before you are ready, be more visible in your org, and make space for focus-work.",
    tint: "ink" as const,
  },
  {
    name: "Public speaking",
    desc: "Types of scripts and how to prepare so you communicate with purpose and clarity.",
    tint: "sunrise2" as const,
  },
  {
    name: "Difficult conversations",
    desc: "Why these are especially hard for quiet achievers, how to give feedback, and what to do when you receive it.",
    tint: "ember2" as const,
  },
  {
    name: "How to say no (politely)",
    desc: "Saying yes when you think no is not sustainable. Practical tips on how to push back.",
    tint: "ink2" as const,
  },
] as const;

export const BOOK_OFFERS = [
  {
    subheading: "eBook",
    price: "$19",
    suffix: "USD",
    features: [
      "Instant download, DRM-free",
      "Lifetime updates",
      "PDF + ePub",
    ],
    cta: "Buy eBook",
  },
  {
    subheading: "Audiobook + eBook",
    price: "$29",
    suffix: "USD",
    features: [
      "Narrated by the author",
      "~4 hours of audio",
      "Lifetime updates",
    ],
    cta: "Buy now",
    badge: "Best value",
  },
  {
    subheading: "Audiobook only",
    price: "$22",
    suffix: "USD",
    features: [
      "Narrated by the author",
      "~4 hours of audio",
      "Listen on any device",
    ],
    cta: "Buy audiobook",
  },
] as const;

export const FOOTER_COLUMNS = {
  Book: [
    "eBook",
    "Hardcover",
    "Paperback",
    "Backstory",
    "Download free chapter",
  ],
  Courses: [
    "Convince Your Boss",
    "Too Valuable to Lose",
    "Being more visible",
    "Facilitation",
    "Public speaking",
  ],
  Content: ["Testimonials", "Podcast", "Newsletter"],
  Pricing: ["Books", "Courses", "Coaching"],
} as const;
