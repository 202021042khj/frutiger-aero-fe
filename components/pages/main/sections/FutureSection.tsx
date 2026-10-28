"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import AeroWindow from "@/components/common/aero/AeroWindow";
import FrameScrubCanvas from "@/components/common/aero/FrameScrubCanvas";
import { CITY_FRAMES, FUTURE_CAPTIONS, sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";
import { cn } from "@/lib/utils";

const COUNT = FUTURE_CAPTIONS.length;

/** Pinned city flythrough. Captions crossfade in thirds of the pinned range. */
export default function FutureSection({ device }: { device: Device }) {
  const titleId = `${sectionId(device, "the-future")}-title`;
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(COUNT - 1, Math.max(0, Math.floor(v * COUNT))));
  });

  return (
    <section
      ref={ref}
      id={sectionId(device, "the-future")}
      aria-labelledby={titleId}
      className="relative h-[250vh] scroll-mt-14 md:h-[300vh] md:scroll-mt-17"
    >
      <h2 id={titleId} className="sr-only">
        The future we were promised
      </h2>
      <div className="sticky top-0 h-svh overflow-hidden">
        <FrameScrubCanvas sequence={CITY_FRAMES} progress={scrollYProgress} />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-aero-night/50" />

        <AeroWindow
          title={
            reduceMotion
              ? "The future we were promised"
              : device === "mobile"
                ? `${active + 1} / ${COUNT}`
                : `The future we were promised · ${active + 1} / ${COUNT}`
          }
          className="absolute inset-x-5 bottom-12 md:right-auto md:bottom-22 md:left-30 md:w-140"
          bodyClassName="px-5.5 pt-5 pb-6 md:px-9 md:pt-7 md:pb-8"
        >
          {reduceMotion ? (
            <ul className="flex flex-col gap-2">
              {FUTURE_CAPTIONS.map((caption) => (
                <li key={caption} className="text-2xl leading-tight font-light md:text-4xl">
                  {caption}
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid">
              {FUTURE_CAPTIONS.map((caption, i) => (
                <Caption key={caption} index={i} progress={scrollYProgress}>
                  {caption}
                </Caption>
              ))}
            </div>
          )}
        </AeroWindow>

        <ol aria-hidden className="absolute top-1/2 right-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {FUTURE_CAPTIONS.map((caption, i) => (
            <li
              key={caption}
              className={cn(
                "size-3 rounded-full shadow-[0_0_8px_#2ed3c6] transition-colors",
                i === active ? "bg-white" : "bg-white/40",
              )}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Caption({
  index,
  progress,
  children,
}: {
  index: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) {
  // Fully visible in the middle of its third, fading over 8% at each edge.
  // The first stays visible at the very start, the last at the very end.
  const opacity = useTransform(progress, (v) => {
    const center = (index + 0.5) / COUNT;
    let distance = Math.abs(v - center);
    if ((index === 0 && v < center) || (index === COUNT - 1 && v > center)) distance = 0;
    return Math.min(1, Math.max(0, (1 / (2 * COUNT) - distance) / 0.08 + 0.5));
  });

  return (
    <motion.p
      style={{ opacity }}
      className="col-start-1 row-start-1 text-[32px] leading-tight font-light md:text-[56px] md:leading-[1.1]"
    >
      {children}
    </motion.p>
  );
}
