import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site/footer";
import { FloatingCta } from "@/components/site/floating-cta";
import { SiteHeader } from "@/components/site/header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${instrument.variable}`}>
      <body className="min-h-screen bg-background pb-24 font-sans text-ink antialiased selection:bg-accent/15 selection:text-ink md:pb-0">
        <div className="relative mx-auto my-2 w-[min(calc(100%-12px),1460px)] overflow-hidden rounded-[24px] border border-black/5 bg-white/75 shadow-[0_24px_80px_rgba(23,40,39,0.07)] backdrop-blur md:my-4 md:w-[min(calc(100%-28px),1460px)] md:rounded-[42px]">
          <div className="pointer-events-none absolute inset-[6px] rounded-[18px] border border-white/35 md:inset-[10px] md:rounded-[32px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(189,165,139,0.34),rgba(15,95,99,0.24),transparent)]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
        <FloatingCta />
      </body>
    </html>
  );
}
