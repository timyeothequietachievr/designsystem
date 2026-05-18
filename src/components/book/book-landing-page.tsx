"use client";

import { useState, type ReactNode } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { BookMasthead } from "./book-masthead";
import { BookLogoCloudC148 } from "./book-logo-cloud-c148";
import { BookSoundFamiliarC6 } from "./book-sound-familiar-c6";
import { Container, Button } from "@/components/revamp/primitives";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";

/* Component refs: c9 hero, c148 logos, c6 pain, c100 FAQ, c14 newsletter, c16 footer */

const CHAPTERS = [
  {
    title: "Introducing yourself",
    copy: "What makes a good introduction, different types of intros and how to structure them for meetings, workshops, interviews and networking.",
  },
  {
    title: "Small talk",
    copy: "Develop small-talk topics that feel natural to you without the awkward silences.",
  },
  {
    title: "Meetings",
    copy: "Speak up before you are ready and learn tactics to buy yourself time when your mind goes blank and you are put on the spot.",
  },
  {
    title: "Public speaking",
    copy: "Practises to communicate with confidence, purpose and clarity.",
  },
  {
    title: "Handling difficult conversations",
    copy: "How to prepare and what to do when you receive feedback you do not like.",
  },
  {
    title: "How to say no (politely)",
    copy: "Set boundaries and push back on unreasonable requests.",
  },
  {
    title: "Networking",
    copy: "Practical techniques to network online and in real life so you don’t have to circle awkwardly in rooms full of strangers.",
  },
  {
    title: "Working together with extroverts and ambiverts",
    copy: "Work is a team sport. Learn how extroverts and ambiverts can work better together.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "As an extrovert, this was a fascinating and eye-opening read. Tim skilfully dissects the strengths and nuances of introverts in the workplace, allowing extroverted leaders like myself to better understand and appreciate our introverted colleagues. A must-read for extroverts looking to bridge the gap and better support introverted colleagues.",
    name: "Katja Forbes",
    place: "Singapore",
    note: "★★★★★ Amazon, verified purchase",
  },
  {
    quote:
      "Tim has filled The Quiet Achiever with a wealth of easy-to-follow suggestions that make sense. Each time I try a suggestion I experience success that I am building on. I'm so glad I stumbled on this — it's just what I need right now.",
    name: "Hkarlson",
    place: "USA",
    note: "★★★★★ Amazon, verified purchase",
  },
  {
    quote:
      "I thoroughly enjoyed this book. As a migrant, an introvert and a Software Engineering leader, I relate to many situations described in the book. I admire the precise, instruction-like style and highly recommend it to anyone who struggles with networking at work and putting themselves in the spotlight.",
    name: "Tania",
    place: "Australia",
    note: "★★★★★ Amazon, verified purchase",
  },
  {
    quote:
      "I attended Tim's Quiet Achiever course a while back and it was life-changing. This book gives an overview of all the really useful tidbits from the course in a digestible format. I find myself practising a lot of Tim's techniques day-to-day at work and it's really helped me feel calmer and more confident in the workplace. Highly recommend!",
    name: "Amazon reviewer",
    place: "UK",
    note: "★★★★★",
  },
  {
    quote:
      "Do you like reading IKEA instructions? I DO! Tim's teaching gives me the user manual to myself. Accompanied with relatable stories, practical tips and practices, I now have a better understanding of my own way of communicating — and practical tips to amplify the impact of what I want to say, to my friends, my lovers, my colleagues and anyone I care about. HIGHLY RECOMMEND!",
    name: "Vincent Kavanagh",
    place: "UK",
    note: "★★★★★ Amazon, verified purchase",
  },
  {
    quote:
      "In a sea of books on how to stand out, be heard, think big, someone has finally taken the time to celebrate introversion! Practical tips on how to navigate small talk, meetings and saying no (politely) — because let's face it, these can be a landmine of awkward pauses. Cheers to all the fellow introverts quietly achieving out there.",
    name: "Anj Vijayan",
    place: "Australia",
    note: "★★★★★ Amazon",
  },
  {
    quote:
      "This is an amazing book for any introvert (or friend, colleague or manager of one) to read. Short, vulnerable stories from Tim's own experience, followed by simplified, actionable 'tiny habits' to repeat and practise. I've since bought additional copies to give out to quiet-achieving colleagues and managers.",
    name: "Jason Crane",
    place: "Australia",
    note: "★★★★★ Amazon",
  },
  {
    quote:
      "After reading Tim's book I realised that I was an introvert wearing an extrovert disguise. The book has been a real eye-opener. I highly recommend it to anyone. Introvert, extrovert, or other.",
    name: "Lucas",
    place: "Australia",
    note: "★★★★★ Amazon",
  },
  {
    quote:
      "Gran libro para navegar el mundo corporativo y para entender las personalidades más reservadas de tu equipo.",
    name: "Eliseo Irving Torres Moreno",
    place: "Mexico",
    note: "★★★★★ Amazon, verified purchase",
  },
  {
    quote: "A practical and kind guide to not merely survive work socialisation, but get great at it.",
    name: "Julia Racsko",
    place: "Design Coach, Germany",
    note: "",
  },
  {
    quote:
      "Tim dishes out practical advice tailored for introverts navigating the tech and corporate sectors. The relatable real-life examples make the techniques understandable and give readers the confidence to tackle these situations head-on. A go-to resource for introverts looking to thrive in industries that often overlook their strengths.",
    name: "Taryn Ewens",
    place: "Software Engineer, Australia",
    note: "",
  },
];

