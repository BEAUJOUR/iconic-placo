import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-goldline bg-cream px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-taupe md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="inline-flex flex-col items-center gap-2">
            <Logo size="lg" />
            <p className="text-xs font-bold uppercase text-walnut">
              Iconic P Solution
            </p>
          </div>
          <p className="mt-4 max-w-xs leading-6">
            Platrerie, isolation et finitions interieures avec le sens du
            detail artisanal.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-walnut">
            Prestations
          </h2>
          <ul className="mt-4 grid gap-2">
            <li>Cloisons et doublages</li>
            <li>Faux plafonds</li>
            <li>Isolation interieure</li>
            <li>Bandes et enduits</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-walnut">
            Informations
          </h2>
          <div className="mt-4 grid gap-2">
            <Link href="/devis" className="hover:text-champagne">
              Demander un devis
            </Link>
            <Link href="/devis-plaquiste" className="hover:text-champagne">
              Devis plaquiste rapide
            </Link>
            <Link href="/mentions-legales" className="hover:text-champagne">
              Mentions legales
            </Link>
            <Link href="/confidentialite" className="hover:text-champagne">
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-goldline pt-5 text-xs text-taupe md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Iconic P Solution. Tous droits reserves.</p>
        <p>06 09 50 55 63 - iconicplaco77@hotmail.com</p>
      </div>
    </footer>
  );
}
