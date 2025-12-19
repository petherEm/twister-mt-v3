"use client";
import { Button } from "@/components/util/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type HeroProps = {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      sendReceiveButton: string;
      becomeAgentButton: string;
      imageAlt: string;
      badge: string;
    };
  };
  lang: string;
};

export default function Hero({ dict, lang }: HeroProps) {
  const heroImages = [
    "/new-hero-1.jpg",
    "/new-hero-2.jpg",
    "/new-hero-3.jpg",
    "/new-hero-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(heroImages[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setSelectedImage(heroImages[randomIndex]);
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative min-h-[92vh] overflow-hidden bg-[#171717]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-[92vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Left content column */}
            <motion.div
              className="order-2 lg:order-1 flex flex-col h-full"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Main content */}
              <div>
                {/* Small badge */}
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    {dict.hero.badge}
                  </span>
                </motion.div>

                {/* Title with animated underline */}
                <motion.div variants={itemVariants}>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                    {dict.hero.title}
                  </h1>
                  {/* Animated underline */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "40%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg"
                >
                  {dict.hero.subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    variant="primary"
                    className="transform hover:scale-105 transition-all duration-200"
                    href={`/${lang}/wyslij-odbierz`}
                  >
                    {dict.hero.sendReceiveButton}
                  </Button>
                  <Button
                    variant="secondary"
                    className="transform hover:scale-105 transition-all duration-200"
                    href={`/${lang}/agent`}
                  >
                    {dict.hero.becomeAgentButton}
                  </Button>
                </motion.div>
              </div>

              {/* Partner logos - pushed to bottom to align with image */}
              <motion.div
                variants={itemVariants}
                className="mt-8 lg:mt-auto pt-0 lg:pt-8 flex items-center justify-center lg:justify-start gap-6"
              >
                <Image
                  src="/mt-logo-4.png"
                  alt="Money Transfer Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
                <div className="h-10 w-px bg-white/20" />
                <Image
                  src="/wu-logo-official-5.png"
                  alt="Western Union Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Right image column */}
            <motion.div
              className="order-1 lg:order-2 relative"
              variants={imageContainerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <div className="relative">
                {/* Image container with rounded corners and shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-[4/5] lg:aspect-[3/4]">
                  <Image
                    src={selectedImage}
                    alt={dict.hero.imageAlt}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge - 25 years */}
                <motion.div
                  className="absolute -left-4 lg:-left-8 bottom-20 z-20"
                  variants={floatingBadgeVariants}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl">
                      <div className="text-3xl font-bold text-yellow-400">25+</div>
                      <div className="text-sm text-white/70">lat w Polsce</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border border-yellow-500/20" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-full bg-yellow-500/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
