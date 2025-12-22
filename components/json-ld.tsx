const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "https://moneytransfer.pl";

interface JsonLdProps {
  lang: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

// Breadcrumb schema component for page-specific breadcrumbs
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}

// Breadcrumb configurations for different pages
export const breadcrumbConfigs = {
  home: (lang: string) => [
    { name: "Twister Money Transfers", url: `${BASE_URL}/${lang}` },
  ],
  agent: (lang: string, pageName: string) => [
    { name: "Twister Money Transfers", url: `${BASE_URL}/${lang}` },
    { name: pageName, url: `${BASE_URL}/${lang}/agent` },
  ],
  westernUnion: (lang: string, pageName: string) => [
    { name: "Twister Money Transfers", url: `${BASE_URL}/${lang}` },
    { name: pageName, url: `${BASE_URL}/${lang}/western-union` },
  ],
  pricing: (lang: string, pageName: string) => [
    { name: "Twister Money Transfers", url: `${BASE_URL}/${lang}` },
    { name: pageName, url: `${BASE_URL}/${lang}/wyslij-odbierz` },
  ],
};

// Locale-specific content for JSON-LD
const localizedContent = {
  pl: {
    orgDescription:
      "Twister Money Transfers - autoryzowany agent Western Union w Polsce. Oferujemy szybkie i bezpieczne przekazy pieniężne na cały świat oraz program partnerski dla nowych agentów.",
    serviceDescription:
      "Zostań agentem Western Union z Twister. Oferujemy kompleksowe szkolenia, wsparcie marketingowe i atrakcyjne prowizje. Rozwiń swój biznes z globalną marką.",
    serviceName: "Program Agenta Western Union",
  },
  en: {
    orgDescription:
      "Twister Money Transfers - authorized Western Union agent in Poland. We offer fast and secure money transfers worldwide and a partnership program for new agents.",
    serviceDescription:
      "Become a Western Union agent with Twister. We offer comprehensive training, marketing support, and attractive commissions. Grow your business with a global brand.",
    serviceName: "Western Union Agent Program",
  },
  ua: {
    orgDescription:
      "Twister Money Transfers - авторизований агент Western Union у Польщі. Ми пропонуємо швидкі та безпечні грошові перекази по всьому світу та партнерську програму для нових агентів.",
    serviceDescription:
      "Станьте агентом Western Union з Twister. Ми пропонуємо комплексне навчання, маркетингову підтримку та привабливі комісії. Розвивайте свій бізнес з глобальним брендом.",
    serviceName: "Програма агента Western Union",
  },
};

export function JsonLd({ lang }: JsonLdProps) {
  const content =
    localizedContent[lang as keyof typeof localizedContent] ||
    localizedContent.pl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Twister Money Transfers",
    alternateName: "Money Transfer PL",
    url: BASE_URL,
    logo: `${BASE_URL}/mt-logo-4.png`,
    description: content.orgDescription,
    foundingDate: "2010",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+48-71-343-90-26",
        contactType: "customer service",
        email: "kontakt@moneytransfer.pl",
        availableLanguage: ["Polish", "English", "Ukrainian"],
      },
    ],
    sameAs: [
      "https://www.westernunion.com",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. T. Kościuszki 27",
      addressLocality: "Wrocław",
      postalCode: "50-011",
      addressCountry: "PL",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Twister Money Transfers - Western Union Wrocław",
    image: `${BASE_URL}/mt-logo-4.png`,
    url: BASE_URL,
    telephone: "+48-71-343-90-26",
    email: "kontakt@moneytransfer.pl",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. T. Kościuszki 27",
      addressLocality: "Wrocław",
      postalCode: "50-011",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.1079,
      longitude: 17.0385,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    parentOrganization: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/#agentprogram`,
    name: content.serviceName,
    description: content.serviceDescription,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Financial Services Partnership",
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    url: `${BASE_URL}/${lang}/agent`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Twister Money Transfers",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: ["pl", "en", "uk"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
