import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { assetPath } from "@/lib/assetPath";
import { getProjectImage } from "@/lib/projectPhotos";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contactez ${siteConfig.name} pour vos travaux de cloisons, isolation, plafonds et finitions interieures en Ile-de-France.`,
};

export default function ContactPage() {
  const image = getProjectImage(11);

  return (
    <main className="text-walnut">
      <section className="border-b border-goldline bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-clay">Contact</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl font-semibold leading-tight sm:text-6xl">Parlons de votre projet.</h1>
          <p className="mt-5 max-w-2xl leading-7 text-taupe">
            Cloisons, isolation, plafonds ou finitions : decrivez vos travaux pour
            preparer un premier echange et une demande de devis gratuit.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8 lg:py-16">
        <aside className="min-w-0">
          <h2 className="font-display text-3xl font-semibold">Contact direct</h2>
          <div className="mt-5 divide-y divide-goldline border-y border-goldline">
            <a href={siteConfig.phoneHref} className="block py-5 transition hover:text-champagne">
              <span className="block text-sm text-taupe">Telephone</span>
              <span className="mt-1 block text-xl font-bold">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="block py-5 transition hover:text-champagne">
              <span className="block text-sm text-taupe">E-mail</span>
              <span className="mt-1 block break-all font-bold">{siteConfig.email}</span>
            </a>
          </div>
          <p className="mt-6 text-sm font-bold">Zone d&apos;intervention</p>
          <p className="mt-2 leading-7 text-taupe">Ile-de-France et alentours selon la nature du chantier.</p>
          {image && <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded bg-ivory">
            <Image src={assetPath(image)} alt="Piece preparee et finitions murales" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          </div>}
        </aside>
        <ContactForm endpoint={siteConfig.formspreeEndpoint} />
      </section>
    </main>
  );
}
