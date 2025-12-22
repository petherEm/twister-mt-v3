import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "https://moneytransfer.pl";

const locales = ["pl", "en", "ua"] as const;

// Define all public pages with their priorities and change frequencies
const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/agent", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/western-union", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wyslij-odbierz", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/polityka-prywatnosci", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/rodo", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each page in each locale
  for (const page of pages) {
    for (const locale of locales) {
      const url = `${BASE_URL}/${locale}${page.path}`;

      // Create alternates object for hreflang
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${BASE_URL}/${altLocale}${page.path}`;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
