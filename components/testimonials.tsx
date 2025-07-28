"use client";

import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { Container } from "./util/container";
import { Link } from "./util/link";
import { Heading } from "./util/text";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({
  nameKey,
  titleKey,
  quoteKey,
  img,
  dict,
  bounds,
  scrollX,
  ...props
}: {
  img: string;
  nameKey: string;
  titleKey: string;
  quoteKey: string;
  dict: any;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement | null>(null);

  const name = dict.testimonials.names[nameKey];
  const title = dict.testimonials.titles[titleKey];
  const quote = dict.testimonials.quotes[quoteKey];

  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [ref, bounds.width, bounds.left, bounds.right]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden sm:aspect-3/4 sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white whitespace-pre-line">
            <span aria-hidden="true" className="absolute -translate-x-full">
              "
            </span>
            {quote}
            <span aria-hidden="true" className="absolute">
              "
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="text-wu-official bg-clip-text">{title}</span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  );
}

export function Testimonials({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth));
  });

  function scrollTo(index: number) {
    const gap = 32;
    const width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current!.scrollTo({ left: (width + gap) * index });
  }

  return (
    <div className="overflow-hidden py-24">
      <Container>
        <div
          ref={setReferenceWindowRef}
          className="flex justify-between items-start"
        >
          {/* <Subheading className="text-wu-official">Nasi Klienci</Subheading> */}
          <Heading as="h3" className="mt-2 text-white max-w-2xl">
            {dict.testimonials?.title || "We always put our clients first."}
          </Heading>
          <Image
            src="/mt-logo-4.png"
            alt="Logo"
            width={300}
            height={200}
            className="bg-transparent"
          />
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-8 px-(--scroll-padding)",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        ])}
      >
        {TESTIMONIALS.map(
          ({ img, nameKey, titleKey, quoteKey }, testimonialIndex) => (
            <TestimonialCard
              key={testimonialIndex}
              nameKey={nameKey}
              titleKey={titleKey}
              quoteKey={quoteKey}
              img={img}
              dict={dict}
              bounds={bounds}
              scrollX={scrollX}
              onClick={() => scrollTo(testimonialIndex)}
            />
          )
        )}
        <div className="w-2xl shrink-0 sm:w-[54rem]" />
      </div>
    </div>
  );
}
