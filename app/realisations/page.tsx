import type { Metadata } from "next";
import Image from "next/image";
import { realizations } from "@/lib/content";
import { assetPath } from "@/lib/assetPath";
import { getProjectPhotos, imageExists } from "@/lib/projectPhotos";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Realisations | ${siteConfig.name}`,
  description: `Toutes les photos de chantiers ${siteConfig.name} : cloisons, doublages, faux plafonds, isolation, bandes et finitions.`,
};

export default function RealisationsPage() {
  const featuredRealizations = realizations.filter((item) =>
    imageExists(item.image),
  );
  const projectPhotos = getProjectPhotos();

  return (
    <main className="text-walnut">
      <section className="border-b border-goldline bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">
              Nos realisations
            </p>
            <h1 className="mt-4 max-w-xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Le chantier en images.
            </h1>
          </div>
          <p className="max-w-2xl leading-7 text-taupe">
            Les photos sont classees selon le travail reellement visible :
            faux plafonds, ossatures, doublages, isolation, reprises de murs et
            finitions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {featuredRealizations.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-[430px] overflow-hidden border border-cream bg-ivory"
            >
              <Image
                src={assetPath(item.image)}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/76 via-walnut/18 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="font-display text-4xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-sm leading-7 text-white/85">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-goldline bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-champagne">
            Galerie complete
          </p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-walnut">
            Toutes les photos du chantier, sans masquer les etapes.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-taupe">
            Certaines images montrent le travail fini, d&apos;autres les phases
            techniques : ossature, isolation, plafond suspendu, reprises et
            preparation des supports.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectPhotos.map((photo, index) => (
            <article
              key={photo.image}
              className="group overflow-hidden border border-goldline bg-warm shadow-[0_8px_26px_rgba(70,63,54,0.04)] transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                <Image
                  src={photo.image}
                  alt={`${photo.title} - ${photo.category}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne">
                    {photo.category}
                  </p>
                  <p className="font-display text-2xl font-semibold text-palegold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-walnut">
                  {photo.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-taupe">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
