import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Demande de devis | ${siteConfig.name}`,
  description: `Preparez votre demande de devis ${siteConfig.name} avec les informations utiles pour cadrer le chantier.`,
};

const quoteSteps = [
  {
    title: "Le lieu",
    text: "Ville, type de logement ou local, et acces au chantier.",
  },
  {
    title: "Le besoin",
    text: "Cloison, faux plafond, isolation, bandes, peinture ou reprise.",
  },
  {
    title: "Les supports",
    text: "Photos actuelles, dimensions approximatives et contraintes visibles.",
  },
  {
    title: "Le delai",
    text: "Urgence, date souhaitee ou coordination avec d'autres travaux.",
  },
];

export default function DevisPage() {
  return (
    <main className="text-walnut">
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">
              Demande de devis
            </p>
            <h1 className="mt-4 max-w-xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Cadrer le projet.
            </h1>
          </div>
          <p className="max-w-2xl leading-7 text-taupe">
            Une demande precise permet de repondre plus vite. Ajoutez les
            informations essentielles et, si possible, quelques photos du lieu.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="grid gap-4">
          {quoteSteps.map((step, index) => (
            <article key={step.title} className="grid grid-cols-[52px_1fr] gap-4 border-t border-goldline pt-5">
              <p className="font-display text-3xl font-semibold text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-display text-2xl font-semibold text-walnut">
                  {step.title}
                </h2>
                <p className="mt-1 leading-7 text-taupe">{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <form className="border border-goldline bg-warm p-6 shadow-soft md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-walnut">
              Nom
              <input className="border border-goldline bg-cream px-4 py-3 font-normal outline-none focus:border-champagne" placeholder="Votre nom" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut">
              Telephone
              <input className="border border-goldline bg-cream px-4 py-3 font-normal outline-none focus:border-champagne" placeholder="06..." />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
              Ville du chantier
              <input className="border border-goldline bg-cream px-4 py-3 font-normal outline-none focus:border-champagne" placeholder="Ville / secteur" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
              Travaux souhaites
              <textarea className="min-h-40 border border-goldline bg-cream px-4 py-3 font-normal outline-none focus:border-champagne" placeholder="Expliquez le projet, les dimensions approximatives et le delai souhaite." />
            </label>
          </div>
          <button type="button" className="mt-6 bg-champagne px-6 py-3.5 font-bold text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-honey">
            Envoyer ma demande
          </button>
          <p className="mt-5 text-sm leading-6 text-taupe">
            Vous pouvez aussi envoyer directement vos photos par e-mail :
            <Link href={`mailto:${siteConfig.email}`} className="ml-1 font-bold text-champagne">
              {siteConfig.email}
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
