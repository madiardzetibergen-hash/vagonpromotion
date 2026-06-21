import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Реклама в поездах, вагонах и электронных билетах Казахстана",
    template: "%s | Market Radio"
  },
  description: "Размещение рекламы в поездах, вагонах, электронных билетах, на сайте и в приложении. Получите медиакит или расчет под ваш бренд.",
  keywords: [
    "реклама в поездах Казахстана",
    "реклама в вагонах",
    "реклама на электронных билетах",
    "транспортная реклама",
    "реклама на железной дороге",
    "bilet railways реклама"
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg"
  },
  openGraph: {
    title: "Реклама в поездах, вагонах и электронных билетах Казахстана",
    description: "Форматы, прайс, медиакит и расчет размещения для B2B-рекламы в пассажирской среде.",
    url: SITE.domain,
    siteName: SITE.shortName,
    locale: "ru_KZ",
    type: "website",
    images: [{ url: "/images/hero-block-img.png", width: 1200, height: 630, alt: "Реклама в поездах Казахстана" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Реклама в поездах Казахстана",
    description: "Размещение рекламы в поездах, вагонах, билетах, на сайте и в приложении.",
    images: ["/images/hero-block-img.png"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071426" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
