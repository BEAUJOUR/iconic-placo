import type { Metadata } from "next";
import Link from "next/link";
import { methodSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Methode | Iconic P Solution",
  description:
    "La methode Iconic P Solution, du premier echange a la reception du chantier.",
};

export default function MethodePage() {
  return (
    <main className="text-walnut">
      <section className="border-b border-goldline bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">
            Methode
          </p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            Clair du debut a la fin.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-taupe">
            Chaque chantier avance avec des decisions simples : comprendre,
            verifier, chiffrer, realiser.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="relative grid gap-7 lg:grid-cols-4">
          {methodSteps.map((step, index) => (
            <article key={step.title} className="relative border-t border-goldline pt-6">
              <p className="font-display text-[clamp(3.2rem,6vw,5rem)] font-semibold leading-none text-champagne/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-walnut">
                {step.title}
              </h2>
              <p className="mt-3 leading-7 text-taupe">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              Prochaine etape
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-tight">
              Envoyez le contexte du chantier.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-taupe">
              Quelques photos, la ville et le type de travaux suffisent pour
              organiser un premier echange.
            </p>
          </div>
          <Link href="/contact" className="bg-walnut px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-honey">
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}
