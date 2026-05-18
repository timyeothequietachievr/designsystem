"use client";

import { Navigation } from "@/components/revamp/navigation";
import { HeroPortraitSplit } from "@/components/revamp/hero";
import {
  Segmenter,
  RodQuote,
  ThesisBand,
  SocialProofStrip,
  SoundFamiliar,
} from "@/components/revamp/sections-1";
import { CoachingSummary, BookBlock, VincentQuote } from "@/components/revamp/sections-2";
import {
  StartHere,
  SchoolBlock,
  SchoolQuotes,
  PlaybooksBand,
  NewsletterBand,
  ElsewhereStrip,
  FooterRev,
} from "@/components/revamp/sections-3";
import {
  LabeledComponent,
} from "@/components/component-label";
import { REVAMP_COMPONENT_CATALOG } from "@/lib/component-catalog";
import { Container } from "@/components/revamp/primitives";
import { TailwindComponentShowcase } from "@/components/tailwind-showcase/showcase";

const R = Object.fromEntries(
  REVAMP_COMPONENT_CATALOG.map((entry) => [entry.slug, entry]),
) as Record<string, (typeof REVAMP_COMPONENT_CATALOG)[number]>;

type SiteComponentLibraryProps = {
  /** Load all Tailwind blocks immediately (visual library) */
  eagerShowcase?: boolean;
  /** Show the visual-library intro banner */
  showLibraryIntro?: boolean;
};

export function SiteComponentLibrary({
  eagerShowcase = false,
  showLibraryIntro = false,
}: SiteComponentLibraryProps) {
  if (!showLibraryIntro) {
    return (
      <div data-screen-label="Homepage">
        <Navigation />
        <HeroPortraitSplit />
        <SocialProofStrip />
        <Segmenter />
        <RodQuote />
        <SoundFamiliar />
        <ThesisBand />
        <CoachingSummary />
        <BookBlock />
        <VincentQuote />
        <SchoolBlock />
        <SchoolQuotes />
        <StartHere />
        <PlaybooksBand />
        <NewsletterBand />
        <ElsewhereStrip />
        <FooterRev />
      </div>
    );
  }

  return (
    <div data-screen-label={showLibraryIntro ? "Visual library" : "Homepage"}>
      {showLibraryIntro ? (
        <div className="border-b border-paper-200 bg-ink text-paper">
          <Container wide className="py-10 sm:py-14">
            <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-sunrise-soft uppercase">
              Visual library
            </p>
            <h1
              className="display-headline mt-3 font-bold"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05 }}
            >
              Full-page component reference
            </h1>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-paper/85 sm:text-lg">
              Scroll the assembled page exactly as on the homepage — every revamp
              section and Tailwind block with labels. Use{" "}
              <a href="/" className="text-sunrise-soft underline">
                /
              </a>{" "}
              for production; this view now loads Tailwind blocks one category at
              a time for stable browsing.
            </p>
          </Container>
        </div>
      ) : null}

      {showLibraryIntro ? <TailwindComponentShowcase eager={eagerShowcase} /> : null}

      <LabeledComponent
        code={R.navigation.code}
        title={R.navigation.title}
        slug={R.navigation.slug}
        as="nav"
      >
        <Navigation />
      </LabeledComponent>
      <LabeledComponent
        code={R["hero-portrait-split"].code}
        title={R["hero-portrait-split"].title}
        slug={R["hero-portrait-split"].slug}
      >
        <HeroPortraitSplit />
      </LabeledComponent>
      <LabeledComponent
        code={R["social-proof-strip"].code}
        title={R["social-proof-strip"].title}
        slug={R["social-proof-strip"].slug}
      >
        <SocialProofStrip />
      </LabeledComponent>
      <LabeledComponent code={R.segmenter.code} title={R.segmenter.title} slug={R.segmenter.slug}>
        <Segmenter />
      </LabeledComponent>
      <LabeledComponent
        code={R["sound-familiar"].code}
        title={R["sound-familiar"].title}
        slug={R["sound-familiar"].slug}
      >
        <SoundFamiliar />
      </LabeledComponent>
      <LabeledComponent code={R["thesis-band"].code} title={R["thesis-band"].title} slug={R["thesis-band"].slug}>
        <ThesisBand />
      </LabeledComponent>
      <LabeledComponent
        code={R["coaching-summary"].code}
        title={R["coaching-summary"].title}
        slug={R["coaching-summary"].slug}
      >
        <CoachingSummary />
      </LabeledComponent>
      <LabeledComponent code={R["book-block"].code} title={R["book-block"].title} slug={R["book-block"].slug}>
        <BookBlock />
      </LabeledComponent>
      <LabeledComponent code={R["school-block"].code} title={R["school-block"].title} slug={R["school-block"].slug}>
        <SchoolBlock />
      </LabeledComponent>
      <LabeledComponent code={R["start-here"].code} title={R["start-here"].title} slug={R["start-here"].slug}>
        <StartHere />
      </LabeledComponent>
      <LabeledComponent
        code={R["playbooks-band"].code}
        title={R["playbooks-band"].title}
        slug={R["playbooks-band"].slug}
      >
        <PlaybooksBand />
      </LabeledComponent>
      <LabeledComponent
        code={R["newsletter-band"].code}
        title={R["newsletter-band"].title}
        slug={R["newsletter-band"].slug}
      >
        <NewsletterBand />
      </LabeledComponent>
      <LabeledComponent
        code={R["elsewhere-strip"].code}
        title={R["elsewhere-strip"].title}
        slug={R["elsewhere-strip"].slug}
      >
        <ElsewhereStrip />
      </LabeledComponent>
      <LabeledComponent code={R["footer-rev"].code} title={R["footer-rev"].title} slug={R["footer-rev"].slug} as="footer">
        <FooterRev />
      </LabeledComponent>
      {!showLibraryIntro ? <TailwindComponentShowcase eager={eagerShowcase} /> : null}
    </div>
  );
}
