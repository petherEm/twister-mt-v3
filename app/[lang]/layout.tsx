import "@/styles/tailwind.css";
import { locales } from "@/proxy";
import { Container } from "@/components/util/container";
import { getDictionary } from "@/lib/dictionary";

import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import DemoPage from "@/components/price-tag-demo";
import { Footer } from "@/components/footer";
import { NavbarWithPath } from "@/components/navbar-with-path";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves performance
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Define viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Locale-specific OG metadata
const ogMetadata = {
  pl: {
    title: "Twister Money Transfers | Zostań Agentem Western Union",
    description: "Przekazy pieniężne Western Union w Polsce. Zostań agentem i rozwiń swój biznes z globalną marką.",
  },
  en: {
    title: "Twister Money Transfers | Become a Western Union Agent",
    description: "Western Union money transfers in Poland. Become an agent and grow your business with a global brand.",
  },
  ua: {
    title: "Twister Money Transfers | Стати агентом Western Union",
    description: "Грошові перекази Western Union у Польщі. Станьте агентом та розвивайте свій бізнес з глобальним брендом.",
  },
};

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  // Fix the baseUrl handling
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "") // Remove trailing slash
    : "https://moneytransfer.pl";

  // Get locale-specific OG data
  const og = ogMetadata[lang as keyof typeof ogMetadata] || ogMetadata.pl;

  return {
    // Basic metadata
    title: {
      template: "%s | Twister Money Transfers",
      default: "WU Agent Money Transfers | Twister",
    },
    description:
      dict.metadata?.description ||
      "Send money worldwide with Twister. Fast, secure, and affordable money transfer services powered by Western Union.",

    // Keywords
    keywords: [
      "money transfer",
      "przekazy pieniężne",
      "zostań agentem",
      "agent Western Union",
      "international money transfer",
      "fast money transfer",
      "secure money transfer",
      "western union",
      "international transfers",
      "send money",
      "twister",
    ],

    // Canonical URL
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        pl: "/pl",
        uk: "/ua",
      },
    },

    // Open Graph - locale-specific
    openGraph: {
      type: "website",
      locale: lang === "ua" ? "uk_UA" : lang === "pl" ? "pl_PL" : "en_US",
      url: `${baseUrl}/${lang}`,
      title: og.title,
      description: dict.metadata?.ogDescription || og.description,
      siteName: "Twister Money Transfers",
      images: [
        {
          url: `${baseUrl}/mt-logo-4.png`,
          width: 1200,
          height: 630,
          alt: og.title,
        },
      ],
    },

    // Twitter Card - locale-specific
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: dict.metadata?.ogDescription || og.description,
      images: [`${baseUrl}/mt-logo-4.png`],
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    // Verification - TODO: Replace with actual verification codes
    // Google: Get from Google Search Console (https://search.google.com/search-console)
    // Yandex: Get from Yandex Webmaster (https://webmaster.yandex.com)
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
      yandex: process.env.YANDEX_SITE_VERIFICATION || "your-yandex-verification-code",
    },

    // Icons
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
        },
      ],
    },

    // App information
    applicationName: "Money Transfer PL | Twister",
    authors: [{ name: "Money Transfer PL | Twister", url: baseUrl }],
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    creator: "Money Transfer PL | Twister",
    publisher: "Money Transfer PL | Twister",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <html lang={lang} dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd lang={lang} />
        <DemoPage />
        <Container>
          <NavbarWithPath lang={lang} dict={dict} />
        </Container>

        <main id="main-content">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
