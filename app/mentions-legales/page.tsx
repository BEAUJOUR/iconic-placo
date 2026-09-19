import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Mentions legales | ${siteConfig.name}`,
};

export default function LegalPage() {
  return (
    <main className="min-h-screen text-walnut">
      <PageHero
        eyebrow="Informations"
        title="Mentions legales"
        text="Page provisoire a completer avec les informations administratives de l'entreprise."
      />
    </main>
  );
}
