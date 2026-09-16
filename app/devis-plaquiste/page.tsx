import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectPhotos } from "@/lib/projectPhotos";

export const metadata: Metadata = {
  title: "Devis plaquiste gratuit | ICONIC PLACO",
  description:
    "Demandez un devis gratuit pour vos travaux de placo, cloisons, faux plafonds, isolation, bandes et finitions interieures.",
};

const benefits = [
  "Devis gratuit et reponse claire",
  "Travail soigne pour murs, plafonds et finitions",
  "Photos du chantier possibles pour cadrer rapidement",
  "Intervention en Ile-de-France selon disponibilite",
];

const adServices = [
  {
    title: "Cloisons et doublages",
    text: "Creation de pieces, separation d'espaces, habillage de murs et pose de plaques de platre.",
  },
  {
    title: "Faux plafonds",
    text: "Plafonds suspendus, reprises techniques, dalles, spots et passages de reseaux.",
  },
  {
    title: "Isolation interieure",
    text: "Amelioration thermique et acoustique avec solutions adaptees au support existant.",
  },
  {
    title: "Bandes, enduits et peinture",
    text: "Raccords propres, preparation des surfaces et finitions pretes pour un rendu net.",
  },
];

const process = [
  {
    title: "Vous envoyez la demande",
    text: "Indiquez la ville, le type de travaux et le delai souhaite.",
  },
  {
    title: "Le besoin est qualifie",
    text: "Les photos, dimensions et contraintes permettent de cadrer le chantier.",
  },
  {
    title: "Vous recevez un retour",
    text: "La demande est reprise avec une estimation ou une visite si necessaire.",
  },
];

export default function DevisPlaquistePage() {
  const photos = getProjectPhotos();
  const heroPhoto =
    photos.find((photo) => photo.index === 23) ??
    photos.find((photo) => photo.category === "Cloisons et doublages") ??
    photos[0];
  const galleryPhotos = photos
    .filter((photo) =>
      ["Faux plafonds", "Cloisons et doublages", "Bandes et enduits"].includes(
        photo.category,
      ),
    )
    .slice(0, 6);

  return (
    <main className="bg-cream text-walnut">
      <section className="relative overflow-hidden border-b border-goldline bg-walnut text-white">
        {heroPhoto ? (
          <Image
            src={heroPhoto.image}
            alt={heroPhoto.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-walnut via-walnut/88 to-walnut/42" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.04fr_0.78fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="inline-flex border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-palegold">
              Artisan plaquiste
            </p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
              Devis placo rapide pour vos travaux interieurs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              Cloisons, doublages, faux plafonds, isolation, bandes et
              finitions : ICONIC PLACO vous aide a transformer un interieur avec
              une execution propre et lisible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demande"
                className="bg-champagne px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-honey"
              >
                Demander mon devis gratuit
              </a>
              <a
                href="tel:+33609505563"
                className="border border-white/30 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-walnut"
              >
                Appeler maintenant
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-white/86 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="border-l border-champagne pl-4">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <aside
            id="demande"
            className="border border-white/18 bg-cream p-5 text-walnut shadow-[0_28px_70px_rgba(0,0,0,0.28)] md:p-7"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-champagne">
              Reponse devis
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-none">
              Expliquez le chantier.
            </h2>
            <p className="mt-3 text-sm leading-6 text-taupe">
              Plus la demande est precise, plus le retour est rapide. Ajoutez
              les dimensions, la ville et les photos si possible.
            </p>
            <form
              action="mailto:iconicplaco77@hotmail.com"
              method="post"
              encType="text/plain"
              className="mt-6 grid gap-4"
            >
              <label className="grid gap-2 text-sm font-bold">
                Nom
                <input
                  name="Nom"
                  className="border border-goldline bg-warm px-4 py-3 font-normal outline-none focus:border-champagne"
                  placeholder="Votre nom"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Telephone
                <input
                  name="Telephone"
                  className="border border-goldline bg-warm px-4 py-3 font-normal outline-none focus:border-champagne"
                  placeholder="06 00 00 00 00"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Ville du chantier
                <input
                  name="Ville"
                  className="border border-goldline bg-warm px-4 py-3 font-normal outline-none focus:border-champagne"
                  placeholder="Ex : Meaux, Chelles, Paris..."
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Type de travaux
                <select
                  name="Type de travaux"
                  className="border border-goldline bg-warm px-4 py-3 font-normal outline-none focus:border-champagne"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selectionner
                  </option>
                  <option>Cloisons / doublages</option>
                  <option>Faux plafond</option>
                  <option>Isolation interieure</option>
                  <option>Bandes / enduits / peinture</option>
                  <option>Projet complet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Votre demande
                <textarea
                  name="Demande"
                  className="min-h-32 border border-goldline bg-warm px-4 py-3 font-normal outline-none focus:border-champagne"
                  placeholder="Decrivez la piece, les dimensions approximatives et le delai souhaite."
                />
              </label>
              <button
                type="submit"
                className="bg-champagne px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-honey"
              >
                Envoyer ma demande
              </button>
              <p className="text-center text-xs leading-5 text-taupe">
                Contact direct :
                <a href="tel:+33609505563" className="ml-1 font-bold text-walnut">
                  06 09 50 55 63
                </a>
              </p>
            </form>
          </aside>
        </div>
      </section>

      <section className="border-b border-goldline bg-warm">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4 lg:px-8">
          {[
            ["Devis", "Gratuit"],
            ["Travaux", "Placo et finitions"],
            ["Contact", "Telephone ou email"],
            ["Secteur", "Ile-de-France"],
          ].map(([label, value]) => (
            <div key={label} className="border-l border-goldline pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
                {label}
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-walnut">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
            Prestations demandees
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(2.3rem,4vw,3.4rem)] font-semibold leading-tight">
            Une page pensee pour transformer une recherche Google en demande.
          </h2>
          <p className="mt-5 leading-7 text-taupe">
            Le visiteur arrive avec un besoin immediat. La page met donc en
            avant les travaux, les preuves visibles et un formulaire accessible
            des le premier ecran.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {adServices.map((service) => (
            <article
              key={service.title}
              className="border border-goldline bg-warm p-6 shadow-[0_8px_26px_rgba(70,63,54,0.04)]"
            >
              <h3 className="font-display text-3xl font-semibold leading-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-taupe">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {galleryPhotos.length ? (
        <section className="bg-sandgold">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
                  Photos chantier
                </p>
                <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight">
                  Montrer le travail avant de demander la confiance.
                </h2>
              </div>
              <Link
                href="/realisations"
                className="text-sm font-black uppercase tracking-[0.12em] text-walnut underline decoration-champagne underline-offset-8"
              >
                Voir toutes les photos
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryPhotos.map((photo) => (
                <article
                  key={photo.image}
                  className="overflow-hidden border border-goldline bg-cream"
                >
                  <div className="relative aspect-[4/3] bg-ivory">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne">
                      {photo.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {photo.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
            Deroulement
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(2.2rem,4vw,3.1rem)] font-semibold leading-tight">
            Un parcours simple, sans perdre le client.
          </h2>
        </div>
        <div className="grid gap-4">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="grid grid-cols-[54px_1fr] gap-4 border-t border-goldline pt-5"
            >
              <p className="font-display text-3xl font-semibold text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1 leading-7 text-taupe">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-goldline bg-walnut text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-palegold">
              Pret a chiffrer le projet ?
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Envoyez la demande maintenant.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#demande"
              className="bg-champagne px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-honey"
            >
              Remplir le formulaire
            </a>
            <a
              href="mailto:iconicplaco77@hotmail.com"
              className="border border-white/25 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-walnut"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
