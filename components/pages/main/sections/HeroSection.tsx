"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import FrameScrubCanvas from "@/components/common/aero/FrameScrubCanvas";
import GelButton from "@/components/common/aero/GelButton";
import { Aurora, Sparkle } from "@/components/common/aero/Decorations";
import { HERO_FRAMES, sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";

/** Pinned hero: the camera drifts along the stream as you scroll. */
export default function HeroSection({ device }: { device: Device }) {
  const titleId = `${device}-hero-title`;
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} aria-labelledby={titleId} className="relative h-[250vh] md:h-[300vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <FrameScrubCanvas sequence={HERO_FRAMES} progress={scrollYProgress} preloadPoster />
        {/* Navy scrim keeps white type readable over clouds */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[62%] bg-linear-to-b from-aero-night/55 to-transparent" />
        <Aurora
          className="top-4 left-[14%] h-40 w-[62%] -rotate-[8deg] opacity-80"
          colors="bg-[linear-gradient(90deg,transparent,#7cffb2,transparent)]"
        />
        <Aurora
          className="top-20 left-[42%] h-30 w-[55%] rotate-[6deg] opacity-70"
          colors="bg-[linear-gradient(90deg,transparent,#9be9ff,transparent)]"
        />
        <Sparkle className="top-[22%] right-[24%] size-8" />
        <Sparkle className="top-[38%] left-[22%] hidden size-5 md:block" />

        <motion.div
          style={reduceMotion ? undefined : { y: titleY }}
          className="relative flex flex-col items-center px-5 pt-36 text-center md:pt-48"
        >
          <h1
            id={titleId}
            className="text-[76px] leading-none font-light tracking-[-0.03em] md:text-[112px] lg:text-[140px] xl:text-[168px]"
          >
            {/* Gradient per word, so each line gets its own gel highlight when it wraps */}
            <span className="aero-gel-text inline-block">Frutiger</span>
            <br className="md:hidden" /> <span className="aero-gel-text inline-block">Aero</span>
          </h1>
          <p className="aero-on-image mt-3.5 text-xl md:text-4xl">The future we were promised</p>
          <GelButton href={`#${sectionId(device, "what-it-is")}`} className="mt-8 md:mt-10">
            Take the tour
          </GelButton>
        </motion.div>

        <motion.p
          aria-hidden
          style={{ opacity: cueOpacity }}
          className="aero-on-image absolute inset-x-0 bottom-12 text-center text-base font-medium"
        >
          Scroll to drift in
        </motion.p>
      </div>
    </section>
  );
}
