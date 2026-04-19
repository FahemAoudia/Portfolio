import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { AIChatDemo } from "@/components/AIChatDemo";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { translations } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fahem-aoudia.vercel.app";
const fr = translations.fr;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: fr.meta.title,
    template: "%s | Fahem Aoudia",
  },
  description: fr.meta.description,
  keywords: [
    "Fahem Aoudia",
    "développeur full stack Montréal",
    "développeur IA Canada",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Fahem Aoudia", url: siteUrl }],
  creator: "Fahem Aoudia",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: ["en_CA"],
    url: siteUrl,
    siteName: "Fahem Aoudia",
    title: fr.meta.ogTitle,
    description: fr.meta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: fr.meta.twitterTitle,
    description: fr.meta.twitterDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <JsonLd />
          <CustomCursor />
          {children}
          <AIChatDemo />
        </Providers>
      </body>
    </html>
  );
}
