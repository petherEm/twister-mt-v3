"use client";
import type React from "react";
import { Button } from "@/components/util/button";
import Image from "next/image";
import { useState, useEffect } from "react";

// Container component
const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`lg:max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-6 ${className}`}
  >
    {children}
  </div>
);

type HeroProps = {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      sendReceiveButton: string;
      becomeAgentButton: string;
      imageAlt: string;
    };
  };
  lang: string;
};

export default function Hero({ dict, lang }: HeroProps) {
  // Array of hero images
  const heroImages = [
    "/new-hero-1.jpg",
    "/new-hero-2.jpg",
    "/new-hero-3.jpg",
    "/new-hero-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(heroImages[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Select random image on client side
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setSelectedImage(heroImages[randomIndex]);
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] md:min-h-[90vh] overflow-hidden">
      {/* Background color for the entire hero */}
      <div className="absolute inset-0 bg-[#171717] -z-10"></div>

      {/* Main content using grid layout */}
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-8 lg:items-center min-h-[auto] md:min-h-[90vh]">
          {/* Left image column - takes 9 of 16 columns */}
          <div className="lg:col-span-9 mt-4 lg:mt-0 relative order-2 lg:order-1">
            <div className="relative overflow-hidden h-full max-h-[90vh]">
              {/* Left side gradient - discrete fade from content */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#27272a]/40 to-transparent z-10 w-1/2"></div>

              {/* Right side gradient - subtle edge blending only */}
              <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-[#171717] via-[#171717]/30 to-transparent z-10 w-1/4"></div>

              {/* Top and bottom gradients for smooth blending - more subtle */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/20 via-transparent to-[#171717]/20 z-10"></div>

              <Image
                src={
                  selectedImage ||
                  "/placeholder.svg?height=1000&width=900&query=hero image" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={dict.hero.imageAlt}
                width={1100}
                height={900}
                className={`object-contain object-left-top lg:object-cover h-auto w-full max-h-[90vh] transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
          </div>

          {/* Right content column - takes 7 of 16 columns */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center h-full order-1 lg:order-2 lg:pl-4">
            <h1 className="font-display text-5xl font-bold tracking-normal text-balance text-wu-official sm:text-7xl md:text-7xl">
              {dict.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-white sm:text-xl/8">
              {dict.hero.subtitle}
            </p>
            <div className="mt-10 mb-6 md:mb-0 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button
                variant="primary"
                className="transform hover:scale-105 transition-transform duration-200"
                href={`/${lang}/wyslij-odbierz`}
              >
                {dict.hero.sendReceiveButton}
              </Button>
              <Button
                variant="secondary"
                className="transform hover:scale-105 transition-transform duration-200"
                href={`/${lang}/agent`}
              >
                {dict.hero.becomeAgentButton}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
