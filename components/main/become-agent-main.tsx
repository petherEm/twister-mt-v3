"use client";

import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { Heading, Lead } from "@/components/util/text";
import { Button } from "@/components/util/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

type BecomeAgentProps = {
  dict: {
    becomeAgent: {
      title: string;
      lead: string;
      description: string[];
      stats: {
        yearsOnMarket: string;
        numberOfAgents: string;
        officialPartner: string;
      };
      buttons: {
        becomeAgent: string;
        callUs: string;
      };
      imageAlt: {
        conceptStore: string;
        secondImage: string;
      };
    };
  };
  lang?: string;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function BecomeAgentMain({
  dict,
  lang = "pl",
}: BecomeAgentProps) {
  return (
    <div className="overflow-hidden">
      <Container className="mt-16 mb-20">
        <div className="relative min-h-[auto] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left column - all text content */}
            <motion.div
              className="z-10 flex flex-col h-full justify-between order-1 md:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <motion.div variants={itemVariants}>
                  <Heading as="h1" className="!font-bold text-black">
                    {dict.becomeAgent.title}
                  </Heading>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Lead className="mt-6 !text-black">
                    {dict.becomeAgent.lead}
                  </Lead>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 space-y-3">
                  {dict.becomeAgent.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-black text-sm ${
                        index === dict.becomeAgent.description.length - 1
                          ? "font-bold"
                          : ""
                      } leading-relaxed whitespace-pre-line`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Button variant="secondary" href={`/${lang}/agent`}>
                    {dict.becomeAgent.buttons.becomeAgent}
                  </Button>
                  <Button
                    variant="primary"
                    href={`/${lang}/#footer`}
                    className="flex items-center justify-center !border-2 !border-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />{" "}
                    {dict.becomeAgent.buttons.callUs}
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - both images, stats, and WU logo */}
            <motion.div
              className="flex flex-col h-full order-2 md:order-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* First image - hero style */}
              <motion.div variants={imageVariants} className="relative mb-6">
                <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                  <Image
                    src="/pex-6.jpg"
                    alt={dict.becomeAgent.imageAlt.conceptStore}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                {/* Decorative frame */}
                <div className="absolute -z-10 -top-3 -right-3 w-full h-full rounded-3xl border-2 border-black/10" />
                <div className="absolute -z-10 -bottom-3 -left-3 w-20 h-20 rounded-full bg-black/5 blur-xl" />
              </motion.div>

              {/* Second image - hidden on mobile, hero style */}
              <motion.div
                variants={imageVariants}
                className="hidden md:block relative mb-6"
              >
                <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                  <Image
                    src="/main-page-money.jpg"
                    alt={dict.becomeAgent.imageAlt.secondImage}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                {/* Decorative frame */}
                <div className="absolute -z-10 -top-3 -left-3 w-full h-full rounded-3xl border-2 border-black/10" />
              </motion.div>

              {/* Stats section - all 3 items in one row */}
              <motion.div
                variants={statsVariants}
                className="mt-2 grid grid-cols-3 gap-2 mb-6"
              >
                {/* Years on market counter */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center">
                  <dt className="text-xs text-black mt-2">
                    {dict.becomeAgent.stats.yearsOnMarket}
                  </dt>
                  <dd className="order-first text-4xl font-medium tracking-tight text-black">
                    <AnimatedNumber start={0} end={26} />
                  </dd>
                </div>

                {/* Number of agents counter */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center">
                  <dt className="text-xs text-black mt-2">
                    {dict.becomeAgent.stats.numberOfAgents}
                  </dt>
                  <dd className="order-first text-4xl font-medium tracking-tight text-black">
                    <AnimatedNumber start={1} end={200} />+
                  </dd>
                </div>

                {/* Official Partner */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center items-center">
                  <div className="relative h-12 w-36">
                    <Image
                      src="/wu-logo-black.svg"
                      alt="WU logo black"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <dt className="text-xs text-black">
                    {dict.becomeAgent.stats.officialPartner}
                  </dt>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
