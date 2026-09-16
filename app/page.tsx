import Image from "next/image";
import Link from "next/link";
import {
  realizations,
  services,
  siteImages,
  trustItems,
  values,
} from "@/lib/content";
import { assetPath } from "@/lib/assetPath";

export default function Home() {
  const featuredServices = services.slice(0, 4);

  return (
    <main className="text-walnut">
      <section id="accueil" className="relative overflow-hidden border-b border-goldline bg-cream">
        <div className="pointer-events-none absolute -left-44 top-10 h-[440px] w-[440px] rounded-full border border-champagne/20" />
        <div className="pointer-events-none absolute -left-20 top-24 h-[310px] w-[310px] rounded-full border border-champagne/20" />

        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-10">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">
              Platrerie · Isolation · Finitions
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-display text-[clamp(3rem,5.4vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-walnut">
              Des volumes nets, des finitions propres.
            </h1>
            <div className="mt-5 h-px w-20 bg-champagne" />
            <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-taupe">
              ICONIC PLACO realise cloisons, faux plafonds, isolation, bandes
              et reprises interieures avec une attention precise aux details.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className="bg-champagne px-6 py-3.5 text-center text-sm font-bold text-white shadow-gold transition duration-200 hover:-translate-y-0.5 hover:bg-honey"
              >
                Obtenir un devis
              </Link>
              <Link
                href="/realisations"
                className="border border-goldline bg-warm px-6 py-3.5 text-center text-sm font-bold text-walnut transition duration-200 hover:-translate-y-0.5 hover:border-champagne hover:text-champagne"
              >
                Voir les chantiers
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.number} className="border-l border-goldline pl-4">
                  <p className="text-xs font-bold text-champagne">{item.number}</p>
                  <p className="mt-1 text-sm font-bold text-walnut">{item.title}</p>
                  <p className="text-sm text-taupe">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-tl-[92px] border border-goldline bg-ivory shadow-soft lg:h-[560px]">
            <Image
              src={assetPath(siteImages.hero)}
              alt="Faux plafond suspendu realise par ICONIC PLACO"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-300 hover:scale-[1.015]"
            />
            <div className="absolute inset-y-0 right-0 w-3 bg-champagne" />
            <div className="absolute bottom-5 right-5 max-w-[280px] border border-champagne bg-cream p-5 shadow-[0_18px_45px_rgba(52,47,42,0.22)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-honey">
                Chantier
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold leading-none text-walnut">
                Faux plafond
              </h2>
              <p className="mt-2 text-sm font-semibold leading-5 text-walnut">
                Dalles, ossature et reprise technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/45">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-display text-[clamp(1.65rem,3vw,2.4rem)] font-semibold leading-tight text-walnut">
            Un artisan. Un interlocuteur. Une finition lisible.
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.38em] text-champagne">
            ICONIC PLACO
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
            Savoir-faire
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-[clamp(2.3rem,4vw,3.2rem)] font-semibold leading-tight text-walnut">
            Du support brut a la finition.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-taupe">
            Les ouvrages visibles reposent d&apos;abord sur une preparation juste :
            lecture du support, ossature, plaques, bandes et finitions.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex border border-goldline bg-warm px-5 py-3 text-sm font-bold text-walnut transition hover:border-champagne hover:text-champagne"
          >
            Explorer les prestations
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredServices.map((service, index) => (
            <article key={service.title} className="border border-goldline bg-warm/80 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-bold text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-walnut">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-taupe">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative h-[430px] overflow-hidden border border-goldline bg-warm shadow-soft">
            <Image
              src={assetPath(siteImages.about)}
              alt="Cloison et doublage en plaques de platre"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
              Engagement
            </p>
            <h2 className="mt-3 text-balance font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight text-walnut">
              La qualite se joue dans les raccords.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-taupe">
              Une piece bien finie ne se remarque pas par hasard. Elle depend
              des alignements, des angles, des joints, de la protection du lieu
              et du soin apporte a chaque reprise.
            </p>
            <div className="mt-7 grid gap-4">
              {values.map((value) => (
                <div key={value.number} className="grid grid-cols-[46px_1fr] gap-4 border-t border-goldline pt-4">
                  <p className="font-display text-2xl font-semibold text-champagne">
                    {value.number}
                  </p>
                  <div>
                    <h3 className="font-bold text-walnut">{value.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-taupe">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
              Apercu chantier
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight text-walnut">
              Trois interventions, trois lectures du metier.
            </h2>
          </div>
          <Link href="/realisations" className="w-fit bg-champagne px-5 py-3 text-sm font-bold text-white transition hover:bg-honey">
            Galerie complete
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {realizations.map((item) => (
            <article key={item.title} className="group relative h-[360px] overflow-hidden border border-goldline bg-ivory">
              <Image
                src={assetPath(item.image)}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.015]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/88 via-walnut/36 to-walnut/4" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="font-display text-3xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm font-semibold leading-6 text-white">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/55">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
              Demande de devis
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-tight text-walnut">
              Un projet interieur a cadrer ?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-taupe">
              Envoyez les photos, les dimensions approximatives et la ville :
              ICONIC PLACO vous recontacte pour organiser la suite.
            </p>
          </div>
          <Link href="/devis" className="bg-walnut px-6 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-honey">
            Preparer mon devis
          </Link>
        </div>
      </section>
    </main>
  );
}
