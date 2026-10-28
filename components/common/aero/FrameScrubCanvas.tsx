"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMotionValueEvent, useReducedMotion, type MotionValue } from "motion/react";
import type { FrameSequence } from "@/types/aero";
import { cn } from "@/lib/utils";

interface FrameScrubCanvasProps {
  sequence: FrameSequence;
  /** 0–1 scroll progress through the pinned range */
  progress: MotionValue<number>;
  preloadPoster?: boolean;
  className?: string;
}

const frameUrl = (folder: string, index: number) => `${folder}/${String(index + 1).padStart(3, "0")}.webp`;

/**
 * Draws one frame of an image sequence per scroll position, cover-fitted to the canvas.
 *
 * - Frames only start loading once the canvas is near the viewport *and* rendered.
 *   The Desktop and Mobile trees both mount, so the hidden copy never downloads anything.
 * - The poster image sits underneath, so there is always something on screen
 *   before frames arrive, and it is all that shows when reduced motion is on.
 */
export default function FrameScrubCanvas({ sequence, progress, preloadPoster, className }: FrameScrubCanvasProps) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentRef = useRef(0);

  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Use the nearest frame that has finished loading
    const frames = framesRef.current;
    let img: HTMLImageElement | null = null;
    for (let offset = 0; offset < frames.length && !img; offset++) {
      img = frames[index - offset] ?? frames[index + offset] ?? null;
    }
    if (!img) return;

    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  };

  useMotionValueEvent(progress, "change", (value) => {
    const index = Math.round(Math.min(1, Math.max(0, value)) * (sequence.count - 1));
    if (index === currentRef.current) return;
    currentRef.current = index;
    draw(index);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;

    let cancelled = false;
    const frames: (HTMLImageElement | null)[] = new Array(sequence.count).fill(null);
    framesRef.current = frames;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      draw(currentRef.current);
    };

    const load = async () => {
      // Load every 4th frame first so scrubbing works early, then fill the gaps
      const order = [
        ...Array.from({ length: sequence.count }, (_, i) => i).filter((i) => i % 4 === 0),
        ...Array.from({ length: sequence.count }, (_, i) => i).filter((i) => i % 4 !== 0),
      ];
      const batchSize = 8;
      for (let i = 0; i < order.length && !cancelled; i += batchSize) {
        await Promise.all(
          order.slice(i, i + batchSize).map(
            (index) =>
              new Promise<void>((resolve) => {
                const img = new window.Image();
                img.decoding = "async";
                img.onload = () => {
                  frames[index] = img;
                  if (index === 0 || index === currentRef.current) draw(currentRef.current);
                  resolve();
                };
                img.onerror = () => resolve();
                img.src = frameUrl(sequence.folder, index);
              }),
          ),
        );
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // display:none elements never intersect, so the hidden device tree stays idle
    const intersection = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          intersection.disconnect();
          void load();
        }
      },
      { rootMargin: "100% 0px" },
    );
    intersection.observe(canvas);

    return () => {
      cancelled = true;
      intersection.disconnect();
      resizeObserver.disconnect();
    };
  }, [sequence, reduceMotion]);

  return (
    <div className={cn("absolute inset-0", className)}>
      <Image
        src={sequence.poster}
        alt={sequence.alt}
        fill
        sizes="100vw"
        preload={preloadPoster}
        className="object-cover"
      />
      {!reduceMotion && <canvas ref={canvasRef} aria-hidden className="absolute inset-0 size-full" />}
    </div>
  );
}
