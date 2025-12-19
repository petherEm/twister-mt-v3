"use client";
import Image from "next/image";

type MidBannerLogoProps = {
  className?: string;
  dict: {
    midBanner: {
      partnerText: string;
      becomeAgent: string;
    };
  };
};

export function MidBannerLogo({ className, dict }: MidBannerLogoProps) {
  // Single item content component
  const BannerItem = () => (
    <div className="flex items-center shrink-0 px-6">
      <Image
        alt="Western Union"
        src="/logo-wu-big.svg"
        width={160}
        height={60}
        className="shrink-0"
      />
      <p className="text-white text-md font-medium mx-3 whitespace-nowrap">
        {dict.midBanner.partnerText}
        <span className="font-bold">{dict.midBanner.becomeAgent}</span>
      </p>
      <Image
        alt="Money Transfer"
        src="/mt-logo-4.png"
        width={100}
        height={60}
        className="shrink-0"
      />
    </div>
  );

  return (
    <div className={`${className} bg-dark py-6 overflow-hidden w-full`}>
      <div className="flex animate-marquee">
        {/* First set of items */}
        <div className="flex shrink-0">
          {[...Array(4)].map((_, i) => (
            <BannerItem key={`a-${i}`} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0">
          {[...Array(4)].map((_, i) => (
            <BannerItem key={`b-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
