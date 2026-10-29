import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/config/seo";
import { buildSiteGraphJsonLd } from "@/lib/schema";
import { ConsentBanner } from "@/components/analytics/consent-banner";

/**
 * Self-hosted Clash Grotesk (500, 600) and Switzer (400, 500, 600) via next/font/local.
 * Preload display 600 + text 400 only (per docs/05 & Phase 1 spec).
 */
const clashGroteskPreload = localFont({
  src: "../public/fonts/ClashGrotesk-600.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-clash-grotesk-preload",
});

const switzerPreload = localFont({
  src: "../public/fonts/Switzer-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-switzer-preload",
});

const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-clash-grotesk",
  fallback: ["system-ui", "sans-serif"],
});

const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-switzer",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteGraph = buildSiteGraphJsonLd();

  return (
    <html
      lang="en"
      className={`${clashGrotesk.variable} ${switzer.variable} ${clashGroteskPreload.variable} ${switzerPreload.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#ED1C24] selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[#ED1C24] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
