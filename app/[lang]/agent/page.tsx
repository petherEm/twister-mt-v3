import { Container } from "@/components/util/container";
import Image from "next/image";
import { Heading, Lead, Subheading } from "@/components/util/text";
import {
  Globe,
  Clock,
  Users,
  Award,
  Medal,
  Phone,
  Banknote,
} from "lucide-react";
import AgentForm from "@/components/main/agent-form";
import type { Metadata } from "next";
import { BECOME_AGENT_FAQ } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Zostań agentem",
  description:
    "Zostań agentem Western Union i zarabiaj na transakcjach międzynarodowych.",
  openGraph: {
    title: "Zostań agentem",
    description:
      "Zostań agentem Western Union i zarabiaj na transakcjach międzynarodowych.",
    url: "https://www.westernunion.com/agent",
    images: [
      {
        url: "https://www.westernunion.com/agent/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Western Union",
  },
};

function Header({ dict }: { dict: any }) {
  return (
    <Container className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
        <div className="flex flex-col justify-center">
          <Heading className="mt-12 text-white text-left mb-6" as="h1">
            {dict.agent.header.title}
          </Heading>
          <Lead className="text-left max-w-2xl text-white/75 whitespace-pre-line">
            {dict.agent.header.subtitle}
          </Lead>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full">
            <video
              src="/WU_animated_logo.mp4"
              poster="/wu-hq-03.webp"
              width={600}
              height={300}
              className="w-full "
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Fallback for browsers that don't support video */}
            <noscript>
              <Image
                src="/wu-hq-03.webp"
                alt={dict.westernUnion.images.headquarters}
                width={800}
                height={900}
                className="mx-auto w-full lg:mx-0 lg:max-w-[480px] "
                priority
              />
            </noscript>
          </div>
        </div>
      </div>
    </Container>
  );
}

function FormContainer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Container className="mt-16">
      <div
        id="form"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
      >
        <div className="prose prose-lg prose-invert">
          <div className="mt-12 space-y-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.customers.title}
                </h3>
                <p className="text-white/70 whitespace-pre-line">
                  {dict.agent.form.benefits.customers.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.global.title}
                </h3>
                <p className="text-white/70 whitespace-pre-line">
                  {dict.agent.form.benefits.global.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.innovative.title}
                </h3>
                <p className="text-white/70 whitespace-pre-line">
                  {dict.agent.form.benefits.innovative.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Banknote size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.earnings.title}
                </h3>
                <p className="text-white/70 whitespace-pre-line">
                  {dict.agent.form.benefits.earnings.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-12 text-2xl font-bold text-white mb-4">
            {dict.agent.form.title}
          </h2>
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-wu-official">
            <AgentForm dict={dict} lang={lang} />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Benefits({ dict }: { dict: any }) {
  return (
    <Container className="mt-24 mb-42 bg-wu-official">
      <div className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Heading className="text-black" as="h1">
            {dict.agent.brand.title.part1}
          </Heading>
          <Heading className="text-black" as="h1">
            {dict.agent.brand.title.part2}
          </Heading>

          <p className="mt-10 text-center text-lg text-black/90 leading-relaxed">
            {dict.agent.brand.description}
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
        <div className="bg-gradient-to-b from-wu-official to-black-300 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark rounded-full flex items-center justify-center">
            <Award size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.tools.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.tools.description}
          </p>
        </div>

        <div className="bg-gradient-to-b from-wu-official to-black-300 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark rounded-full flex items-center justify-center">
            <Medal size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.starter.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.starter.description}
          </p>
        </div>

        <div className="bg-gradient-to-b from-wu-official to-black-300 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark rounded-full flex items-center justify-center">
            <Phone size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.support.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.support.description}
          </p>
        </div>
      </div>
    </Container>
  );
}

function Testimonial({ dict }: { dict: any }) {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-wu-official pt-64 pb-24 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr] gap-y-8">
          <div className="-mt-80 lg:-mt-48 flex justify-center lg:justify-start">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:max-w-xs w-full h-full">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5 h-full">
                <div className="relative aspect-[4/5] w-full h-full overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt={dict.agent.testimonial.name || "Testimonial"}
                    src="/concept-store-3.webp"
                    className="object-cover object-left-top lg:object-left"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 384px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-8 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-12 max-lg:text-center">
              <blockquote>
                <p className="relative text-2xl tracking-tight text-black before:absolute before:-translate-x-full lg:text-4xl">
                  {dict.agent.testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-black">
                  {dict.agent.testimonial.name}
                </p>
                <p className="text-sm/6 font-medium">
                  <span className="text-wu-official bg-clip-text">
                    {dict.agent.testimonial.title}
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FrequentlyAskedQuestions({
  dict,
  lang = "en",
}: {
  dict: any;
  lang?: string;
}) {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Heading className="text-center text-wu-official">
          {dict.agent.faq.subheading}
        </Heading>

        <div className="mx-auto mt-12 mb-10 max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            {BECOME_AGENT_FAQ.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-semibold text-left">
                  {faq.question[lang as keyof typeof faq.question] ||
                    faq.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-sm/6 text-gray-400">
                  {faq.answer[lang as keyof typeof faq.answer] || faq.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Container>
  );
}

export default async function Agent({ params }: { params: { lang: string } }) {
  // Await the params object before accessing lang
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <Header dict={dict} />
      <FormContainer dict={dict} lang={lang} />
      <Benefits dict={dict} />
      <Testimonial dict={dict} />
      <FrequentlyAskedQuestions dict={dict} lang={lang} />
    </main>
  );
}