const QUOTES = [
  { text: "Just because I am quiet does not mean I have nothing to say.", source: "Introduction", tone: "ink" },
  {
    text: "Every day, I felt like I was putting on a mask, pretending to be someone else. But with each passing day, that mask got heavier and heavier, until I could not lift and put on that mask anymore. I was pretending to be someone I was not.",
    source: "Chapter: Introduction",
    tone: "ember",
  },
  {
    text: "For years, I struggled to manage my introversion. I received feedback from my bosses like 'You should speak up more in meetings,' but I did not know how.",
    source: "Chapter: Introduction",
    tone: "sunrise",
  },
  {
    text: "When making small talk, I realised I did not need to be interesting, I needed to be relatable. To be relatable, I needed to have things in common with my audience.",
    source: "Chapter: Small talk",
    tone: "maroon",
  },
  {
    text: "The louder voices in the room seemed to say the most, but did not always have the most to say.",
    source: "Chapter: Meetings",
    tone: "ink",
  },
  {
    text: "You are not changing who you are; you are showing up as the best version of yourself.",
    source: "Chapter: Meetings",
    tone: "ember",
  },
  {
    text: "If a quiet achiever sits in a meeting with an idea in his head but does not share it, does it exist?",
    source: "Chapter: Public speaking",
    tone: "sunrise",
  },
  {
    text: "Your team exhibits the worst behaviour you choose to accept or leave unaddressed.",
    source: "Chapter: Handling difficult conversations",
    tone: "maroon",
  },
  {
    text: "The truth is most people are terrible at giving feedback. If you truly believe that feedback is a gift, then most people give terrible gifts.",
    source: "Chapter: Giving hard feedback",
    tone: "ink",
  },
  {
    text: "Saying no is hard, but saying no serves you. If everything else fails, no is a complete sentence.",
    source: "Chapter: Saying no (politely)",
    tone: "ember",
  },
  {
    text: "Constantly comparing myself to others and living someone else's version of success was my recipe for misery.",
    source: "Chapter: Networking",
    tone: "sunrise",
  },
  {
    text: "The best time to look for a job is when you do not need one. The second best time is now.",
    source: "Chapter: Networking remotely",
    tone: "maroon",
  },
];

