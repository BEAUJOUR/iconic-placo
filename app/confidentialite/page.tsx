import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Confidentialite | ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-walnut">
      <PageHero
        eyebrow="Informations"
        title="Politique de confidentialite"
        text="Page provisoire a completer selon les formulaires et outils utilises sur le site."
      />
    </main>
  );
}
