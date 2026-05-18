import type { ComponentType } from "react";
import { Navigation } from "@/components/revamp/navigation";
import { HeroPortraitSplit } from "@/components/revamp/hero";
import {
  Segmenter,
  ThesisBand,
  SocialProofStrip,
  SoundFamiliar,
} from "@/components/revamp/sections-1";
import { CoachingSummary, ToniBlock, BookBlock } from "@/components/revamp/sections-2";
import {
  LatestWriting,
  StartHere,
  SchoolBlock,
  PlaybooksBand,
  NewsletterBand,
  ElsewhereStrip,
  FooterRev,
  ToniBubble,
} from "@/components/revamp/sections-3";
import { tailwindShowcaseRegistry } from "@/components/tailwind-showcase/registry";
import {
  parseComponentCode,
  REVAMP_COMPONENT_CATALOG,
  REVAMP_COMPONENT_COUNT,
  type ComponentCatalogEntry,
} from "@/lib/component-catalog";

export type ResolvedComponent = {
  code: string;
  entry: ComponentCatalogEntry;
  anchorId: string;
  Component: ComponentType;
};

const REVAMP_COMPONENTS: Record<string, ComponentType> = {
  navigation: Navigation,
  "hero-portrait-split": HeroPortraitSplit,
  segmenter: Segmenter,
  "thesis-band": ThesisBand,
  "social-proof-strip": SocialProofStrip,
  "sound-familiar": SoundFamiliar,
  "coaching-summary": CoachingSummary,
  "toni-block": ToniBlock,
  "book-block": BookBlock,
  "latest-writing": LatestWriting,
  "start-here": StartHere,
  "school-block": SchoolBlock,
  "playbooks-band": PlaybooksBand,
  "newsletter-band": NewsletterBand,
  "elsewhere-strip": ElsewhereStrip,
  "footer-rev": FooterRev,
  "toni-bubble": ToniBubble,
};

export function getComponentByCode(code: string): ResolvedComponent | null {
  const index = parseComponentCode(code);
  if (index === null || index < 1) return null;

  if (index <= REVAMP_COMPONENT_COUNT) {
    const entry = REVAMP_COMPONENT_CATALOG[index - 1];
    const Component = REVAMP_COMPONENTS[entry.slug];
    if (!Component) return null;
    return {
      code: entry.code,
      entry,
      anchorId: entry.slug,
      Component,
    };
  }

  const tailwindIndex = index - REVAMP_COMPONENT_COUNT - 1;
  const registryEntry = tailwindShowcaseRegistry[tailwindIndex];
  if (!registryEntry) return null;

  return {
    code: `c${index}`,
    entry: {
      code: `c${index}`,
      slug: registryEntry.id,
      title: registryEntry.label,
      source: "tailwind",
      category: registryEntry.category,
    },
    anchorId: registryEntry.id,
    Component: registryEntry.Component,
  };
}

export function allComponentCodes(): string[] {
  return [
    ...REVAMP_COMPONENT_CATALOG.map((e) => e.code),
    ...tailwindShowcaseRegistry.map(
      (_, i) => `c${REVAMP_COMPONENT_COUNT + i + 1}`,
    ),
  ];
}
