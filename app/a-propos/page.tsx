import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { values } from "@/lib/content";
import { assetPath } from "@/lib/assetPath";
import { getProjectImage, getProjectPhotos } from "@/lib/projectPhotos";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `A propos | ${siteConfig.name}`,
  description: `L'esprit ${siteConfig.name} : ecoute, precision et respect des lieux pour vos chantiers interieurs.`,
};

export default function AboutPage() {
  const heroImage = getProjectImage(19) ?? getProjectPhotos()[0]?.image;
  const terrainPhotos = getProjectPhotos().slice(4, 8);

  return (
    <main className="text-walnut">
      <section className="bg-sandgold">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">
              L&apos;esprit {siteConfig.name}
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Le detail avant tout.
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-taupe">
              Un chantier de placo n&apos;est pas seulement une pose de plaques. Il
              faut comprendre le volume, anticiper les contraintes et livrer une
              base propre pour la suite du projet.
            </p>
          </div>
          {heroImage ? (
            <div className="relative h-[420px] overflow-hidden rounded-tr-[80px] border border-goldline bg-warm shadow-soft">
              <Image
                src={assetPath(heroImage)}
                alt={`Interieur lumineux apres intervention ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-l border-goldline pl-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
              Positionnement
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,2.8rem)] font-semibold leading-tight">
              Un artisan proche du chantier.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="border-t border-goldline pt-5">
                <p className="font-display text-3xl font-semibold text-champagne">
                  {value.number}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-walnut">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-taupe">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            {terrainPhotos.map((photo) => (
              <div key={photo.image} className="relative h-56 overflow-hidden border border-goldline bg-warm">
                <Image src={photo.image} alt={photo.title} fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
              Sur le terrain
            </p>
            <h2 className="mt-3 text-balance font-display text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-tight">
              Le rendu final commence dans les etapes invisibles.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-taupe">
              Ossature, isolant, decoupes, raccords : les phases techniques
              conditionnent la proprete des murs et des plafonds visibles.
            </p>
            <Link href="/realisations" className="mt-7 inline-flex bg-champagne px-5 py-3 text-sm font-bold text-white transition hover:bg-honey">
              Voir les photos chantier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