const FAQS = [
  {
    q: "You were a designer in tech. Will this work if I work in a different industry?",
    a: "Yes. I’ve coached engineers, artists, and even doctors. The frameworks are role-agnostic.",
  },
  {
    q: "Is the audiobook narrated by Tim?",
    a: "Yes. Every word, recorded in Tim’s own voice.",
  },
  {
    q: "Can I expense this through my L&D budget?",
    a: "Yes. A sales invoice will be emailed to you after purchase.",
  },
  {
    q: "Is this just for introverts?",
    a: "No. Research shows 30–50% of the world's population identifies as quiet or introverted in nature. Chances are, many will be your peers, colleagues and leaders. If you want to understand how to work better together with your quieter teammates, this book is for you too.",
  },
];

const DIGITAL_FORMATS = [
  {
    name: "eBook + Audiobook",
    includes: "ePub · PDF · Audiobook narrated by Tim",
    price: "$16.99",
    cta: "Download",
    href: "https://payhip.com/b/fBES9",
    featured: true,
  },
  {
    name: "eBook only",
    includes: "ePub · PDF",
    price: "$9.99",
    cta: "Download",
    href: "https://payhip.com/b/Y5Jh2",
  },
  {
    name: "Audiobook only",
    includes: "Audiobook narrated by Tim",
    price: "$9.99",
    cta: "Download",
    href: "https://payhip.com/b/1ncdC",
  },
];

const PRINT_FORMATS = [
  {
    name: "Meet the author",
    includes:
      "Signed physical copy · Video call with Tim · all digital formats (ePub, PDF, Audiobook)",
    price: "$99",
    cta: "Order signed copy",
    href: "https://buy.stripe.com/14k6s22yv9PVekgbLE",
    featured: true,
  },
  {
    name: "Hardcover",
    includes: "Hardcover via Amazon",
    price: "$26.99",
    cta: "Buy on Amazon",
    href: "https://mybook.to/TheQuietAchieverHardCo",
  },
  {
    name: "Paperback",
    includes: "Paperback via Amazon",
    price: "$16.99",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com.au/dp/9819402220?tag=aulinktagbk-22&geniuslink=true",
  },
];

const BOOKSTORE_LINKS = [
  {
    label: "Amazon",
    href: "https://www.amazon.com.au/dp/9819402220?tag=aulinktagbk-22&geniuslink=true",
  },
  {
    label: "Kindle",
    href: "https://www.amazon.com.au/dp/B0DCRZ4M5H?tag=aulinktagbk-22&th=1&psc=1&geniuslink=true",
  },
  { label: "Audible", href: "https://www.amazon.com/dp/B0DDW8NKL9" },
  { label: "Spotify", href: "https://open.spotify.com/show/6019twEqqip4JAu4H0tAnd" },
  {
    label: "Kobo",
    href: "https://www.kobo.com/us/en/ebook/the-quiet-achiever?utm_source=linkshare_us&utm_medium=Affiliate&utm_campaign=Booklinker&utm_term=&ranMID=37217&ranEAID=tcRfPW115I0&ranSiteID=tcRfPW115I0-qkDKIgmxJquhH5EG7tahxg&siteID=tcRfPW115I0-qkDKIgmxJquhH5EG7tahxg",
  },
  { label: "Apple Books", href: "https://books.apple.com/au/book/the-quiet-achiever/id6615084088?ign-itscg=30200" },
  { label: "Google Play Books", href: "https://play.google.com/store/books/details?id=Q4QYEQAAQBAJ" },
  {
    label: "Barnes & Noble",
    href: "https://www.barnesandnoble.com/w/the-quiet-achiever-tim-yeo/1146139287?ean=2940179843696",
  },
  { label: "Smashwords", href: "https://www.smashwords.com/books/view/1600748" },
];

const quotePalette: Record<string, { bg: string; fg: string }> = {
  ink: { bg: "var(--tqa-ink)", fg: "var(--tqa-paper)" },
  ember: { bg: "var(--tqa-ember)", fg: "var(--tqa-paper)" },
  sunrise: { bg: "var(--tqa-sunrise)", fg: "var(--tqa-ink)" },
  maroon: { bg: "var(--tqa-ember-deep)", fg: "var(--tqa-paper)" },
};

function SectionHeading({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <div className="mb-10">
      {n ? (
        <span
          className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--tqa-ember)" }}
        >
          {n}
        </span>
      ) : null}
      <div className={n ? "mt-2" : ""}>{children}</div>
    </div>
  );
}

