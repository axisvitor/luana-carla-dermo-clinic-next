import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Schema.org — LocalBusiness com dados completos
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}/brand/icon-512.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centro",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    postalCode: "68537-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.4969,
    longitude: -49.8775,
  },
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.city,
    },
    {
      "@type": "State",
      name: "Pará",
    },
  ],
  sameAs: [siteConfig.instagram],
  availableLanguage: ["Portuguese"],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços da clínica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.url}/pos-operatorio`,
          name: "Pós-operatório assistido",
          description: "Acompanhamento especializado para recuperação pós-cirúrgica com orientação clara e suporte local.",
          provider: { "@id": `${siteConfig.url}/#localbusiness` },
          areaServed: { "@type": "City", name: siteConfig.city },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.url}/continuidade-corporal`,
          name: "Continuidade corporal",
          description: "Plano de cuidado corporal contínuo para resultados duradouros e bem-estar.",
          provider: { "@id": `${siteConfig.url}/#localbusiness` },
          areaServed: { "@type": "City", name: siteConfig.city },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.url}/depilacao-laser`,
          name: "Depilação a laser",
          description: "Depilação a laser com tecnologia avançada e atendimento profissional.",
          provider: { "@id": `${siteConfig.url}/#localbusiness` },
          areaServed: { "@type": "City", name: siteConfig.city },
        },
      },
    ],
  },
};

// Schema.org — Organization para reforcar autoridade
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/icon-512.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: "BR",
  },
  sameAs: [siteConfig.instagram],
};

// Schema.org — WebSite para sitelinks searchbox
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "pt-BR",
};

export const viewport: Viewport = {
  themeColor: "#fcfbf8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  keywords: siteConfig.keywords,
  category: "health-and-beauty",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${bodoni.variable} ${instrument.variable}`}>
      <body className="min-h-screen bg-background font-sans text-ink antialiased selection:bg-accent/15 selection:text-ink">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[12px] focus:bg-paper focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-[0_18px_40px_rgba(24,35,34,0.12)]"
        >
          Pular para o conteúdo principal
        </a>
        <div className="relative mx-auto my-1.5 w-[min(calc(100%-8px),1460px)] overflow-hidden rounded-[18px] border border-black/5 bg-white/75 shadow-[0_24px_80px_rgba(23,40,39,0.07)] backdrop-blur sm:my-2 sm:w-[min(calc(100%-12px),1460px)] sm:rounded-[24px] md:my-4 md:w-[min(calc(100%-28px),1460px)] md:rounded-[42px]">
          <div className="pointer-events-none absolute inset-[4px] rounded-[14px] border border-white/35 sm:inset-[6px] sm:rounded-[18px] md:inset-[10px] md:rounded-[32px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(189,165,139,0.34),rgba(15,95,99,0.24),transparent)]" />
          <SiteHeader />
          <main id="conteudo-principal" className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
        <FloatingCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessJsonLd, organizationJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
