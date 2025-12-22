import Hero from "@/components/main/hero";
import AboutWU from "@/components/main/about-wu";
import { Testimonials } from "@/components/testimonials";
import { MidBannerLogo } from "@/components/mid-banner-logo";
import { getDictionary } from "@/lib/dictionary";
import BecomeAgentMain from "@/components/main/become-agent-main";
import YellowBanner from "@/components/util/yellow-banner";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "https://moneytransfer.pl";

// Locale-specific metadata for the home page
const homeMetadata = {
  pl: {
    title: "Zostań Agentem Western Union w Polsce | Twister Money Transfers",
    description:
      "Zostań agentem Western Union i rozwiń swój biznes. Oferujemy szkolenia, wsparcie i atrakcyjne prowizje. Dołącz do sieci przekazów pieniężnych Twister w Polsce.",
    keywords: [
      "zostań agentem Western Union",
      "agent Western Union Polska",
      "przekazy pieniężne",
      "Western Union agent",
      "praca agent Western Union",
      "prowizje Western Union",
      "punkt Western Union",
    ],
  },
  en: {
    title: "Become a Western Union Agent in Poland | Twister Money Transfers",
    description:
      "Become a Western Union agent and grow your business. We offer training, support, and attractive commissions. Join Twister money transfer network in Poland.",
    keywords: [
      "become Western Union agent",
      "Western Union agent Poland",
      "money transfer",
      "Western Union franchise",
      "Western Union commission",
      "money transfer business",
    ],
  },
  ua: {
    title: "Стати агентом Western Union в Польщі | Twister Money Transfers",
    description:
      "Станьте агентом Western Union та розвивайте свій бізнес. Ми пропонуємо навчання, підтримку та привабливі комісії. Приєднуйтесь до мережі грошових переказів Twister у Польщі.",
    keywords: [
      "стати агентом Western Union",
      "агент Western Union Польща",
      "грошові перекази",
      "Western Union франшиза",
      "комісія Western Union",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as keyof typeof homeMetadata;
  const meta = homeMetadata[locale] || homeMetadata.pl;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        pl: `${BASE_URL}/pl`,
        en: `${BASE_URL}/en`,
        uk: `${BASE_URL}/ua`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${lang}`,
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <div className="overflow-hidden">
      <Hero dict={dict} lang={lang} />
      <div>
        <MidBannerLogo dict={dict} />

        <div id="o-nas" className="bg-wu-official">
          <BecomeAgentMain dict={dict} lang={lang} />
        </div>
        <Testimonials dict={dict} lang={lang} />
        <div className="relative bg-dark">
          <YellowBanner />
        </div>
        <div className="bg-dark">
          <AboutWU dict={dict} lang={lang} />
        </div>
      </div>
      <div className="relative bg-dark">
        <YellowBanner color="white" />
      </div>
    </div>
  );
}