function AmazonRating() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-label="4.5 out of 5 stars" className="inline-flex items-center gap-0.5">
        <span style={{ color: "var(--tqa-sunrise)" }}>★★★★</span>
        <span
          aria-hidden
          style={{
            background: "linear-gradient(90deg, var(--tqa-sunrise) 50%, #fff 50%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          ★
        </span>
      </span>
      <span>4.5 on Amazon</span>
    </span>
  );
}

function BookHero() {
  return (
    <section id="hero" style={{ padding: "56px 0 80px", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "16px -22px -22px 22px",
                  background: "var(--tqa-ember)",
                  borderRadius: "4px",
                }}
              />
              <div
                className="relative overflow-hidden rounded"
                style={{
                  aspectRatio: "5 / 7.6",
                  border: "1px solid rgba(30,30,30,0.16)",
                  boxShadow:
                    "0 0 0 1px rgba(245,240,211,0.72), 0 24px 52px -16px rgba(30,30,30,0.32), 0 4px 14px rgba(30,30,30,0.12)",
                }}
              >
                <img
                  src="/assets/book-cover.jpg"
                  alt="The Quiet Achiever, by Tim Yeo"
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1
              className="font-display font-semibold text-charcoal"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.022em",
                textWrap: "balance",
              }}
            >
              You don&rsquo;t need to pretend to be an extrovert.
            </h1>
            <p
              className="font-reading mt-5 text-lg italic"
              style={{ color: "var(--tqa-ink)", lineHeight: 1.5 }}
            >
              Tiny habits to have impact at work — without changing who you are.
            </p>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-warm-700">
              <em>The Quiet Achiever</em> is a practical playbook for introverts and quiet achievers who
              want to be seen, be heard, and get the credit they deserve — without pretending to be
              someone they&rsquo;re not.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="#formats">
                Buy the book
                <span aria-hidden>→</span>
              </Button>
              <a
                href="#checklist"
                className="inline-flex h-12 items-center rounded px-2 font-sans text-[15px] font-semibold text-charcoal underline underline-offset-4"
              >
                Download free chapter
              </a>
            </div>
            <p className="font-sans mt-3 text-sm text-warm-500">
              Available in print, eBook, and audiobook (narrated by me 🎤).
            </p>

            <p className="font-sans mt-6 text-sm font-semibold text-charcoal">
              <AmazonRating />
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}

