import type { Metadata } from "next";
import { SiteComponentLibrary } from "@/components/site-component-library";

export const metadata: Metadata = {
  title: "Visual library | The Quiet Achiever",
  description:
    "Full-page scroll of every homepage and Tailwind UI component for design review.",
  robots: { index: false, follow: false },
};

export default function VisualLibraryPage() {
  return <SiteComponentLibrary eagerShowcase showLibraryIntro />;
}
