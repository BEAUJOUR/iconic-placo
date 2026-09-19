import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { assetPath } from "@/lib/assetPath";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Artisan plaquiste`,
  description: `${siteConfig.name} accompagne vos projets de placo, cloisons, isolation et finitions interieures.`,
  icons: {
    icon: assetPath(siteConfig.logo),
    shortcut: assetPath(siteConfig.logo),
    apple: assetPath(siteConfig.logo),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${manrope.variable} font-body`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
