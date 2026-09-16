import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { getProjectPhotos, imageExists } from "@/lib/projectPhotos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Prestations | ICONIC PLACO",
  description:
    "Prestations de platrerie, cloisons, faux plafonds, isolation interieure, bandes, enduits et peinture.",
};

const serviceDetails = [
  {
    image: "/images/project-38.jpg",
    kicker: "Volumes",
    title: "Cloisons, doublages et isolation",
    text: "La structure est pensee selon le support, la piece et l'usage attendu : separation, confort thermique, acoustique ou reprise d'un mur existant.",
    points: ["Ossature metallique", "Plaques de platre", "Isolation interieure", "Habillage mural"],
  },
  {
    image: "/images/project-23.jpg",
    kicker: "Plafonds",
    title: "Faux plafonds et passages techniques",
    text: "Les plafonds suspendus permettent de corriger, masquer, integrer ou structurer un espace sans perdre la lecture generale de la piece.",
    points: ["Dalles de plafond", "Trappes et reprises", "Passage reseaux", "Eclairage integre"],
  },
  {
    image: "/images/project-11.jpg",
    kicker: "Finitions",
    title: "Bandes, enduits et peinture interieure",
    text: "La finition donne son niveau au chantier : raccords, angles, reprises et preparation des surfaces avant peinture ou decoration.",
    points: ["Bandes a joint", "Enduits de finition", "Reprises de murs", "Peinture interieure"],
  },
];

export default function ServicesPage() {
  const servicePhotos = getProjectPhotos()
    .filter((photo) =>
      ["Faux plafonds", "Cloisons et doublages", "Bandes et enduits"].includes(
        photo.category,
      ),
    )
    .slice(0, 3);
  const visibleServiceDetails = serviceDetails.filter((item) =>
    imageExists(item.image),
  );

  return (
    <main className="text-walnut">
      <section className="border-b border-goldline bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">
              Prestations
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Les metiers du placo.
            </h1>
          </div>
          <p className="max-w-2xl leading-7 text-taupe">
            ICONIC PLACO intervient sur les ouvrages qui transforment un
            interieur : structures, plafonds, isolation, reprises et finitions.
            Chaque prestation est abordee selon le support et le rendu attendu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-7">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href="/devis"
              className="border border-goldline bg-warm p-4 text-sm font-bold text-walnut transition hover:-translate-y-0.5 hover:border-champagne hover:text-champagne"
            >
              <span className="block text-xs text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block leading-5">{service.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-10">
          {visibleServiceDetails.map((item, index) => (
            <article
              key={item.title}
              className={`grid gap-7 border-t border-goldline pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[360px] overflow-hidden border border-goldline bg-ivory shadow-soft">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
                  {item.kicker}
                </p>
                <h2 className="mt-3 text-balance font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-taupe">{item.text}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="border-l border-goldline pl-4 text-sm font-bold text-walnut">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              Exemples visibles
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,2.8rem)] font-semibold leading-tight">
              Lire le chantier en images.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {servicePhotos.map((photo) => (
              <div key={photo.image} className="relative h-60 overflow-hidden border border-goldline bg-ivory">
                <Image src={photo.image} alt={photo.title} fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