function ChaptersTable() {
  return (
    <section id="chapters" style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            What&rsquo;s inside
          </h2>
        </SectionHeading>
        <p className="font-reading mb-8 max-w-3xl text-lg italic" style={{ color: "var(--tqa-ink)" }}>
          Tiny habits that you put into practice and start having impact at work the very next day. We
          cover topics like:
        </p>
        <div className="overflow-x-auto rounded border border-paper-200 bg-paper">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-paper-200 bg-paper-soft">
                <th className="px-5 py-4 font-sans text-xs font-bold tracking-wide text-ember uppercase">
                  Chapter
                </th>
                <th className="px-5 py-4 font-sans text-xs font-bold tracking-wide text-ember uppercase">
                  What you&rsquo;ll learn
                </th>
              </tr>
            </thead>
            <tbody>
              {CHAPTERS.map((ch, i) => (
                <tr key={ch.title} className={i % 2 === 0 ? "" : "bg-paper-soft/60"}>
                  <td className="px-5 py-4 align-top font-display text-lg font-semibold text-charcoal">
                    {i + 1}. {ch.title}
                  </td>
                  <td className="px-5 py-4 font-reading text-[15px] leading-relaxed text-warm-700">
                    {ch.copy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function ChecklistLead() {
  const [email, setEmail] = useState("");

  return (
    <section id="checklist" style={{ padding: "96px 0" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", lineHeight: 1.08 }}
          >
            Download free chapter
          </h2>
        </SectionHeading>
        <div
          className="rounded-lg border border-paper-200 p-8 sm:p-10"
          style={{ background: "var(--tqa-sunrise-soft)" }}
        >
          <p className="font-reading max-w-2xl text-lg leading-relaxed text-charcoal">
            Read Chapter 1 plus a checklist of every tiny habit in the book.
          </p>
          <form
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-12 flex-1 rounded border-0 px-4 font-sans text-[15px] text-charcoal outline-none"
              style={{ background: "var(--tqa-paper)" }}
            />
            <button
              type="submit"
              className="h-12 rounded px-6 font-sans text-[15px] font-bold"
              style={{ background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}
            >
              Download Now →
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function TimBio() {
  return (
    <section id="about-tim" style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            👋 I&rsquo;m Tim Yeo
          </h2>
          <p className="font-sans mt-3 text-sm italic text-warm-500">
            (pronounced Yo like &ldquo;Yo, what&rsquo;s up?&rdquo;)
          </p>
        </SectionHeading>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded" style={{ aspectRatio: "4/5" }}>
              <img
                src="/assets/tim-masthead.jpg"
                alt="Tim Yeo"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            </div>
          </div>
          <div className="lg:col-span-7 self-start">
            <p className="font-reading text-[18px] leading-relaxed text-charcoal">
              <strong>
                Over 20+ years, I&rsquo;ve worked as a designer and a leader in tech, in companies
                dominated by big personalities with strong opinions and loud voices.
              </strong>
            </p>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-warm-700">
              For years, I pretended to be an extrovert at work to fit the “extrovert ideal”. And it
              worked. But I was also exhausted, because I was pretending to be someone I was not.
            </p>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-warm-700">
              The Quiet Achiever is a collection of the tiny habits I developed to have impact and
              influence at work while remaining my true authentic self. Since then, I&rsquo;ve coached nearly
              a thousand quiet achievers with success. Now, I share these tiny habits with you in my
              book.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="#formats">
                Buy the book
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PraiseSection() {
  return (
    <section id="praise" style={{ padding: "96px 0" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Praise for the book
          </h2>
        </SectionHeading>
        <p className="font-sans mb-10 text-sm font-semibold text-charcoal">
          <AmazonRating />
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={`${t.name}-${t.place}`}
              className="rounded border border-paper-200 bg-paper p-6"
            >
              <p className="font-reading text-[15px] leading-relaxed text-charcoal italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 font-sans text-sm text-warm-700">
                <strong className="text-charcoal">{t.name}</strong>
                {t.place ? ` · ${t.place}` : ""}
                {t.note ? (
                  <>
                    <br />
                    <span className="text-xs">{t.note}</span>
                  </>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BookQuotes() {
  return (
    <section style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Book quotes
          </h2>
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => {
            const p = quotePalette[q.tone];
            return (
              <figure
                key={q.text.slice(0, 24)}
                className="rounded p-6"
                style={{ background: p.bg, color: p.fg }}
              >
                <blockquote className="font-reading text-[16px] leading-relaxed italic">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-sans text-xs font-bold tracking-wide uppercase opacity-90">
                  — {q.source}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" style={{ padding: "96px 0" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Frequently asked questions
          </h2>
        </SectionHeading>
        <dl className="mx-auto max-w-3xl divide-y divide-charcoal/10">
          {FAQS.map((faq) => (
            <Disclosure key={faq.q} as="div" className="py-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left">
                  <span className="font-sans text-base font-semibold text-charcoal">{faq.q}</span>
                  <span className="ml-4 flex h-7 shrink-0 items-center">
                    <PlusSmallIcon aria-hidden className="size-6 group-data-open:hidden" />
                    <MinusSmallIcon aria-hidden className="size-6 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-3 pr-8">
                <p className="font-reading text-base leading-relaxed text-warm-700">{faq.a}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function FormatCards({
  title,
  formats,
}: {
  title: string;
  formats: {
    name: string;
    includes: string;
    price: string;
    cta: string;
    href: string;
    featured?: boolean;
  }[];
}) {
  return (
    <div className="mb-12">
      <h3 className="font-display mb-6 text-2xl font-semibold text-charcoal">{title}</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {formats.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col justify-between rounded-lg border p-6"
            style={{
              borderColor: tier.featured ? "var(--tqa-ember)" : "rgba(30,30,30,0.12)",
              background: tier.featured ? "var(--tqa-paper)" : "var(--tqa-paper-soft)",
              boxShadow: tier.featured ? "0 12px 32px -16px rgba(213,74,47,0.35)" : "none",
            }}
          >
            <div>
              <h4 className="font-display text-xl font-semibold text-charcoal">{tier.name}</h4>
              <p className="mt-2 font-reading text-sm leading-relaxed text-warm-700">{tier.includes}</p>
              <p className="mt-4 font-display text-3xl font-semibold text-charcoal">{tier.price}</p>
            </div>
            <a
              href={tier.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center rounded font-sans text-sm font-bold"
              style={{
                background: tier.featured ? "var(--tqa-ember)" : "var(--tqa-ink)",
                color: "var(--tqa-paper)",
              }}
            >
              {tier.cta} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormatsSection() {
  return (
    <section id="formats" style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Available as
          </h2>
        </SectionHeading>
        <div>
          <FormatCards title="eBook & audiobook" formats={DIGITAL_FORMATS} />
          <FormatCards title="Hardcover & paperback" formats={PRINT_FORMATS} />
        </div>
        <div className="mt-8 border-t border-charcoal/10 pt-8">
          <h3 className="font-display text-xl font-semibold text-charcoal">
            You can also buy from
          </h3>
          <p className="font-reading mt-3 max-w-3xl text-sm leading-relaxed text-warm-700">
            Grab it from your favourite store:
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 font-sans text-sm font-semibold">
            {BOOKSTORE_LINKS.map((store) => (
              <a
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1 underline-offset-4 transition hover:underline"
                style={{ background: "var(--tqa-paper)", color: "var(--tqa-ember-deep)" }}
              >
                {store.label} →
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BulkOrderSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <Container>
        <SectionHeading>
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.08 }}
          >
            Bulk order today
          </h2>
        </SectionHeading>
        <div className="grid grid-cols-1 items-stretch gap-8 rounded border border-paper-200 bg-paper-soft p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div
              className="flex h-full min-h-[260px] items-center justify-center rounded bg-paper p-6 text-center ring-1 ring-charcoal/10"
              aria-label="Placeholder image showing stacks of The Quiet Achiever books"
            >
              <div>
                <div className="mx-auto grid w-44 grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        height: `${44 + (i % 3) * 10}px`,
                        background: i % 2 === 0 ? "var(--tqa-ember)" : "var(--tqa-ink)",
                        boxShadow: "0 8px 18px -12px rgba(30,30,30,0.45)",
                      }}
                    />
                  ))}
                </div>
                <p className="font-mono mt-5 text-[11px] font-bold tracking-[0.18em] text-warm-500 uppercase">
                  Image placeholder: stacked books
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-reading text-[17px] leading-relaxed text-charcoal">
              When you bulk order 70+ copies of <em>The Quiet Achiever</em>, Tim will be happy to
              design a custom bonus experience for you and your colleagues.
            </p>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-warm-700">
              Email our team about your ordering needs. We can collaborate on ways to enhance your book
              experience through speaking, workshops, training sessions, and more.
            </p>
            <a
              href="mailto:bulkorder@thequietachievr.com?subject=Bulk%20Order%3A%20The%20Quiet%20Achiever%20book"
              className="mt-6 inline-flex font-sans text-[15px] font-semibold text-ember underline underline-offset-4"
          >
              Contact team →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function BookLandingPage() {
  return (
    <div className="bg-paper" data-screen-label="Book landing page">
      <BookMasthead />
      <BookHero />
      <BookLogoCloudC148 />
      <BookSoundFamiliarC6 />
      <ChaptersTable />
      <ChecklistLead />
      <TimBio />
      <PraiseSection />
      <BookQuotes />
      <FaqSection />
      <FormatsSection />
      <BulkOrderSection />
      <NewsletterBand />
      <FooterRev />
    </div>
  );
}
