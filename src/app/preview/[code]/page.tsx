import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentPreview } from "@/components/component-preview";
import { getComponentByCode } from "@/lib/component-by-code";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const resolved = getComponentByCode(code);
  if (!resolved) return { title: "Component not found" };
  return {
    title: `${resolved.code} — ${resolved.entry.title} | TQA`,
    robots: { index: false, follow: false },
  };
}

export default async function ComponentPreviewPage({ params }: Props) {
  const { code } = await params;
  const resolved = getComponentByCode(code);
  if (!resolved) notFound();
  return <ComponentPreview resolved={resolved} />;
}
