import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contactez ${siteConfig.name} pour un devis platrerie, isolation ou finitions interieures.`,
};

export default function ContactPage() {
  return (
    <main className="text-walnut">
      <section className="bg-sand/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-clay">
              Contact
            </p>
            <h1 className="mt-4 max-w-xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Parlons chantier.
            </h1>
          </div>
          <p className="max-w-2xl leading-7 text-taupe">
            Decrivez les travaux, la ville, l&apos;etat actuel du support et le
            delai souhaite. Vous pouvez aussi appeler directement pour un
            premier echange.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <aside className="h-fit border border-goldline bg-warm p-6 shadow-soft">
          <h2 className="font-display text-3xl font-semibold text-walnut">
            Coordonnees directes
          </h2>
          <div className="mt-6 grid gap-3">
            <a href="tel:+33609505563" className="border border-goldline bg-cream px-5 py-4 font-bold text-walnut transition hover:text-champagne">
              06 09 50 55 63
            </a>
            <a href={`mailto:${siteConfig.email}`} className="border border-goldline bg-cream px-5 py-4 font-bold text-walnut transition hover:text-champagne">
              {siteConfig.email}
            </a>
          </div>
          <div className="mt-7 border-t border-goldline pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
              Zone
            </p>
            <p className="mt-2 leading-7 text-taupe">
              Ile-de-France et alentours selon la nature du chantier.
            </p>
          </div>
        </aside>

        <form className="border border-goldline bg-ivory p-6 shadow-soft md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-walnut">
              Nom
              <input className="border border-goldline bg-warm px-4 py-3 font-normal text-walnut outline-none transition focus:border-champagne" placeholder="Votre nom" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut">
              Telephone
              <input className="border border-goldline bg-warm px-4 py-3 font-normal text-walnut outline-none transition focus:border-champagne" placeholder="Votre telephone" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
              Type de travaux
              <input className="border border-goldline bg-warm px-4 py-3 font-normal text-walnut outline-none transition focus:border-champagne" placeholder="Cloison, plafond, isolation, bandes..." />
            </label>
            <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
              Message
              <textarea className="min-h-40 border border-goldline bg-warm px-4 py-3 font-normal text-walnut outline-none transition focus:border-champagne" placeholder="Ville, surface approximative, contraintes, delai souhaite..." />
            </label>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="bg-champagne px-6 py-3.5 font-bold text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-honey">
              Envoyer la demande
            </button>
            <a href="tel:+33609505563" className="border border-goldline bg-warm px-6 py-3.5 text-center font-bold text-walnut transition hover:border-champagne hover:text-champagne">
              Appeler maintenant
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
