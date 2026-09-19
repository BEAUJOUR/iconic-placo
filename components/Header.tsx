"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/realisations", label: "Realisations" },
  { href: "/a-propos", label: "A propos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-goldline bg-cream/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex min-h-[96px] items-center justify-between gap-4 lg:min-h-[108px]">
          <Link href="/" className="flex shrink-0 flex-col items-center gap-1" onClick={() => setIsOpen(false)}>
            <Logo size="sm" />
            <span className="whitespace-nowrap text-[10px] font-bold uppercase text-clay">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-semibold text-walnut lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 transition duration-200 hover:text-champagne"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.phoneHref}
              className="border border-goldline bg-warm px-4 py-2.5 text-sm font-bold text-walnut transition duration-200 hover:border-champagne hover:text-champagne"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/devis-plaquiste"
              className="bg-champagne px-5 py-2.5 text-sm font-bold text-white shadow-gold transition duration-200 hover:-translate-y-0.5 hover:bg-honey"
            >
              Demander un devis
            </Link>
          </div>

          <button
            type="button"
            aria-label="Ouvrir la navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center border border-goldline bg-warm text-walnut shadow-sm lg:hidden"
          >
            <span className="grid gap-1">
              <span className={`h-0.5 w-5 bg-walnut transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-walnut transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-walnut transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="grid gap-2 border-t border-goldline py-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="bg-warm px-4 py-3 text-sm font-bold text-walnut shadow-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/devis-plaquiste"
              onClick={() => setIsOpen(false)}
              className="bg-champagne px-4 py-3 text-center text-sm font-black text-white"
            >
              Demander un devis
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
